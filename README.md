# LukasKmochCz

Personal portfolio website built with [Astro](https://astro.build/).

## Live site

https://magiak.github.io/LukasKmochCz/

## Development

```bash
npm install
npm run dev
```

Opens a local dev server at `http://localhost:4321`.

## Build

```bash
npm run build
```

Outputs static HTML/CSS to the `dist/` directory.

Preview the build locally:

```bash
npm run preview
```

## Deployment

Deployment is automatic via GitHub Actions. Every push to `main` triggers the workflow at `.github/workflows/deploy.yml` which builds the site and deploys it to GitHub Pages.

No manual steps needed — just push and it's live.

## Project structure

```
src/
├── layouts/Base.astro   # base HTML layout
└── pages/index.astro    # landing page
```

Astro uses file-based routing — any `.astro` file in `src/pages/` becomes a page.
