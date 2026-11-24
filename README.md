# Personal portfolio

A clean, responsive portfolio built with React, Vite, and Tailwind CSS.

## Run locally

```sh
npm install
npm run dev
```

Vite prints a local URL where you can preview the site. To create a static production build, run `npm run build`; the output is written to `dist/`.

## Update your content

Almost everything you see on the site lives in `src/data/portfolio.js`:

- **Contact details and links:** `email`, `github`, `linkedin`.
- **Hero:** role, introduction, and the three quick facts.
- **About:** the paragraphs and your education details.
- **Projects:** description, highlights, technologies, screenshot, and optional `githubUrl` / `demoUrl`. Links only appear once you fill them in.
- **Skills:** grouped lists. Set `exploring: true` on a group to show its items with a dashed outline.
- **Experience:** add entries to `activities` and an Experience section (and nav link) appears automatically.

## Project structure

- `src/App.jsx` assembles the page and builds the navigation from the sections that have content.
- `src/components/` holds one file per section (`Navbar`, `Hero`, `About`, `Projects`, `Skills`, `Experience`, `Contact`, `Footer`), plus shared `ui.jsx` and `Icons.jsx`.
- `src/index.css` defines the colour palette and font in the `@theme` block. Change `--color-brand` to re-colour the whole site.

## Deployment

The Vite build uses relative asset paths, which supports deployment beneath a GitHub Pages project URL as well as root hosting. Deploy the contents of `dist/` using your chosen static host.

## Checks

- `npm run build`: production build
- `npm run lint`: Oxlint
