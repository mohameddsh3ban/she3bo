/**
 * manga.ts — single source of truth for the /about Origin Manga.
 *
 * Drives BOTH the static readable column (no-JS floor) and the GSAP
 * scroll-reel, so order here IS story order. P22 is NOT in this list —
 * it stays the bespoke `.finale` splash in about.astro.
 *
 * ⚠️ The image map is intentionally non-sequential for P4/P5:
 *    P4 ("THE CLICK")          → /manga/panel-05.webp
 *    P5 ("THE MOTORCYCLE SITE")→ /manga/panel-04.webp
 * Never derive `img` from the stamp number.
 */

export interface MangaArc {
  /** 1-based arc index, matches MangaPanelData.arc */
  index: 1 | 2 | 3 | 4;
  roman: string;   // "I"
  title: string;   // "ORIGIN"
  sub: string;     // "// where it starts · Cairo"
  narr: string;    // narration line
}

export interface MangaPanelData {
  stamp: string;   // "P14"
  scene: string;   // "THE INJURY — ACL"
  beat: string;    // one-line caption
  meta: string;    // "16:9 · opener"
  img: string;     // "/manga/panel-NN.webp" — see P4/P5 swap note
  w: number;       // intrinsic px (CLS-free + correct scrollWidth pre-load)
  h: number;
  alt: string;
  arc: 1 | 2 | 3 | 4;
  feature?: boolean; // P15 red anchor
  tilt?: number;     // P14 = -0.6
  sfx?: string;      // P14 = "POP!"
  quote?: string;    // P15 honest-quote
}

export const arcs: MangaArc[] = [
  {
    index: 1,
    roman: "I",
    title: "ORIGIN",
    sub: "// where it starts · Cairo",
    narr: "Cairo. My father wrote software before I could write my own name. The screen was always glowing in the next room — I just wanted in.",
  },
  {
    index: 2,
    roman: "II",
    title: "FOUNDATION",
    sub: "// first blood · Kuwait",
    narr: "Kuwait, 2021. OLS. The first place that paid me to break things and put them back together — and expected them to stay up.",
  },
  {
    index: 3,
    roman: "III",
    title: "TRAINING",
    sub: "// the forge · Armed Forces",
    narr: "Service isn't a choice. Winning it was. Buzzed head, dawn formations, and a body that finally matched the mind — right up until it didn't.",
  },
  {
    index: 4,
    roman: "IV",
    title: "ASCENSION",
    sub: "// the climb · Germany, now",
    narr: "Germany. m2a-fm. Same discipline, bigger stage. Suffering converted to compound interest — and the grind finally has a shape.",
  },
];

export const panels: MangaPanelData[] = [
  // ── ARC I — ORIGIN ──────────────────────────────────────────
  { stamp: "P1", scene: "CAIRO — THE SKYLINE", beat: "Dust, rooftops, a sun coming up over a city that never sleeps.", meta: "16:9 · opener", img: "/manga/panel-01.webp", w: 1600, h: 900, alt: "Cairo — the skyline.", arc: 1 },
  { stamp: "P2", scene: "THE CTO'S SON", beat: "Age 5. Father's monitor glowing. I wanted in.", meta: "4:3", img: "/manga/panel-02.webp", w: 1600, h: 1200, alt: "The CTO's son.", arc: 1 },
  { stamp: "P3", scene: "FIRST BROKEN BUILD", beat: "Age 10. Code that won't run. Pure frustration.", meta: "1:1", img: "/manga/panel-03.webp", w: 1600, h: 1600, alt: "First broken build.", arc: 1 },
  { stamp: "P4", scene: "THE CLICK", beat: "Age 17. The moment the machine finally obeyed.", meta: "1:1", img: "/manga/panel-05.webp", w: 1600, h: 1600, alt: "The click — a monitor reflected in his eye.", arc: 1 },
  { stamp: "P5", scene: "THE MOTORCYCLE SITE", beat: "First real thing I shipped. It worked. I was hooked.", meta: "3:4 · closer", img: "/manga/panel-04.webp", w: 1200, h: 1600, alt: "The motorcycle site — teenage build.", arc: 1 },

  // ── ARC II — FOUNDATION ─────────────────────────────────────
  { stamp: "P6", scene: "OLS KUWAIT — 2021", beat: "First desk that paid me to build for real.", meta: "4:3 · opener", img: "/manga/panel-06.webp", w: 1600, h: 1200, alt: "Ols kuwait — 2021.", arc: 2 },
  { stamp: "P7", scene: "SHIPPING REAL THINGS", beat: "Production code. Real users. Real consequences.", meta: "16:9", img: "/manga/panel-07.webp", w: 1600, h: 900, alt: "Shipping real things.", arc: 2 },
  { stamp: "P8", scene: "THE LATE NIGHTS", beat: "Just me, the bug, and Shatta asleep on the desk.", meta: "4:3", img: "/manga/panel-08.webp", w: 1600, h: 1200, alt: "The late nights.", arc: 2 },
  { stamp: "P9", scene: "LEVELING UP", beat: "The stack grew. So did the confidence.", meta: "16:9", img: "/manga/panel-09.webp", w: 1600, h: 900, alt: "Leveling up.", arc: 2 },
  { stamp: "P10", scene: "THE CALL TO SERVE", beat: "Then the country called. Not optional.", meta: "4:3", img: "/manga/panel-10.webp", w: 1600, h: 1200, alt: "The call to serve.", arc: 2 },

  // ── ARC III — TRAINING ──────────────────────────────────────
  { stamp: "P11", scene: "BASIC — THE FORGE", beat: "Buzzed head. Dawn formation. The grind, weaponized.", meta: "16:9 · opener", img: "/manga/panel-11.webp", w: 1600, h: 900, alt: "Basic — the forge.", arc: 3 },
  { stamp: "P12", scene: "ONE OF TEN THOUSAND", beat: "Placed first athletically. Out of ten-thousand-plus.", meta: "3:4", img: "/manga/panel-12.webp", w: 1200, h: 1600, alt: "One of ten thousand.", arc: 3 },
  { stamp: "P13", scene: "THE GYM KEYS", beat: "Single key. Quiet competence. Not smiling — owning.", meta: "1:1", img: "/manga/panel-13.webp", w: 1600, h: 1600, alt: "The gym keys.", arc: 3 },
  { stamp: "P14", scene: "THE INJURY — ACL", beat: "One bad landing. The sound you can hear.", meta: "4:3", img: "/manga/panel-14.webp", w: 1600, h: 1200, alt: "The injury — acl.", arc: 3, sfx: "POP!", tilt: -0.6 },
  { stamp: "P15", scene: "HOSPITAL BED — THE LAUNCHPAD", beat: "Brace. Laptop on the chest. Code instead of pain.", meta: "4:3 · anchor", img: "/manga/panel-15.webp", w: 1600, h: 1200, alt: "Hospital bed — the launchpad.", arc: 3, feature: true, quote: "“I couldn't run. I couldn't lift. I could type. So I typed.”" },
  { stamp: "P16", scene: "THE RETURN", beat: "Brace still on. Walking out. Not looking back.", meta: "3:4 · rise", img: "/manga/panel-16.webp", w: 1200, h: 1600, alt: "The return.", arc: 3 },

  // ── ARC IV — ASCENSION ──────────────────────────────────────
  { stamp: "P17", scene: "GERMANY — m2a-fm", beat: "New country. New stage. Same discipline.", meta: "1:1", img: "/manga/panel-17.webp", w: 1600, h: 1600, alt: "Germany — m2a-fm.", arc: 4 },
  { stamp: "P18", scene: "FULL STACK, FULL POWER", beat: "Gold dog tag. Canon outfit. The finished build.", meta: "16:9 · reveal", img: "/manga/panel-18.webp", w: 1600, h: 900, alt: "Full stack, full power.", arc: 4 },
  { stamp: "P19", scene: "CODE IS THE DIALECT", beat: "The language is just the accent. The thinking is the skill.", meta: "4:3", img: "/manga/panel-19.webp", w: 1600, h: 1200, alt: "Code is the dialect.", arc: 4 },
  { stamp: "P20", scene: "BUILT LIKE A TRAIN", beat: "Discipline first. Ego last. Results compound.", meta: "3:4", img: "/manga/panel-20.webp", w: 1200, h: 1600, alt: "Built like a train.", arc: 4 },
  { stamp: "P21", scene: "FOUNDER ENERGY", beat: "Same skyline as page one. Different man looking at it.", meta: "3:4 · P1 callback", img: "/manga/panel-21.webp", w: 1200, h: 1600, alt: "Founder energy.", arc: 4 },
];

/** Panels grouped by arc, preserving order — convenience for the reel template. */
export const panelsByArc: Record<number, MangaPanelData[]> = panels.reduce(
  (acc, p) => {
    (acc[p.arc] ||= []).push(p);
    return acc;
  },
  {} as Record<number, MangaPanelData[]>,
);
