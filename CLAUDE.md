# Project: lukaskmoch.cz

Personal portfolio website for Lukas Kmoch — a fullstack developer and DevOps engineer.

## What this is

A single-page static portfolio site built with Astro. Hosted on GitHub Pages at https://lukaskmoch.cz/.

The site showcases personal and professional projects, tech stack, and infrastructure experience.

## Tech

- **Framework**: Astro 5 (static output, zero JS by default)
- **Hosting**: GitHub Pages with custom domain (`lukaskmoch.cz`, DNS via GoDaddy)
- **Deploy**: Auto via GitHub Actions on push to `main` (`.github/workflows/deploy.yml`)
- **Domain config**: `public/CNAME` contains `lukaskmoch.cz`

## Commands

- `npm run dev` — local dev server (localhost:4321)
- `npm run build` — build static site to `dist/`
- `npm run preview` — preview build locally

## Project structure

- `src/layouts/Base.astro` — base HTML layout (reset, system font)
- `src/pages/index.astro` — the portfolio page (currently placeholder)
- `public/CNAME` — custom domain config for GitHub Pages

## Key file

**`PORTFOLIO_PLAN.md`** contains all the data for building the portfolio:
- 7 project summaries with descriptions, tech stacks, hosting/infra details, and key features
- Cross-project technology summary
- A few TODOs for projects still missing details (SolarCharts, RefineAndLearn)

When building the portfolio page, use `PORTFOLIO_PLAN.md` as the data source.
