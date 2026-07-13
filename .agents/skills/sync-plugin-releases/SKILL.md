---

name: sync-plugin-releases
description: Detect and update released versions of multiple registered accessibility plugins, compare package contracts, regenerate metadata-driven documentation, preserve editorial content, and produce a controlled release summary.
---

# Sync Plugin Releases

## Purpose

Update multiple registered plugin packages in one controlled operation.

This workflow should detect available versions, classify changes, update selected dependencies, synchronize affected documentation, verify demos, and report packages requiring manual migration.

It must not blindly install every latest version.

---

## Use this skill when

Use this skill when the user asks to:

* sync all plugin releases;
* update multiple plugin packages;
* refresh the full documentation hub;
* process several released versions;
* regenerate affected plugin pages;
* prepare a batch dependency update.

---

## Expected input

Optional:

```txt
PACKAGES
UPDATE_SCOPE: patch | minor | compatible | selected | all
ALLOW_MAJOR: false
APPLY_CHANGES: true
```

Defaults:

```txt
UPDATE_SCOPE: compatible
ALLOW_MAJOR: false
APPLY_CHANGES: true
```

If `PACKAGES` is omitted, inspect all registered plugins.

---

## Inspect catalog

Load:

* plugin registry;
* package manifest;
* lockfile;
* installed versions;
* package ranges;
* docs pages;
* demos;
* metadata imports;
* validation scripts.

Build an inventory:

```txt
package name
registry slug
installed version
declared range
latest compatible version
latest published version
docs route
demo route
status
```

---

## Detect updates

For every selected package, classify:

```txt
current
patch available
minor available
major available
deprecated
unpublished
unknown
```

Do not update:

* deprecated plugins unless requested;
* packages with missing metadata;
* packages with unresolved peer dependency conflicts;
* major versions unless `ALLOW_MAJOR` is true;
* packages not registered in the catalog.

---

## Update plan

Before applying changes, produce an internal update plan grouped by:

### Safe compatible updates

* patch releases;
* minor releases without detected breaking changes.

### Review-required updates

* behavior changes;
* export changes;
* metadata schema changes;
* changed markup;
* changed keyboard behavior;
* changed focus behavior.

### Blocked updates

* major releases;
* removed package;
* broken `./docs` export;
* invalid types;
* peer dependency conflicts;
* package no longer resolves.

When the user requests implementation, apply safe compatible updates and stop or isolate blocked packages.

---

## Install explicit versions

Use explicit target versions.

Example:

```bash
npm install package-a@1.4.2 package-b@2.3.0
```

Use the equivalent pnpm or Yarn command.

Do not run a broad uncontrolled update such as:

```bash
npm update
```

unless the user explicitly requests it and the impact is understood.

Do not update unrelated dependencies.

---

## Compare contracts

For each updated package, compare:

* root exports;
* type declarations;
* `./docs`;
* CSS;
* addons;
* runtime API;
* options;
* methods;
* events;
* markup;
* keyboard behavior;
* focus behavior;
* cleanup;
* limitations;
* browser support;
* deprecations.

Classify each update:

```txt
documentation-only
patch-fix
additive
behavioral
deprecated
breaking
unknown
```

---

## Synchronize affected pages

For each safely updated package:

* update metadata-driven API sections;
* update install information;
* update version references;
* update options;
* update methods;
* update events;
* update addons;
* update CSS imports;
* update keyboard guidance;
* update focus guidance;
* update limitations;
* update compatibility notes.

Preserve:

* editorial introductions;
* use-when guidance;
* migration history;
* design rationale;
* unrelated examples.

Do not regenerate unaffected pages.

---

## Regeneration rules

When repository scripts support targeted generation, use:

```bash
npm run generate:plugins -- --plugin PACKAGE_NAME
```

or the repository equivalent.

The generator must:

* update generated fragments only;
* preserve manually written MDX;
* avoid overwriting editorial sections;
* report drift;
* fail on invalid metadata.

Do not treat generation as permission to replace complete pages.

---

## Demo verification

For every updated package with a demo:

* initialize the demo;
* test primary behavior;
* test keyboard interaction;
* test reset;
* check public imports;
* check CSS;
* check console output;
* check deprecated usage.

Modify a demo only when required by the release.

---

## Stale-reference search

Search for:

* previous versions;
* removed exports;
* renamed options;
* removed methods;
* outdated addon paths;
* outdated CSS paths;
* obsolete keyboard instructions;
* obsolete markup;
* deprecated usage.

Limit changes to packages included in the sync.

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

If one package fails:

* identify the specific package;
* do not obscure the failure;
* keep successful updates isolated where possible;
* report whether the batch can remain partially applied.

---

## Constraints

Do not:

* update major versions silently;
* update unrelated dependencies;
* rewrite all documentation pages;
* remove migration notes;
* deep-import package internals;
* publish plugin packages;
* modify plugin repositories;
* hide blocked updates.

---

## Completion criteria

The workflow is complete when:

* selected compatible package versions are updated;
* the lockfile is updated;
* contract differences are classified;
* affected docs are synchronized;
* demos are verified;
* blocked updates are reported;
* validation passes;
* production build passes.

---

## Final report

```md
## Plugin release synchronization

### Updated

| Package | Previous | New | Classification | Docs updated | Demo verified |
|---|---:|---:|---|---|---|

### Already current

| Package | Version |
|---|---:|

### Review required

| Package | Available version | Reason |
|---|---:|---|

### Blocked

| Package | Target version | Blocker |
|---|---:|---|

## Documentation changes

- ...

## Demo changes

- ...

## Verification

- Registry validation:
- Astro check:
- Tests:
- Build:
- Link checks:
- Accessibility checks:

## Manual follow-up

- ...
```
