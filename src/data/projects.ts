export interface ProjectStorySection {
  /** Mono label rendered as "// the …" section header. */
  label: string;
  body: string;
}

/** Big manga power-stat: value in Bangers, label in mono. Facts only. */
export interface ProjectMetric {
  value: string;
  label: string;
}

/** Extra key-art panel rendered in the case-study gallery. */
export interface ProjectGalleryItem {
  src: string;
  alt: string;
  caption?: string;
}

/** Optional animated key art. Poster keeps the no-JS floor intact. */
export interface ProjectVideo {
  mp4: string;
  webm?: string;
  poster: string;
  caption?: string;
}

export interface Project {
  id: number;
  number: string;
  slug: string;
  name: string;
  status: "LIVE" | "PRIVATE BETA" | "SHIPPED" | "DEMO" | "ARCHIVED" | "PILOT" | "OPEN SOURCE";
  tagline: string;
  description: string;
  tech: string[];
  icon: string;
  links: {
    live?: string;
    repo?: string;
    demo?: string;
    /** Secondary destinations — e.g. the M2A subsidiary sites. */
    also?: { href: string; label: string }[];
  };
  featured: boolean;
  /** Timeline label, e.g. "2025 — NOW". */
  year: string;
  role: string;
  client?: string;
  /** Punchy case-study bullets — facts only, no invented numbers. */
  highlights: string[];
  /** Case-study narrative sections. */
  story: ProjectStorySection[];
  /** Key-art path under /public. Omit → typographic fallback panel. */
  art?: string;
  /** Power stats rendered as a manga stat strip. Facts only. */
  metrics?: ProjectMetric[];
  /** Extra sketch panels for the case-study gallery. */
  gallery?: ProjectGalleryItem[];
  /** Animated key art (muted, user-initiated playback). */
  video?: ProjectVideo;
}

export const projects: Project[] = [
  {
    id: 1,
    number: "01",
    slug: "pilot-100",
    name: "PILOT 100",
    status: "LIVE",
    tagline:
      "#1 ranked aviation training platform. Where future pilots learn theory before the cockpit.",
    description:
      "ATPL aviation training platform teaching pilots the theoretical foundation of flight — a ~3,600-file monorepo of six production apps plus a Flutter mobile companion, on a 300+ endpoint CQRS backend. Ranked #1 in the aviation training category. Used by real flight schools, deployed to AWS.",
    tech: ["Angular 20", "NestJS", "PostgreSQL", "Redis", "CQRS", "Stripe", "Flutter", "AWS"],
    icon: "✈",
    links: { live: "https://pilot100atpl.com", demo: "https://pilot100-deck.vercel.app" },
    featured: true,
    year: "2025 — NOW",
    role: "Technical lead — team of 4",
    highlights: [
      "Ranked #1 in its aviation-training category — real flight schools run it daily",
      "~3,600-file monorepo: six production apps plus a Flutter companion (~1,500 Dart files, 24 spec-driven modules)",
      "NestJS backend with 300+ REST endpoints and a CQRS exam engine — Stripe subscriptions, Redis caching and rate limiting",
      "Exam UI serving 27,000+ questions across 4 exam modes — windowed hydration and optimistic updates keep navigation instant",
      "Angular 20 admin dashboard shipped solo in 4 weeks: 6-tier hierarchical RBAC, real-time analytics, full audit logging",
      "Hardened with AES-256-GCM response encryption, CSRF protection, and argon2",
    ],
    metrics: [
      { value: "#1", label: "category rank" },
      { value: "300+", label: "REST endpoints" },
      { value: "27K+", label: "exam questions" },
      { value: "6+1", label: "apps + mobile companion" },
    ],
    story: [
      {
        label: "the mission",
        body: "Pilots spend years on theory before they touch a cockpit. Pilot 100 makes that theory trainable — structured, measurable, ATPL-grade. Study, drill, track, pass.",
      },
      {
        label: "the platform",
        body: "One monorepo, ~3,600 files, six production apps — plus a Flutter companion of ~1,500 Dart files across 24 spec-driven modules. Built by a five-developer team; every technical and UI/UX decision runs through one technical lead. That's the job.",
      },
      {
        label: "the exam engine",
        body: "The core is a CQRS exam engine behind 300+ NestJS REST endpoints: 27,000+ questions, four exam modes, instant navigation. Windowed hydration keeps the DOM small; optimistic updates keep it feeling immediate. A full gamification layer sits on top. Stripe runs subscriptions, Redis runs caching and rate limiting.",
      },
      {
        label: "the admin arc",
        body: "The admin dashboard shipped solo in four weeks: six-tier hierarchical RBAC with wildcard resource:action permissions, real-time analytics, and full audit logging — all built on a reusable standalone-component library the rest of the ecosystem now borrows from.",
      },
      {
        label: "the hardening",
        body: "Responses encrypted with AES-256-GCM. CSRF protection on state changes. argon2 on credentials. Rate limits at the edge. Students trust the platform with their exam prep — the platform earns it.",
      },
      {
        label: "the delivery",
        body: "Deployed to AWS and shipped continuously: GitHub Actions pipelines with one-click rollback, Playwright E2E suites, Artillery load tests — architecture directed for DevOps to execute. The ecosystem grew its own tooling along the way: an animated investor brief, and LO Organizer, a desktop app for reshaping EASA syllabus trees.",
      },
      {
        label: "the receipts",
        body: "Ranked #1 in its category. Real flight schools run it daily. That is the whole pitch.",
      },
    ],
    art: "/projects/pilot-100.webp",
    video: {
      mp4: "/projects/pilot-100-anim.mp4",
      poster: "/projects/pilot-100-anim-poster.webp",
      caption: "from blank paper to takeoff — the key art, animated",
    },
    gallery: [
      {
        src: "/projects/gallery/pilot-100-exam.webp",
        alt: "Ink sketch of a cockpit instrument panel whose central screen shows a multiple-choice exam question",
        caption: "the exam engine — 27,000+ questions, four modes",
      },
      {
        src: "/projects/gallery/pilot-100-ecosystem.webp",
        alt: "Blueprint-style sketch of a monorepo splitting into six app modules and a smartphone, all wired into one server rack",
        caption: "one monorepo — six apps, one API, one companion",
      },
      {
        src: "/projects/gallery/pilot-100-mobile.webp",
        alt: "Ink sketch of a pilot's logbook beside a smartphone running a study app with progress rings",
        caption: "the Flutter companion — theory in your pocket",
      },
    ],
  },
  {
    id: 2,
    number: "02",
    slug: "xbrain-os",
    name: "XBRAIN OS",
    status: "PRIVATE BETA",
    tagline:
      "A local-first AI operating system. Orchestrates coding agents, memory, and repos — and never sleeps.",
    description:
      "Personal AI command system running Windows-native. An always-on orchestrator owns the task ledger and fails over between Claude Code and GLM when limits hit — then returns automatically. Scoped two-brain memory keeps work and life context separate on purpose.",
    tech: ["TypeScript", "MCP", "Claude Code", "GLM", "mem0", "Docker", "PowerShell"],
    icon: "🧠",
    links: {},
    featured: false,
    year: "2026 — NOW",
    role: "Solo build",
    highlights: [
      "Always-on TypeScript orchestrator: task ledger + MCP server",
      "Automatic Claude ⇄ GLM failover — hits a rate limit, swaps hands, swaps back on reset",
      "Two-brain memory (mem0) scoped work / personal / bridge",
      "Asset map of every owned repo, digested into agent context",
    ],
    metrics: [
      { value: "24/7", label: "always-on orchestrator" },
      { value: "2", label: "interchangeable agent backends" },
      { value: "3", label: "memory scopes — work / personal / bridge" },
    ],
    story: [
      {
        label: "the idea",
        body: "One brain to talk to, many hands to type. A persona router sits on top, an orchestrator spine underneath, and coding agents do the actual work — against my repos, my deployments, my task ledger.",
      },
      {
        label: "the failover",
        body: "AI subscriptions have limits. XBRAIN treats them like infrastructure failures: when the primary agent hits its ceiling, the orchestrator reroutes work to a GLM-backed fallback and returns to the primary the moment the limit resets. No babysitting.",
      },
      {
        label: "the memory",
        body: "Two scoped memory stores — work and personal — with a narrow bridge between them. Agents recall what they need and nothing they shouldn't. Secrets live in an encrypted vault, never in a prompt.",
      },
    ],
    art: "/projects/xbrain-os.webp",
    gallery: [
      {
        src: "/projects/gallery/xbrain-os-failover.webp",
        alt: "Ink sketch of two robotic arms passing a task card between them in front of orbiting terminal windows",
        caption: "the failover — one ledger, many hands",
      },
      {
        src: "/projects/gallery/xbrain-os-memory.webp",
        alt: "Ink sketch of two brains connected by a single narrow bridge with a locked safe beneath it",
        caption: "two brains, one narrow bridge — scoped on purpose",
      },
    ],
  },
  {
    id: 3,
    number: "03",
    slug: "spytfy",
    name: "SPYTFY",
    status: "OPEN SOURCE",
    tagline:
      "Your Spotify library, downloaded as a real music library. Paste a link, own the files.",
    description:
      "Desktop app that turns Spotify tracks, albums, and playlists into properly tagged 320 kbps MP3s — real cover art, ID3v2.4 metadata, clean folder structure. Rust core, Angular face. No cloud, no telemetry, fully offline after setup.",
    tech: ["Tauri 2", "Rust", "Tokio", "Angular 20", "SQLite", "ffmpeg"],
    icon: "🎧",
    links: {
      repo: "https://github.com/mohameddsh3ban/spytfy",
      also: [
        { href: "https://github.com/mohameddsh3ban/spytfy/releases", label: "Download v0.1.0 ↗" },
      ],
    },
    featured: false,
    year: "2026",
    role: "Solo build",
    highlights: [
      "v0.1.0 shipped — Windows installer live on GitHub Releases",
      "Rust + Tokio pipeline: resolve → match → score → download → tag → verify",
      "Screenshot a playlist and OCR imports every track",
      "Cover art embedded at ≥300×300 and verified post-write via SHA-256",
      "SQLite-backed queue survives restarts — pause, resume, cancel, retry",
    ],
    metrics: [
      { value: "320", label: "kbps tagged MP3s" },
      { value: "±5s", label: "duration match window" },
      { value: "SHA-256", label: "post-write verification" },
      { value: "v0.1.0", label: "installer on Releases" },
    ],
    story: [
      {
        label: "the itch",
        body: "Streaming is renting. DJs, archivists, and home-server people want files — tagged right, organized right, playable anywhere. Spytfy takes a Spotify link and hands back a music library.",
      },
      {
        label: "the pipeline",
        body: "Resolve metadata from Spotify, search YouTube, score candidates on title similarity and duration within ±5 seconds. High scores download automatically; low scores surface the top three for a human pick. Then transcode, tag, embed art, verify the write.",
      },
      {
        label: "the desktop call",
        body: "Tauri over Electron: a fraction of the bundle, native Rust performance, no shipping a second browser. Angular 20 with OnPush keeps the UI snappy while the Tokio worker pool grinds through a playlist.",
      },
    ],
    art: "/projects/spytfy.webp",
    gallery: [
      {
        src: "/projects/gallery/spytfy-pipeline.webp",
        alt: "Ink sketch of a conveyor-belt machine turning a playlist card into tagged music files",
        caption: "resolve → match → score → download → tag → verify",
      },
      {
        src: "/projects/gallery/spytfy-queue.webp",
        alt: "Ink sketch of a desktop window showing a download queue with progress bars and a small crab mascot",
        caption: "the queue — survives restarts, powered by Rust",
      },
    ],
  },
  {
    id: 4,
    number: "04",
    slug: "job-jarvis",
    name: "JOB JARVIS",
    status: "PRIVATE BETA",
    tagline:
      "Your AI job-hunt agent. Auto-apply, smart resumes, MCP-powered. Hunts while you sleep.",
    description:
      "Full-stack AI job-search platform: resume parsing with ATS tailoring, job-description gap analysis, Gmail scanning via Google OAuth, and a Chrome extension for one-click autofill on LinkedIn and Indeed. Currently dogfooding with friends. Public release when the idea proves itself.",
    tech: ["Angular", "NestJS", "Prisma", "PostgreSQL", "Claude AI", "Google OAuth", "Chrome Extension", "MCP"],
    icon: "🤖",
    links: {},
    featured: false,
    year: "2025 — NOW",
    role: "Solo build",
    highlights: [
      "Chrome extension: one-click autofill on LinkedIn and Indeed",
      "AI resume builder with resume parsing, ATS tailoring, and its own generation pipeline",
      "JD gap analysis — see what a posting wants that your resume doesn't say yet",
      "Gmail scanning via Google OAuth turns the inbox into application state",
      "Auto-apply engine that works the boards while you sleep",
    ],
    metrics: [
      { value: "1-CLICK", label: "autofill on LinkedIn + Indeed" },
      { value: "ATS", label: "resume tailoring pipeline" },
      { value: "OAUTH", label: "Gmail application tracking" },
    ],
    story: [
      {
        label: "the problem",
        body: "Job hunting is a full-time job with no pay. The searching, the tailoring, the form-filling — all of it is repetitive, structured work. Repetitive, structured work is what software is for.",
      },
      {
        label: "the system",
        body: "A Chrome extension watches the boards and autofills applications on LinkedIn and Indeed in one click. The resume engine parses what you have, runs gap analysis against the job description, and tailors an ATS-ready version. Gmail scanning over Google OAuth closes the loop — replies, rejections, and interviews land back in the tracker on their own. MCP wires the pieces together.",
      },
      {
        label: "the discipline",
        body: "No launch theater. Friends use it, feedback comes in, the model improves. It goes public when it earns it.",
      },
    ],
    art: "/projects/job-jarvis.webp",
    gallery: [
      {
        src: "/projects/gallery/job-jarvis-autoapply.webp",
        alt: "Ink sketch of a mechanical butler arm posting a sealed resume into a mailbox shaped like a browser window",
        caption: "the auto-apply engine — applications while you sleep",
      },
      {
        src: "/projects/gallery/job-jarvis-tailoring.webp",
        alt: "Ink sketch of a resume laid out on a tailor's table with measuring tape, next to a pinned job posting",
        caption: "ATS tailoring — every resume fitted to the posting",
      },
    ],
  },
  {
    id: 5,
    number: "05",
    slug: "seagull-reservations",
    name: "SEAGULL RESERVATIONS",
    status: "LIVE",
    tagline:
      "Dinner bookings for a Red Sea resort. Four restaurants, seven languages, zero double-booked tables.",
    description:
      "Full reservation platform for Seagull Beach Resort in Hurghada. Guests book tables across four restaurants with live capacity; reception, kitchen, and accounting each get their own dashboard; every booking confirms, cancels, and requests a review by email — automatically.",
    tech: ["React 18", "FastAPI", "Python", "Firestore", "Firebase Auth", "Mailgun"],
    icon: "🍽",
    links: {},
    featured: false,
    year: "2025",
    role: "Solo build",
    client: "Seagull Beach Resort, Hurghada",
    highlights: [
      "Four restaurants, one capacity engine — overbooking prevented under concurrent load, and tested for it",
      "Seven languages: EN, DE, RU, FR, CS, SR, PL",
      "Role-based dashboards: admin, reception, kitchen, accounting",
      "Automated email lifecycle: confirmation → secure cancel link → review request",
    ],
    metrics: [
      { value: "4", label: "restaurants, one engine" },
      { value: "7", label: "languages served" },
      { value: "4", label: "role dashboards" },
      { value: "0", label: "double-booked tables" },
    ],
    story: [
      {
        label: "the ops problem",
        body: "A resort with four themed restaurants and rotating guests needs more than a spreadsheet. Capacity per restaurant per night, main-course choices per guest, upsells billed to the room, staff roles that see exactly what they need.",
      },
      {
        label: "the flow",
        body: "Guest books, email confirms with a one-click cancellation token. The night after dinner, a review request goes out with its own secure link. Reception tracks payments, kitchen sees the dietary notes, accounting sees the money.",
      },
      {
        label: "the hard part",
        body: "Two guests grabbing the last table at the same second. The backend test suite covers exactly that — concurrent booking races, overbooking prevention, cancellation logic. Production systems earn trust in the edge cases.",
      },
    ],
    art: "/projects/seagull-reservations.webp",
    gallery: [
      {
        src: "/projects/gallery/seagull-reservations-floorplan.webp",
        alt: "Ink sketch of a restaurant floor plan drawn as a blueprint with numbered tables and one table marked in red",
        caption: "the capacity engine — four restaurants, no double bookings",
      },
    ],
  },
  {
    id: 6,
    number: "06",
    slug: "course-platform",
    name: "DESIGN WAY",
    status: "LIVE",
    tagline:
      "Arabic-first paid course platform engineered to run at $0/month. Forever. No card on file.",
    description:
      "Design Way — RTL Arabic learning platform selling design courses in EGP, live at designwaycourses.com and built to survive indefinitely on free tiers. There is no server: all privileged logic lives inside Postgres as SECURITY DEFINER functions behind default-deny row-level security. The service-role key is never used. Anywhere.",
    tech: ["Angular 20", "Supabase", "PostgreSQL", "Tailwind v4", "Cloudflare Pages", "GitHub Actions"],
    icon: "🎓",
    links: { live: "https://designwaycourses.com" },
    featured: false,
    year: "2026 — NOW",
    role: "Solo build",
    highlights: [
      "Live at designwaycourses.com — deployed on Cloudflare Pages, CI on GitHub Actions",
      "$0/month infrastructure by engineering, not hope — keep-alive pings and weekly backups run on GitHub Actions",
      "Default-deny RLS on every table; the public anon key is the only key that ships",
      "Full RTL discipline: logical CSS properties only, ar-EG locale, integer-cents EGP money",
      "Realtime payment review + WhatsApp deep links instead of a support inbox",
    ],
    metrics: [
      { value: "$0/MO", label: "infrastructure bill" },
      { value: "0", label: "backend servers" },
      { value: "RLS", label: "default-deny on every table" },
    ],
    story: [
      {
        label: "the constraint",
        body: "A seasonal, low-volume audience paying in EGP can't carry monthly cloud bills. So the bill is zero — permanently. Free-tier Postgres, free hosting, free CI. The architecture bends around the constraint instead of pretending it isn't there.",
      },
      {
        label: "the no-server trick",
        body: "No Edge Functions, no backend process. Every privileged operation — submitting a payment, reviewing it, granting course access — is a SECURITY DEFINER Postgres function, gated by row-level security. The client holds nothing but the anon key, and RLS is the wall.",
      },
      {
        label: "the details",
        body: "Free Supabase projects pause after seven days of silence — a scheduled workflow does one real write every six. Money is integer cents formatted with Western digits to match InstaPay screenshots. RTL uses logical properties everywhere; only directional icons flip.",
      },
    ],
    art: "/projects/course-platform.webp",
    gallery: [
      {
        src: "/projects/gallery/course-platform-rls.webp",
        alt: "Ink sketch of a fortress wall in cross-section protecting a database elephant, with one drawbridge as the only way in",
        caption: "row-level security is the wall — one gate, default deny",
      },
    ],
  },
  {
    id: 7,
    number: "07",
    slug: "m2a-platforms",
    name: "M2A WEB PLATFORMS",
    status: "LIVE",
    tagline:
      "The web ecosystem of a German facility-management group. One hub, six subsidiary sites, one senior dev.",
    description:
      "The digital surface of M2A Group — the m2a-group.de hub plus six subsidiary sites in four locales including full RTL Arabic, and a logistics platform with its own Prisma-backed backend. Designed, built, and shipped during the Ascension Arc as the group's sole UI/UX owner.",
    tech: ["Astro", "TypeScript", "React", "Prisma", "Node.js", "Tailwind"],
    icon: "🏗",
    links: {
      live: "https://m2a-group.de",
      also: [
        { href: "https://m2a-fm.de", label: "m2a-fm.de ↗" },
        { href: "https://m2a-logistics.de", label: "m2a-logistics.de ↗" },
        { href: "https://m2a-dev.de", label: "m2a-dev.de ↗" },
      ],
    },
    featured: false,
    year: "2025 — NOW",
    role: "Senior full-stack developer",
    client: "M2A Group (M2A-FM GmbH)",
    highlights: [
      "The m2a-group.de hub plus six subsidiary sites — one design system, one developer",
      "Four-locale i18n including full RTL Arabic",
      "Logistics platform with a Prisma-backed backend",
      "Sole UI/UX owner for the group — mentored a senior developer to Angular fluency in under a month",
    ],
    metrics: [
      { value: "7", label: "sites shipped" },
      { value: "4", label: "locales, incl. RTL Arabic" },
      { value: "1", label: "developer owning UI/UX" },
    ],
    story: [
      {
        label: "the scope",
        body: "A holding group has faces: the group hub at m2a-group.de, the facility-management company, the logistics arm, the dev shop — seven sites in four locales, including full RTL Arabic. Each needs its own tone and a shared standard of quality, shipped by one developer without a design department.",
      },
      {
        label: "the delivery",
        body: "Astro for the landings — fast, static, zero JavaScript where none is needed. The logistics platform is the deep end: a full application with a Prisma-backed API underneath. Same repo discipline, same review bar, different weights.",
      },
      {
        label: "the multiplier",
        body: "Owning the group's UI/UX also meant growing the people who maintain it — mentoring a senior developer to Angular fluency in under a month. Shipping is the job; making others ship is the promotion.",
      },
    ],
    art: "/projects/m2a-platforms.webp",
    gallery: [
      {
        src: "/projects/gallery/m2a-platforms-sites.webp",
        alt: "Ink sketch of four browser windows with different landing pages, all drawn by a single fountain pen",
        caption: "one pen, seven sites — the whole group's web estate",
      },
    ],
  },
  {
    id: 8,
    number: "08",
    slug: "xiii-store",
    name: "XIII STORE",
    status: "LIVE",
    tagline:
      "Production-grade e-commerce with a custom admin dashboard. Storefront, payments, inventory — all custom-built.",
    description:
      "Built to demonstrate end-to-end e-commerce domain mastery — products, orders, payments, inventory, customer management, all from scratch. The storefront is the shop window; the custom admin dashboard is the machine room.",
    tech: ["Angular", "Firebase Cloud Functions", "Firebase", "Firestore", "TypeScript"],
    icon: "🛒",
    links: { live: "https://xii-store-v2.vercel.app" },
    featured: false,
    year: "2023 — 2025",
    role: "Solo build",
    highlights: [
      "Storefront and custom admin dashboard, built from zero",
      "Products, orders, payments, inventory, customers — the full domain",
      "Firebase Cloud Functions backend, Firestore data layer",
    ],
    story: [
      {
        label: "the point",
        body: "E-commerce is the standard test of a full-stack developer because it touches everything: catalog, cart, checkout, payments, stock, customers, admin. XIII Store exists to pass that test without shortcuts — no template, no BaaS storefront kit.",
      },
      {
        label: "the two apps",
        body: "The storefront is the visible half. The admin dashboard is where the real complexity lives — inventory movements, order state machines, customer management. Both custom, both production-grade.",
      },
    ],
    art: "/projects/xiii-store.webp",
    gallery: [
      {
        src: "/projects/gallery/xiii-store-admin.webp",
        alt: "Ink sketch of an admin control room with an order state diagram on the monitor and barcoded packages on shelves",
        caption: "the admin half — where the real complexity lives",
      },
    ],
  },
  {
    id: 9,
    number: "09",
    slug: "crwn",
    name: "CRWN",
    status: "LIVE",
    tagline:
      "A fashion house, not a catalog. Premium streetwear storefront — oversized cuts, EGP prices, zero template energy.",
    description:
      "Next.js storefront for CRWN, a unisex streetwear brand — the S/S 2026 debut collection across tops, sets, bottoms, and accessories, priced in EGP. Collections, filtering, sorting, and a design-first landing that sells the vibe before the product. It is also the master die for Ecommerce Factory: the proven store every new merchant gets stamped from.",
    tech: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind", "Vercel"],
    icon: "👑",
    links: { live: "https://crwn-psi.vercel.app" },
    featured: false,
    year: "2026",
    role: "Solo build",
    highlights: [
      "Design-first storefront — 'a fashion house, not a catalog'",
      "Full catalog UX: collections, categories, filtering, sorting, EGP pricing",
      "Supabase-backed products and assets on a Next.js front",
      "Doubles as the master template Ecommerce Factory stamps out per merchant",
    ],
    story: [
      {
        label: "the brief",
        body: "Streetwear brands live or die on presentation. CRWN's storefront had one rule: no template energy. Big type, calm grids, product photography given room to breathe — a landing page that reads like a lookbook, not a spreadsheet.",
      },
      {
        label: "the storefront",
        body: "Next.js on the front, Supabase behind it. Collections for the S/S 2026 debut drop, categories for tops, sets, bottoms, and accessories, filtering and sorting that stay out of the way. Prices in EGP, checkout flow built for how Egypt actually buys.",
      },
      {
        label: "the twist",
        body: "A one-off store is a product. A proven store is a die. CRWN became the master template that Ecommerce Factory stamps out for every new merchant — see chapter eleven.",
      },
    ],
    art: "/projects/crwn.webp",
    gallery: [
      {
        src: "/projects/gallery/crwn-catalog.webp",
        alt: "Ink sketch of an e-commerce product grid wireframe with a filter sidebar and one lifted product card",
        caption: "the catalog — filters, sorting, no template energy",
      },
    ],
  },
  {
    id: 10,
    number: "10",
    slug: "ecommerce-factory",
    name: "ECOMMERCE FACTORY",
    status: "PRIVATE BETA",
    tagline:
      "One brain, many faces. A subscription SaaS that stamps out a premium store per merchant.",
    description:
      "Multi-tenant e-commerce SaaS: sign a merchant up, stamp out a proven premium storefront — CRWN is the die. NestJS and PostgreSQL underneath, with tenant isolation enforced by row-level security at the database layer rather than in application code.",
    tech: ["NestJS", "PostgreSQL", "RLS", "Next.js", "Angular", "Astro", "TypeScript"],
    icon: "🏭",
    links: {},
    featured: false,
    year: "2026 — NOW",
    role: "Solo build",
    highlights: [
      "Tenant isolation by row-level security at the database layer — not in application code",
      "One proven storefront (CRWN) stamped out per merchant, subscription-priced",
      "NestJS + PostgreSQL core with Next.js, Angular, and Astro faces",
      "One brain, many faces — shared engine, per-merchant identity",
    ],
    story: [
      {
        label: "the thesis",
        body: "Most small stores fail on plumbing, not products — payments, catalog, orders, hosting. The factory ships the plumbing already proven: every merchant gets a CRWN-grade store on day one and rents the machine instead of rebuilding it.",
      },
      {
        label: "the isolation",
        body: "Multi-tenancy is where SaaS goes to leak. Here the wall is row-level security at the database layer: even buggy application code cannot read across tenants, because Postgres itself refuses. Isolation is a property of the data, not a promise of the code.",
      },
      {
        label: "the die",
        body: "CRWN is the master mold — one storefront polished until it sells, then stamped per merchant with their identity on top. One brain, many faces.",
      },
    ],
    art: "/projects/ecommerce-factory.webp",
    gallery: [
      {
        src: "/projects/gallery/ecommerce-factory-tenancy.webp",
        alt: "Ink sketch of a database cylinder drawn as an apartment building, each floor a separate shop with its own padlock",
        caption: "row-level security — every tenant behind its own lock",
      },
    ],
  },
  {
    id: 11,
    number: "11",
    slug: "spotify",
    name: "SPOTIFY REIMAGINED",
    status: "LIVE",
    tagline:
      "Spotify, but reimagined. Original UI/UX, full audio playback, my take on what music apps should feel like.",
    description:
      "Music streaming app clone with completely original UI/UX. Audio playback, playlists, search, library management — wrapped in a design system I built from the ground up.",
    tech: ["Angular", "Spotify API", "TypeScript", "RxJS"],
    icon: "🎵",
    links: { live: "https://xiii-voxpulse.vercel.app", repo: "https://github.com/mohameddsh3ban/spotify" },
    featured: false,
    year: "2025",
    role: "Solo build",
    highlights: [
      "Original UI/UX — a design system built from zero, not a pixel-copy",
      "Full playback, playlists, search, and library management",
      "RxJS-driven state throughout",
    ],
    story: [
      {
        label: "the twist",
        body: "Anyone can clone a layout. The brief here was harder: keep Spotify's power, redesign the experience. Every screen is an argument about what a music app should feel like.",
      },
      {
        label: "the sequel",
        body: "The music obsession didn't stop at the browser. It moved to the desktop and grew a Rust core — see Spytfy, chapter 04.",
      },
    ],
    art: "/projects/spotify.webp",
    gallery: [
      {
        src: "/projects/gallery/spotify-player.webp",
        alt: "Ink sketch of a music player interface drawn as an annotated designer's wireframe",
        caption: "the redesign — every screen argued from scratch",
      },
    ],
  },
  {
    id: 12,
    number: "12",
    slug: "curify",
    name: "CURIFY",
    status: "DEMO",
    tagline:
      "For people whose bodies don't follow the rules. Symptom tracking, medication logs, life-impact data.",
    description:
      "Health platform for people living with chronic disease. Track symptoms, medications, flare-ups, and life impact over time. Built to give patients data they can actually use.",
    tech: ["Angular", "NestJS", "PostgreSQL", "TypeScript"],
    icon: "⚕",
    links: {},
    featured: false,
    year: "2025",
    role: "Solo build",
    highlights: [
      "Symptom, medication, and flare-up tracking over time",
      "Life-impact data patients can bring to an appointment",
      "Angular front, NestJS API, PostgreSQL for the long haul",
    ],
    story: [
      {
        label: "the why",
        body: "Chronic disease is managed in the gaps between appointments, and the gaps have no data. Curify turns daily reality — symptoms, doses, flare-ups, what it cost you that day — into a record a doctor can actually read.",
      },
    ],
    art: "/projects/curify.webp",
    gallery: [
      {
        src: "/projects/gallery/curify-journal.webp",
        alt: "Ink sketch of an open health journal showing a symptom timeline with one flare-up spike marked in red",
        caption: "the record — data a doctor can actually read",
      },
    ],
  },
  {
    id: 13,
    number: "13",
    slug: "lo-organizer",
    name: "LO ORGANIZER",
    status: "OPEN SOURCE",
    tagline:
      "A desktop tool for reshaping aviation syllabi. Drag, edit, export. Windows and macOS.",
    description:
      "Small sharp tool from the Pilot 100 arc: upload a subject's Learning-Objective JSON, drag and edit LOs across the syllabus tree, export clean JSON back out. A Tauri desktop app with installers built and published automatically by CI.",
    tech: ["React", "Vite", "Tauri", "Rust", "GitHub Actions"],
    icon: "🗂",
    links: { repo: "https://github.com/mohameddsh3ban/lo-organizer" },
    featured: false,
    year: "2026",
    role: "Solo build",
    highlights: [
      "Push a version tag → CI ships Windows and macOS installers to a Release",
      "Drag, edit, and move Learning Objectives across syllabus nodes",
      "JSON in, JSON out — no lock-in, no database",
    ],
    story: [
      {
        label: "the tool mindset",
        body: "Big platforms need small tools around them. Pilot 100's courseware is built on EASA Learning Objectives, and someone has to reorganize those trees without hand-editing JSON. Twenty minutes of dragging beats a day of bracket-counting.",
      },
      {
        label: "the ship pipeline",
        body: "One git tag triggers GitHub Actions to build signed-ish installers for both platforms and attach them to a Release. Real users download a real installer — for a tool this size, the release engineering is half the product.",
      },
    ],
    art: "/projects/lo-organizer.webp",
    gallery: [
      {
        src: "/projects/gallery/lo-organizer-app.webp",
        alt: "Ink sketch of a desktop app with a syllabus tree on the left pane and installers rolling out on a conveyor",
        caption: "drag the tree, tag a release, CI does the rest",
      },
    ],
  },
  {
    id: 14,
    number: "14",
    slug: "ols-erp",
    name: "OLS ERP",
    status: "SHIPPED",
    tagline:
      "Enterprise ERP serving 10,000+ users across Kuwait. Built during my Foundation Arc at OLS.",
    description:
      "Multi-tenant ERP serving 10,000+ concurrent users across 25+ corporations in Kuwait. Modules for finance, inventory, HR, reporting. The system that taught me what 'production scale' actually means — and where I learned to make slow things fast.",
    tech: ["PowerBuilder", ".NET", "Angular", "MSSQL"],
    icon: "🏢",
    links: {},
    featured: false,
    year: "2021 — 2024",
    role: "Full-stack developer",
    client: "OLS Kuwait",
    highlights: [
      "Cut application load time by 92% — from 40s to 3s — for 10,000+ concurrent users",
      "Reduced report generation by 95% (from 30s to under 2s) by rewriting 50+ SQL stored procedures",
      "Cleared 100+ tickets weekly through a critical staffing shortage",
      "Three years of production duty across 25+ corporations — the Foundation Arc",
    ],
    metrics: [
      { value: "92%", label: "faster load times (40s → 3s)" },
      { value: "10K+", label: "concurrent users" },
      { value: "25+", label: "corporations served" },
      { value: "95%", label: "faster reports (30s → <2s)" },
    ],
    story: [
      {
        label: "the origin",
        body: "Kuwait, 2021. The first place that paid me to build for real — and expected it to stay up. Multi-tenant ERP means every mistake ships to thousands of users at once. You learn fast or you stop getting deploys.",
      },
      {
        label: "the numbers",
        body: "The legacy frontend took 40 seconds to load. Re-architecting the modules and the data fetching brought it to 3 — a 92% cut felt by 10,000+ concurrent users across 25+ corporations. Then the reports: 50+ stored procedures rewritten, 30 seconds down to under 2.",
      },
      {
        label: "the lesson",
        body: "'Works on my machine' died here. Migrations, backwards compatibility, tenant isolation, reports that must balance to the fils. Everything since is built on this arc.",
      },
    ],
    art: "/projects/ols-erp.webp",
    gallery: [
      {
        src: "/projects/gallery/ols-erp-stopwatch.webp",
        alt: "Ink sketch of a stopwatch split between tangled slow lines and clean fast lines, its red needle pointing to the fast half",
        caption: "40 seconds to 3 — the optimization arc",
      },
    ],
  },
];

/**
 * Locked case-study ordering for prev/next wayfinding (DESIGN.md §18.5,
 * amended 2026-07-19 per Mohamed: Egypt Post POS removed from the site):
 * Pilot 100 → XBRAIN OS → Spytfy → Job Jarvis → Seagull Reservations →
 * Design Way → M2A Web Platforms → XIII Store → CRWN → Ecommerce Factory →
 * Spotify Reimagined → Curify → LO Organizer → OLS ERP.
 * Pilot 100 has no prev; OLS ERP has no next (page wraps it back to /projects).
 */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug: string): { prev: Project | null; next: Project | null } {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return { prev: null, next: null };
  return {
    prev: i > 0 ? projects[i - 1] : null,
    next: i < projects.length - 1 ? projects[i + 1] : null,
  };
}
