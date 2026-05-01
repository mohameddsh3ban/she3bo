# DESIGN.md — Sheb3o V2 Constitution 📜🌶️

**Status:** LOCKED. Do not deviate from this document without explicit approval.
**Owner:** Mohamed Shaban (she3bo)
**Last Updated:** April 2026
**Project:** she3bo.com V2 portfolio

---

## 0. PRIME DIRECTIVES

These five rules override all other considerations. If a request conflicts with them, refuse politely and propose an alternative that respects them.

1. **The paper is sacred.** Background is always cream paper (`#EDE4CC`). Never solid white. Never solid black. Never gradients that obscure the paper feel.
2. **Three colors only.** Cream paper, ink black, brand red. Plus their tonal siblings. No purple. No teal. No "branded blue." Discipline keeps the brand cohesive.
3. **Manga sketch, not corporate flat.** Every visual decision must lean toward "drawn by hand" — rough edges, ink linework, halftone shading, paper grain — not "shipped by a SaaS template."
4. **Sheb3o is the protagonist, Shatta is the sidekick.** Shatta never appears at the same scale as Sheb3o. Shatta is always knee-height or smaller. Shatta amplifies Sheb3o's vibe; he never competes with it.
5. **Function survives style.** Every page must work without animation, without JS, and on a 320px-wide screen. Style is added on top of working content, never in place of it.

---

## 1. BRAND IDENTITY

### 1.1 Names

| Layer | Use | Example |
|-------|-----|---------|
| Formal | SEO, recruiter-facing, page titles, contact form | **Mohamed Shaban** |
| Nickname | Personality moments, easter eggs, casual copy | **she3bo** (lowercase) |
| Domain | Always | **she3bo.com** |

**Never:**
- Don't write "Mohamed Sheb3o" (mixing layers)
- Don't capitalize "She3bo" (always lowercase)
- Don't write "Mr. Shaban" or "M. Shaban" (overly formal)

### 1.2 Tagline (LOCKED — do not edit)

> **Senior full-stack developer. Built like I train. Spicy by default.**

This is the only tagline. It appears in the hero, in meta descriptions, in social preview cards, and nowhere else (don't repeat it on every page — it's a hero-only line).

### 1.3 Voice

- **Direct.** Short sentences. Period. Then the next sentence.
- **Confident, not arrogant.** "I ship what I say I will" not "I'm the best developer you'll ever hire."
- **Dry humor allowed.** Especially around the spicy/heat metaphor. Never cringe-funny.
- **Egyptian-rooted, internationally fluent.** Never hide the Egyptian identity; never lean on it as a gimmick.
- **Never write "passion," "ninja," "rockstar," "10x," "guru."** These words are banned forever from this site.

### 1.4 Personas (Character Bible)

#### Sheb3o (the dev/athlete protagonist)

- 22yo, 185cm, lean welterweight build (NOT bulky/bodybuilder)
- Short black tousled fade haircut, pale fair skin
- **Uniform:** Black athletic tank top, gold dog-tag necklace, dark olive cargo pants, black sneakers with **RED LACES**, black watch on left wrist
- Default expression: calm confident half-smirk
- Personality: calm under pressure, dry humor, doesn't talk about how hard he works

#### Shatta (شطة, the chili sidekick)

- Small palm-sized red habanero chili pepper character
- Big black sunglasses, single curved green stem, tiny stubby arms/legs
- Always has flame somewhere (head/hand/tail)
- **MUST be knee-height or smaller relative to Sheb3o** (mascot scale, NOT co-protagonist)
- Personality: maximum hype, externalizes Sheb3o's inner monologue
- Comedy engine: contrast (calm Sheb3o + unhinged Shatta)
- Speech style: short shouts in caps — "HUFTO!", "TPE!", "YO!", "AKL NAR!"

---

## 2. COLOR SYSTEM (LOCKED)

### 2.1 The Palette

Three color families. That's it. Adding a fourth is a violation of the constitution.

```css
/* PAPER FAMILY (background, surfaces) */
--color-paper:        #EDE4CC;   /* primary background */
--color-paper-grain:  #E5DBC0;   /* subtle texture variant */
--color-paper-shadow: #D4C9A8;   /* card depth, hover states */
--color-paper-deep:   #C9BD9A;   /* maximum paper darkness */

/* INK FAMILY (text, borders, structure) */
--color-ink:        #1A1A1A;   /* primary text, borders */
--color-ink-soft:   #4A4A4A;   /* secondary text */
--color-ink-muted:  #2D2620;   /* body copy (warm dark brown) */
--color-ink-faded:  #6B5F50;   /* labels, captions */

/* BRAND HEAT (accents only — NEVER for body text or backgrounds) */
--color-shatta:      #D62828;   /* the red — primary brand accent */
--color-shatta-deep: #B71D1D;   /* hover/active state */
--color-flame:       #F77F00;   /* flame-themed elements only */
--color-flame-soft:  #FCBF49;   /* rare warm highlight */
```

### 2.2 Color Rules

- Use ink for borders, headings, body text
- Use shatta-red sparingly: button accents, link hovers, the "Spicy" word, easter eggs
- Use flame-orange ONLY when something is literally about heat/power-up
- Use paper-shadow/grain for subtle layering and card depth
- Never use red for body text (it's an accent, not a content color)
- Never use ink-black for backgrounds (the paper is the background, always)
- Never add a fourth color "just for this one section"
- Never use gradients that span two color families
- No blue, green, teal, purple, yellow, magenta — they don't exist on this site

### 2.3 Contrast & Accessibility

All combinations must hit WCAG AA minimum:

| Foreground | Background | Use Case |
|-----------|-----------|----------|
| `--color-ink` (#1A1A1A) | `--color-paper` (#EDE4CC) | All headings, primary text |
| `--color-ink-muted` (#2D2620) | `--color-paper` | Body copy |
| `--color-paper` (#EDE4CC) | `--color-ink` | Reverse-out text on dark blocks |
| `--color-shatta` (#D62828) | `--color-paper` | Accents, links — passes AA |

Never use `--color-ink-faded` for text smaller than 14px on body backgrounds.

---

## 3. TYPOGRAPHY (LOCKED)

### 3.1 Font Stack

```css
--font-display: 'Bangers', 'Anton', system-ui, sans-serif;
--font-body:    'Zen Kaku Gothic New', 'Inter', system-ui, sans-serif;
--font-mono:    'JetBrains Mono', ui-monospace, monospace;
```

Three fonts. No more.

### 3.2 Font Roles

| Font | Role | Examples |
|------|------|----------|
| **Bangers (Display)** | Headings, titles, CTAs, name, speech bubbles | "MOHAMED SHABAN", "EXPERIENCE", "SEE MY WORK" |
| **Zen Kaku Gothic New (Body)** | All prose, paragraphs, descriptions, longer copy | The tagline, project descriptions, about copy |
| **JetBrains Mono (Mono)** | Labels, code, technical detail, captions, metadata | "they call me she3bo", "2024 — 2025", `#EDE4CC` |

### 3.3 Type Scale

```css
/* Display (Bangers) */
h1: clamp(3rem, 12vw, 9rem);      /* hero name */
h2: clamp(2rem, 5vw, 4rem);        /* section titles */
h3: clamp(1.5rem, 3vw, 2.5rem);    /* subsection titles */
h4: clamp(1.25rem, 2vw, 1.75rem);  /* card titles */

/* Body (Zen Kaku Gothic) */
body:        16px;     /* default */
body-large:  1.125rem; /* lead paragraphs, taglines */
body-small:  0.875rem; /* secondary content */

/* Mono (JetBrains Mono) */
mono:       0.875rem;  /* default labels */
mono-small: 0.75rem;   /* micro-captions */
```

### 3.4 Typography Rules

- Use Bangers UPPERCASE always — it's a display face designed for it
- Use Zen Kaku for any text longer than 5 words
- Use JetBrains Mono for technical/meta info, never for prose
- Use `letter-spacing: 0.08em` on Bangers buttons (improves readability)
- Use `line-height: 1.6` for body, `1.1` for display
- Never use Bangers for paragraphs (illegible at length)
- Never use Zen Kaku for buttons (too soft for CTAs)
- Never mix more than 2 fonts in one component
- Never use italic Bangers (it doesn't have a proper italic)
- Never use any other font, ever

---

## 4. SPACING & RHYTHM

### 4.1 Spacing Scale

```css
--spacing-xs:  0.5rem;   /*   8px — tight gaps */
--spacing-sm:  1rem;     /*  16px — element gaps */
--spacing-md:  2rem;     /*  32px — component padding */
--spacing-lg:  4rem;     /*  64px — section padding */
--spacing-xl:  8rem;     /* 128px — major section gaps */
--spacing-2xl: 12rem;    /* 192px — between major page zones */
```

### 4.2 Layout Rules

- **Sections** have minimum vertical padding of `--spacing-xl` on desktop, `--spacing-lg` on mobile
- **Components** inside sections use `--spacing-md` for internal padding
- **Text blocks** use `--spacing-sm` between paragraphs
- **Max content width:** 1400px on desktop. Centered. Never go wider.
- **Reading column max:** 70ch for prose. Never let body copy stretch full-width.

### 4.3 Breakpoints

```css
mobile:  < 768px
tablet:  768px - 1023px
desktop: 1024px+
wide:    1440px+
```

Mobile-first always. Build for mobile, enhance for desktop.

---

## 5. INK & BORDERS (the manga signature)

### 5.1 Border Weights

```css
--ink-thin:   1px;   /* subtle dividers, sketch lines */
--ink-medium: 2px;   /* default borders */
--ink-thick:  3px;   /* component borders, primary CTAs */
--ink-bold:   5px;   /* hero elements, panel borders */
--ink-heavy:  8px;   /* accent moments, decorative */
```

### 5.2 Border Rules

- Borders are always **solid**, never dashed (except for placeholders/dev states)
- Border color is always `--color-ink`, never paper or red
- Use `border-radius: 0` or `2px` maximum — sharp corners are part of the manga feel
- Hover lifts use `transform: translate(-2px, -2px)` + grow shadow, not opacity

### 5.3 The Ink Shadow (signature element)

The "manga sticker" shadow is our signature button/card effect:

```css
.ink-shadow-primary {
  box-shadow: 4px 4px 0 0 var(--color-shatta); /* red shadow */
}

.ink-shadow-secondary {
  box-shadow: 4px 4px 0 0 var(--color-ink); /* black shadow */
}

/* On hover, shadow grows: */
:hover {
  transform: translate(-2px, -2px);
  box-shadow: 6px 6px 0 0 var(--color-shatta);
}
```

This pattern repeats across buttons, cards, and panels for cohesion.

---

## 6. COMPONENTS

### 6.1 Approved Component Library

These components are approved. Do not invent new ones without justification.

| Component | Purpose | Notes |
|-----------|---------|-------|
| `BaseLayout.astro` | Root template | Has SEO, fonts, paper canvas |
| `PaperPanel.astro` | Section container | 3 variants: default, shadow, sketch |
| `SpeechBubble.astro` | Manga speech bubbles | 4 tail directions, normal + shout |
| `InkButton.astro` | All CTAs | 3 variants: primary, secondary, ghost |
| `Sheb3oFigure.astro` | Sheb3o positioned image | Wraps `<img>` with positioning |
| `ShattaSidekick.astro` | Shatta positioned image | Always knee-height or smaller |
| `MangaPanel.astro` | Project/experience cards | Manga-style with sharp corners |
| `Navigation.astro` | Top sticky nav | Ink underlines on hover |
| `SectionHeader.astro` | "EXPERIENCE", "PROJECTS" titles | Display font + ink underline |

### 6.2 Component Rules

- Reuse existing components before building new
- Pass props for variation, never hardcode
- Match the locked palette via CSS vars, never hex
- Build mobile-first, scale up
- Never create one-off components for single-use scenarios
- Never use inline styles
- Never use Tailwind arbitrary values (`bg-[#FF0000]`) — break glass only
- Never add new color classes without updating tokens.css

---

## 7. ASSET USAGE (the locked image library)

### 7.1 Sheb3o Asset Map

| Asset | File | Where Used | Do Not |
|-------|------|------------|--------|
| Hero pose | `/images/sheb3o/hero.png` | Homepage hero | Don't crop, don't recolor |
| Coding pose | `/images/sheb3o/coding.png` | Featured projects intro | Don't separate from laptop |
| Wave | `/images/sheb3o/wave.png` | Contact section | Don't flip horizontally |
| Flex | `/images/sheb3o/flex.png` | Skills/Stats section | Don't recolor |
| Sprinting | `/images/sheb3o/sprinting.png` | Section transitions | Don't crop ember trail |
| Power-up | `/images/sheb3o/powerup.png` | Konami easter egg only | Don't show by default |
| Portrait | `/images/sheb3o/powerup-portrait.png` | About section, dividers | Don't use as primary hero |

### 7.2 Shatta Asset Map

| Asset | File | Pairs With | Notes |
|-------|------|-----------|-------|
| Wave | `/images/shatta/wave.png` | Contact pose | Always knee-height |
| Flag | `/images/shatta/flag.png` | Sprinting pose | Position on shoulder |
| Flex | `/images/shatta/flex.png` | Flex pose | Mirror Sheb3o's pose |
| Power-up | `/images/shatta/powerup.png` | Konami pose | Beside Sheb3o, both burning |
| Solo HUFTO | `/images/shatta/solo-hufto.png` | Standalone, 404, loading | Standalone use only |

### 7.3 Image Rules

- Always use Astro's `<Image />` component for optimization (auto WebP/AVIF)
- Always include meaningful `alt` text describing the scene
- Position with CSS, not by editing the source PNG
- Use the cutout PNGs (transparent backgrounds) for layering flexibility
- Never recolor character art (the palette is in the art itself)
- Never stretch character images non-proportionally
- Never generate new character poses without checking with the bible
- Never use Sheb3o art on third-party sites without context

---

## 8. ANIMATION & MOTION

### 8.1 Motion Philosophy

Motion is **punctuation, not paragraph.** Every animation must earn its place by improving comprehension or delight. If it doesn't, cut it.

### 8.2 Approved Animations

| Animation | Use | Duration | Easing |
|-----------|-----|----------|--------|
| Hover lift | Buttons, cards | 150ms | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` (snap) |
| Ink underline draw | Links | 300ms | `cubic-bezier(0.68, -0.55, 0.265, 1.55)` (snap) |
| Page enter fade | First load | 600ms | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (smooth) |
| Scroll-triggered fade-up | Section entries | 800ms | `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (smooth) |
| Sheb3o breath | Hero idle | 4s loop | `ease-in-out` |
| Shatta hop | Idle hype | 1.2s loop | `ease-in-out` |
| Konami explosion | Easter egg | 2s | spring |

### 8.3 Motion Rules

- Respect `prefers-reduced-motion` always — disable all decorative animation
- Keep animation durations under 800ms unless it's a deliberate "moment"
- Use CSS animations over JS where possible
- Use `transform` and `opacity` only for performance — never animate `width`, `height`, `top`, `left`
- Never auto-play looping animations that distract from content
- Never animate text on scroll (creates jarring readability issues)
- Never use bouncing/wobbling effects on professional content (only on Shatta)
- Never animate page transitions for more than 400ms (feels slow)

---

## 9. CONTENT STRUCTURE

### 9.1 Page Hierarchy (homepage)

```
1. HERO              — Sheb3o + name + tagline + 2 CTAs
2. NAVIGATION        — Sticky bar (revealed on scroll)
3. EXPERIENCE        — 3 manga panels (m2a-fm, Army arc, OLS Kuwait)
4. ABOUT             — Story-driven, athlete-coder narrative
5. SKILLS            — Tech stack as "cursed techniques"
6. PROJECTS          — Filterable grid (30+ projects, lazy-loaded)
7. CONTACT           — Form + Sheb3o waving + Shatta hyping
8. FOOTER            — Minimal, paper signature feel
9. EASTER EGG        — Konami code → power-up explosion overlay
```

### 9.2 Section Order Rule

**Experience comes before projects, always.** Recruiters need senior credibility established (m2a-fm GmbH, Senior Full-Stack) before they evaluate the project gallery. Skills come after experience because they're a deeper-dive.

### 9.3 Copy Length Targets

| Section | Word Count | Why |
|---------|-----------|-----|
| Hero tagline | 9 words | Locked, never changes |
| Experience role | 60–100 words each | Enough to flex, not enough to bore |
| About | 200–350 words | Story-driven, paragraph-based |
| Skills intro | <50 words | Then list does the work |
| Project description | 80–150 words each | Tech, problem, outcome |
| Contact intro | <30 words | Form does the talking |

---

## 10. THE EXPERIENCE NARRATIVE (LOCKED FRAMING)

The career story is told as a manga arc:

### 10.1 Three-Arc Structure

```
ARC 1: FOUNDATION ARC      → OLS Kuwait, 2021–2024
ARC 2: TRAINING ARC        → Mandatory military service, 2024–2025
ARC 3: ASCENSION ARC       → m2a-fm GmbH (current senior role)
```

Each arc gets:
- A title (manga-themed)
- A date range
- A role title
- 2–3 bullet points of impact
- Tech stack tags (chip-style)

### 10.2 Approved Arc Copy Patterns

**OLS Kuwait (Foundation Arc):**
> Started here. Three years of full-stack work in Kuwait. Built [X], shipped [Y], learned how production systems actually fail.

**Army (Training Arc):**
> Mandatory military service. One year off the keyboard. Discipline forged in a different dojo. Returned sharper.

**m2a-fm GmbH (Ascension Arc):**
> Senior full-stack developer at a German company. [Brief impact statement]. Currently in the [current focus].

### 10.3 Don't Frame It As

- Never "I had a gap year" (defensive framing)
- Never "Career break" (sounds passive)
- Never "Pursuing personal projects" (vague, weak)
- Use "Training arc" / "Mandatory service forged the discipline" (active, intentional)

---

## 11. SEO & METADATA

### 11.1 Page Titles

Pattern: `[Page] — Mohamed Shaban | she3bo`

Examples:
- Homepage: `Mohamed Shaban — Senior Full-Stack Developer`
- Projects: `Projects — Mohamed Shaban | she3bo`
- Contact: `Contact — Mohamed Shaban | she3bo`

### 11.2 Meta Descriptions

Always under 160 characters. Always include the tagline or a tight variant.

Default: `Senior full-stack developer. Built like I train. Spicy by default. Currently at m2a-fm GmbH.`

### 11.3 OpenGraph

OG image is the locked hero composition. Generated once at 1200x630px and cached. Never auto-generated per page.

### 11.4 Schema.org

Person schema on every page. Includes:
- name: "Mohamed Shaban"
- alternateName: "she3bo"
- jobTitle: "Senior Full-Stack Developer"
- worksFor: m2a-fm GmbH
- url: she3bo.com
- sameAs: GitHub, LinkedIn, Twitter (when added)

---

## 12. TECHNICAL CONSTRAINTS

### 12.1 Stack Lock

```
Framework:      Astro 6.1.x (do not jump to 7.x without review)
Styling:        Tailwind v4 + CSS custom properties
Interactivity:  Svelte 5 (only when needed — islands architecture)
Deploy:         Cloudflare Pages
Image:          Astro <Image /> with WebP/AVIF
Fonts:          Google Fonts (preconnected, swap-display)
```

### 12.2 Performance Budgets

| Metric | Target | Hard Limit |
|--------|--------|-----------|
| Total page weight (homepage) | < 800 KB | < 1.2 MB |
| First Contentful Paint | < 1.0s | < 1.8s |
| Time to Interactive | < 1.5s | < 3.0s |
| Lighthouse Performance | 95+ | 90+ |
| Lighthouse Accessibility | 100 | 95+ |
| Lighthouse SEO | 100 | 95+ |

### 12.3 No-JS Floor

The site MUST work with JavaScript disabled. Specifically:
- All content visible
- All links functional
- Hero, experience, projects, contact all readable
- Only optional enhancements (filters, modals, easter egg) require JS

### 12.4 Browser Support

- Modern evergreen browsers (Chrome, Edge, Firefox, Safari — last 2 versions)
- Mobile Safari iOS 15+
- Mobile Chrome Android 12+
- No IE11. No legacy Edge.

---

## 13. SHATTA RULES (the sidekick contract)

Special rules for the Shatta character because misusing him would damage the brand.

### 13.1 Where Shatta Appears

- Hero (with "HUFTO!" speech bubble)
- Featured project intro (with "TPE!" bubble)
- Contact section (with "YO!" bubble)
- Loading states (solo, animated)
- 404 page (solo, "AKL NAR!")
- Konami easter egg (full power-up duo)
- Hover state on certain links (tiny appearance)

### 13.2 Where Shatta DOES NOT Appear

- About section (this is Sheb3o's solo moment)
- Experience timeline (this is professional, no jokes)
- Skills technical breakdowns (text-only)
- Footer (keep it clean)
- Any form labels (don't make recruiters smile while filling forms)

### 13.3 Shatta Speech Bubble Rules

- ALWAYS in caps
- ALWAYS short (1–3 words)
- Only Egyptian/Arabic transliterations or single English exclamations
- Approved vocab: HUFTO! · TPE! · YO! · AKL NAR! · BAS! · YALLA! · KHALAS! · NAR! · WAH!

---

## 14. EASTER EGGS

### 14.1 Approved Easter Eggs

1. **Konami Code** (`↑↑↓↓←→←→BA`) — triggers Sheb3o + Shatta power-up explosion overlay for 3 seconds
2. **Logo click 5x** — Shatta solo appears in corner with "BAS!" bubble for 2s
3. **404 page** — Shatta lost in scribbles with "AKL NAR!" bubble + "go back home" link
4. **Loading states** — Shatta solo doing tiny hop animation
5. **Hover on the chili emoji in hero tagline** — small flame burst

### 14.2 Easter Egg Rules

- Discoverable but not intrusive
- Never block functionality
- Always dismissible (Esc key or click)
- Never play sound by default

---

## 15. CHECKLIST — BEFORE SHIPPING ANY CHANGE

Run through this list before committing:

- [ ] Does it use only colors from the locked palette?
- [ ] Does it use only one of the three approved fonts?
- [ ] Does it work on mobile (320px wide)?
- [ ] Does it work without JavaScript?
- [ ] Does it pass WCAG AA contrast?
- [ ] Does it use existing components instead of inventing new?
- [ ] Does Sheb3o (if present) follow the character bible?
- [ ] Does Shatta (if present) stay knee-height or smaller?
- [ ] Does it lean toward "manga sketch" not "corporate flat"?
- [ ] Does it respect `prefers-reduced-motion`?
- [ ] Is the copy free of banned words (passion, ninja, rockstar, 10x, guru)?

If any answer is "no" — fix before shipping.

---

## 16. WHEN IN DOUBT

If you (or an AI agent) are unsure about a design decision, default to:

1. **Use the locked palette.** Pick a color from CSS vars.
2. **Use an existing component.** Don't build new.
3. **Lean toward manga sketch.** Sharper borders, ink lines, halftones.
4. **Prioritize Sheb3o, hide Shatta.** When in doubt, fewer Shatta moments, not more.
5. **Ship the static version.** Animation can come in Phase 2.
6. **Ask before deviating.** This document is the source of truth. Updating it requires Mohamed's approval.

---

## 17. APPENDIX — REFERENCE LINKS

- Astro 6 docs: https://docs.astro.build
- Tailwind v4 docs: https://tailwindcss.com
- WCAG AA: https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html
- Bangers font: https://fonts.google.com/specimen/Bangers
- Zen Kaku Gothic: https://fonts.google.com/specimen/Zen+Kaku+Gothic+New
- JetBrains Mono: https://fonts.google.com/specimen/JetBrains+Mono

---

**END OF DESIGN.md** 📜🌶️

This is the constitution. Everything else flows from this.
