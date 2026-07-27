# A11y UI Lab

A documentation hub and collection of live examples for small, framework-independent JavaScript plugins that add accessible behavior to existing HTML.

The site brings independently maintained accessibility packages into one consistent catalog. Each guide documents the package's markup requirements, public API, keyboard and focus behavior, limitations, and progressive-enhancement approach.

## Features

- Interactive examples backed by the published npm packages
- Consistent guides for installation, configuration, methods, events, and styling
- Accessibility notes covering keyboard interaction, focus management, and known constraints
- A validated plugin registry for catalog metadata and relationships
- An Astro and Starlight documentation site

## Getting started

### Requirements

- Node.js `^20.19.0` or `>=22.12.0`
- npm

### Local development

```sh
npm install
npm run dev
```

Astro will print the local development URL in the terminal.

## Available scripts

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server |
| `npm run build` | Type-check and build the production site |
| `npm run preview` | Preview the production build locally |
| `npm run check` | Run Astro and TypeScript checks |
| `npm test` | Run the Node.js test suite |
| `npm run validate:plugins` | Validate plugin registry entries |

## Project structure

```text
src/
├── components/       Interactive plugin demos
├── content/docs/     Starlight documentation pages
└── data/plugins.mjs  Plugin catalog and metadata
scripts/              Repository validation scripts
test/                 Node.js tests
```

## Adding or updating a plugin

1. Install the published package as a dependency.
2. Add or update its entry in `src/data/plugins.mjs`.
3. Create its documentation page in `src/content/docs/plugins/`.
4. Add or update the interactive demo in `src/components/`.
5. Run the validation, test, and build commands:

```sh
npm run validate:plugins
npm test
npm run build
```

The plugin's own repository remains the source of truth for runtime code, releases, types, and package-level documentation. A11y UI Lab consumes the published package and documents its public contract.

## License

This project is available under the [MIT License](LICENSE).
