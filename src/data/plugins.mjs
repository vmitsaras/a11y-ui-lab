import { docs as formValidatorDocs } from 'a11y-form-validator/docs';
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

export const pluginCategories = {
  form: 'Forms',
  table: 'Tables',
};

export const plugins = [
  {
    slug: 'a11y-form-validator',
    packageName: 'a11y-form-validator',
    category: 'form',
    status: 'stable',
    docsPath: 'plugins/a11y-form-validator',
    demo: '/plugins/a11y-form-validator/#live-example',
    featured: true,
    related: [],
    docs: formValidatorDocs,
  },
  {
    slug: 'a11y-conditional-fields',
    packageName: 'a11y-conditional-fields',
    category: 'form',
    status: 'stable',
    docsPath: 'plugins/a11y-conditional-fields',
    demo: '/plugins/a11y-conditional-fields/#live-example',
    related: ['a11y-form-validator'],
    docs: conditionalFieldsDocs,
  },
  {
    slug: 'a11y-password-strength-meter',
    packageName: 'a11y-password-strength-meter',
    category: 'form',
    status: 'stable',
    docsPath: 'plugins/a11y-password-strength-meter',
    demo: '/plugins/a11y-password-strength-meter/#live-example',
    related: ['a11y-form-validator', 'a11y-result-count'],
    docs: passwordStrengthMeterDocs,
  },
  {
    slug: 'a11y-result-count',
    packageName: 'a11y-result-count',
    category: 'form',
    status: 'stable',
    docsPath: 'plugins/a11y-result-count',
    demo: '/plugins/a11y-result-count/#live-example',
    related: ['a11y-conditional-fields', 'a11y-form-validator'],
    docs: resultCountDocs,
  },
  {
    slug: 'a11y-sortable-table',
    packageName: 'a11y-sortable-table',
    category: 'table',
    status: 'stable',
    docsPath: 'plugins/a11y-sortable-table',
    demo: '/plugins/a11y-sortable-table/#live-example',
    related: ['a11y-result-count', 'a11y-filter-list'],
    docs: sortableTableDocs,
  },
  {
    slug: 'a11y-filter-list',
    packageName: 'a11y-filter-list',
    category: 'table',
    status: 'stable',
    docsPath: 'plugins/a11y-filter-list',
    demo: '/plugins/a11y-filter-list/#live-example',
    related: ['a11y-result-count', 'a11y-sortable-table'],
    docs: filterListDocs,
  },
  {
    slug: 'a11y-filter-summary',
    packageName: 'a11y-filter-summary',
    category: 'table',
    status: 'stable',
    docsPath: 'plugins/a11y-filter-summary',
    demo: '/plugins/a11y-filter-summary/#live-example',
    related: ['a11y-result-count', 'a11y-sortable-table', 'a11y-filter-list'],
    docs: filterSummaryDocs,
  },
  {
    slug: 'a11y-error-summary',
    packageName: 'a11y-error-summary',
    category: 'form',
    status: 'stable',
    docsPath: 'plugins/a11y-error-summary',
    demo: '/plugins/a11y-error-summary/#live-example',
    related: ['a11y-form-validator'],
    docs: errorSummaryDocs,
  },
  {
    slug: 'a11y-async-button',
    packageName: 'a11y-async-button',
    category: 'form',
    status: 'stable',
    docsPath: 'plugins/a11y-async-button',
    demo: '/plugins/a11y-async-button/#live-example',
    related: ['a11y-form-validator', 'a11y-error-summary'],
    docs: asyncButtonDocs,
  },
  {
    slug: 'a11y-load-more',
    packageName: 'a11y-load-more',
    category: 'form',
    status: 'stable',
    docsPath: 'plugins/a11y-load-more',
    demo: '/plugins/a11y-load-more/#live-example',
    related: ['a11y-result-count', 'a11y-async-button'],
    docs: loadMoreDocs,
  },
  {
    slug: 'a11y-character-count',
    packageName: 'a11y-character-count',
    category: 'form',
    status: 'stable',
    docsPath: 'plugins/a11y-character-count',
    demo: '/plugins/a11y-character-count/#live-example',
    related: ['a11y-form-validator'],
    notes: 'The published docs metadata omits keyboard guidance; the page derives it from the public README and example.',
    docs: characterCountDocs,
  },
];
