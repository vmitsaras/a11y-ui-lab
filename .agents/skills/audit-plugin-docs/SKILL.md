---

name: audit-plugin-docs
description: Audit one documented plugin against its installed npm package, exports, type declarations, docs metadata, README, examples, API, and accessibility behavior, then report or fix documentation drift.
---

# Audit Plugin Docs

## Purpose

Check whether one plugin’s documentation accurately represents the installed npm package.

The audit should identify documentation drift, invalid imports, missing API coverage, stale examples, unsupported accessibility claims, and incomplete package metadata.

By default, report findings before making broad changes.

Apply safe documentation fixes when the user asks for implementation.

---

## Use this skill when

Use this skill when the user asks to:

* audit a plugin page;
* verify plugin documentation;
* compare docs with npm;
* check whether examples are current;
* review accessibility guidance;
* find stale API references;
* check documentation completeness.

---

## Expected input

Required:

```txt
PACKAGE_NAME
```

Optional:

```txt
DOCS_ROUTE
FIX_SAFE_ISSUES: true | false
CHECK_DEMO: true | false
CHECK_ACCESSIBILITY: true | false
```

Defaults:

```txt
FIX_SAFE_ISSUES: false
CHECK_DEMO: true
CHECK_ACCESSIBILITY: true
```

---

## Inspect repository context

Inspect:

* `AGENTS.md`;
* package manifest;
* lockfile;
* plugin registry;
* plugin page;
* demo files;
* shared documentation components;
* metadata loader;
* validation scripts;
* tests;
* CI configuration.

Determine the installed package version.

---

## Inspect package sources of truth

Use the installed package and its published documentation.

Check:

* `package.json`;
* export map;
* type declarations;
* `./docs` metadata;
* README;
* changelog;
* examples;
* public API;
* public CSS;
* addon exports;
* repository URL;
* npm URL;
* license;
* engine requirements.

Do not use private internal files unless required to confirm behavior that cannot be understood from public outputs.

Clearly distinguish public API from internal implementation.

---

## Audit categories

### 1. Package identity

Check:

* package name;
* version;
* description;
* repository URL;
* npm URL;
* license;
* homepage;
* engine requirements.

### 2. Public imports

Check documented imports against:

* root export;
* `./docs`;
* CSS export;
* addon exports;
* type exports.

Flag:

* private deep imports;
* removed paths;
* incorrect package names;
* missing file extensions where required;
* imports that do not resolve.

### 3. API documentation

Compare:

* functions;
* classes;
* options;
* defaults;
* methods;
* events;
* detail payloads;
* return types;
* destroy/cleanup behavior;
* addon APIs.

Classify each item as:

```txt
documented and correct
documented but stale
missing from docs
documented but not public
unclear
```

### 4. Markup documentation

Check:

* required root element;
* required child elements;
* semantic elements;
* required attributes;
* required IDs;
* ARIA relationships;
* data attributes;
* optional markup;
* invalid or redundant ARIA.

### 5. Keyboard behavior

Compare documented behavior with package behavior and tests.

Check relevant keys such as:

* Tab;
* Shift+Tab;
* Enter;
* Space;
* Escape;
* Arrow keys;
* Home;
* End;
* Page Up;
* Page Down.

Do not assume a standard pattern is implemented merely because it is recommended by a design pattern.

### 6. Focus behavior

Check:

* initial focus;
* focus movement;
* focus restoration;
* roving tabindex;
* visibility of focus;
* focus after errors;
* focus after dynamic updates;
* behavior after destroy.

### 7. Progressive enhancement

Check:

* baseline behavior without JavaScript;
* hidden-state handling;
* generated DOM;
* generated IDs;
* cleanup;
* server-rendered markup expectations;
* module-import safety;
* automatic initialization claims.

### 8. Accessibility claims

Flag claims such as:

* fully accessible;
* WCAG compliant;
* screen-reader compatible;
* works everywhere;
* no accessibility issues.

Require supporting evidence or replace with precise behavioral statements.

### 9. Demo accuracy

Verify:

* public imports;
* semantic markup;
* current options;
* current methods;
* CSS imports;
* keyboard behavior;
* error states;
* reset behavior;
* console output;
* no deep imports;
* no undocumented patches.

### 10. Content quality

Check whether the page includes:

* overview;
* use when;
* avoid when;
* install instructions;
* usage;
* markup;
* API;
* options;
* methods;
* events;
* addons;
* CSS;
* keyboard behavior;
* focus behavior;
* limitations;
* progressive enhancement;
* related plugins.

---

## Severity levels

Use:

```txt
critical
high
medium
low
note
```

### Critical

Examples:

* documented import does not resolve;
* demo cannot initialize;
* docs recommend inaccessible behavior;
* package identity is wrong;
* private implementation is presented as public API.

### High

Examples:

* missing breaking API change;
* incorrect keyboard documentation;
* incorrect focus behavior;
* outdated required markup;
* unsupported accessibility claim.

### Medium

Examples:

* missing option;
* missing event;
* stale addon documentation;
* incomplete limitation note;
* outdated version reference.

### Low

Examples:

* unclear prose;
* minor inconsistency;
* missing related-plugin link;
* small metadata mismatch.

---

## Safe fixes

When `FIX_SAFE_ISSUES` is true, safe fixes include:

* correcting package names;
* correcting import paths;
* updating version references;
* adding missing public API entries;
* fixing stale option names;
* correcting broken links;
* correcting obvious metadata values;
* updating examples to current public APIs;
* removing unsupported claims;
* adding clearly verified limitations.

Do not perform broad editorial rewrites without explicit approval.

---

## Verification

Run:

```bash
npm run validate:plugins
npm run check
npm run test
npm run build
```

When browser tests exist, run the relevant plugin demo tests.

Check the page and demo for console errors.

---

## Final report

```md
## Plugin documentation audit

- Package:
- Installed version:
- Documentation route:
- Demo route:
- Overall status: pass / pass with notes / needs work / blocked

## Findings

### Critical

- ...

### High

- ...

### Medium

- ...

### Low

- ...

## Package contract

- Runtime export:
- Types:
- `./docs`:
- CSS:
- Addons:

## Documentation coverage

- Overview:
- Installation:
- Markup:
- API:
- Options:
- Methods:
- Events:
- Addons:
- Keyboard:
- Focus:
- Progressive enhancement:
- Limitations:
- Demo:

## Fixes applied

- ...

## Verification

- Registry validation:
- Astro check:
- Tests:
- Build:
- Demo checks:

## Recommended follow-up

- ...
```

