import type { Translations } from "./en";

export const t: Translations = {
  lang: "cs",
  meta: {
    title: "Lukáš Kmoch | .NET vývojář",
    description:
      "Portfolio Lukáše Kmocha - .NET vývojář a technologický nadšenec. Backendové systémy, fullstack aplikace a vývoj s využitím AI.",
  },
  nav: {
    home: "Domů",
    about: "O mně",
    experience: "Zkušenosti",
    education: "Vzdělání",
    tech: "Technologie",
    work: "Práce",
    personal: "Osobní",
    ai: "AI",
    langHref: "/",
    langLabel: "EN",
  },
  hero: {
    role: ".NET vývojář &amp; Team Lead",
    cta: "Zobrazit projekty",
    email: "lukaskmochit@gmail.com",
    phone: "+420 604 655 398",
    location: "Praha - Královice, CZ",
    linkedin: "https://www.linkedin.com/in/luk%C3%A1%C5%A1-kmoch/",
    github: "https://github.com/magiak",
  },
  sections: {
    about: {
      heading: "O mně",
      paragraphs: [
        `Ahoj, jsem Lukáš. Ve svém jádru jsem <strong>.NET vývojář</strong> s hlubokým porozuměním škálovatelné aplikační architektury. Pomohl jsem budovat backend a frontend pro více než 20 firem.`,
        `Mám hluboké zkušenosti s vývojem REST API, .NET MVC aplikací, Razor stránek a robustních backendů. Moje nejhlubší odbornost spočívá v 15 letech zkušeností s backendovou architekturou, ale záměrně jsem se rozšiřoval i směrem k frontendu - chvíli jsem používal Vue, než jsem svou plnou pozornost přesunul na React. I když frontend rozhodně není moje hlavní doména, vím toho dost, abych se v moderním UI kódu pohodlně orientoval.`,
        `Jsem technologický nadšenec, který miluje učení i vyučování. Více než 5 let jsem vedl kurzy .NET a webového vývoje ve společnosti <strong>Gopas</strong> a pomáhal firemním týmům zvyšovat jejich inženýrské dovednosti. Dnes sdílím své poznatky zcela otevřeně - pravidelně přispívám na svůj <a href="https://www.linkedin.com/in/luk%C3%A1%C5%A1-kmoch/" target="_blank" class="linkedin-link">LinkedIn profil</a> a hluboce experimentuji s AI aplikacemi, Claude Code a OpenClaw.`,
      ],
    },
    experience: { heading: "Zkušenosti" },
    education: { heading: "Vzdělání" },
    tech: { heading: "Klíčové technologie" },
    projects: {
      heading: "Komerční projekty",
      intro:
        "Podnikové produkty, kde jsem navrhoval API, budoval škálovatelné backendy a spravoval komplexní databáze společně se zkušenými vývojářskými týmy.",
      badge: "Komerční",
    },
    personal: {
      heading: "Osobní projekty",
      intro:
        "Produkty, které jsem od základu vymyslel, navrhl a spustil. Na těchto projektech řeším vše end-to-end: systémová architektura, UI/UX, návrh databáze, cloudová infrastruktura a integrace plateb.",
      badge: "Osobní",
    },
    ai: {
      heading: "AI &amp; Workflow",
      intro:
        "AI nástroje se staly základní součástí toho, jak navrhuji, buduji a dodávám software. Používám je každý den - ne jako zkratku, ale jako multiplikátor síly, který mi umožňuje pracovat na vyšší úrovni abstrakce.",
    },
  },
  projects: [
    {
      name: "Get Content",
      url: "https://getcontent.app",
      image: "/images/projects/getcontent.png",
      type: "personal",
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
        "Platforma pro generování marketingových materiálů pomocí AI. AI agent vám pomáhá definovat kampaně prostřednictvím chatu, poté produkční pipeline generuje obrázky, videa s hlasovým komentářem, hudbu a animace - vše z jednoho nápadu. Celá aplikace byla vyvinuta end-to-end pomocí AI-asistovaného vývoje, což demonstruje, co dnešní AI-powered inženýrství dokáže postavit.",
      features: [
        "AI agent chat - definujte kampaně konverzací, agent používá nástroje k vytváření výstupu",
        "Produkční pipeline - Gemini (obrázky/text), ElevenLabs (hlas), FFmpeg (skládání videa)",
        "Od statických obrázků po celá videa s hlasovým komentářem, hudbou a animacemi",
        "Administrátorský panel se správou uživatelů a fakturací",
        "Kreditový + předplatitelský model plateb přes Stripe",
        "Kompletně vibe-coded end-to-end - frontend, backend, autentizace, platby",
      ],
      infra: "GCP (e2-medium, Container-Optimized OS) · Docker · Nginx · Cloudflare · Cloud SQL",
    },
    {
      name: "Refine &amp; Learn",
      url: "https://refineandlearn.com",
      image: "/images/projects/refineandlearn.png",
      type: "personal",
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
        "Platforma pro zlepšování angličtiny pomocí AI, vzniklá z osobní potřeby - po letech lekcí angličtiny jsem neměl jak sledovat svou skutečnou úroveň, odhalit opakující se chyby nebo měřit reálný pokrok.",
      features: [
        "Analýza řeči v reálném čase - detekuje chyby, zaváhání a problémy s výběrem slov",
        "Google Cloud Speech & TTS pro rozpoznávání hlasu a zpětnou vazbu k výslovnosti",
        "Multi-provider AI (Gemini + OpenRouter) pro inteligentní zpětnou vazbu a cvičení",
        "Personalizovaná cvičení generovaná z vašich slabých míst",
        "Sledování pokroku s grafy - sledujte svou úroveň a trendy zlepšování",
        "AI chat pro vzdělávací poradenství - na co se zaměřit, jak se zlepšit",
        "Podpora PWA - instalovatelné na mobilu, funguje offline",
        "Úprava textu - přeměňuje hrubý text na vybroušenou angličtinu na úrovni rodilého mluvčího",
      ],
      infra: "Google Cloud Run · Docker · Cloud Build CI/CD · Firebase · Playwright E2E",
    },
    {
      name: "Propeller",
      url: "https://getonpropeller.com",
      image: "/images/projects/propeller.png",
      type: "work",
      tech: [".NET 8", "PostgreSQL", "Next.js 15", "Turborepo", "Stripe"],
      description:
        "SaaS pro provozovatele charterů - vznikl pro jachty, osvědčil se i pro auta a jiné typy flotil.",
      features: [
        "Správa flotily s cenovými kalendáři a sledováním dostupnosti",
        "Kompletní životní cyklus rezervací - nabídky, schválení, platby, předávání a smlouvy",
        "Multi-tenant architektura pro více provozovatelů na jedné platformě",
        "Zákaznický portál a CRM pro správu klientských vztahů",
      ],
      infra: "AWS · GitLab CI/CD · Sentry",
    },
    {
      name: "Dokempu",
      url: "https://dokempu.cz",
      image: "/images/projects/dokempu.png",
      type: "work",
      tech: [".NET 7", "PostgreSQL", "Next.js 13", "Playwright", "OpenRouter"],
      description: "Český tržiště kempingů. Funkce vyhledávání, procházení a recenzí.",
      features: [
        "Implementace geospatálního vyhledávání kempingů s PostGIS - dotazy na nejbližší kemping, kreslení polygonů na mapě a kontrola, zda je kemping uvnitř polygonu",
        "Optimalizace výkonu geospatálních dotazů a zjednodušení geometrie polygonů pro produkční zátěž",
        "Vedení kompletního přepisu aplikace ze starého systému na novou architekturu",
        "Zachování SEO a migrace tisíců kempingů do nové datové struktury",
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
        "Vedení malého týmu vývojářů - organizování měsíčních schůzek, stanovování cílů, revize technických rozhodnutí a zajišťování správného směřování týmu. Návrh a údržba .NET backendových systémů, tvorba API a optimalizace databázové architektury pro podnikové projekty klientů.",
    },
    {
      role: ".NET Developer",
      company: "INTENS Corporation (external)",
      period: "Oct 2020 – Jun 2021",
      description:
        "Vývoj aplikace pro monitorování procesů ve vlaku pro Škodu, integrace C# API s C++ aplikacemi, vývoj vlastního messaging systému postaveného na gRPC a vytvoření real-time GPS systému pro zobrazování polohy vlaků na webu.",
    },
    {
      role: "Lektor",
      company: "Gopas (part-time)",
      period: "Nov 2017 – Jan 2023",
      description:
        "Výuka profesionálních kurzů .NET pro firemní týmy.",
    },
    {
      role: "ASP.NET Developer",
      company: "Designeo Creative s.r.o.",
      period: "Jul 2015 – Oct 2020",
      description:
        "Vývoj webových aplikací pomocí ASP.NET, dodávání zakázkových řešení pro různé potřeby klientů.",
    },
    {
      role: "Quality Assurance Tester",
      company: "Siemens IT Solutions and Services",
      period: "Jan 2011 – Jun 2011",
      description: "Moje první práce - testování nastartovalo moji kariéru a právě zde jsem získal první praktické zkušenosti s .NET.",
    },
  ],
  education: [
    {
      institution: "České vysoké učení technické v Praze",
      degree: "Magisterský titul",
      field: "Webové a softwarové inženýrství",
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
      "Kompletní ekosystém pro monitorování solární energie postavený na .NET - datově nárocný backend zpracovávající čtení z více zařízení každých 10 sekund, webový dashboard se 40+ grafy a AI investičním poradcem a fyzický hardware display ESP32 pro sledování na první pohled.",
    highlight:
      "Majitelé solárních panelů se spoléhají na základní aplikace výrobců s omezenými přehledy. SolarCharts jde dál - robustní .NET backend zpracovává vysokofrekvenční IoT data z více zařízení s dělením PostgreSQL tabulek pro správu rostoucí datové sady, serverovým cachováním pro rychlé renderování dashboardu, automatickými zálohami databáze a AI poradcem, který dává konkrétní investiční doporučení (např. \"vyplatila by se větší baterie?\"). Hardware display přináší data do vašeho domova bez nutnosti telefonu.",
    partWeb: "Webová aplikace & Backend",
    partHardware: "LiveDisplay (Hardware)",
    featuresWeb: [
      "Vysokofrekvenční příjem dat (10sekundové intervaly z více zařízení)",
      "Dělení PostgreSQL tabulek pro velké datové sady časových řad",
      "Serverové cachování pro rychlé renderování dashboardu",
      "40+ grafů - produkce, spotřeba, baterie, účinnost",
      "AI investiční poradce - personalizovaná doporučení s ROI čísly",
      "PRO předplatné pro AI funkce",
      "Automatické zálohy databáze",
    ],
    featuresHardware: [
      "Energetická data v reálném čase na fyzickém vestavěném displeji",
      "Připojuje se k SolarCharts API pro živá data",
      "Vestavěné UI postavené s grafickou knihovnou LVGL",
    ],
    infra: "Oracle Cloud (ARM VM) · Docker Compose · Nginx · PostgreSQL · Automatické zálohy",
  },
  aiCards: [
    {
      heading: "Architektura & Plánování",
      body: "Používám AI k stress-testování návrhů systémů před napsáním jediného řádku kódu - diskutujeme o kompromisech v databázových schématech, API kontraktech a hranicích služeb. Je to jako mít seniora k dispozici 24/7.",
    },
    {
      heading: "Kód & Review",
      body: "GitHub Copilot se stará o boilerplate a opakující se vzory inline, zatímco Claude Code mi pomáhá revidovat implementace, odhalovat edge cases a refaktorovat složitou logiku - výrazně zkracuje smyčku zpětné vazby mezi nápadem a fungujícím kódem.",
    },
    {
      heading: "Debugging & Příčiny",
      body: "Když chyba vzdoruje zřejmým opravám, AI mi pomáhá systematicky eliminovat hypotézy - procházíme stack traces, neobvyklé plány dotazů nebo race conditions s druhýma očima, které nikdy neztrácí trpělivost.",
    },
    {
      heading: "Implementace AI funkcí",
      body: "Kromě vlastního workflow integruji AI schopnosti do produktů, které buduji - včetně AI investičního poradce v SolarCharts, který analyzuje solární data uživatele a poskytuje konkrétní personalizovaná doporučení přes OpenRouter.",
    },
  ],
};
