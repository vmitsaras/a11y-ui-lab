---

name: refresh-plugin-docs
description: Update an existing plugin dependency and synchronize its Starlight page, metadata-driven API sections, examples, addons, and accessibility guidance without overwriting editorial content.
---

# Refresh Plugin Docs

## Purpose

Update documentation after an already-onboarded plugin publishes a new npm version.

This workflow must compare the current and target package contracts, update the dependency deliberately, preserve editorial content, and verify the existing demo against the new release.

---

## Use this skill when

Use this skill when the user asks to:

* update docs after a plugin release;
* upgrade an installed plugin package;
* refresh API documentation;
* synchronize changed metadata;
* update plugin examples after a package version change;
* document new options, methods, events, or addons.

---

## Do not use this skill when

Do not use this skill when:

* the plugin has not been registered;
* the user wants to update every plugin;
* the user wants an audit without making changes;
* the plugin should be removed.

Use:

* `onboard-plugin-to-docs` for a new plugin;
* `sync-plugin-releases` for multiple plugins;
* `audit-plugin-docs` for inspection only;
* `remove-plugin-from-docs` for removal.

---

## Expected input

Required:

```txt
PACKAGE_NAME
```

Optional:

```txt
TARGET_VERSION
RELEASE_NOTES_URL
ALLOW_BREAKING_UPDATE: false
```

If no version is supplied, determine the newest compatible published version.

Do not install a new major version silently.

---

## Inspect current state

Before editing, determine:

* current installed version;
* current dependency range;
* current lockfile version;
* target version;
* registry entry;
* documentation page;
* demos;
* metadata import;
* runtime imports;
* addon imports;
* CSS imports;
* current API documentation;
* current accessibility notes;
* current migration notes.

Inspect the package’s new release for:

* changelog entries;
* README changes;
* export-map changes;
* metadata changes;
* API changes;
* option changes;
* method changes;
* event changes;
* addon changes;
* CSS changes;
* markup changes;
* keyboard changes;
* focus-management changes;
* deprecations;
* browser-support changes;
* breaking changes.

---

## Classify the update

Classify the release as one or more of:

```txt
documentation-only
patch-fix
additive
behavioral
deprecated
breaking
unknown
```

Explain the classification in the final report.

Stop before completing an unapproved breaking update.

---

## Update the dependency

Use an explicit target version.

```bash
npm install PACKAGE_NAME@TARGET_VERSION
```

Use the equivalent pnpm or Yarn command.

Do not:

* update unrelated dependencies;
* use an uncontrolled wildcard;
* remove the lockfile;
* bypass peer dependency problems without explanation;
* install a major release without identifying migration impact.

---

## Compare package contracts

Compare the old and new package versions for:

* root exports;
* type exports;
* `./docs`;
* CSS exports;
* addon exports;
* named runtime exports;
* default exports;
* options;
* methods;
* events;
* selectors;
* required markup;
* keyboard behavior;
* focus behavior;
* default values;
* cleanup behavior;
* browser support;
* deprecations.

Use public package contracts rather than internal source paths.

---

## Synchronize documentation

Update metadata-driven sections:

* version;
* installation commands;
* API tables;
* option tables;
* method tables;
* event tables;
* addon lists;
* CSS imports;
* keyboard tables;
* focus notes;
* package links;
* limitations;
* compatibility details.

Preserve:

* hand-written overview text;
* use-when guidance;
* design rationale;
* migration history;
* manually maintained examples;
* unrelated page sections.

Change editorial text only when the new behavior makes it inaccurate.

---

## Update demos

Run the existing demos against the new version.

Change demo code only when:

* public API changed;
* required markup changed;
* exported CSS changed;
* an option was renamed;
* behavior changed;
* a deprecated pattern must be removed;
* a new feature should be demonstrated;
* the current demo exposes a real regression.

Do not use deprecated APIs to avoid updating a demo.

---

## Detect stale references

Search for:

* old version numbers;
* removed export names;
* deprecated options;
* removed methods;
* outdated CSS paths;
* private imports;
* stale addon names;
* obsolete markup;
* incorrect keyboard instructions;
* outdated screenshots;
* old package links.

Update only references associated with the selected package.

---

## Verification

Run:

```bash
npm run validate:plugins
npm run check
npm run test
npm run build
```

Use equivalent commands for the repository package manager.

Verify:

* package imports resolve;
* metadata loads;
* examples initialize;
* no stale API names remain;
* no deep imports were introduced;
* keyboard behavior remains correct;
* focus behavior remains correct;
* the production build succeeds.

---

## Constraints

Do not:

* rewrite the entire page unnecessarily;
* remove editorial content;
* delete migration notes;
* update unrelated packages;
* hide breaking changes;
* publish packages;
* modify the plugin repository;
* claim accessibility behavior that is not supported.

---

## Completion criteria

The workflow is complete when:

* the target version is installed;
* the lockfile is updated;
* package contract differences are understood;
* affected documentation is updated;
* demos use the current public API;
* stale references are removed;
* validation passes;
* the production build passes.

---

## Final report

```md
## Plugin documentation refreshed

- Package:
- Previous version:
- New version:
- Change classification:

## Detected changes

- Runtime exports:
- Options:
- Methods:
- Events:
- Addons:
- CSS:
- Markup:
- Accessibility behavior:
- Deprecations:
- Breaking changes:

## Documentation updated

- ...

## Verification

- Registry validation:
- Astro check:
- Tests:
- Production build:
- Accessibility checks:

## Manual review required

- ...
```
