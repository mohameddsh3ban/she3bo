export interface Project {
  id: number;
  number: string;
  name: string;
  status: "LIVE" | "PRIVATE BETA" | "SHIPPED" | "DEMO" | "ARCHIVED";
  tagline: string;
  description: string;
  tech: string[];
  icon: string;
  links: { live?: string; repo?: string; demo?: string };
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    number: "01",
    name: "PILOT 100",
    status: "LIVE",
    tagline:
      "#1 ranked aviation training platform. Where future pilots learn theory before the cockpit.",
    description:
      "ATPLQ-style aviation training platform teaching pilots the theoretical foundation of flight. Ranked #1 in the aviation training category. Built for scale, used in real flight schools.",
    tech: ["Angular", "NestJS", "Firebase", "TypeScript", "Firestore"],
    icon: "✈",
    links: { live: "#" },
    featured: true,
  },
  {
    id: 2,
    number: "02",
    name: "JOB JARVIS",
    status: "PRIVATE BETA",
    tagline:
      "Your AI job-hunt agent. Auto-apply, smart resumes, MCP-powered. Hunts while you sleep.",
    description:
      "Full-stack AI platform: Chrome extension + locally-trained model + MCP integration + auto-apply + AI resume builder + smart recommendations. Currently dogfooding with friends. Public release when the idea proves itself.",
    tech: ["Angular", "NestJS", "Firebase", "Chrome Extension", "Local LLM", "MCP"],
    icon: "🤖",
    links: {},
    featured: false,
  },
  {
    id: 3,
    number: "03",
    name: "XIII STORE",
    status: "LIVE",
    tagline:
      "E-commerce at Amazon-scale architecture. Storefront, admin, payments, inventory — all custom-built.",
    description:
      "Production-grade e-commerce platform with custom admin dashboard. Built to demonstrate end-to-end e-commerce domain mastery — products, orders, payments, inventory, customer management, all from scratch.",
    tech: ["Angular", "Firebase Cloud Functions", "Firebase", "Firestore", "TypeScript"],
    icon: "🛒",
    links: { live: "#" },
    featured: false,
  },
  {
    id: 4,
    number: "04",
    name: "SPOTIFY REIMAGINED",
    status: "LIVE",
    tagline:
      "Spotify, but reimagined. Original UI/UX, full audio playback, my take on what music apps should feel like.",
    description:
      "Music streaming app clone with completely original UI/UX. Audio playback, playlists, search, library management — wrapped in a design system I built from the ground up.",
    tech: ["Angular", "Spotify API", "TypeScript", "RxJS"],
    icon: "🎵",
    links: { live: "#" },
    featured: false,
  },
  {
    id: 5,
    number: "05",
    name: "CURIFY",
    status: "DEMO",
    tagline:
      "For people whose bodies don't follow the rules. Symptom tracking, medication logs, life-impact data.",
    description:
      "Health platform for people living with chronic disease. Track symptoms, medications, flare-ups, and life impact over time. Built to give patients data they can actually use.",
    tech: ["Angular", "NestJS", "PostgreSQL", "TypeScript"],
    icon: "⚕",
    links: { demo: "#" },
    featured: false,
  },
  {
    id: 6,
    number: "06",
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
  },
];
