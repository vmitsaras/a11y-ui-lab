---

name: validate-plugin-catalog
description: Validate the complete accessibility plugin registry for duplicate entries, missing dependencies, invalid exports, stale versions, missing pages, broken demos, inconsistent categories, and documentation coverage gaps.
---

# Validate Plugin Catalog

## Purpose

Audit the complete plugin catalog as a system.

This workflow validates registry integrity, installed dependencies, public package contracts, documentation routes, demos, versions, categories, statuses, and navigation.

It should detect structural problems before they reach production.

---

## Use this skill when

Use this skill when the user asks to:

* validate the plugin catalog;
* check all registered plugins;
* find missing documentation;
* detect duplicate slugs;
* detect invalid imports;
* check stale package versions;
* review catalog consistency;
* prepare the catalog for CI or release.

---

## Scope

Inspect:

* plugin registry;
* package manifest;
* lockfile;
* plugin pages;
* demo entries;
* Starlight navigation;
* package metadata exports;
* package export maps;
* validation scripts;
* category definitions;
* status definitions;
* related-plugin references.

---

## Registry validation

Check every entry for:

* unique slug;
* unique package name;
* unique docs path;
* allowed category;
* allowed status;
* valid demo reference;
* valid related-plugin references;
* valid order value;
* valid featured value;
* required fields;
* consistent naming.

Reject:

* duplicate slugs;
* duplicate package names;
* duplicate docs paths;
* unknown categories;
* unknown statuses;
* references to nonexistent plugins;
* malformed routes.

---

## Dependency validation

For every registry package, check:

* package exists in `package.json`;
* package exists in the lockfile;
* package resolves from `node_modules`;
* installed version is known;
* dependency range is valid;
* package is not accidentally placed only in development dependencies when production build requires it;
* no unregistered plugin packages are installed without explanation.

Report:

```txt
registered and installed
registered but missing
installed but unregistered
version mismatch
unresolvable
```

---

## Package contract validation

For every plugin, check:

```ts
import * as runtime from "PACKAGE_NAME";
```

Check:

```ts
import { docs } from "PACKAGE_NAME/docs";
```

When applicable:

```ts
import "PACKAGE_NAME/styles.css";
```

Validate:

* non-empty runtime export;
* type declaration availability;
* named `docs` export;
* metadata shape;
* package-name match;
* slug match;
* API array validity;
* install command validity;
* CSS export validity;
* addon export validity;
* repository and npm links.

---

## Documentation validation

For every registry entry, check:

* documentation file exists;
* route matches registry;
* frontmatter is valid;
* title exists;
* description exists;
* package name appears correctly;
* install example uses the public package;
* page does not use private imports;
* required page sections exist;
* links resolve;
* related-plugin links resolve;
* no obvious placeholder content remains.

Recommended sections:

```txt
Overview
Use when
Avoid when
Installation
Usage
Markup
API
Options
Methods
Events
Addons
Keyboard interaction
Focus behavior
Progressive enhancement
Accessibility notes
Known limitations
Demo
```

Not every plugin requires every section, but omissions should be intentional.

---

## Demo validation

For every declared demo, check:

* demo file exists;
* demo route exists;
* demo imports the installed npm package;
* demo does not import package internals;
* CSS resolves;
* markup is valid;
* initialization target exists;
* no obvious console errors occur;
* reset behavior exists where needed;
* keyboard usage is possible;
* demo is linked from the page.

---

## Version freshness

For every plugin, determine:

* installed version;
* declared dependency range;
* latest published version;
* latest compatible version;
* whether a major version is available;
* whether docs mention an outdated version.

Classify:

```txt
current
compatible update available
major update available
unknown
deprecated
```

Do not update packages during validation unless the user explicitly requests fixes.

---

## Navigation validation

Check:

* every plugin page appears in navigation;
* no plugin appears twice;
* category placement matches registry;
* category names are consistent;
* ordering is deterministic;
* deprecated entries are clearly marked;
* direct routes build successfully.

---

## Status validation

Check that:

* stable plugins have sufficient docs and working demos;
* beta plugins are labeled;
* experimental plugins are labeled;
* deprecated plugins include replacement or explanation;
* status is not inferred only from version number.

---

## Output modes

Support:

```txt
report-only
fix-safe
strict-ci
```

### report-only

Report findings without changes.

### fix-safe

Apply safe structural fixes such as:

* correcting duplicate order values;
* fixing broken local links;
* correcting registry paths;
* adding missing navigation entries;
* correcting obvious package-name mismatches.

### strict-ci

Exit or report failure when any critical or high-severity issue exists.

---

## Severity

Use:

```txt
critical
high
medium
low
note
```

Critical examples:

* duplicate slug;
* missing installed package;
* invalid runtime import;
* invalid docs import;
* missing documentation route;
* production build failure.

---

## Verification

Run:

```bash
npm run validate:plugins
npm run check
npm run test
npm run build
```

Run link and accessibility checks when configured.

---

## Final report

```md
## Plugin catalog validation

- Registered plugins:
- Installed plugin packages:
- Documentation pages:
- Declared demos:
- Overall status:

## Critical

- ...

## High

- ...

## Medium

- ...

## Low

- ...

## Registry integrity

- Duplicate slugs:
- Duplicate package names:
- Duplicate routes:
- Invalid categories:
- Invalid statuses:

## Package contracts

| Package | Runtime | Types | Docs export | CSS | Addons |
|---|---|---|---|---|---|

## Version status

| Package | Installed | Latest compatible | Latest | Status |
|---|---:|---:|---:|---|

## Documentation coverage

- Missing pages:
- Missing sections:
- Broken links:
- Placeholder content:

## Demo coverage

- Missing demos:
- Broken demos:
- Private imports:
- Accessibility concerns:

## Fixes applied

- ...

## Verification

- Registry script:
- Astro check:
- Tests:
- Build:
```
