---

name: onboard-plugin-to-docs
description: Add a published accessibility plugin to the documentation catalog, validate its public package contract, create its first Starlight page, add a real demo, and update navigation.
---

# Onboard Plugin to Docs

## Purpose

Add one published accessibility plugin to the Astro and Starlight documentation repository.

This workflow must use the published npm package as the integration boundary.

Do not copy the plugin implementation into the documentation repository.

Do not modify the plugin source repository.

Do not publish packages, push commits, or create tags unless the user explicitly requests a separate publishing workflow.

---

## Use this skill when

Use this skill when the user asks to:

* add a new plugin to the documentation site;
* import a published plugin into the catalog;
* create the first docs page for an npm package;
* register a plugin and add a demo;
* onboard a plugin repository into the documentation hub.

---

## Do not use this skill when

Do not use this skill when:

* the plugin is already registered and only needs an update;
* the user only wants a demo;
* the user wants to remove or deprecate a plugin;
* the npm package has not been published;
* the plugin package itself needs normalization.

Use `refresh-plugin-docs` for an existing plugin.

Use `build-plugin-demo` for demo-only work.

Use `remove-plugin-from-docs` for removal or deprecation.

---

## Expected input

Accept one or more of:

```txt
PACKAGE_NAME
GITHUB_REPOSITORY
NPM_PACKAGE_URL
CUSTOM_SLUG
CATEGORY
STATUS
FEATURED
```

Only `PACKAGE_NAME`, `GITHUB_REPOSITORY`, or `NPM_PACKAGE_URL` is required.

If only a GitHub repository is supplied:

1. inspect its `package.json`;
2. determine the npm package name;
3. verify that the package is published;
4. install the npm package rather than using repository source files.

---

## Repository inspection

Before editing, inspect:

* `AGENTS.md`;
* `package.json`;
* the lockfile;
* `astro.config.mjs`;
* Starlight configuration;
* the plugin registry;
* existing plugin pages;
* existing demo conventions;
* reusable documentation components;
* validation scripts;
* sidebar configuration;
* existing tests and CI workflows.

Determine the package manager from:

```txt
pnpm-lock.yaml     -> pnpm
package-lock.json  -> npm
yarn.lock          -> yarn
```

Do not switch package managers.

---

## Inspect the plugin package

Determine:

* package name;
* installed or published version;
* description;
* repository URL;
* npm URL;
* runtime exports;
* type declarations;
* `./docs` export;
* CSS export;
* addon exports;
* README content;
* examples;
* API;
* options;
* instance methods;
* events;
* required markup;
* keyboard behavior;
* focus behavior;
* progressive-enhancement behavior;
* known limitations;
* license.

Prefer the package’s public metadata and README.

Do not rely on undocumented internal source paths.

---

## Minimum package contract

Required:

* published npm package;
* valid package name;
* ESM-compatible entry;
* type declarations;
* README;
* license;
* repository metadata;
* importable runtime entry.

Preferred:

* `./docs` export;
* `./styles.css` export where applicable;
* examples;
* changelog;
* tests;
* Changesets.

Expected imports:

```ts
import * as runtime from "PACKAGE_NAME";
import { docs } from "PACKAGE_NAME/docs";
```

When CSS exists:

```ts
import "PACKAGE_NAME/styles.css";
```

---

## Missing `./docs` export

If `PACKAGE_NAME/docs` does not exist:

1. report that the package does not satisfy the normalized docs contract;
2. do not edit files inside `node_modules`;
3. do not deep-import private package files;
4. do not invent package-owned metadata silently;
5. create a temporary local adapter only when the user explicitly permits it;
6. mark the adapter as temporary technical debt.

Prefer stopping with a clear normalization requirement.

---

## Install the package

Use the existing package manager.

```bash
npm install PACKAGE_NAME
```

```bash
pnpm add PACKAGE_NAME
```

```bash
yarn add PACKAGE_NAME
```

Do not install from:

* local filesystem paths;
* unpublished branches;
* copied build files;
* GitHub URLs when a valid npm package exists.

Update both the package manifest and lockfile.

---

## Validate public imports

Confirm that:

```ts
import * as runtime from "PACKAGE_NAME";
```

returns a non-empty public API.

Confirm that:

```ts
import { docs } from "PACKAGE_NAME/docs";
```

returns a named `docs` export.

When CSS exists, confirm that:

```ts
import "PACKAGE_NAME/styles.css";
```

resolves without using an internal file path.

Validate:

* package name;
* plugin slug;
* metadata shape;
* required metadata fields;
* API entries;
* example metadata;
* keyboard metadata;
* duplicate slug conflicts;
* duplicate package conflicts;
* addon subpath exports.

---

## Register the plugin

Add one entry to the central plugin registry.

Required registry fields:

```ts
{
  slug: string;
  packageName: string;
  category: string;
  status: "stable" | "beta" | "experimental" | "deprecated";
  docsPath: string;
}
```

Optional fields:

```ts
{
  demo?: string;
  featured?: boolean;
  order?: number;
  related?: string[];
  notes?: string;
}
```

Rules:

* preserve existing registry formatting;
* do not reorder unrelated entries;
* reject duplicate slugs;
* reject duplicate package names;
* reuse an existing category where appropriate;
* default uncertain maturity to `beta`;
* do not mark a plugin stable without evidence;
* keep the docs path predictable.

Suggested path:

```txt
plugins/PLUGIN_SLUG
```

---

## Create the documentation page

Create:

```txt
src/content/docs/plugins/PLUGIN_SLUG.mdx
```

Follow existing page conventions.

The page should include, where applicable:

1. overview;
2. use when;
3. avoid when;
4. installation;
5. basic usage;
6. required markup;
7. options;
8. instance methods;
9. events;
10. addons;
11. CSS and customization;
12. keyboard interaction;
13. focus behavior;
14. progressive enhancement;
15. accessibility notes;
16. live example;
17. known limitations;
18. browser support;
19. repository and npm links;
20. related plugins.

Use metadata for factual API content.

Use editorial text for explanation and guidance.

Do not claim unsupported behavior.

Do not claim complete WCAG compliance.

---

## Create or connect the demo

Use `build-plugin-demo` principles.

The demo must:

* import the installed npm package;
* use public exports;
* use exported CSS where available;
* use semantic HTML;
* demonstrate the primary behavior;
* include a meaningful non-happy-path state;
* remain keyboard operable;
* show visible focus;
* include reset behavior when stateful;
* avoid framework dependencies;
* avoid private imports;
* avoid copying package source code.

---

## Update navigation

Update the Starlight sidebar or autogeneration structure.

Confirm:

* the plugin appears once;
* the title is readable;
* the category is correct;
* ordering follows repository conventions;
* direct navigation works;
* the page is discoverable from the plugin catalog.

---

## Verification

Run the repository’s available commands.

Preferred:

```bash
npm run validate:plugins
npm run check
npm run test
npm run build
```

Use the equivalent package-manager commands.

Also verify:

* runtime import resolves;
* docs metadata resolves;
* CSS resolves where applicable;
* plugin page renders;
* demo initializes;
* keyboard behavior works;
* focus remains visible;
* no console errors occur;
* production build succeeds.

---

## Constraints

Do not:

* modify the plugin source repository;
* publish the package;
* copy implementation files;
* use private package internals;
* add a framework for one demo;
* overwrite unrelated docs;
* create unsupported accessibility claims;
* hide a broken package contract with local hacks.

---

## Completion criteria

The workflow is complete only when:

* the npm dependency is installed;
* the lockfile is updated;
* runtime imports resolve;
* docs metadata resolves;
* the registry entry exists;
* the plugin page exists;
* the demo works or its absence is explained;
* navigation includes the page;
* validation passes;
* the production build passes.

---

## Final report

```md
## Plugin onboarded

- Package:
- Installed version:
- Registry slug:
- Category:
- Status:
- Documentation route:
- Demo route:

## Package contract

- Runtime export:
- Type declarations:
- `./docs` export:
- CSS export:
- Addon exports:

## Files changed

- ...

## Verification

- Registry validation:
- Astro check:
- Tests:
- Production build:
- Accessibility checks:

## Follow-up

- Missing metadata:
- Missing examples:
- Package normalization work:
- Documentation gaps:
```
