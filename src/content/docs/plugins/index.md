---
title: Plugin catalog
description: Accessibility-focused plugins documented by this hub.
sidebar:
  order: 0
---

Browse published accessibility plugins by the interface problem they solve. Each guide uses the npm package as its implementation boundary and documents the public API, markup, interaction behavior, limitations, and a working example.

## Navigation and disclosure

### [A11y Menu Button](/a11y-ui-lab/plugins/a11y-menu-button/)

Add disclosure-style action panels to real buttons while keeping native links, buttons, and form controls, with Arrow-key movement, typeahead, focus-aware closing, positioning, and opt-in menu enhancements.

**Status:** Stable · **Package:** `a11y-menu-button`

### [A11y Command Menu Button](/a11y-ui-lab/plugins/a11y-command-menu-button/)

Add application-style command menus to real buttons with roving focus, one-level submenus, typeahead, disabled and busy states, optional announcements, and host-owned checkable commands.

**Status:** Stable · **Package:** `a11y-command-menu-button`

### [A11y Tabs Widget](/a11y-ui-lab/plugins/a11y-tabs/)

Progressively enhance semantic buttons and content sections into a single-selection tabs interface with manual or automatic activation, orientation-aware roving focus, optional hash state, and focused addons for responsive, form, history, loading, and overflow needs.

**Status:** Stable · **Package:** `a11y-tabs-widget`

### [A11y Dialog](/a11y-ui-lab/plugins/a11y-dialog/)

Enhance native modal dialogs with required visible labels, safe initial focus, Tab containment, Escape and backdrop policies, focus restoration, lifecycle events, cleanup, and optional outcome, async-action, diagnostics, and morph helpers.

**Status:** Stable · **Package:** `@vmitsaras/a11y-dialog`

### [A11y Tour Guide](/a11y-ui-lab/plugins/a11y-tour-guide/)

Create optional product orientations with generated labelled dialogs, modal focus containment, direction-aware keyboard navigation, missing-target recovery, checklists, localization, public themes, and opt-in URL step synchronization.

**Status:** Stable · **Package:** `a11y-tour-guide`

### [A11y Context Breadcrumb](/a11y-ui-lab/plugins/a11y-context-breadcrumb/)

Generate a contextual breadcrumb from document headings while preserving semantic navigation, native anchor behavior, visible focus, active-section context, and complete teardown.

**Status:** Stable · **Package:** `a11y-context-breadcrumb`

## Content and feedback

### [A11y Scroll Cue](/a11y-ui-lab/plugins/a11y-scroll-cue/)

Make horizontal overflow visible with a text cue, an overflow-only keyboard tab stop, optional region naming and description, native scrolling, responsive state updates, and complete teardown.

**Status:** Stable · **Package:** `a11y-scroll-cue`

### [A11y Virtual List](/a11y-ui-lab/plugins/a11y-virtual-list/)

Render a bounded DOM window for genuinely large vertical datasets with fixed or estimated row sizing, range announcements, stable-key focus recovery, optional keyboard navigation, scroll persistence, empty-state recovery, and explicit cleanup.

**Status:** Stable · **Package:** `a11y-virtual-list`

## Forms

### [A11y Form Validator](/a11y-ui-lab/plugins/a11y-form-validator/)

Accessible, dependency-light progressive enhancement for semantic HTML forms. Includes inline errors, an optional focusable error summary, character counts, custom and async rules, server errors, localization, and cleanup.

**Status:** Stable · **Featured:** Yes · **Package:** `a11y-form-validator`

### [A11y Form Submission Recovery](/a11y-ui-lab/plugins/a11y-form-submission-recovery/)

Enhance a native form with preserved values, duplicate-attempt prevention, explicit retry, failure classification, connectivity recovery, and opt-in tab-scoped draft recovery.

**Status:** Stable · **Package:** `a11y-form-submission-recovery`

### [A11y Quiz Form](/a11y-ui-lab/plugins/a11y-quiz-form/)

Add practice, exam, or review behavior to native single- and multiple-answer quiz forms with configurable attempts, scoring, explanations, answer reveal, progress, localized feedback, lifecycle events, and reset.

**Status:** Stable · **Package:** `a11y-quiz-form`

### [A11y Conditional Fields](/a11y-ui-lab/plugins/a11y-conditional-fields/)

Progressively reveal relevant form sections while keeping hidden controls out of keyboard navigation, validation, and default submission. Supports checkbox, radio, select, and button triggers, polite announcements, and optional Escape-to-collapse behavior.

**Status:** Stable · **Package:** `a11y-conditional-fields`

### [A11y Form Draft Persistence](/a11y-ui-lab/plugins/a11y-form-draft-persistence/)

Save and recover eligible semantic-form values through configurable browser-storage adapters, with conflict-aware restoration, privacy-minded field exclusions, value-free lifecycle events, and optional status, restore-prompt, submission-recovery, and setup-inspection helpers.

**Status:** Stable · **Package:** `a11y-form-draft-persistence`

### [A11y Password Strength Meter](/a11y-ui-lab/plugins/a11y-password-strength-meter/)

Add local, explainable password-strength feedback to a semantic password field with visible text, native progress semantics, requirement status text, and restrained polite announcements.

**Status:** Stable · **Package:** `a11y-password-strength-meter`

### [A11y Result Count](/a11y-ui-lab/plugins/a11y-result-count/)

Keep visible result totals and transient live-region announcements synchronized with filtering, pagination, loading, empty, and error states without taking ownership of the host interface.

**Status:** Stable · **Package:** `a11y-result-count`

### [A11y Error Summary](/a11y-ui-lab/plugins/a11y-error-summary/)

Summarize native constraint-validation or application-provided form errors as persistent links that move focus to the affected controls, with optional field-detail and recovery-action helpers.

**Status:** Stable · **Package:** `a11y-error-summary`

### [A11y Async Button](/a11y-ui-lab/plugins/a11y-async-button/)

Manage loading, success, error, lock, announcement, and reset states on semantic buttons, with opt-in helpers for forms, retry flows, persistent status messages, presets, and development diagnostics.

**Status:** Stable · **Package:** `a11y-async-button`

### [A11y Load More](/a11y-ui-lab/plugins/a11y-load-more/)

Coordinate loading, retry, completion, count, and announcement states for a semantic load-more button while the host application retains ownership of fetching and rendering results.

**Status:** Stable · **Package:** `a11y-load-more`

### [A11y Character Count](/a11y-ui-lab/plugins/a11y-character-count/)

Enhance a native textarea with a persistent count, warning and limit states, configurable minimum-validation timing, and restrained transition announcements.

**Status:** Stable · **Package:** `a11y-character-count`

### [A11y Tag Input](/a11y-ui-lab/plugins/a11y-tag-input/)

Progressively enhance a labelled input or textarea into a tag editor with synchronized form values, typed validation and serialization hooks, keyboard removal, focus recovery, and polite status feedback.

**Status:** Stable · **Package:** `a11y-tag-input`

## Tables

### [A11y Sortable Table](/a11y-ui-lab/plugins/a11y-sortable-table/)

Add stable sorting, `aria-sort`, focus preservation, and polite announcements to semantic data tables, with optional helpers for URL state, filtering, summaries, reset, column visibility, and saved views.

**Status:** Stable · **Package:** `a11y-sortable-table`

### [A11y Data Grid](/a11y-ui-lab/plugins/a11y-data-grid/)

Turn an interactive native table into a composite grid with one Tab stop, cell-by-cell navigation, interaction mode, optional sorting and selection, plus opt-in filtering, recovery, explanation, export, pagination, and view-management addons.

**Status:** Stable · **Package:** `a11y-data-grid`

### [A11y Filter List](/a11y-ui-lab/plugins/a11y-filter-list/)

Add text search and pressed-state category filters to semantic lists and card grids, with visible result counts, empty-state recovery, and optional filter summaries, typo suggestions, and facet counts.

**Status:** Stable · **Package:** `a11y-filter-list`

### [A11y Filter Summary](/a11y-ui-lab/plugins/a11y-filter-summary/)

Show active filters as removable, keyboard-operable chips, with form-driven and manual state modes plus opt-in URL, range-group, and decorative-icon addons.

**Status:** Stable · **Package:** `a11y-filter-summary`
