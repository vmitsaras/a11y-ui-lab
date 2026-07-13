---

name: remove-plugin-from-docs
description: Safely deprecate, archive, or remove an accessibility plugin from the documentation catalog while preserving migration guidance, avoiding broken links, and cleaning dependencies only when no longer used.
---

# Remove Plugin From Docs

## Purpose

Safely remove or deprecate one plugin from the documentation hub.

Removal must not create broken routes, orphaned demos, missing migration guidance, or accidental dependency failures.

Prefer deprecation over immediate deletion when users may still rely on existing documentation URLs.

---

## Use this skill when

Use this skill when the user asks to:

* remove a plugin from the catalog;
* deprecate a plugin;
* archive a plugin page;
* replace one plugin with another;
* remove an unpublished or abandoned package;
* clean up obsolete documentation.

---

## Expected input

Required:

```txt
PACKAGE_NAME
ACTION: deprecate | archive | remove
```

Optional:

```txt
REPLACEMENT_PACKAGE
REPLACEMENT_ROUTE
REMOVAL_REASON
KEEP_REDIRECT: true | false
REMOVE_DEPENDENCY: true | false
```

Default to:

```txt
ACTION: deprecate
KEEP_REDIRECT: true
REMOVE_DEPENDENCY: false
```

when intent is unclear.

---

## Inspect before changing

Inspect:

* plugin registry entry;
* documentation page;
* demo files;
* package dependency;
* lockfile;
* related-plugin references;
* navigation;
* internal links;
* external links;
* search-indexed routes;
* replacement plugin;
* migration guidance;
* package usage elsewhere in the repository.

Search the entire repository for:

```txt
PACKAGE_NAME
PLUGIN_SLUG
DOCS_ROUTE
DEMO_ROUTE
```

---

## Action modes

### Deprecate

Use when:

* package remains published;
* users may still rely on it;
* a replacement exists;
* maintenance has ended;
* removal would break useful historical documentation.

Actions:

* set registry status to `deprecated`;
* add a visible deprecation notice;
* explain the reason;
* link to a replacement;
* add migration guidance;
* keep the documentation route;
* keep the package dependency if the live demo remains;
* remove from featured areas;
* preserve search discoverability.

### Archive

Use when:

* page should remain available;
* plugin should no longer appear in primary navigation;
* live demo should be disabled or frozen;
* documentation is useful for existing users.

Actions:

* remove from active catalog views;
* keep an archived route;
* add archive notice;
* remove active recommendations;
* preserve migration notes;
* remove demos only when they cannot remain reliable.

### Remove

Use only when:

* package was added by mistake;
* package is unsafe or misleading;
* package was never publicly used;
* legal or security reasons require removal;
* user explicitly requests deletion.

Actions:

* remove registry entry;
* remove navigation entry;
* remove page;
* remove demo;
* remove package dependency only when unused elsewhere;
* update related-plugin references;
* add redirect or tombstone page when possible;
* verify no broken links remain.

---

## Dependency removal

Before uninstalling, confirm the package is not used by:

* another demo;
* a shared component;
* validation scripts;
* tests;
* migration examples;
* comparison pages;
* archived pages.

Only then run:

```bash
npm uninstall PACKAGE_NAME
```

Use the equivalent pnpm or Yarn command.

Update the lockfile.

---

## Redirect or tombstone

When removing a public route, prefer one of:

1. redirect to the replacement plugin;
2. retain a minimal tombstone page;
3. retain an archived page.

A tombstone page should include:

* plugin name;
* removal or deprecation notice;
* reason;
* replacement;
* migration link;
* date or version context where known.

Do not leave users with an unexplained 404 when a public page previously existed.

---

## Update related content

Search and update:

* related-plugin links;
* comparison pages;
* category pages;
* landing page cards;
* getting-started guides;
* install examples;
* addon matrices;
* navigation;
* screenshots;
* release notes;
* search keywords.

Do not remove unrelated references.

---

## Demo handling

For deprecation:

* keep demo only if it remains accurate and safe;
* add a deprecation warning;
* prevent the demo from being presented as recommended.

For archive:

* freeze or disable the demo when necessary;
* clearly label it.

For removal:

* delete demo files;
* remove demo routes;
* remove demo tests;
* remove related assets.

---

## Verification

Run:

```bash
npm run validate:plugins
npm run check
npm run test
npm run build
```

Run link checking when available.

Verify:

* no duplicate or dangling registry entries;
* no broken internal links;
* no unused package dependency;
* no orphaned demo;
* redirect or tombstone works;
* production build succeeds.

---

## Constraints

Do not:

* remove a public plugin page without considering redirects;
* remove migration guidance;
* uninstall a package still used elsewhere;
* delete historical release information unnecessarily;
* silently replace one plugin with another;
* remove a package solely because a newer version exists.

---

## Final report

```md
## Plugin documentation change

- Package:
- Action:
- Previous route:
- Replacement:
- Redirect or tombstone:
- Dependency removed: yes/no

## Changes

- Registry:
- Navigation:
- Documentation:
- Demo:
- Related links:
- Dependency:

## Verification

- Registry validation:
- Link checks:
- Astro check:
- Tests:
- Production build:

## Migration notes

- ...
```

