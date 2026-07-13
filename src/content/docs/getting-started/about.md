---
title: About A11y UI
description: Learn how A11y UI documents focused, framework-independent JavaScript plugins for accessible interface behavior.
---

# About A11y UI

A11y UI is a documentation hub for small, focused JavaScript plugins that improve common interface patterns without replacing the HTML you already have.

The collection covers practical problems such as form errors, asynchronous feedback, navigation, disclosures, dialogs, loading states, filtering, and other interaction patterns that often need more than static markup alone.

Each plugin is maintained and published independently. This site brings them together through a consistent catalog, shared documentation structure, and working examples.

## What this project is for

The goal is to make accessible interface behavior easier to understand, evaluate, and integrate.

Instead of presenting a single framework or a large all-or-nothing component system, A11y UI focuses on independent packages that can be added where they are needed.

Each plugin guide aims to answer the questions developers usually have before adopting a package:

- What problem does it solve?
- What markup does it expect?
- Which behaviors does it add?
- How does keyboard interaction work?
- What happens to focus?
- Which options, methods, events, and addons are available?
- What remains the responsibility of the application?
- What are the known limitations?

## Independent packages, consistent documentation

Every plugin remains a separate npm package and GitHub repository.

The plugin repository remains the source of truth for:

- runtime code;
- public exports;
- TypeScript declarations;
- default styles;
- examples;
- tests;
- changelog and release history.

A11y UI installs the published package and documents its public contract. It does not copy plugin implementations into the documentation site or maintain a second version of the runtime code.

This keeps the relationship clear:

```txt
Plugin repository
→ builds and publishes the package
→ owns runtime behavior and releases

A11y UI
→ installs the published package
→ documents and demonstrates its public API
```
