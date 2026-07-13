---

name: prepare-docs-release
description: Run a complete release-readiness review for the Astro and Starlight plugin documentation hub, covering build output, registry integrity, package contracts, links, accessibility, SEO, demos, metadata, and deployment configuration.
---

# Prepare Docs Release

## Purpose

Determine whether the documentation hub is ready for public deployment.

This workflow validates the complete site rather than one plugin.

It should find release blockers, apply safe fixes when requested, and produce a clear go/no-go recommendation.

Do not deploy unless the user explicitly requests deployment through a separate write action.

---

## Use this skill when

Use this skill when the user asks to:

* prepare the docs site for release;
* run release checks;
* verify deployment readiness;
* check the site before publishing;
* perform final QA;
* review production build readiness.

---

## Expected input

Optional:

```txt
TARGET_ENVIRONMENT: github-pages | vercel | netlify | cloudflare | other
SITE_URL
BASE_PATH
FIX_SAFE_ISSUES: true | false
STRICT: true | false
```

Defaults:

```txt
FIX_SAFE_ISSUES: true
STRICT: true
```

---

## Inspect repository

Inspect:

* `AGENTS.md`;
* package manifest;
* lockfile;
* Astro config;
* Starlight config;
* content collections;
* plugin registry;
* scripts;
* CI workflows;
* deployment workflows;
* public assets;
* generated output;
* redirects;
* sitemap setup;
* robots setup;
* metadata defaults.

---

## Release areas

Audit the following areas.

---

## 1. Dependency integrity

Check:

* lockfile exists;
* package manager matches CI;
* no duplicate lockfiles;
* dependencies install cleanly;
* Astro and Starlight versions are compatible;
* plugin packages resolve;
* no missing production dependency;
* no unexplained local package reference;
* no GitHub branch dependency where npm should be used;
* no invalid peer dependencies.

---

## 2. Plugin catalog integrity

Run `validate-plugin-catalog` principles.

Check:

* unique slugs;
* unique package names;
* unique routes;
* valid categories;
* valid statuses;
* installed dependencies;
* docs exports;
* CSS exports;
* addons;
* pages;
* demos;
* navigation;
* related links;
* stale versions.

Any critical catalog error blocks release.

---

## 3. Build and type checks

Run available commands:

```bash
npm ci
npm run validate:plugins
npm run check
npm run test
npm run build
```

Use the repository package manager.

Check:

* clean install succeeds;
* type checking succeeds;
* content schema validation succeeds;
* production build succeeds;
* no unexpected warnings;
* generated files are current;
* no runtime-only browser global breaks the server build.

---

## 4. Link validation

Check:

* internal links;
* navigation links;
* pagination links;
* plugin routes;
* demo routes;
* repository links;
* npm links;
* addon links;
* anchor links;
* migration links;
* redirects.

Classify external-link failures separately because temporary network failures may occur.

Broken internal links block release.

---

## 5. Accessibility checks

Review:

* skip link;
* landmarks;
* heading hierarchy;
* navigation labels;
* visible focus;
* keyboard access;
* theme switcher;
* search dialog;
* sidebar behavior;
* mobile navigation;
* table overflow;
* code-block overflow;
* forced-colors support;
* reduced-motion support;
* 200% zoom;
* 400% zoom;
* reflow at narrow widths;
* link purpose;
* accessible names;
* live-region usage;
* demo isolation;
* no keyboard traps.

Run automated accessibility tests when configured.

Automated results do not replace manual checks.

---

## 6. Demo readiness

For every documented demo, check:

* route loads;
* package import resolves;
* CSS resolves;
* demo initializes;
* primary interaction works;
* keyboard interaction works;
* focus remains visible;
* reset works;
* no console errors;
* no private imports;
* no copied implementation source;
* no outdated API;
* realistic edge state exists.

Broken featured demos block release.

---

## 7. Content readiness

Check for:

* placeholder text;
* `TODO`;
* `FIXME`;
* `REPLACE_ME`;
* empty sections;
* duplicated content;
* incorrect package names;
* stale version references;
* unsupported accessibility claims;
* missing limitations;
* missing install instructions;
* missing page descriptions;
* inconsistent terminology.

Distinguish intentional roadmap TODOs from unfinished public content.

---

## 8. SEO and metadata

Check:

* unique page titles;
* useful descriptions;
* canonical URLs;
* site URL;
* base path;
* sitemap;
* robots;
* Open Graph metadata;
* social image fallback;
* correct language;
* favicon;
* package/repository links;
* no duplicate title suffixes;
* no accidental `noindex`.

The landing page should describe the plugin library, not only the documentation architecture.

---

## 9. Deployment configuration

Check target environment.

### GitHub Pages

Check:

* correct `site`;
* correct `base`;
* static output;
* Actions permissions;
* Pages artifact upload;
* direct-route behavior;
* asset paths.

### Vercel, Netlify, or Cloudflare

Check:

* build command;
* output directory;
* Node version;
* environment variables;
* redirects;
* headers;
* preview deployment behavior;
* direct routes.

Do not invent deployment configuration when target hosting is unknown.

---

## 10. Performance and assets

Check:

* oversized images;
* unnecessary client-side JavaScript;
* framework hydration added only for simple demos;
* duplicate CSS;
* unused assets;
* missing image dimensions;
* excessive font loading;
* broken cache paths;
* large demo bundles.

Do not optimize prematurely at the cost of correctness.

---

## 11. Security and privacy

Check:

* no secrets in repository files;
* no exposed npm tokens;
* no exposed GitHub tokens;
* no unsafe inline user-generated HTML;
* no unnecessary analytics;
* privacy disclosure if analytics exists;
* external embeds are deliberate;
* dependency audit findings are reviewed.

Do not automatically change package versions solely because of audit output without understanding impact.

---

## 12. CI parity

Confirm local release commands match CI.

Check:

* same package manager;
* same Node version;
* same install mode;
* same build command;
* same validation scripts;
* no locally generated uncommitted files required for build;
* no environment-specific hidden dependency.

---

## Severity levels

Use:

```txt
blocker
high
medium
low
note
```

### Blocker examples

* clean install fails;
* production build fails;
* registry is invalid;
* core plugin imports fail;
* broken internal routes;
* inaccessible primary navigation;
* deployment base path is wrong;
* featured demos do not work.

---

## Safe fixes

When allowed, safe fixes include:

* broken internal links;
* missing metadata descriptions;
* incorrect local routes;
* registry formatting;
* obvious package-name mistakes;
* missing navigation entries;
* stale generated output;
* missing image dimensions;
* invalid canonical path configuration when target URL is known.

Do not make broad design changes during release preparation.

---

## Release decision

Return one of:

```txt
GO
GO WITH NOTES
NO-GO
BLOCKED
```

### GO

No blockers or high-severity issues.

### GO WITH NOTES

No blockers. Remaining issues are medium or lower and do not compromise core correctness.

### NO-GO

One or more known blockers or high-severity issues remain.

### BLOCKED

Verification could not be completed because of environment, dependency, credential, or missing configuration problems.

---

## Final report

```md
## Documentation release readiness

- Decision: GO / GO WITH NOTES / NO-GO / BLOCKED
- Target environment:
- Site URL:
- Plugins registered:
- Pages built:
- Demos checked:

## Blockers

- ...

## High priority

- ...

## Medium priority

- ...

## Low priority

- ...

## Checks

| Area | Status | Notes |
|---|---|---|
| Clean install | | |
| Plugin catalog | | |
| Type checking | | |
| Tests | | |
| Production build | | |
| Internal links | | |
| External links | | |
| Accessibility | | |
| Demos | | |
| SEO metadata | | |
| Deployment config | | |
| Performance | | |
| Security | | |

## Safe fixes applied

- ...

## Commands run

- ...

## Deployment notes

- ...

## Remaining manual checks

- keyboard navigation;
- screen-reader smoke test;
- 200% and 400% zoom;
- narrow-screen reflow;
- production deployment preview;
```

These skills deliberately overlap at their boundaries but not in ownership: onboarding adds, refresh updates one, sync updates many, audit inspects one, validation inspects the system, demo work stays isolated, removal handles lifecycle, and release preparation is the final gate.
