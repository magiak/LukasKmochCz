export const t = {
  lang: "en" as "en" | "cs",
  meta: {
    title: "Lukáš Kmoch | .NET Developer",
    description:
      "Portfolio of Lukáš Kmoch - .NET developer and tech enthusiast. Backend systems, fullstack applications, and AI-powered development.",
  },
  nav: {
    home: "Home",
    about: "About",
    experience: "Experience",
    education: "Education",
    tech: "Tech",
    work: "Work",
    personal: "Personal",
    ai: "AI",
    langHref: "/cs/",
    langLabel: "CS",
  },
  hero: {
    role: ".NET Developer &amp; Team Lead",
    cta: "View Projects",
    email: "lukaskmochit@gmail.com",
    phone: "+420 604 655 398",
    location: "Praha - Královice, CZ",
    linkedin: "https://www.linkedin.com/in/luk%C3%A1%C5%A1-kmoch/",
    github: "https://github.com/magiak",
  },
  sections: {
    about: {
      heading: "About Me",
      paragraphs: [
        `Hi, I'm Lukáš. At my core, I'm a <strong>.NET developer</strong> with a deep understanding of scalable application architecture. I've helped build the backend and frontend for 20+ companies.`,
        `I have deep experience building REST APIs, .NET MVC apps, Razor pages, and robust backends. My deepest expertise lies in my 15 years of backend architecture experience, but I've deliberately expanded toward the frontend - using Vue briefly before shifting my full focus to React. While frontend certainly isn't my main strength, I know enough to comfortably navigate modern UI code.`,
        `I'm a tech enthusiast who loves both learning and teaching. For over 5 years, I led .NET and web development courses at <strong>Gopas</strong>, helping corporate teams level up their engineering skills. Today, I share my learnings entirely in the open-posting regularly on my <a href="https://www.linkedin.com/in/luk%C3%A1%C5%A1-kmoch/" target="_blank" class="linkedin-link">LinkedIn profile</a> and experimenting deeply with AI applications, Claude Code agents, and OpenClaw.`,
      ],
    },
    experience: { heading: "Experience" },
    education: { heading: "Education" },
    tech: { heading: "Core Arsenal" },
    projects: {
      heading: "Commercial Projects",
      intro:
        "Enterprise products where I've architected APIs, built scalable backends, and managed complex databases alongside talented development teams.",
      badge: "Commercial",
    },
    personal: {
      heading: "Personal Initiatives",
      intro:
        "Products I've brainstormed, designed, and launched entirely from scratch. On these projects, I handle everything end-to-end: system architecture, UI/UX, database design, cloud infrastructure, and payment integration.",
      badge: "Personal",
    },
    ai: {
      heading: "AI &amp; Workflow",
      intro:
        "AI tools have become a core part of how I design, build, and deliver software. I use them daily - not as a shortcut, but as a force multiplier that lets me work at a higher level of abstraction.",
    },
  },
  projects: [
    {
      name: "Get Content",
      url: "https://getcontent.app",
      image: "/images/projects/getcontent.png",
      type: "personal" as "personal" | "work",
      tech: [
        "Next.js 15",
        "TypeScript",
        "tRPC",
        "Prisma 6",
        "Tailwind CSS",
        "Google Gemini",
        "Claude",
        "ElevenLabs",
        "Playwright",
        "FFmpeg",
        "Stripe",
        "PostgreSQL",
      ],
      description:
        "AI-powered marketing asset generation platform. An AI agent helps you define campaigns through chat, then a content pipeline generates images, videos with voiceovers, music, and animations - all from a single idea. The entire app was built end-to-end using AI-assisted development, showcasing what AI-powered engineering can build today.",
      features: [
        "AI agent chat - define campaigns via conversation, agent uses tools to generate output",
        "Content pipeline - Gemini (images/text), ElevenLabs (voice), FFmpeg (video composition)",
        "From static images to full videos with voiceovers, music, and animations",
        "Admin dashboard with user management and billing",
        "Credit-based + subscription billing via Stripe",
        "Fully vibe-coded end-to-end - frontend, backend, auth, payments",
      ],
      infra: "GCP (e2-medium, Container-Optimized OS) · Docker · Nginx · Cloudflare · Cloud SQL",
    },
    {
      name: "Refine &amp; Learn",
      url: "https://refineandlearn.com",
      image: "/images/projects/refineandlearn.png",
      type: "personal" as "personal" | "work",
      tech: [
        "React 19",
        "TypeScript",
        "Vite 6",
        "Tailwind CSS",
        "Node.js",
        "Express",
        "Firebase",
        "Google Gemini",
        "OpenRouter",
        "Google Cloud Speech",
        "Google TTS",
        "WebSocket",
        "FFmpeg",
        "Sentry",
      ],
      description:
        "AI-powered English improvement platform born from a personal need - after years of English lessons, I had no way to track my actual level, spot recurring mistakes, or measure real progress.",
      features: [
        "Real-time speech analysis - detects mistakes, hesitations, and word choice issues",
        "Google Cloud Speech & TTS for voice recognition and pronunciation feedback",
        "Multi-provider AI (Gemini + OpenRouter) for intelligent feedback and exercises",
        "Personalized practice exercises generated from your weak spots",
        "Progress tracking with charts - see your level and improvement trends",
        "AI chat for learning guidance - what to focus on, how to level up",
        "PWA support - installable on mobile, works offline",
        "Text refinement - transforms rough text into polished, native-level English",
      ],
      infra: "Google Cloud Run · Docker · Cloud Build CI/CD · Firebase · Playwright E2E",
    },
    {
      name: "Propeller",
      url: "https://getonpropeller.com",
      image: "/images/projects/propeller.png",
      type: "work" as "personal" | "work",
      tech: [".NET 8", "PostgreSQL", "Next.js 15", "Turborepo", "Stripe"],
      description:
        "SaaS for charter operators - built for yachts, proven across cars and other fleet types too.",
      features: [
        "Fleet management with pricing calendars and availability tracking",
        "Full booking lifecycle - offers, approvals, payments, handovers, and contracts",
        "Multi-tenant architecture supporting multiple operators on one platform",
        "Customer portal and CRM for managing client relationships",
      ],
      infra: "AWS · GitLab CI/CD · Sentry",
    },
    {
      name: "Dokempu",
      url: "https://dokempu.cz",
      image: "/images/projects/dokempu.png",
      type: "work" as "personal" | "work",
      tech: [".NET 7", "PostgreSQL", "Next.js 13", "Playwright", "OpenRouter"],
      description: "Czech campsite marketplace. Search, browse, and review features.",
      features: [
        "Implemented geospatial campsite search with PostGIS - nearest-campsite queries, polygon drawing on the map, and point-in-polygon containment checks",
        "Optimized geospatial query performance and simplified polygon geometries to handle production load",
        "Led full application rewrite from a legacy system to a modern stack",
        "Preserved SEO rankings and migrated thousands of campsites to a new data structure",
      ],
      infra: "AWS · GitLab CI/CD",
    },
  ],
  experience: [
    {
      role: "Team Lead & .NET Developer",
      company: "Iguana Technology",
      period: "Apr 2019 – Jan 2026",
      description:
        "Lead a small team of developers - running monthlies, setting goals, reviewing technical decisions, and ensuring the team stays on the right path. Architect and maintain .NET backend systems, design APIs, and optimize database architecture for enterprise client projects.",
    },
    {
      role: ".NET Developer",
      company: "INTENS Corporation (external)",
      period: "Oct 2020 – Jun 2021",
      description:
        "Built a train process monitoring application for Skoda, integrating C# APIs with C++ applications, developing a bespoke gRPC-based messaging system, and creating a real-time GPS system for displaying train positions on the website.",
    },
    {
      role: "Trainer",
      company: "Gopas (part-time)",
      period: "Nov 2017 – Jan 2023",
      description:
        "Taught professional development courses on .NET to corporate teams.",
    },
    {
      role: "ASP.NET Developer",
      company: "Designeo Creative s.r.o.",
      period: "Jul 2015 – Oct 2020",
      description:
        "Developed web applications using ASP.NET, delivering custom solutions for diverse client needs.",
    },
    {
      role: "Quality Assurance Tester",
      company: "Siemens IT Solutions and Services",
      period: "Jan 2011 – Jun 2011",
      description: "My first job - QA testing and early hands-on .NET experience.",
    },
  ],
  education: [
    {
      institution: "Czech Technical University in Prague",
      degree: "Master's degree",
      field: "Web and Software Engineering",
      period: "2012 – 2015",
      title: "Ing.",
    },
  ],
  techCategories: [
    {
      name: "Backend (.NET Core)",
      items: ["C#", ".NET", "ASP.NET MVC", "Razor Pages", "EF Core", "PostgreSQL", "PostGIS"],
    },
    {
      name: ".NET Libraries",
      items: [
        "Dapper",
        "Hangfire",
        "MediatR",
        "Serilog",
        "SignalR",
        "Npgsql",
        "NetTopologySuite",
        "Elasticsearch/NEST",
        "gRPC",
        "Protobuf",
        "WebSockets",
        "Scrutor",
        "MiniProfiler",
        "LINQ",
        "AutoMapper",
        "xUnit",
      ],
    },
    {
      name: "Frontend",
      items: ["JavaScript", "TypeScript", "Next.js", "React", "Vue.js", "Tailwind", "tRPC", "jQuery"],
    },
    {
      name: "Cloud & Ops",
      items: ["AWS", "GCP", "Cloudflare", "Docker", "Docker Compose", "Nginx", "IIS", "Git", "GitLab CI"],
    },
    {
      name: "Tools",
      items: [
        "Swagger",
        "Postman",
        "DBeaver",
        "Comgate",
        "Stripe",
        "Supabase",
        "Playwright",
        "Google Analytics",
        "Sentry",
        "SendGrid",
        "Twilio",
        "PostHog",
        "Firebase",
      ],
    },
  ],
  solarCharts: {
    description:
      "A complete solar energy monitoring ecosystem built with .NET - a data-heavy backend ingesting readings from multiple devices every 10 seconds, a web dashboard with 40+ charts and an AI investment advisor, and a physical ESP32 hardware display for at-a-glance monitoring.",
    highlight:
      "Solar panel owners rely on basic manufacturer apps with limited insights. SolarCharts goes further - a robust .NET backend handles high-frequency IoT data from multiple devices, with PostgreSQL table partitioning to manage the growing dataset, server-side caching for fast dashboard rendering, automated database backups, and an AI advisor that gives concrete investment recommendations (e.g., \"would a bigger battery pay off?\"). The hardware display brings the data into your home without needing a phone.",
    partWeb: "Web App & Backend",
    partHardware: "LiveDisplay (Hardware)",
    featuresWeb: [
      "High-frequency data ingestion (10-second intervals from multiple devices)",
      "PostgreSQL table partitioning for large time-series datasets",
      "Server-side caching for fast dashboard rendering",
      "40+ charts - production, consumption, battery, efficiency",
      "AI Investment Advisor - personalized recommendations with ROI numbers",
      "PRO subscription tier for AI features",
      "Automated database backups",
    ],
    featuresHardware: [
      "Real-time energy data on a physical embedded screen",
      "Connects to SolarCharts API for live data",
      "Embedded UI built with LVGL graphics library",
    ],
    infra: "Oracle Cloud (ARM VM) · Docker Compose · Nginx · PostgreSQL · Automated backups",
  },
  aiCards: [
    {
      heading: "Architecture & Planning",
      body: "I use AI to stress-test system designs before writing a single line of code - discussing trade-offs in database schemas, API contracts, and service boundaries. It's like having a senior reviewer available 24/7.",
    },
    {
      heading: "Code & Review",
      body: "GitHub Copilot handles boilerplate and repetitive patterns inline, while Claude Code helps me review implementations, catch edge cases, and refactor complex logic - significantly reducing the feedback loop between idea and working code.",
    },
    {
      heading: "Debugging & Root Cause",
      body: "When a bug resists obvious fixes, AI helps me systematically eliminate hypotheses - walking through stack traces, unusual query plans, or race conditions with a second pair of eyes that never loses patience.",
    },
    {
      heading: "Shipping AI Features",
      body: "Beyond my own workflow, I integrate AI capabilities into the products I build - including an AI investment advisor in SolarCharts that analyses a user's solar data and delivers concrete, personalised recommendations via OpenRouter.",
    },
  ],
};

export type Translations = typeof t;
