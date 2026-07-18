export interface ProjectStorySection {
  /** Mono label rendered as "// the …" section header. */
  label: string;
  body: string;
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
  links: { live?: string; repo?: string; demo?: string };
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
      "ATPLQ-style aviation training platform teaching pilots the theoretical foundation of flight. Ranked #1 in the aviation training category. Built for scale, used in real flight schools.",
    tech: ["Angular 20", "NestJS", "PostgreSQL", "Redis", "CQRS", "AWS"],
    icon: "✈",
    links: { live: "https://pilot100atpl.com", demo: "https://pilot100-deck.vercel.app" },
    featured: true,
    year: "2025 — NOW",
    role: "Lead engineer",
    highlights: [
      "Ranked #1 in its aviation-training category",
      "Used by real flight schools — not demo accounts",
      "ATPL theory engine: question banks, syllabus trees, progress tracking",
      "Angular front, NestJS API, PostgreSQL and Redis underneath",
    ],
    story: [
      {
        label: "the mission",
        body: "Pilots spend years on theory before they touch a cockpit. Pilot 100 makes that theory trainable — structured, measurable, ATPL-grade. Study, drill, track, pass.",
      },
      {
        label: "the build",
        body: "Angular on the front, NestJS on the API, PostgreSQL and Redis holding it together — a CQRS exam engine deployed to AWS. Built as a monorepo and shipped continuously. The ecosystem grew its own tooling along the way — an animated investor brief, and LO Organizer, a desktop app for reshaping EASA syllabus trees.",
      },
      {
        label: "the receipts",
        body: "Ranked #1 in its category. Real flight schools run it daily. That is the whole pitch.",
      },
    ],
    art: "/projects/pilot-100.webp",
  },
  {
    id: 2,
    number: "02",
    slug: "egypt-post-pos",
    name: "EGYPT POST POS",
    status: "PILOT",
    tagline:
      "Rebuilding the point-of-sale for every post office in Egypt. ~3,700 counters. Government-grade.",
    description:
      "Greenfield modernization of Egypt Post's national counter system — postal, financial, government, and bill-payment transactions with a full audit trail. Replaces a legacy .NET 4.8 stack and its security flaws with a .NET 10 modular monolith built to a financial-grade bar.",
    tech: [".NET 10", "WPF", "Oracle", "Dapper", "Keycloak", "HashiCorp Vault", "QuestPDF", "OpenTelemetry"],
    icon: "📮",
    links: {},
    featured: false,
    year: "2026",
    role: "Architect & lead builder",
    client: "Egypt Post",
    highlights: [
      "National scale: designed for ~3,700 post-office counters",
      "Keycloak OIDC + mTLS, AES-256-GCM, Vault-managed secrets, hash-chained tamper-evident audit log",
      "All 10 build phases code-complete and verified — now gated on the national pilot",
      "Bilingual Arabic/English WPF client with full RTL",
    ],
    story: [
      {
        label: "the legacy",
        body: "The old counter app ran WinForms on .NET Framework, raw-SQL web methods, TripleDES in ECB mode, MD5 hashing, plaintext credentials. It processed the nation's postal and financial transactions anyway. It had to go.",
      },
      {
        label: "the rebuild",
        body: "Modular monolith, Clean Architecture per module. A MediatR pipeline enforces validation, idempotency, transactions, and audit on every command. Dapper with parameterized SQL only. Oracle behind it, Data Guard for failover, Crystal Reports out, QuestPDF in.",
      },
      {
        label: "the hardening",
        body: "STRIDE threat models per module. A chaos suite, 2× peak-load certification, disaster-recovery runbooks, automated ZAP scans. Rollout happens in four waves — after the pilot proves it in a real branch.",
      },
    ],
  },
  {
    id: 3,
    number: "03",
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
  },
  {
    id: 4,
    number: "04",
    slug: "spytfy",
    name: "SPYTFY",
    status: "OPEN SOURCE",
    tagline:
      "Your Spotify library, downloaded as a real music library. Paste a link, own the files.",
    description:
      "Desktop app that turns Spotify tracks, albums, and playlists into properly tagged 320 kbps MP3s — real cover art, ID3v2.4 metadata, clean folder structure. Rust core, Angular face. No cloud, no telemetry, fully offline after setup.",
    tech: ["Tauri 2", "Rust", "Tokio", "Angular 20", "SQLite", "ffmpeg"],
    icon: "🎧",
    links: { repo: "https://github.com/mohameddsh3ban/spytfy" },
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
  },
  {
    id: 5,
    number: "05",
    slug: "job-jarvis",
    name: "JOB JARVIS",
    status: "PRIVATE BETA",
    tagline:
      "Your AI job-hunt agent. Auto-apply, smart resumes, MCP-powered. Hunts while you sleep.",
    description:
      "Full-stack AI platform: Chrome extension + locally-trained model + MCP integration + auto-apply + AI resume builder + smart recommendations. Currently dogfooding with friends. Public release when the idea proves itself.",
    tech: ["Angular", "NestJS", "Prisma", "PostgreSQL", "Claude AI", "Chrome Extension", "MCP"],
    icon: "🤖",
    links: {},
    featured: false,
    year: "2025 — NOW",
    role: "Solo build",
    highlights: [
      "Chrome extension + locally-trained model + MCP integration",
      "Auto-apply engine that works the boards while you sleep",
      "AI resume builder with its own dedicated generation pipeline",
      "Dogfooding with friends before any public release",
    ],
    story: [
      {
        label: "the problem",
        body: "Job hunting is a full-time job with no pay. The searching, the tailoring, the form-filling — all of it is repetitive, structured work. Repetitive, structured work is what software is for.",
      },
      {
        label: "the system",
        body: "A Chrome extension watches the boards. A locally-trained model reads the postings. MCP wires the pieces together. The resume builder grew into its own pipeline — templates, tailoring, generation — feeding the auto-apply engine.",
      },
      {
        label: "the discipline",
        body: "No launch theater. Friends use it, feedback comes in, the model improves. It goes public when it earns it.",
      },
    ],
    art: "/projects/job-jarvis.webp",
  },
  {
    id: 6,
    number: "06",
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
  },
  {
    id: 7,
    number: "07",
    slug: "course-platform",
    name: "COURSE PLATFORM",
    status: "PRIVATE BETA",
    tagline:
      "Arabic-first paid course platform engineered to run at $0/month. Forever. No card on file.",
    description:
      "RTL Arabic learning platform selling courses in EGP — built to survive indefinitely on free tiers. There is no server: all privileged logic lives inside Postgres as SECURITY DEFINER functions behind default-deny row-level security. The service-role key is never used. Anywhere.",
    tech: ["Angular 20", "Supabase", "PostgreSQL", "Tailwind v4", "Cloudflare Pages", "GitHub Actions"],
    icon: "🎓",
    links: {},
    featured: false,
    year: "2026 — NOW",
    role: "Solo build",
    highlights: [
      "$0/month infrastructure by engineering, not hope — keep-alive pings and weekly backups run on GitHub Actions",
      "Default-deny RLS on every table; the public anon key is the only key that ships",
      "Full RTL discipline: logical CSS properties only, ar-EG locale, integer-cents EGP money",
      "Realtime payment review + WhatsApp deep links instead of a support inbox",
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
  },
  {
    id: 8,
    number: "08",
    slug: "m2a-platforms",
    name: "M2A WEB PLATFORMS",
    status: "LIVE",
    tagline:
      "The web ecosystem of a German facility-management group. Landings, logistics, one senior dev.",
    description:
      "The digital surface of M2A Group — the holding-company landing, the facility-management site, and a logistics platform with its own backend. Designed, built, and shipped during the Ascension Arc as the group's senior full-stack developer.",
    tech: ["Astro", "TypeScript", "React", "Prisma", "Node.js", "Tailwind"],
    icon: "🏗",
    links: { live: "https://m2a-fm.de" },
    featured: false,
    year: "2025 — NOW",
    role: "Senior full-stack developer",
    client: "M2A Group (m2a-fm GmbH)",
    highlights: [
      "Holding-company landing: dark-luxury single-fold experience",
      "Facility-management web presence at m2a-fm.de",
      "Logistics platform with a Prisma-backed backend",
      "Multiple brands, one design-and-delivery pipeline",
    ],
    story: [
      {
        label: "the scope",
        body: "A holding group has faces: the group itself, the facility-management company, the logistics arm. Each needs its own site, its own tone, and a shared standard of quality — shipped by one developer without a design department.",
      },
      {
        label: "the delivery",
        body: "Astro for the landings — fast, static, zero JavaScript where none is needed. The logistics platform is the deep end: a full application with a Prisma-backed API underneath. Same repo discipline, same review bar, different weights.",
      },
    ],
  },
  {
    id: 9,
    number: "09",
    slug: "xiii-store",
    name: "XIII STORE",
    status: "LIVE",
    tagline:
      "Production-grade e-commerce with a custom admin dashboard. Storefront, payments, inventory — all custom-built.",
    description:
      "Production-grade e-commerce platform with custom admin dashboard. Built to demonstrate end-to-end e-commerce domain mastery — products, orders, payments, inventory, customer management, all from scratch.",
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
  },
  {
    id: 10,
    number: "10",
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
  },
  {
    id: 11,
    number: "11",
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
  },
  {
    id: 12,
    number: "12",
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
  },
  {
    id: 13,
    number: "13",
    slug: "ols-erp",
    name: "OLS ERP",
    status: "SHIPPED",
    tagline:
      "Enterprise ERP serving thousands of clients across Kuwait. Built during my Foundation Arc at OLS.",
    description:
      "Multi-tenant ERP serving thousands of clients in Kuwait. Modules for finance, inventory, HR, reporting. The system that taught me what 'production scale' actually means.",
    tech: ["PowerBuilder", ".NET", "Angular", "MSSQL"],
    icon: "🏢",
    links: {},
    featured: false,
    year: "2021 — 2024",
    role: "Full-stack developer",
    client: "OLS Kuwait",
    highlights: [
      "Multi-tenant ERP serving thousands of clients in Kuwait",
      "Finance, inventory, HR, and reporting modules",
      "Three years of production duty — the Foundation Arc",
    ],
    story: [
      {
        label: "the origin",
        body: "Kuwait, 2021. The first place that paid me to build for real — and expected it to stay up. Multi-tenant ERP means every mistake ships to thousands of clients at once. You learn fast or you stop getting deploys.",
      },
      {
        label: "the lesson",
        body: "'Works on my machine' died here. Migrations, backwards compatibility, tenant isolation, reports that must balance to the pound. Everything since is built on this arc.",
      },
    ],
    art: "/projects/ols-erp.webp",
  },
];

/**
 * Locked case-study ordering for prev/next wayfinding (DESIGN.md §18.5):
 * Pilot 100 → Egypt Post POS → XBRAIN OS → Spytfy → Job Jarvis →
 * Seagull Reservations → Course Platform → M2A Web Platforms → XIII Store →
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
