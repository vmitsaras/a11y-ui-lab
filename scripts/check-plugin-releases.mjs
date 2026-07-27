import { execFileSync } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { plugins } from '../src/data/plugins.mjs';

function readJson(path) {
  return JSON.parse(readFileSync(new URL(path, import.meta.url), 'utf8'));
}

function releaseKind(current, latest) {
  const parse = (version) => version?.match(/^(\d+)\.(\d+)\.(\d+)/)?.slice(1).map(Number);
  const currentParts = parse(current);
  const latestParts = parse(latest);
  if (!currentParts || !latestParts) return 'unknown';
  const [currentMajor, currentMinor, currentPatch] = currentParts;
  const [latestMajor, latestMinor, latestPatch] = latestParts;

  if ([currentMajor, currentMinor, currentPatch, latestMajor, latestMinor, latestPatch].some(Number.isNaN)) {
    return 'unknown';
  }
  if (latestMajor !== currentMajor) return 'major';
  if (latestMinor !== currentMinor) return 'minor';
  if (latestPatch !== currentPatch) return 'patch';
  return 'current';
}

export function createReleaseReport({ entries, dependencies, installedVersions, outdated }) {
  return entries.map((plugin) => {
    const available = outdated[plugin.packageName];
    const current = installedVersions[plugin.packageName] ?? 'not installed';
    const latest = available?.latest ?? current;

    return {
      packageName: plugin.packageName,
      docsPage: `src/content/docs/${plugin.docsPath}.mdx`,
      declaredRange: dependencies[plugin.packageName] ?? 'missing',
      current,
      wanted: available?.wanted ?? current,
      latest,
      status: current === 'not installed' ? 'not installed' : releaseKind(current, latest),
    };
  });
}

function getOutdatedPackages(packageNames) {
  try {
    const output = execFileSync('npm', ['outdated', '--json', ...packageNames], {
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    });
    return output.trim() ? JSON.parse(output) : {};
  } catch (error) {
    // npm exits with status 1 when it successfully finds outdated packages.
    if (error.status === 1 && typeof error.stdout === 'string') {
      return error.stdout.trim() ? JSON.parse(error.stdout) : {};
    }
    throw error;
  }
}

function printReport(report) {
  const updates = report.filter(({ status }) => !['current', 'not installed'].includes(status));

  if (updates.length === 0) {
    console.log('All registered plugin packages are current.');
    return;
  }

  console.log('Available plugin releases:\n');
  console.table(updates);
  console.log('\nReview the package changelog and public exports, then update an approved package explicitly:');
  for (const update of updates) {
    console.log(`  npm install ${update.packageName}@${update.latest}`);
    console.log(`  Review ${update.docsPage}`);
  }
  console.log('\nAfter an update: npm run validate:plugins && npm test && npm run build');
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const packageJson = readJson('../package.json');
  const lockfile = readJson('../package-lock.json');
  const installedVersions = Object.fromEntries(
    plugins.map(({ packageName }) => [packageName, lockfile.packages[`node_modules/${packageName}`]?.version]),
  );
  const report = createReleaseReport({
    entries: plugins,
    dependencies: packageJson.dependencies,
    installedVersions,
    outdated: getOutdatedPackages(plugins.map(({ packageName }) => packageName)),
  });
  printReport(report);
}
