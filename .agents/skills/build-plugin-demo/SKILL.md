---

name: build-plugin-demo
description: Create or update an interactive Starlight demo using the actual installed accessibility plugin package, public exports, semantic markup, keyboard support, reset behavior, and realistic interface states.
---

# Build Plugin Demo

## Purpose

Create or update an interactive example for one documented plugin.

The demo must use the actual installed npm package and its public exports.

The documentation repository owns the presentation and scenario.

The plugin package owns the runtime behavior.

---

## Use this skill when

Use this skill when the user asks to:

* build a live plugin example;
* add an interactive demo;
* update a broken demo;
* demonstrate a new plugin option;
* add realistic states;
* improve demo accessibility;
* create a reusable demo wrapper.

---

## Expected input

Required:

```txt
PACKAGE_NAME
DEMO_PURPOSE
```

Optional:

```txt
PLUGIN_SLUG
DOCS_ROUTE
DEMO_VARIANT
FEATURES
EDGE_CASES
```

---

## Inspect first

Inspect:

* plugin registry;
* plugin docs page;
* installed package version;
* package exports;
* `./docs` metadata;
* README;
* examples;
* public CSS;
* addon exports;
* existing demo patterns;
* shared demo components;
* repository styling conventions;
* tests.

---

## Demo principles

The demo must:

* use the installed npm package;
* use documented public exports;
* avoid private deep imports;
* use semantic HTML;
* use ARIA only where necessary;
* demonstrate real behavior;
* include keyboard interaction;
* preserve visible focus;
* include a realistic edge or failure state;
* include reset behavior when stateful;
* remain understandable without decorative styling;
* respect reduced motion;
* work at narrow widths;
* avoid global state leaks;
* clean up listeners when the demo is removed or reinitialized.

---

## Import rules

Correct:

```ts
import { createSpecificPlugin } from "PACKAGE_NAME";
```

When CSS exists:

```ts
import "PACKAGE_NAME/styles.css";
```

Addon example:

```ts
import { createAddon } from "PACKAGE_NAME/addons/ADDON_NAME";
```

Incorrect:

```ts
import { createSpecificPlugin } from "PACKAGE_NAME/src/index.ts";
```

Incorrect:

```ts
import { createSpecificPlugin } from "../../copied-plugin-source";
```

---

## Scenario design

Do not create a demo that only proves initialization.

Choose a scenario that demonstrates why the plugin exists.

Examples:

### Error summary

* invalid form submission;
* multiple field errors;
* links from summary to fields;
* corrected fields;
* reset state.

### Async button

* idle;
* loading;
* success;
* failure;
* repeated activation prevention.

### Dirty form guard

* unchanged form;
* changed form;
* attempted navigation;
* save or discard;
* reset.

### Search or filtering

* matching results;
* no results;
* active filters;
* clear filters;
* keyboard operation.

### Dialog

* open;
* initial focus;
* Escape close;
* focus restoration;
* repeated open and close.

---

## Required demo structure

Prefer a structure such as:

```txt
src/demos/PLUGIN_SLUG/
├─ BasicDemo.astro
├─ demo.ts
├─ demo.css
└─ README.md
```

Adapt to repository conventions.

Avoid adding unnecessary files for a very small demo.

---

## Demo wrapper

The rendered demo should provide:

* descriptive heading;
* concise instructions;
* interactive region;
* reset action when needed;
* source-code access where supported;
* package/version note;
* fallback or no-JavaScript note where relevant.

Do not place a heading inside the demo that conflicts with the documentation page hierarchy.

---

## Initialization

Initialize only inside the demo scope.

Example:

```ts
const root = document.querySelector<HTMLElement>("[data-demo-root]");

if (root) {
  const instance = createSpecificPlugin(root);

  const reset = root.querySelector<HTMLButtonElement>("[data-demo-reset]");

  reset?.addEventListener("click", () => {
    instance.destroy();
    // Restore initial markup and reinitialize safely.
  });
}
```

Avoid:

* document-wide selectors;
* automatic global initialization;
* module-level DOM assumptions;
* duplicate listener registration;
* untracked instances.

---

## Reset behavior

Stateful demos should support reset.

Reset must:

* destroy the current instance where supported;
* restore original state;
* restore ARIA states;
* clear generated messages;
* clear dynamic classes;
* reset form controls;
* reinitialize once;
* avoid duplicate listeners.

---

## Accessibility checks

Verify:

* all controls have accessible names;
* instructions are programmatically associated where necessary;
* keyboard behavior matches the plugin;
* focus does not disappear;
* dynamic status messages are not overly verbose;
* color is not the only state indicator;
* errors are understandable;
* no keyboard trap exists;
* Escape works where expected;
* reset does not create unexpected focus movement;
* zoom and reflow remain usable;
* reduced motion is respected.

---

## Styling rules

Use documentation-owned styling for the demo frame.

Use package-owned CSS for plugin behavior and default presentation.

Do not override plugin internals broadly.

Avoid selectors such as:

```css
.demo * {
  all: unset;
}
```

Prefer scoped styles.

Ensure documentation styles do not accidentally hide focus indicators or plugin states.

---

## Testing

Where feasible, test:

* demo initialization;
* primary interaction;
* keyboard behavior;
* state changes;
* reset;
* destroy and reinitialize;
* no console errors.

Run existing repository tests.

---

## Verification

Run:

```bash
npm run check
npm run test
npm run build
```

Also confirm:

* demo route loads;
* public imports resolve;
* package CSS loads;
* interaction works;
* reset works;
* keyboard interaction works;
* no console errors occur.

---

## Constraints

Do not:

* copy plugin source code;
* use private imports;
* create fake behavior in the docs layer;
* patch plugin bugs silently;
* add a framework solely for the demo;
* use inaccessible custom controls where native controls work;
* create a demo that relies only on mouse input;
* claim behavior that the package does not support.

If the package has a real bug, document and report it separately.

---

## Final report

```md
## Plugin demo created

- Package:
- Installed version:
- Plugin slug:
- Demo route:
- Scenario:

## Behavior demonstrated

- ...
- ...

## Public imports used

- ...

## Accessibility coverage

- Keyboard:
- Focus:
- Dynamic updates:
- Reset:
- Reduced motion:
- Reflow:

## Files changed

- ...

## Verification

- Astro check:
- Tests:
- Production build:
- Manual interaction:
- Console:
```
