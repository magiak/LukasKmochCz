# LukasKmochCz

Personal portfolio website built with [Astro](https://astro.build/).

## Live site

https://lukaskmoch.cz/

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

## Custom domain

The site is served at `lukaskmoch.cz` using a custom domain with GitHub Pages.

### DNS (GoDaddy)

| Type  | Name | Value               |
|-------|------|---------------------|
| A     | @    | `185.199.108.153`   |
| A     | @    | `185.199.109.153`   |
| A     | @    | `185.199.110.153`   |
| A     | @    | `185.199.111.153`   |
| CNAME | www  | `magiak.github.io`  |

The A records point the apex domain to GitHub's servers. The CNAME record redirects `www.lukaskmoch.cz` to GitHub Pages.

### GitHub Pages config

- `public/CNAME` contains `lukaskmoch.cz` — this file is included in every build and tells GitHub which domain maps to this repo.
- `astro.config.mjs` sets `site: "https://lukaskmoch.cz"` (no `base` path needed with a custom domain).
- HTTPS is enforced via GitHub Pages settings.

## Project structure

```
src/
├── layouts/Base.astro   # base HTML layout
└── pages/index.astro    # landing page
```

Astro uses file-based routing — any `.astro` file in `src/pages/` becomes a page.
