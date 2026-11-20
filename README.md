# Personal portfolio

A dark, responsive portfolio built with React, Vite, and Tailwind CSS. Personal details and examples are marked as placeholders so you can replace them with confirmed information.

## Run locally

```sh
npm install
npm run dev
```

Vite prints a local URL where you can preview the site. To create a static production build, run `npm run build`; the output is written to `dist/`.

## Personalize the content

Start with `src/data/portfolio.js`:

- Replace `[Your Name]` and the contact placeholders.
- Update the project names, descriptions, technology lists, and optional links.
- Replace skill prompts only with skills you can confirm.
- Add real activities and achievements, or remove unused placeholder entries.
- Add a project image path when you have a screenshot.

The page sections are assembled in `src/App.jsx`. Reusable section layouts and project cards live in `src/components/PortfolioSections.jsx`; the shared icon components are in `src/components/Icons.jsx`.

## Deployment

The Vite build uses relative asset paths, which supports deployment beneath a GitHub Pages project URL as well as root hosting. Deploy the contents of `dist/` using your chosen static host.

## Checks

- `npm run build` — production build
- `npm run lint` — Oxlint
