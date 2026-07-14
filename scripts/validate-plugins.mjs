import { pathToFileURL } from 'node:url';
import { plugins, pluginCategories } from '../src/data/plugins.mjs';

const statuses = new Set(['stable', 'beta', 'experimental', 'deprecated']);

export function validatePlugins(entries = plugins) {
  const errors = [];
  const slugs = new Set();
  const packageNames = new Set();

  for (const [index, plugin] of entries.entries()) {
    const label = plugin?.slug || `entry ${index + 1}`;
    for (const field of ['slug', 'packageName', 'category', 'status', 'docsPath']) {
      if (typeof plugin?.[field] !== 'string' || !plugin[field].trim()) {
        errors.push(`${label}: missing required string field "${field}"`);
      }
    }

    if (slugs.has(plugin.slug)) errors.push(`${label}: duplicate slug`);
    if (packageNames.has(plugin.packageName)) errors.push(`${label}: duplicate package name`);
    slugs.add(plugin.slug);
    packageNames.add(plugin.packageName);

    if (!statuses.has(plugin.status)) errors.push(`${label}: invalid status "${plugin.status}"`);
    if (!(plugin.category in pluginCategories)) errors.push(`${label}: unknown category "${plugin.category}"`);
    if (plugin.docsPath !== `plugins/${plugin.slug}`) errors.push(`${label}: docsPath must be plugins/${plugin.slug}`);

    const docs = plugin.docs;
    if (!docs || typeof docs !== 'object') {
      errors.push(`${label}: public docs metadata is missing`);
      continue;
    }
    for (const field of ['slug', 'name', 'packageName', 'description']) {
      if (typeof docs[field] !== 'string' || !docs[field].trim()) {
        errors.push(`${label}: docs metadata is missing "${field}"`);
      }
    }
    if (docs.slug !== plugin.slug) errors.push(`${label}: docs slug does not match registry slug`);
    if (docs.packageName !== plugin.packageName) errors.push(`${label}: docs packageName does not match registry packageName`);
    if (!Array.isArray(docs.api) || docs.api.length === 0) errors.push(`${label}: docs API metadata is empty`);
    if (!Array.isArray(docs.keyboard) || docs.keyboard.length === 0) errors.push(`${label}: keyboard metadata is empty`);
  }

  return errors;
}

if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const errors = validatePlugins();
  if (errors.length) {
    console.error(errors.map((error) => `- ${error}`).join('\n'));
    process.exitCode = 1;
  } else {
    console.log(`Validated ${plugins.length} plugin registry entry.`);
  }
}
