import assert from 'node:assert/strict';
import test from 'node:test';
import * as runtime from 'a11y-form-validator';
import * as formSubmissionRecoveryRuntime from 'a11y-form-submission-recovery';
import * as quizFormRuntime from 'a11y-quiz-form';
import * as conditionalFieldsRuntime from 'a11y-conditional-fields';
import * as formDraftPersistenceRuntime from 'a11y-form-draft-persistence';
import * as passwordStrengthMeterRuntime from 'a11y-password-strength-meter';
import * as resultCountRuntime from 'a11y-result-count';
import * as sortableTableRuntime from 'a11y-sortable-table';
import * as dataGridRuntime from 'a11y-data-grid';
import * as filterListRuntime from 'a11y-filter-list';
import * as filterSummaryRuntime from 'a11y-filter-summary';
import * as errorSummaryRuntime from 'a11y-error-summary';
import * as asyncButtonRuntime from 'a11y-async-button';
import * as loadMoreRuntime from 'a11y-load-more';
import * as characterCountRuntime from 'a11y-character-count';
import * as tagInputRuntime from 'a11y-tag-input';
import * as menuButtonRuntime from 'a11y-menu-button';
import * as commandMenuButtonRuntime from 'a11y-command-menu-button';
import * as contextBreadcrumbRuntime from 'a11y-context-breadcrumb';
import * as tabsRuntime from 'a11y-tabs-widget';
import * as dialogRuntime from '@vmitsaras/a11y-dialog';
import * as tourGuideRuntime from 'a11y-tour-guide';
import * as scrollCueRuntime from 'a11y-scroll-cue';
import * as virtualListRuntime from 'a11y-virtual-list';
import * as transcriptRuntime from 'a11y-transcript';
import { docs } from 'a11y-form-validator/docs';
import { docs as formSubmissionRecoveryDocs } from 'a11y-form-submission-recovery/docs';
import { docs as quizFormDocs } from 'a11y-quiz-form/docs';
import { docs as conditionalFieldsDocs } from 'a11y-conditional-fields/docs';
import { docs as formDraftPersistenceDocs } from 'a11y-form-draft-persistence/docs';
import { docs as passwordStrengthMeterDocs } from 'a11y-password-strength-meter/docs';
import { docs as resultCountDocs } from 'a11y-result-count/docs';
import { docs as sortableTableDocs } from 'a11y-sortable-table/docs';
import { docs as dataGridDocs } from 'a11y-data-grid/docs';
import { docs as filterListDocs } from 'a11y-filter-list/docs';
import { docs as filterSummaryDocs } from 'a11y-filter-summary/docs';
import { docs as errorSummaryDocs } from 'a11y-error-summary/docs';
import { docs as asyncButtonDocs } from 'a11y-async-button/docs';
import { docs as loadMoreDocs } from 'a11y-load-more/docs';
import { docs as characterCountDocs } from 'a11y-character-count/docs';
import { docs as tagInputDocs } from 'a11y-tag-input/docs';
import { docs as menuButtonDocs } from 'a11y-menu-button/docs';
import { docs as commandMenuButtonDocs } from 'a11y-command-menu-button/docs';
import { docs as contextBreadcrumbDocs } from 'a11y-context-breadcrumb/docs';
import { docs as tabsDocs } from 'a11y-tabs-widget/docs';
import { docs as dialogDocs } from '@vmitsaras/a11y-dialog/docs';
import { docs as tourGuideDocs } from 'a11y-tour-guide/docs';
import { docs as scrollCueDocs } from 'a11y-scroll-cue/docs';
import { docs as virtualListDocs } from 'a11y-virtual-list/docs';
import { docs as transcriptDocs } from 'a11y-transcript/docs';
import { createA11yDialogOutcome } from '@vmitsaras/a11y-dialog/outcome';
import { createA11yDialogAsyncAction } from '@vmitsaras/a11y-dialog/async-action';
import { inspectA11yDialogs } from '@vmitsaras/a11y-dialog/diagnostics';
import { createA11yDialogMorph } from '@vmitsaras/a11y-dialog/morph';
import { createUrlStepSync } from 'a11y-tour-guide/url-sync';
import { inspectTagInputs } from 'a11y-tag-input/dev';
import { createCheckableCommandAdapter } from 'a11y-command-menu-button/checkable';
import { A11yTabsAccordion } from 'a11y-tabs-widget/addons/a11y-tabs-accordion';
import { A11yTabsAnalytics } from 'a11y-tabs-widget/addons/a11y-tabs-analytics';
import { installTabsAutoInit } from 'a11y-tabs-widget/addons/a11y-tabs-autoinit';
import { A11yTabsBadges } from 'a11y-tabs-widget/addons/a11y-tabs-badges';
import { A11yTabsHistory } from 'a11y-tabs-widget/addons/a11y-tabs-history';
import { A11yTabsLoader } from 'a11y-tabs-widget/addons/a11y-tabs-loader';
import { A11yTabsOverflowMenu } from 'a11y-tabs-widget/addons/a11y-tabs-overflow-menu';
import { A11yTabsShortcuts } from 'a11y-tabs-widget/addons/a11y-tabs-shortcuts';
import { A11yTabsStepper } from 'a11y-tabs-widget/addons/a11y-tabs-stepper';
import { A11yTabsTour } from 'a11y-tabs-widget/addons/a11y-tabs-tour';
import { A11yTabsUnsavedGuard } from 'a11y-tabs-widget/addons/a11y-tabs-unsaved-guard';
import { A11yTabsValidation } from 'a11y-tabs-widget/addons/a11y-tabs-validation';
import { enhanceAsyncMenuState } from 'a11y-menu-button/addons/async-menu-state';
import { enhanceCommandMenu } from 'a11y-menu-button/addons/command-menu';
import { enhanceFilterableMenu } from 'a11y-menu-button/addons/filterable-menu';
import { attachMenuFeedback } from 'a11y-menu-button/addons/menu-feedback';
import { attachMenuHints } from 'a11y-menu-button/addons/menu-hints';
import { enhanceRecentActions } from 'a11y-menu-button/addons/recent-actions';
import { enhanceRichMenuItems } from 'a11y-menu-button/addons/rich-menu-items';
import { createBusyRegionAddon } from 'a11y-load-more/addons/busy-region';
import { createFocusContinuityAddon } from 'a11y-load-more/addons/focus-continuity';
import { createResultCountAddon } from 'a11y-load-more/addons/result-count';
import { createUrlSyncAddon } from 'a11y-load-more/addons/url-sync';
import { createAsyncButtonDebugReport } from 'a11y-async-button/addons/debug';
import { createAsyncButtonForm } from 'a11y-async-button/addons/form';
import { createAsyncButtonPreset } from 'a11y-async-button/addons/presets';
import { createAsyncButtonRetry } from 'a11y-async-button/addons/retry';
import { createAsyncButtonStatus } from 'a11y-async-button/addons/status';
import { createFieldErrorDetails } from 'a11y-error-summary/addons/field-details';
import { createErrorRecoveryActions } from 'a11y-error-summary/addons/recovery-actions';
import { createIconTextAddon } from 'a11y-filter-summary/addons/icon-text';
import { createRangeGroupsAddon } from 'a11y-filter-summary/addons/range-groups';
import { createUrlStateAddon } from 'a11y-filter-summary/addons/url-state';
import { createActiveFilterSummary } from 'a11y-filter-list/addons/active-filter-summary';
import { createDidYouMean } from 'a11y-filter-list/addons/did-you-mean';
import { createEmptyStateActions } from 'a11y-filter-list/addons/empty-state-actions';
import { createFacetCounts } from 'a11y-filter-list/addons/facet-counts';
import { createSortableTableColumnVisibility } from 'a11y-sortable-table/column-visibility';
import { createSortableTableReset } from 'a11y-sortable-table/reset-state';
import { initA11yDataGridFilter } from 'a11y-data-grid/addons/filter';
import { initA11yDataGridKeyboardHelp } from 'a11y-data-grid/addons/keyboard-help';
import { initA11yDataGridViewSummary } from 'a11y-data-grid/addons/view-summary';
import { createCharacterCountAddon } from 'a11y-form-validator/addons/character-count';
import { createErrorSummaryAddon } from 'a11y-form-validator/addons/error-summary';
import { createSessionRecoveryAddon } from 'a11y-form-submission-recovery/addons/session-recovery';
import { createSubmissionReferenceAddon } from 'a11y-form-submission-recovery/addons/submission-reference';
import { createServerErrorMapperAddon } from 'a11y-form-submission-recovery/addons/server-error-mapper';
import { createFailureSupportSummaryAddon } from 'a11y-form-submission-recovery/addons/failure-support-summary';
import { createLocalStorageAdapter } from 'a11y-form-draft-persistence/adapters/local-storage';
import { createSessionStorageAdapter } from 'a11y-form-draft-persistence/adapters/session-storage';
import { createMemoryStorageAdapter } from 'a11y-form-draft-persistence/adapters/memory';
import { createDraftStatus } from 'a11y-form-draft-persistence/addons/status';
import { createDraftRestorePrompt } from 'a11y-form-draft-persistence/addons/restore-prompt';
import {
  createDraftSubmissionRecovery,
  DRAFT_SUBMISSION_RECOVERY_EVENTS,
} from 'a11y-form-draft-persistence/addons/submission-recovery';
import { inspectDraftSetup } from 'a11y-form-draft-persistence/addons/setup-inspector';
import { createA11yTranscriptProgress } from 'a11y-transcript/addons/progress';
import { createA11yTranscriptJumpToActive } from 'a11y-transcript/addons/jump-to-active';
import { createA11yTranscriptPreferencesToolbar } from 'a11y-transcript/addons/preferences-toolbar';
import { createA11yTranscriptChapterNav } from 'a11y-transcript/addons/chapter-nav';
import { createA11yTranscriptSearch } from 'a11y-transcript/addons/search';
import { plugins } from '../src/data/plugins.mjs';
import { validatePlugins } from '../scripts/validate-plugins.mjs';

test('the plugin registry is valid', () => {
  assert.deepEqual(validatePlugins(), []);
});

test('a11y-form-validator exposes the documented public contract', () => {
  assert.ok(Object.keys(runtime).length > 0);
  assert.equal(typeof runtime.createFormValidator, 'function');
  assert.equal(typeof runtime.createDefaultPreset, 'function');
  assert.equal(typeof createErrorSummaryAddon, 'function');
  assert.equal(typeof createCharacterCountAddon, 'function');
  assert.equal(docs.packageName, 'a11y-form-validator');
  assert.equal(plugins[0].docs, docs);
});

test('the exported stylesheet resolves through the package export map', async () => {
  const cssUrl = import.meta.resolve('a11y-form-validator/styles.css');
  assert.match(cssUrl, /a11y-form-validator\/dist\/styles\.css$/);
});

test('a11y-form-submission-recovery exposes the documented public contract', () => {
  assert.ok(Object.keys(formSubmissionRecoveryRuntime).length > 0);
  assert.equal(typeof formSubmissionRecoveryRuntime.createFormSubmissionRecovery, 'function');
  assert.equal(typeof formSubmissionRecoveryRuntime.createFetchSubmissionTransport, 'function');
  assert.equal(typeof formSubmissionRecoveryRuntime.initFormSubmissionRecoveryAll, 'function');
  assert.equal(typeof formSubmissionRecoveryRuntime.onFormSubmissionRecoveryEvent, 'function');
  assert.equal(typeof createSessionRecoveryAddon, 'function');
  assert.equal(typeof createSubmissionReferenceAddon, 'function');
  assert.equal(typeof createServerErrorMapperAddon, 'function');
  assert.equal(typeof createFailureSupportSummaryAddon, 'function');
  assert.equal(formSubmissionRecoveryDocs.packageName, 'a11y-form-submission-recovery');
  assert.equal(
    plugins.find(({ packageName }) => packageName === 'a11y-form-submission-recovery')?.docs,
    formSubmissionRecoveryDocs,
  );
  assert.match(
    import.meta.resolve('a11y-form-submission-recovery/styles.css'),
    /a11y-form-submission-recovery\/dist\/styles\.css$/,
  );
});

test('a11y-quiz-form exposes the documented public contract', () => {
  assert.ok(Object.keys(quizFormRuntime).length > 0);
  assert.equal(typeof quizFormRuntime.createQuizForm, 'function');
  assert.equal(typeof quizFormRuntime.initQuizForms, 'function');
  assert.equal(typeof quizFormRuntime.A11yQuizForm, 'function');
  assert.equal(typeof quizFormRuntime.defaultQuizFormMessages, 'object');
  assert.equal(typeof quizFormRuntime.quizFormEvents, 'object');
  assert.equal(typeof quizFormRuntime.onQuizFormEvent, 'function');
  assert.equal(quizFormDocs.packageName, 'a11y-quiz-form');
  assert.equal(plugins.find(({ packageName }) => packageName === 'a11y-quiz-form')?.docs, quizFormDocs);
  assert.match(import.meta.resolve('a11y-quiz-form/styles.css'), /a11y-quiz-form\/dist\/styles\.css$/);
});

test('a11y-conditional-fields exposes the documented public contract', () => {
  assert.ok(Object.keys(conditionalFieldsRuntime).length > 0);
  assert.equal(typeof conditionalFieldsRuntime.createConditionalFields, 'function');
  assert.equal(typeof conditionalFieldsRuntime.initConditionalFieldsAll, 'function');
  assert.equal(typeof conditionalFieldsRuntime.A11yConditionalFields, 'function');
  assert.equal(conditionalFieldsDocs.packageName, 'a11y-conditional-fields');
  assert.equal(plugins.find(({ packageName }) => packageName === 'a11y-conditional-fields')?.docs, conditionalFieldsDocs);
  assert.match(import.meta.resolve('a11y-conditional-fields/min'), /a11y-conditional-fields\/dist\/index\.min\.js$/);
});

test('a11y-form-draft-persistence exposes the documented public contract', () => {
  assert.ok(Object.keys(formDraftPersistenceRuntime).length > 0);
  assert.equal(typeof formDraftPersistenceRuntime.createDraftPersistence, 'function');
  assert.equal(typeof formDraftPersistenceRuntime.initDraftPersistenceAll, 'function');
  assert.equal(typeof formDraftPersistenceRuntime.A11yFormDraftPersistence, 'function');
  assert.equal(typeof formDraftPersistenceRuntime.DRAFT_PERSISTENCE_EVENTS, 'object');
  assert.equal(typeof createLocalStorageAdapter, 'function');
  assert.equal(typeof createSessionStorageAdapter, 'function');
  assert.equal(typeof createMemoryStorageAdapter, 'function');
  assert.equal(typeof createDraftStatus, 'function');
  assert.equal(typeof createDraftRestorePrompt, 'function');
  assert.equal(typeof createDraftSubmissionRecovery, 'function');
  assert.equal(typeof DRAFT_SUBMISSION_RECOVERY_EVENTS, 'object');
  assert.equal(typeof inspectDraftSetup, 'function');
  assert.equal(formDraftPersistenceDocs.packageName, 'a11y-form-draft-persistence');
  assert.equal(
    plugins.find(({ packageName }) => packageName === 'a11y-form-draft-persistence')?.docs,
    formDraftPersistenceDocs,
  );
  assert.match(
    import.meta.resolve('a11y-form-draft-persistence/min'),
    /a11y-form-draft-persistence\/dist\/index\.min\.js$/,
  );
  assert.throws(
    () => import.meta.resolve('a11y-form-draft-persistence/styles.css'),
    { code: 'ERR_PACKAGE_PATH_NOT_EXPORTED' },
  );
});

test('a11y-password-strength-meter exposes the documented public contract', () => {
  assert.ok(Object.keys(passwordStrengthMeterRuntime).length > 0);
  assert.equal(typeof passwordStrengthMeterRuntime.createPasswordStrengthMeter, 'function');
  assert.equal(typeof passwordStrengthMeterRuntime.initPasswordStrengthMeters, 'function');
  assert.equal(typeof passwordStrengthMeterRuntime.getPasswordStrength, 'function');
  assert.equal(passwordStrengthMeterDocs.packageName, 'a11y-password-strength-meter');
  assert.equal(
    plugins.find(({ packageName }) => packageName === 'a11y-password-strength-meter')?.docs,
    passwordStrengthMeterDocs,
  );
  assert.match(
    import.meta.resolve('a11y-password-strength-meter/styles.css'),
    /a11y-password-strength-meter\/dist\/styles\.css$/,
  );
});

test('a11y-result-count exposes the documented public contract', () => {
  assert.ok(Object.keys(resultCountRuntime).length > 0);
  assert.equal(typeof resultCountRuntime.createResultCount, 'function');
  assert.equal(typeof resultCountRuntime.initResultCountAll, 'function');
  assert.equal(typeof resultCountRuntime.A11yResultCount, 'function');
  assert.equal(resultCountDocs.packageName, 'a11y-result-count');
  assert.equal(plugins.find(({ packageName }) => packageName === 'a11y-result-count')?.docs, resultCountDocs);
  assert.match(import.meta.resolve('a11y-result-count/styles.css'), /a11y-result-count\/dist\/styles\.css$/);
});

test('a11y-filter-summary exposes the documented public contract', () => {
  assert.ok(Object.keys(filterSummaryRuntime).length > 0);
  assert.equal(typeof filterSummaryRuntime.createFilterSummary, 'function');
  assert.equal(typeof filterSummaryRuntime.createFormFilterSummary, 'function');
  assert.equal(typeof filterSummaryRuntime.A11yFilterSummary, 'function');
  assert.equal(typeof createIconTextAddon, 'function');
  assert.equal(typeof createRangeGroupsAddon, 'function');
  assert.equal(typeof createUrlStateAddon, 'function');
  assert.equal(filterSummaryDocs.packageName, 'a11y-filter-summary');
  assert.equal(plugins.find(({ packageName }) => packageName === 'a11y-filter-summary')?.docs, filterSummaryDocs);
  assert.match(import.meta.resolve('a11y-filter-summary/styles.css'), /a11y-filter-summary\/dist\/styles\.css$/);
});

test('a11y-sortable-table exposes the documented public contract', () => {
  assert.ok(Object.keys(sortableTableRuntime).length > 0);
  assert.equal(typeof sortableTableRuntime.createSortableTable, 'function');
  assert.equal(typeof sortableTableRuntime.initSortableTables, 'function');
  assert.equal(typeof sortableTableRuntime.enhanceScrollableTableWrapper, 'function');
  assert.equal(typeof createSortableTableColumnVisibility, 'function');
  assert.equal(typeof createSortableTableReset, 'function');
  assert.equal(sortableTableDocs.packageName, 'a11y-sortable-table');
  assert.equal(plugins.find(({ packageName }) => packageName === 'a11y-sortable-table')?.docs, sortableTableDocs);
  assert.match(import.meta.resolve('a11y-sortable-table/styles.css'), /a11y-sortable-table\/dist\/styles\.css$/);
});

test('a11y-data-grid exposes the documented public contract', () => {
  assert.ok(Object.keys(dataGridRuntime).length > 0);
  assert.equal(typeof dataGridRuntime.createA11yDataGrid, 'function');
  assert.equal(typeof dataGridRuntime.initA11yDataGridAll, 'function');
  assert.equal(typeof dataGridRuntime.A11yDataGrid, 'function');
  assert.equal(typeof dataGridRuntime.A11Y_DATA_GRID_EVENTS, 'object');
  assert.equal(typeof initA11yDataGridFilter, 'function');
  assert.equal(typeof initA11yDataGridKeyboardHelp, 'function');
  assert.equal(typeof initA11yDataGridViewSummary, 'function');
  assert.equal(dataGridDocs.packageName, 'a11y-data-grid');
  assert.equal(plugins.find(({ packageName }) => packageName === 'a11y-data-grid')?.docs, dataGridDocs);
  assert.match(import.meta.resolve('a11y-data-grid/styles.css'), /a11y-data-grid\/dist\/styles\.css$/);
});

test('a11y-filter-list exposes the documented public contract', () => {
  assert.ok(Object.keys(filterListRuntime).length > 0);
  assert.equal(typeof filterListRuntime.createFilterList, 'function');
  assert.equal(typeof filterListRuntime.initFilterListsAll, 'function');
  assert.equal(typeof filterListRuntime.A11yFilterList, 'function');
  assert.equal(typeof createActiveFilterSummary, 'function');
  assert.equal(typeof createDidYouMean, 'function');
  assert.equal(typeof createEmptyStateActions, 'function');
  assert.equal(typeof createFacetCounts, 'function');
  assert.equal(filterListDocs.packageName, 'a11y-filter-list');
  assert.equal(plugins.find(({ packageName }) => packageName === 'a11y-filter-list')?.docs, filterListDocs);
  assert.match(import.meta.resolve('a11y-filter-list/styles.css'), /a11y-filter-list\/dist\/styles\.css$/);
});

test('a11y-error-summary exposes the documented public contract', () => {
  assert.ok(Object.keys(errorSummaryRuntime).length > 0);
  assert.equal(typeof errorSummaryRuntime.createErrorSummary, 'function');
  assert.equal(typeof errorSummaryRuntime.initErrorSummaries, 'function');
  assert.equal(typeof errorSummaryRuntime.A11yErrorSummary, 'function');
  assert.equal(typeof createFieldErrorDetails, 'function');
  assert.equal(typeof createErrorRecoveryActions, 'function');
  assert.equal(errorSummaryDocs.packageName, 'a11y-error-summary');
  assert.equal(plugins.find(({ packageName }) => packageName === 'a11y-error-summary')?.docs, errorSummaryDocs);
  assert.match(import.meta.resolve('a11y-error-summary/styles.css'), /a11y-error-summary\/dist\/styles\.css$/);
});

test('a11y-async-button exposes the documented public contract', () => {
  assert.ok(Object.keys(asyncButtonRuntime).length > 0);
  assert.equal(typeof asyncButtonRuntime.createAsyncButton, 'function');
  assert.equal(typeof asyncButtonRuntime.initAsyncButtons, 'function');
  assert.equal(typeof asyncButtonRuntime.A11yAsyncButton, 'function');
  assert.equal(typeof createAsyncButtonForm, 'function');
  assert.equal(typeof createAsyncButtonRetry, 'function');
  assert.equal(typeof createAsyncButtonStatus, 'function');
  assert.equal(typeof createAsyncButtonPreset, 'function');
  assert.equal(typeof createAsyncButtonDebugReport, 'function');
  assert.equal(asyncButtonDocs.packageName, 'a11y-async-button');
  assert.equal(plugins.find(({ packageName }) => packageName === 'a11y-async-button')?.docs, asyncButtonDocs);
  assert.match(import.meta.resolve('a11y-async-button/styles.css'), /a11y-async-button\/dist\/styles\.css$/);
});

test('a11y-load-more exposes the documented public contract', () => {
  assert.ok(Object.keys(loadMoreRuntime).length > 0);
  assert.equal(typeof loadMoreRuntime.createLoadMore, 'function');
  assert.equal(typeof loadMoreRuntime.initLoadMoreAll, 'function');
  assert.equal(typeof loadMoreRuntime.A11yLoadMore, 'function');
  assert.equal(typeof createBusyRegionAddon, 'function');
  assert.equal(typeof createFocusContinuityAddon, 'function');
  assert.equal(typeof createResultCountAddon, 'function');
  assert.equal(typeof createUrlSyncAddon, 'function');
  assert.equal(loadMoreDocs.packageName, 'a11y-load-more');
  assert.equal(plugins.find(({ packageName }) => packageName === 'a11y-load-more')?.docs, loadMoreDocs);
  assert.match(import.meta.resolve('a11y-load-more/styles.css'), /a11y-load-more\/dist\/styles\.css$/);
});

test('a11y-character-count exposes the documented public contract', () => {
  assert.ok(Object.keys(characterCountRuntime).length > 0);
  assert.equal(typeof characterCountRuntime.createCharacterCount, 'function');
  assert.equal(typeof characterCountRuntime.initCharacterCounts, 'function');
  assert.equal(typeof characterCountRuntime.A11yCharacterCount, 'function');
  assert.equal(characterCountDocs.packageName, 'a11y-character-count');
  assert.equal(
    plugins.find(({ packageName }) => packageName === 'a11y-character-count')?.docs,
    characterCountDocs,
  );
});

test('a11y-tag-input exposes the documented public contract', () => {
  assert.ok(Object.keys(tagInputRuntime).length > 0);
  assert.equal(typeof tagInputRuntime.createTagInput, 'function');
  assert.equal(typeof tagInputRuntime.initTagInputs, 'function');
  assert.equal(typeof tagInputRuntime.A11yTagInput, 'function');
  assert.equal(typeof inspectTagInputs, 'function');
  assert.equal(tagInputDocs.packageName, 'a11y-tag-input');
  assert.equal(
    plugins.find(({ packageName }) => packageName === 'a11y-tag-input')?.docs,
    tagInputDocs,
  );
  assert.match(import.meta.resolve('a11y-tag-input/styles.css'), /a11y-tag-input\/dist\/styles\.css$/);
});

test('a11y-menu-button exposes the documented public contract', () => {
  assert.ok(Object.keys(menuButtonRuntime).length > 0);
  assert.equal(typeof menuButtonRuntime.createMenuButton, 'function');
  assert.equal(typeof menuButtonRuntime.initMenuButtons, 'function');
  assert.equal(typeof menuButtonRuntime.A11yMenuButton, 'function');
  assert.equal(typeof menuButtonRuntime.addMenuButtonEventListener, 'function');
  assert.equal(typeof enhanceAsyncMenuState, 'function');
  assert.equal(typeof enhanceCommandMenu, 'function');
  assert.equal(typeof enhanceFilterableMenu, 'function');
  assert.equal(typeof attachMenuFeedback, 'function');
  assert.equal(typeof attachMenuHints, 'function');
  assert.equal(typeof enhanceRecentActions, 'function');
  assert.equal(typeof enhanceRichMenuItems, 'function');
  assert.equal(menuButtonDocs.packageName, 'a11y-menu-button');
  assert.equal(
    plugins.find(({ packageName }) => packageName === 'a11y-menu-button')?.docs,
    menuButtonDocs,
  );
  assert.match(import.meta.resolve('a11y-menu-button/styles.css'), /a11y-menu-button\/dist\/styles\.css$/);
  assert.match(
    import.meta.resolve('a11y-menu-button/styles/addons/command-menu.css'),
    /a11y-menu-button\/dist\/styles\/addons\/command-menu\.css$/,
  );
  assert.match(
    import.meta.resolve('a11y-menu-button/styles/themes/a11y-menu-button-elevated.css'),
    /a11y-menu-button\/dist\/styles\/themes\/a11y-menu-button-elevated\.css$/,
  );
});

test('a11y-command-menu-button exposes the documented public contract', () => {
  assert.ok(Object.keys(commandMenuButtonRuntime).length > 0);
  assert.equal(typeof commandMenuButtonRuntime.createCommandMenuButton, 'function');
  assert.equal(typeof commandMenuButtonRuntime.initCommandMenuButtons, 'function');
  assert.equal(typeof commandMenuButtonRuntime.A11yCommandMenuButton, 'function');
  assert.equal(typeof commandMenuButtonRuntime.COMMAND_MENU_BUTTON_EVENTS, 'object');
  assert.equal(typeof createCheckableCommandAdapter, 'function');
  assert.equal(commandMenuButtonDocs.packageName, 'a11y-command-menu-button');
  assert.equal(
    plugins.find(({ packageName }) => packageName === 'a11y-command-menu-button')?.docs,
    commandMenuButtonDocs,
  );
  assert.match(
    import.meta.resolve('a11y-command-menu-button/styles.css'),
    /a11y-command-menu-button\/dist\/styles\.css$/,
  );
  assert.match(
    import.meta.resolve('a11y-command-menu-button/checkable'),
    /a11y-command-menu-button\/dist\/checkable\.js$/,
  );
});

test('a11y-context-breadcrumb exposes the documented public contract', () => {
  assert.ok(Object.keys(contextBreadcrumbRuntime).length > 0);
  assert.equal(typeof contextBreadcrumbRuntime.createA11yContextBreadcrumb, 'function');
  assert.equal(typeof contextBreadcrumbRuntime.initA11yContextBreadcrumbAll, 'function');
  assert.equal(typeof contextBreadcrumbRuntime.A11yContextBreadcrumb, 'function');
  assert.equal(typeof contextBreadcrumbRuntime.A11yContextBreadcrumbDefaults, 'object');
  assert.equal(typeof contextBreadcrumbRuntime.A11yContextBreadcrumbEvents, 'object');
  assert.equal(contextBreadcrumbDocs.packageName, 'a11y-context-breadcrumb');
  assert.equal(
    plugins.find(({ packageName }) => packageName === 'a11y-context-breadcrumb')?.docs,
    contextBreadcrumbDocs,
  );
  assert.match(
    import.meta.resolve('a11y-context-breadcrumb/styles.css'),
    /a11y-context-breadcrumb\/dist\/styles\.css$/,
  );
  assert.throws(
    () => import.meta.resolve('a11y-context-breadcrumb/addons/example'),
    { code: 'ERR_PACKAGE_PATH_NOT_EXPORTED' },
  );
});

test('a11y-tabs-widget exposes the documented public contract', () => {
  assert.ok(Object.keys(tabsRuntime).length > 0);
  assert.equal(typeof tabsRuntime.createTabs, 'function');
  assert.equal(typeof tabsRuntime.initTabsAll, 'function');
  assert.equal(typeof tabsRuntime.A11yTabs, 'function');
  assert.equal(typeof A11yTabsAccordion, 'function');
  assert.equal(typeof A11yTabsAnalytics, 'function');
  assert.equal(typeof installTabsAutoInit, 'function');
  assert.equal(typeof A11yTabsBadges, 'function');
  assert.equal(typeof A11yTabsHistory, 'function');
  assert.equal(typeof A11yTabsLoader, 'function');
  assert.equal(typeof A11yTabsOverflowMenu, 'function');
  assert.equal(typeof A11yTabsShortcuts, 'function');
  assert.equal(typeof A11yTabsStepper, 'function');
  assert.equal(typeof A11yTabsTour, 'function');
  assert.equal(typeof A11yTabsUnsavedGuard, 'function');
  assert.equal(typeof A11yTabsValidation, 'function');
  assert.equal(tabsDocs.packageName, 'a11y-tabs-widget');
  assert.equal(plugins.find(({ packageName }) => packageName === 'a11y-tabs-widget')?.docs, tabsDocs);
  assert.match(import.meta.resolve('a11y-tabs-widget/styles.css'), /a11y-tabs-widget\/dist\/styles\.css$/);
});

test('@vmitsaras/a11y-dialog exposes the documented public contract', () => {
  assert.ok(Object.keys(dialogRuntime).length > 0);
  assert.equal(typeof dialogRuntime.createA11yDialog, 'function');
  assert.equal(typeof dialogRuntime.initA11yDialogs, 'function');
  assert.equal(typeof dialogRuntime.A11yDialog, 'function');
  assert.equal(typeof createA11yDialogOutcome, 'function');
  assert.equal(typeof createA11yDialogAsyncAction, 'function');
  assert.equal(typeof inspectA11yDialogs, 'function');
  assert.equal(typeof createA11yDialogMorph, 'function');
  assert.equal(dialogDocs.packageName, '@vmitsaras/a11y-dialog');
  assert.equal(
    plugins.find(({ packageName }) => packageName === '@vmitsaras/a11y-dialog')?.docs,
    dialogDocs,
  );
  assert.match(
    import.meta.resolve('@vmitsaras/a11y-dialog/styles.css'),
    /@vmitsaras\/a11y-dialog\/dist\/styles\.css$/,
  );
  assert.match(
    import.meta.resolve('@vmitsaras/a11y-dialog/morph.css'),
    /@vmitsaras\/a11y-dialog\/dist\/morph\.css$/,
  );
});

test('a11y-tour-guide exposes the documented public contract', () => {
  assert.ok(Object.keys(tourGuideRuntime).length > 0);
  assert.equal(typeof tourGuideRuntime.createTour, 'function');
  assert.equal(typeof tourGuideRuntime.A11yTourGuide, 'function');
  assert.equal(typeof tourGuideRuntime.TOUR_EVENTS, 'object');
  assert.equal(typeof tourGuideRuntime.validateSteps, 'function');
  assert.equal(typeof createUrlStepSync, 'function');
  assert.equal(tourGuideDocs.packageName, 'a11y-tour-guide');
  const tourGuidePlugin = plugins.find(({ packageName }) => packageName === 'a11y-tour-guide');
  assert.equal(tourGuidePlugin?.docs, tourGuideDocs);
  assert.deepEqual(validatePlugins(tourGuidePlugin ? [tourGuidePlugin] : []), []);
  assert.match(
    import.meta.resolve('a11y-tour-guide/styles.css'),
    /a11y-tour-guide\/dist\/styles\.css$/,
  );
  assert.match(
    import.meta.resolve('a11y-tour-guide/base.css'),
    /a11y-tour-guide\/dist\/base\.css$/,
  );
  assert.match(
    import.meta.resolve('a11y-tour-guide/themes/high-contrast.css'),
    /a11y-tour-guide\/dist\/themes\/high-contrast\.css$/,
  );
});

test('a11y-scroll-cue exposes the documented public contract', () => {
  assert.ok(Object.keys(scrollCueRuntime).length > 0);
  assert.equal(typeof scrollCueRuntime.createA11yScrollCue, 'function');
  assert.equal(typeof scrollCueRuntime.initA11yScrollCueAll, 'function');
  assert.equal(typeof scrollCueRuntime.A11yScrollCue, 'function');
  assert.equal(typeof scrollCueRuntime.EVENTS, 'object');
  assert.equal(scrollCueDocs.packageName, 'a11y-scroll-cue');
  assert.equal(
    plugins.find(({ packageName }) => packageName === 'a11y-scroll-cue')?.docs,
    scrollCueDocs,
  );
  assert.match(
    import.meta.resolve('a11y-scroll-cue/styles.css'),
    /a11y-scroll-cue\/dist\/styles\.css$/,
  );
});

test('a11y-virtual-list exposes the documented public contract', () => {
  assert.ok(Object.keys(virtualListRuntime).length > 0);
  assert.equal(typeof virtualListRuntime.createVirtualList, 'function');
  assert.equal(typeof virtualListRuntime.initVirtualListAll, 'function');
  assert.equal(typeof virtualListRuntime.A11yVirtualList, 'function');
  assert.equal(virtualListDocs.packageName, 'a11y-virtual-list');
  assert.equal(
    plugins.find(({ packageName }) => packageName === 'a11y-virtual-list')?.docs,
    virtualListDocs,
  );
  assert.match(
    import.meta.resolve('a11y-virtual-list/styles.css'),
    /a11y-virtual-list\/dist\/styles\.css$/,
  );
});

test('a11y-transcript exposes the documented public contract', () => {
  assert.ok(Object.keys(transcriptRuntime).length > 0);
  assert.equal(typeof transcriptRuntime.createA11yTranscript, 'function');
  assert.equal(typeof transcriptRuntime.initA11yTranscriptsAll, 'function');
  assert.equal(typeof transcriptRuntime.A11yTranscript, 'function');
  assert.equal(typeof transcriptRuntime.A11Y_TRANSCRIPT_EVENTS, 'object');
  assert.equal(typeof createA11yTranscriptProgress, 'function');
  assert.equal(typeof createA11yTranscriptJumpToActive, 'function');
  assert.equal(typeof createA11yTranscriptPreferencesToolbar, 'function');
  assert.equal(typeof createA11yTranscriptChapterNav, 'function');
  assert.equal(typeof createA11yTranscriptSearch, 'function');
  assert.equal(transcriptDocs.packageName, 'a11y-transcript');
  assert.equal(
    plugins.find(({ packageName }) => packageName === 'a11y-transcript')?.docs,
    transcriptDocs,
  );
  assert.match(
    import.meta.resolve('a11y-transcript/styles.css'),
    /a11y-transcript\/dist\/styles\.css$/,
  );
  assert.match(
    import.meta.resolve('a11y-transcript/addons/preferences-toolbar.css'),
    /a11y-transcript\/dist\/addons\/preferences-toolbar\.css$/,
  );
  assert.match(
    import.meta.resolve('a11y-transcript/addons/search.css'),
    /a11y-transcript\/dist\/addons\/search\.css$/,
  );
});
