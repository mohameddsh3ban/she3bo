# TASKS.md — Sheb3o.com V2: the road to "best personal web page ever"

> **Single prioritized backlog to final.** Derived from the master project context
> (Definition of Done §13), `DESIGN.md` (the locked constitution), the character boards
> ([`CHARACTER-SHEB3O.md`](CHARACTER-SHEB3O.md), [`CHARACTER-SHATTA.md`](CHARACTER-SHATTA.md)),
> and a full codebase audit (2026-06-17).
>
> **Legend:** `P0` blocking · `P1` high · `P2` medium · `P3` polish/nice-to-have.
> **Governance on conflict:** `DESIGN.md` wins on design system; master context / Manga Bible
> wins on character & manga canon. Before any change, read `DESIGN.md`.
>
> Work top-down. Each phase has an **Exit criterion** — don't advance until it's met.

---

## 📍 Where we are today (audit snapshot)

- ✅ **Home** (`src/pages/index.astro`) — fully built: hero, stats, featured, origin teaser, power bars, arcs, final CTA, JS spine-climber. Dev server boots clean (Astro v6.1.10, `localhost:4321`).
- ✅ **/about** (`src/pages/about.astro`) — the Origin Manga: 22 panels / 4 arcs structure delivered with `MangaPanel` placeholders (`status="awaiting MJ"`). **No real art yet.**
- ✅ **Character boards** authored + reviewed ([`CHARACTER-SHEB3O.md`](CHARACTER-SHEB3O.md), [`CHARACTER-SHATTA.md`](CHARACTER-SHATTA.md)).
- ⚠️ **Only 2 real routes.** Nav links `/experience`, `/skills`, `/projects`, `/contact` all **404**. Section components for these exist but are orphaned.
- ⚠️ **Asset/path drift, missing assets, no easter eggs, raw `<img>` (no `<Image/>`), test routes still present.** Details in the phases below.

---

## ✅ Decisions log

| Date | Decision | Ruling |
|------|----------|--------|
| 2026-06-17 | Tagline wording | **"Built like a train."** is canonical (DESIGN.md §1.2 + shipped). Master-context "Built like I train." is a typo → fix the master context. |
| 2026-06-17 | Sheb3o skin tone | **Warm tan, Cairo sun-exposed** wins over DESIGN.md §1.4 "pale/fair." Update DESIGN.md + all 22 panel prompts. |
| 2026-06-17 | Deliverable | This task backlog (no full specs yet). |

### ❓ Open rulings (needed before the dependent task)

| # | Question | Blocks |
|---|----------|--------|
| R1 | **Watch wrist** — DESIGN.md §1.4 says **left**; master context §5.1 says **right**. | Character board lock + any panel showing the watch (P17 etc.) |
| R2 | **Shatta on `/skills`** — DESIGN.md §13.2 says Skills is text-only (no Shatta); §18.3 assigns `shatta-flex.png` as a margin doodle. | `T-4.3` Skills page |
| R3 | **`--color-ink-muted` value** — DESIGN.md §2.1 `#2D2620` vs master context `#5C5C5C` vs `about.astro` fallback `#6b6354`. | `T-1.1` token reconciliation |
| R4 | **Projects scope** — master context defers the 30+ Projects gallery. Confirm it stays out of v1 launch. | `T-4.4` |

---

## Phase 0 — Canon reconciliation (P0, fast, do first)

Make the source-of-truth docs agree before building on them.

- [ ] **T-0.1 `P0`** Update `DESIGN.md` §1.4: skin tone "pale fair" → **"warm tan, sun-exposed"** (per ruling). Add a one-line changelog note.
- [ ] **T-0.2 `P0`** Update `DESIGN.md` §7.1 / §7.2 stale asset paths to match §18.3 reality (`/she3bo/sheb3o-*.png`, `/shata/shatta-*.png`, no `/images/` prefix; `powerup-portrait.png` → `sheb3o-powerup2.png`). Or add a "§18.3 supersedes §7" banner.
- [ ] **T-0.3 `P1`** Fix the master-context tagline typo → "Built like a train." Commit the master context to the repo as **`PROJECT.md`** (the markdown index it's meant to be).
- [ ] **T-0.4 `P1`** Resolve R1 (watch wrist) and R2 (`/skills` Shatta); update both character boards + `DESIGN.md` to remove the inline ⚠️ flags.
- [ ] **T-0.5 `P2`** Apply the warm-tan change to all 22 Midjourney prompts (add "warm tan skin, sun-exposed" to each character-bearing prompt) in `PROJECT.md` / the bible.

**Exit:** `DESIGN.md`, `PROJECT.md`, and the two character boards contain no contradictory canon and no open ⚠️ flags (except intentionally deferred ones).

---

## Phase 1 — Foundation hardening (P0/P1)

Lock the design system and clean the asset layer before scaling pages.

- [ ] **T-1.1 `P0`** Reconcile design tokens in `src/styles/tokens.css` against `DESIGN.md` §2.1 exactly: paper family, ink family (incl. R3 ruling for `--color-ink-muted`), shatta/flame. No raw hex anywhere in components — CSS vars only (DESIGN.md §6.2).
- [ ] **T-1.2 `P0`** Confirm `src/layouts/BaseLayout.astro` loads **all three** fonts (Bangers, Zen Kaku Gothic New, JetBrains Mono) with `font-display: swap` + preconnect (DESIGN.md §3, §12.1). Fix if any is missing.
- [ ] **T-1.3 `P1`** Adopt Astro `<Image />` for every character/raster asset (WebP/AVIF). The hero PNG is ~6.37 MB raw — must come down to hit the §12.2 budget (homepage < 800 KB target, < 1.2 MB hard).
- [ ] **T-1.4 `P1`** Asset hygiene:
  - Delete the malformed `public/{images/{sheb3o,shatta,textures},fonts}` brace-expansion directory (Windows artifact).
  - Resolve the `public/images/sheb3o/` duplicates (`sheb3o-coding.png`, `sheb3o-wave.png`) — standardize on `/she3bo/`, delete the dupes after T-2.x rewires components.
  - Add or remove the `paper-grain.png` reference: `global.css` points at `/images/textures/paper-grain.png` which doesn't exist (grain never renders). Either ship the texture or drop the rule.
- [ ] **T-1.5 `P2`** Build the two missing approved components (DESIGN.md §6.1) to centralize the rules:
  - `Sheb3oFigure.astro` — wraps `<Image/>` with positioning props.
  - `ShattaSidekick.astro` — enforces knee-height/smaller scale by construction.
- [ ] **T-1.6 `P2`** Generate/commit the missing `shatta-solo-hufto.png` cutout (needed for 404 + loading states, DESIGN.md §7.2/§14).

**Exit:** locked palette via vars only, three fonts loading, all images through `<Image/>`, `public/` clean, no broken texture reference.

---

## Phase 2 — Routing & navigation (P0/P1)

Fix the broken site graph. Currently 4 nav links 404.

- [ ] **T-2.1 `P0`** Create the missing real routes from existing section components (DESIGN.md §18.6): `/experience`, `/skills`, `/projects`, `/contact`. Each uses `BaseLayout` directly (§18.1) + the locked Chapter-Cover header (§18.2) + breadcrumb (§18.5).
- [ ] **T-2.2 `P1`** Fix the `/images/sheb3o/...` prefix violation in the section components being wired (`About.astro`, `Contact*.astro`) → `/she3bo/...` (DESIGN.md §18.3). Pick ONE contact variant (4 exist) and delete the rest.
- [ ] **T-2.3 `P1`** Wire cross-page CTAs per §18.7 (Home → About → Experience → Skills → Projects → Contact reading flow).
- [ ] **T-2.4 `P1`** Add View Transitions fade between routes (§18.4: 250ms out / 300ms in; instant under reduced-motion). Confirm nav + footer persist across navigation.
- [ ] **T-2.5 `P2`** Build the `/404` page (DESIGN.md §18.2/§18.3: `sheb3o-powerup2.png` + Shatta solo "AKL NAR!").
- [ ] **T-2.6 `P0`** **Before prod only:** delete `src/pages/test/**`, the `*-test.astro` pages, and `src/layouts/PlaygroundLayout.astro` (DESIGN.md §18.6). Keep until Phase 6 so they remain a reference.

**Exit:** every nav link resolves 200; no 404 from internal links; test routes removed before deploy.

---

## Phase 3 — `/about`: the Origin Manga to final (P1) ⭐ the centerpiece

This is the page that proves the whole concept. The success test: a recruiter who reads
only the panels can recount Mohamed's arc, philosophy, and the ACL turning point.

### Manga generation (pipeline: MJ backgrounds + CSS-layered cutouts, master ctx §10)

- [ ] **T-3.1 `P1`** **Batch 1 — proof of concept:** generate panels **P1, P2, P6, P15** (establishing / kid age 5 / canon adult / hospital hero). Validate style lock + the cutout-compositing pipeline end-to-end. Variant-battle: render options, compare in browser, lock winners. (Max 4 gens/panel, then pivot composition — master ctx §10.4.)
- [ ] **T-3.2 `P1`** Batch 2 — P3, P4, P5 (Origin arc completion).
- [ ] **T-3.3 `P1`** Batch 3 — P7, P8, P9, P10 (Foundation arc).
- [ ] **T-3.4 `P1`** Batch 4 — P11, P12, P13, P14, P16 (Training arc; P14 the injury is hardest — see failure playbook master ctx §14.3).
- [ ] **T-3.5 `P1`** Batch 5 — P17–P22 (Ascension arc + finale).

### Post-production & wiring

- [ ] **T-3.6 `P1`** Composite Sheb3o/Shatta transparent cutouts onto each background (Photoshop). Enforce: warm-tan skin (T-0.5), canon outfit, Shatta knee-height, palette discipline (cream + ink + red only).
- [ ] **T-3.7 `P1`** Export WebP 75–85%, **200–400 KB/panel**; PNG masters → `/public/manga/originals/`; rejects → `/public/manga/rejected/`; production → `/public/manga/` (naming `panel-NN-arc-slug.webp`).
- [ ] **T-3.8 `P1`** Replace placeholder SVGs in `about.astro` with real assets; write `alt` text from each panel's Scene field; all panels `loading="lazy"`.
- [ ] **T-3.9 `P2`** Decide + (if yes) activate the **P15 desktop breakout** via the `[BREAKOUT HOOK]` cell; same for the P22 finale splash.
- [ ] **T-3.10 `P1`** Mobile pass: total page weight **< 4 MB**, lazy-load verified, aspect ratios hold, tilts zeroed < 760px, SFX scale via `clamp()`.
- [ ] **T-3.11 `P3`** (post-launch) IntersectionObserver per-panel fade-in (300ms ease-out, reduced-motion safe); tap-to-zoom.

**Exit:** all 22 panels real, on-brand, performant; the recruiter narrative test passes (master ctx §2). Fallbacks in master ctx §14.6 if it doesn't.

---

## Phase 4 — Remaining chapters (P1/P2)

- [ ] **T-4.1 `P2`** **Home** polish pass — already built; verify against DESIGN.md checklist §15, tune perf, confirm hero `<Image/>`.
- [ ] **T-4.2 `P1`** **/experience** — three-arc timeline (Foundation/Training/Ascension, master ctx §3, DESIGN.md §10). Professional, **no Shatta** (§13.2). Sprinting Sheb3o asset (§18.3).
- [ ] **T-4.3 `P1`** **/skills** — "Cursed Techniques" domain cards. Resolve R2 (Shatta doodle?). Flex Sheb3o asset per §18.3 if ruled in.
- [ ] **T-4.4 `P2`** **/projects** — index + case studies. **Confirm R4** (master ctx defers the 30+ gallery). If deferred, ship a minimal index + the Pilot 100 case study only; case-study pages need prev/next nav (§18.5).
- [ ] **T-4.5 `P1`** **/contact** — pick the single contact variant; wave Sheb3o (§18.3); form works **without JS** (§12.3); no Shatta in form labels (§13.2).

**Exit:** every chapter in the §11 site map is either shipped or explicitly deferred with a note.

---

## Phase 5 — Interactivity & easter eggs (P2/P3)

Enhancements ONLY — the no-JS floor (DESIGN.md §12.3) must already hold. Svelte 5 islands only where needed.

- [ ] **T-5.1 `P2`** Render Shatta's shouts via `SpeechBubble variant="shout"` in the approved spots (Hero HUFTO!, Featured TPE!, Contact YO!) — currently the shout variant is defined but never used; live bubbles are off-vocab. (Character board §6/§13.)
- [ ] **T-5.2 `P3`** Konami code → Sheb3o + Shatta power-up overlay (`sheb3o-powerup.png` + `shatta-powerup.png`), 3s, dismissible, silent (§14).
- [ ] **T-5.3 `P3`** Logo-click-5× → Shatta "BAS!" corner pop (§14.1).
- [ ] **T-5.4 `P3`** Loading-state Shatta hop + hero 🌶️ hover flame burst (§14.1).
- [ ] **T-5.5 `P3`** (Optional) "Sheb3o breath" hero idle (4s loop, §8.2), reduced-motion safe.

**Exit:** eggs are discoverable, dismissible, silent, and never block content; reduced-motion disables all.

---

## Phase 6 — Quality gate (P0 before launch)

Run against DESIGN.md §15 checklist + §12 budgets. Web testing priority order: visual regression → a11y → performance → cross-browser → responsive.

- [ ] **T-6.1 `P0`** **No-JS floor:** disable JS — all content, links, hero, experience, projects, contact still work (§12.3).
- [ ] **T-6.2 `P0`** **Responsive:** 320 / 375 / 768 / 1024 / 1440 / 1920 — no overflow, touch targets OK (DESIGN.md §4.3; build mobile-first).
- [ ] **T-6.3 `P0`** **Accessibility:** WCAG AA contrast on every palette pairing (§2.3), keyboard nav, focus states, `prefers-reduced-motion` honored. Target Lighthouse a11y 100.
- [ ] **T-6.4 `P0`** **Performance:** hit §12.2 — LCP < 2.5s, CLS < 0.1, homepage < 800 KB; Lighthouse Perf 95+. (Hero image is the main risk — see T-1.3.)
- [ ] **T-6.5 `P1`** **Cross-browser:** Chrome, Edge, Firefox, Safari (last 2); iOS Safari 15+, Android Chrome 12+ (§12.4).
- [ ] **T-6.6 `P1`** **Brand audit:** run the full DESIGN.md §15 checklist — locked palette only, 3 fonts only, manga-sketch not corporate-flat, Shatta knee-height everywhere, **no banned words** (passion/ninja/rockstar/10x/guru), section order (Experience before Projects).

**Exit:** every §15 box ticked; Lighthouse Perf 95+ / A11y 100 / SEO 100.

---

## Phase 7 — Launch & freeze (P0)

- [ ] **T-7.1 `P1`** SEO/meta: page titles per §11.1, meta descriptions < 160ch with the tagline (§11.2), `Person` schema on every page (§11.4: name "Mohamed Shaban", alternateName "she3bo", jobTitle, worksFor m2a-fm GmbH).
- [ ] **T-7.2 `P1`** OG image: the locked hero composition, 1200×630, cached, not auto-generated (§11.3). Verify `sitemap` + `robots.txt`.
- [ ] **T-7.3 `P0`** Deploy to **Cloudflare Pages** (`npm run build` → `dist`). Point `she3bo.com` → V2; `v1.she3bo.com` → old archive.
- [ ] **T-7.4 `P1`** Post-deploy recruiter test (master ctx §2 success criterion). If it fails → master ctx §14.6 fallbacks.
- [ ] **T-7.5 `P2`** On ship: freeze `sheb3omangabible.pdf` as **v1.0-FINAL**; open v2.0 only for a Phase-2 manga.

**Exit:** live on `she3bo.com`, all gates green, bible frozen.

---

## Done (this session)

- [x] Analyzed project + ran dev server (Astro v6.1.10).
- [x] Authored [`CHARACTER-SHEB3O.md`](CHARACTER-SHEB3O.md) + [`CHARACTER-SHATTA.md`](CHARACTER-SHATTA.md) (canon-harvested, adversarially reviewed, corrected, warm-tan ruling applied, conflicts flagged).
- [x] This backlog.
- [x] **Character pipeline (Higgsfield):** 3 north-star refs uploaded + 3 standardized 4K boards generated (`brand/character-boards/` + `sources/`). Pipeline + reusable media_ids saved to memory.
- [x] **Phase 0 — canon reconciliation:** DESIGN.md §1.4 (warm tan, lean-athletic, mitten hands, visual-source pointer); R1 watch=left & skin=tan settled in the boards.
- [x] **Phase 1 — foundation:** paper-grain 404 removed; redundant `transition:animate` removed; `.projects-final` override moved out of global.css; `src/data/nav.ts` created; font preload added. (Tokens + 3 fonts + View Transitions were already DESIGN-compliant.)
- [x] **Phase 1 — components:** `ChapterCover`, `Breadcrumb`, `ChapterNav` distilled from the locked `/test` winners (`src/components/ui/`).
- [x] **Phase 2 — nav + routes:** nav + footer moved into BaseLayout with `transition:persist` (fixes §18.4 flash) + path-aware active + clickable logo. Built all §18.6 routes — `/experience /skills /projects /projects/[slug]×6 /contact /404` — each with chapter cover + breadcrumb; fixed the `/images/` path bug; `projects.ts` slugs + `getAdjacentProjects()`.
- [x] **Phase 2 cleanup (§18.6):** deleted `/test` tree, `*-test` pages, 3 dead layouts, 2 losing nav variants, 6 losing section variants, dup `public/images`.
- [x] **Verified:** clean production build (13 pages, 0 errors); all routes serve 200; 404 renders; zero `/images/` leaks; nav+cover+single-h1 on inner pages.

---

## Suggested order of attack

**This week:** Phase 0 (reconcile canon) → Phase 1 (foundation) → Phase 2 (routing) — unblocks everything and kills the 404s.
**Then:** Phase 3 Batch 1 (prove the manga pipeline before committing to all 5 batches).
**Then:** Phases 4–7 to launch. Projects gallery (R4) is the natural deferral if you want to ship sooner.
