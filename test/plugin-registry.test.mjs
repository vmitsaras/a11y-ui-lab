import assert from 'node:assert/strict';
import test from 'node:test';
import * as runtime from 'a11y-form-validator';
import * as conditionalFieldsRuntime from 'a11y-conditional-fields';
import * as passwordStrengthMeterRuntime from 'a11y-password-strength-meter';
import * as resultCountRuntime from 'a11y-result-count';
import * as sortableTableRuntime from 'a11y-sortable-table';
import * as filterListRuntime from 'a11y-filter-list';
import * as filterSummaryRuntime from 'a11y-filter-summary';
import * as errorSummaryRuntime from 'a11y-error-summary';
import * as asyncButtonRuntime from 'a11y-async-button';
import * as loadMoreRuntime from 'a11y-load-more';
import * as characterCountRuntime from 'a11y-character-count';
import * as tagInputRuntime from 'a11y-tag-input';
import * as menuButtonRuntime from 'a11y-menu-button';
import * as commandMenuButtonRuntime from 'a11y-command-menu-button';
import { docs } from 'a11y-form-validator/docs';
import { docs as conditionalFieldsDocs } from 'a11y-conditional-fields/docs';
import { docs as passwordStrengthMeterDocs } from 'a11y-password-strength-meter/docs';
import { docs as resultCountDocs } from 'a11y-result-count/docs';
import { docs as sortableTableDocs } from 'a11y-sortable-table/docs';
import { docs as filterListDocs } from 'a11y-filter-list/docs';
import { docs as filterSummaryDocs } from 'a11y-filter-summary/docs';
import { docs as errorSummaryDocs } from 'a11y-error-summary/docs';
import { docs as asyncButtonDocs } from 'a11y-async-button/docs';
import { docs as loadMoreDocs } from 'a11y-load-more/docs';
import { docs as characterCountDocs } from 'a11y-character-count/docs';
import { docs as tagInputDocs } from 'a11y-tag-input/docs';
import { docs as menuButtonDocs } from 'a11y-menu-button/docs';
import { docs as commandMenuButtonDocs } from 'a11y-command-menu-button/docs';
import { inspectTagInputs } from 'a11y-tag-input/dev';
import { createCheckableCommandAdapter } from 'a11y-command-menu-button/checkable';
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
import { createCharacterCountAddon } from 'a11y-form-validator/addons/character-count';
import { createErrorSummaryAddon } from 'a11y-form-validator/addons/error-summary';
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

test('a11y-conditional-fields exposes the documented public contract', () => {
  assert.ok(Object.keys(conditionalFieldsRuntime).length > 0);
  assert.equal(typeof conditionalFieldsRuntime.createConditionalFields, 'function');
  assert.equal(typeof conditionalFieldsRuntime.initConditionalFieldsAll, 'function');
  assert.equal(typeof conditionalFieldsRuntime.A11yConditionalFields, 'function');
  assert.equal(conditionalFieldsDocs.packageName, 'a11y-conditional-fields');
  assert.equal(plugins.find(({ packageName }) => packageName === 'a11y-conditional-fields')?.docs, conditionalFieldsDocs);
  assert.match(import.meta.resolve('a11y-conditional-fields/min'), /a11y-conditional-fields\/dist\/index\.min\.js$/);
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
