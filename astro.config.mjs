// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://vmitsaras.github.io',
  base: '/a11y-ui-lab',
  integrations: [
    starlight({
      title: 'A11y UI',
      description: 'Documentation and live examples for independently maintained accessibility plugins.',
      sidebar: [
        { label: 'Introduction', slug: 'index' },
        {
          label: 'Getting started',
          items: [{ label: 'About the hub', slug: 'getting-started/about' }],
        },
        {
          label: 'Plugins',
          items: [{ autogenerate: { directory: 'plugins' } }],
        },
      ],
    }),
  ],
});
