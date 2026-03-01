# Portfolio Plan — lukaskmoch.cz

Context document for building the portfolio page. Contains all project data gathered during planning.

## Site Info

- **Framework**: Astro (static export)
- **Hosting**: GitHub Pages with custom domain `lukaskmoch.cz`
- **Repo**: https://github.com/magiak/LukasKmochCz
- **Deploy**: Auto via GitHub Actions on push to `main`

## Design Goals

- Showcase projects with: description, tech stack, hosting/infra details
- Show breadth of technologies (fullstack web, embedded/IoT, AI, cloud infra)
- Keep it simple, single page

---

## Projects

### 1. GetContent (getcontent.app)

**What it does**: AI-powered marketing asset generation platform. Users create campaigns via visual configuration that orchestrate AI-generated images, videos, animations, voiceovers, and music.

**Tech stack**:
- Next.js 15 (T3 Stack), TypeScript, tRPC, Prisma 6, Tailwind CSS 4
- Google Gemini (images + AI), ElevenLabs (TTS), Lyria (music generation)
- Playwright + Puppeteer (HTML rendering / video capture), FFmpeg
- Stripe (payments/subscriptions), Better Auth, Sentry, PostHog
- PostgreSQL 15 (Cloud SQL)

**Hosting/infra**:
- GCP — `e2-medium` VM (Container-Optimized OS), `europe-north1`
- Docker (multi-stage build with Chromium baked in)
- Nginx (reverse proxy + SSL via Let's Encrypt)
- Cloudflare (CDN/DNS, SSL Full Strict)
- Cloud SQL (PostgreSQL 15), Cloud SQL Proxy
- ~$55-70/month

**Key features**:
- Multi-format AI content generation (images, video, voice, music)
- Visual campaign builder with JSON configuration
- Admin dashboard with user management and billing
- Credit-based + subscription billing via Stripe

---

### 2. SolarCharts — Web App

**What it does**: Monitoring dashboard for residential solar/photovoltaic systems. Users track energy production, consumption, battery status, and get AI-powered investment recommendations (e.g., "should I get a bigger battery?").

**Tech stack**:
- *(needs confirmation — likely Next.js or similar, OpenRouter for AI advisor)*

**Key features**:
- Real-time solar production & consumption monitoring
- Battery analysis and efficiency tracking
- AI Investment Advisor (OpenRouter) — personalized recommendations with concrete ROI numbers
- PRO subscription tier for AI features

**Hosting/infra**:
- *(needs confirmation)*

> **TODO**: Get exact tech stack and hosting details from SolarCharts web folder.

---

### 3. SolarCharts — LiveDisplay (ESP32 + LVGL)

**What it does**: Physical hardware display for solar system monitoring. ESP32 microcontroller with LVGL graphics library showing real-time energy data on an embedded screen.

**Tech stack**:
- C/C++, ESP-IDF / Arduino framework
- LVGL (Light and Versatile Graphics Library)
- ESP32 microcontroller

**Key features**:
- Real-time energy data visualization on physical display
- Connects to SolarCharts API for live data
- Embedded UI built with LVGL

> **TODO**: Get exact details (platformio.ini, libraries, display specs).

---

### 4. RefineAndLearn

**What it does**: *(needs confirmation — likely the RefineEnglish project: AI tool to refine English sentences)*

**Tech stack**:
- TypeScript

> **TODO**: Get full details from the RefineAndLearn/RefineEnglish project.

---

### 5. Propeller (PragueLabs — work project)

**What it does**: Multi-tenant SaaS for yacht/boat charter operators. Manages fleet, bookings, payments, and customer relationships. Admin dashboard for operators, embeddable widgets for their websites, and customer-facing portal.

**Tech stack**:
- **Backend**: .NET 8, ASP.NET Core, Entity Framework Core 8, PostgreSQL 16 + PostGIS 3.4, Hangfire, Stripe, Twilio, DocuSign, Authorize.Net
- **Frontend**: Next.js 15 (admin), Vite (widgets/customer portal), React 18, MUI 6, TanStack Query, Tailwind CSS 3, Turborepo
- **Architecture**: DDD with 5 bounded contexts, CQRS, multi-tenant

**Hosting/infra**:
- AWS (us-east-1) — EC2 + Docker Swarm
- Traefik v3 (reverse proxy, Let's Encrypt via Route53)
- AWS ECR, CloudFront + S3 (widgets/static assets)
- AWS Parameter Store (secrets)
- GitLab CI/CD with on-demand per-MR environments
- Sentry + New Relic + OpenTelemetry (monitoring)

**Key features**:
- Fleet management — boats, pricing, calendars, crew assignment
- Full booking lifecycle with contracts, offers, promo codes, DocuSign e-signatures
- Stripe + Authorize.Net payments, operator payouts, revenue reporting
- CRM with omnichannel messaging (SendGrid email + Twilio SMS)
- Embeddable booking & CRM widgets (S3/CloudFront)

---

### 6. Dokempu (PragueLabs — work project)

**What it does**: Czech campsite marketplace (Booking.com for camping). Campsite owners list properties, users search/browse/review and submit booking leads. Features AI-powered pricing scraper.

**Tech stack**:
- **Backend**: .NET 7, ASP.NET Core, EF Core 7, PostgreSQL 16 + PostGIS 3.4, Hangfire, Serilog + Sentry
- **Frontend**: Next.js 13 (App Router for public, Pages Router for admin), React 18, styled-components, MUI 5, Mapbox GL, Jotai, TanStack Query, Turborepo + Yarn workspaces
- **AI/Scraping**: Playwright + OpenRouter (multimodal AI pricing extraction)

**Hosting/infra**:
- AWS (eu-central-1 Frankfurt) — EC2 (t3a.large prod, t3a.medium staging)
- Docker Swarm + Traefik v3 (TLS, HTTP/3, Let's Encrypt via Route53)
- AWS ECR (5 images), CloudFront + S3, Parameter Store
- Terraform + Ansible (IaC)
- GitLab CI/CD with on-demand per-MR environments
- Sentry + Zabbix 7.4 + ClickHouse (custom analytics)
- AWS Backup (daily snapshots, 7-day retention)

**Key features**:
- Geospatial campsite search (PostGIS + map UI)
- AI-powered pricing scraper (~400 websites, multimodal AI, 95% cost reduction via change detection)
- Booking lead system with admin management
- Review & rating system with email verification
- "Camp of the Year" community voting

---

### 7. Campiri (PragueLabs — work project)

**What it does**: Two-sided marketplace for campervan/motorhome rentals across Central Europe. Full rental lifecycle — search, booking, payments, check-in/check-out, reviews. Operates as Campiri + FreeWayCamper (German market).

**Tech stack**:
- **Backend**: .NET 6, ASP.NET Core, EF Core 6, PostgreSQL 16 + PostGIS, Hangfire, SignalR (real-time messaging)
- **Frontend (consumer)**: Next.js 14, React 18, Redux + React Query, styled-components, Mapbox GL
- **Frontend (admin)**: React 18 (CRA + Craco), MUI 5, Redux Toolkit, FullCalendar, deck.gl
- **Payments**: Stripe Connect + Comgate (Czech gateway)
- **i18n**: Lingui — 7 locales (CS, EN, PL, SK, ES, DE, IT)
- **Monorepo**: Turborepo with 10 shared packages
- **Testing**: Jest + Testing Library, Playwright + Cucumber (E2E)

**Hosting/infra**:
- AWS (ECR, S3, CloudFront) + GCP (GKE Kubernetes)
- 7 Dockerfiles (API, Runner, Agents API, Admin, Public, maintenance, analytics proxy)
- Kubernetes (GKE) with Nginx ingress, managed SSL certs
- GitLab CI/CD — 20+ pipeline includes, on-demand per-branch environments
- Self-hosted Plausible Analytics (ClickHouse + PostgreSQL)

**Key features**:
- Full booking lifecycle with geospatial search, availability calendar, offers/counteroffers
- Multi-gateway payments (Stripe Connect + Comgate), split payments, Apple/Google Pay
- Real-time SignalR messaging between renters and operators
- Multi-brand/multi-locale (7 languages, 2 brands from single codebase)
- Fleet management, KYC verification, promo campaigns, CRM sync (Pipedrive + Ecomail)

---

## Technology Summary (across all projects)

### Languages
C#, TypeScript, JavaScript, C/C++ (ESP32)

### Frontend
Next.js, React, Astro, Vite, Tailwind CSS, MUI, styled-components, LVGL

### Backend
ASP.NET Core, .NET 6-8, Node.js, tRPC, Entity Framework Core, Prisma

### Databases
PostgreSQL + PostGIS, ClickHouse, Cloud SQL

### Cloud / Hosting
AWS (EC2, ECR, S3, CloudFront, Parameter Store, Backup), GCP (GKE, Cloud SQL, Compute Engine), GitHub Pages, Cloudflare

### DevOps / Infra
Docker, Docker Swarm, Kubernetes (GKE), Traefik, Nginx, Terraform, Ansible, GitLab CI/CD, GitHub Actions

### AI / ML
Google Gemini, OpenRouter, ElevenLabs, Playwright (AI scraping)

### Payments
Stripe, Stripe Connect, Comgate, Authorize.Net

### Other
Hangfire, SignalR, Sentry, New Relic, PostHog, Zabbix, Twilio, DocuSign, SendGrid, Lingui (i18n)
