---
title: About the hub
description: How the documentation hub relates to independently published accessibility plugins.
---

This site is a documentation layer for independently maintained accessibility plugins. It does not copy plugin implementations or publish packages.

## Package boundary

Each integrated plugin is installed from npm at an explicit version. The plugin remains the source of truth for its runtime API, types, styles, examples, and release history.

Normalized packages expose build-time metadata from a `PACKAGE_NAME/docs` export. The hub combines that package-owned metadata with catalog information such as category, status, documentation route, and related plugins.

## Accessibility baseline

Documentation and demos use semantic HTML, logical headings, native controls, visible keyboard focus, and progressive enhancement. Important flows are verified with keyboard navigation and assistive technology in addition to automated checks.
