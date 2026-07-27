import assert from 'node:assert/strict';
import test from 'node:test';
import { createReleaseReport } from '../scripts/check-plugin-releases.mjs';

test('the release report maps an available package release to its existing docs page', () => {
  const [report] = createReleaseReport({
    entries: [{ packageName: 'example-plugin', docsPath: 'plugins/example-plugin' }],
    dependencies: { 'example-plugin': '^1.0.0' },
    installedVersions: { 'example-plugin': '1.0.0' },
    outdated: { 'example-plugin': { wanted: '1.0.2', latest: '1.1.0' } },
  });

  assert.deepEqual(report, {
    packageName: 'example-plugin',
    docsPage: 'src/content/docs/plugins/example-plugin.mdx',
    declaredRange: '^1.0.0',
    current: '1.0.0',
    wanted: '1.0.2',
    latest: '1.1.0',
    status: 'minor',
  });
});

test('the release report identifies major releases for manual review', () => {
  const [report] = createReleaseReport({
    entries: [{ packageName: 'example-plugin', docsPath: 'plugins/example-plugin' }],
    dependencies: { 'example-plugin': '^1.0.0' },
    installedVersions: { 'example-plugin': '1.0.0' },
    outdated: { 'example-plugin': { wanted: '1.0.0', latest: '2.0.0' } },
  });

  assert.equal(report.status, 'major');
  assert.equal(report.wanted, '1.0.0');
});
