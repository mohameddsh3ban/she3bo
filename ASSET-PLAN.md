# ASSET-PLAN.md — Character & Page Art (no-duplication map)

> **Goal:** every surface gets its OWN art. **One asset = one place.** No pose is reused
> across two surfaces. Generated via the locked Higgsfield pipeline (Nano Banana Pro,
> reference-locked to the character boards in `brand/character-boards/`) so every new
> variant matches the north-star style + Sheb3o/Shatta canon.
>
> **Scope of this plan:** Home, Experience, Skills, Projects (index + 6 case studies),
> Contact, 404. **`/about` is parked** — its 22-panel Origin Manga is a separate later batch.
> Companion canon: [`CHARACTER-SHEB3O.md`](CHARACTER-SHEB3O.md), [`CHARACTER-SHATTA.md`](CHARACTER-SHATTA.md), `DESIGN.md` §7/§13/§18.3.

---

## 0. Principles

1. **One-asset-one-surface.** If a pose is used somewhere, it is used *only* there.
2. **Sheb3o canon** (every figure): warm tan sun-exposed skin, messy black hair, black tank, gold dog-tag, olive cargos, black sneakers **red laces**, watch on **left** wrist, calm half-smirk, lean-athletic. Transparent-background cutout PNG. Never recolor.
3. **Shatta canon:** red chili, big black shades, green stem, mitten hands/feet, ever-present flame. **Knee-height or smaller**, always. Transparent cutout PNG.
4. **Style lock:** manga ink/sketch on transparent bg (so the cream paper shows through), matching the character boards. Project key-art = framed manga panels in the same ink style.
5. **§13.2 honored:** no Shatta on Experience (professional) or inside Skills technical cards.

---

## 1. Current inventory (11 assets) & where they LOCK to

After this plan, each existing asset stays at exactly ONE surface (its Home home):

| Asset | LOCKED to (only) | Notes |
|---|---|---|
| `she3bo/sheb3o-hero.png` | Home — hero | the duo, embedded Shatta ✓ |
| `she3bo/sheb3o-coding.png` | Home — origin teaser | (revisit when `/about` is built) |
| `she3bo/sheb3o-flex.png` | Home — stats | → Skills must get its own |
| `she3bo/sheb3o-sprinting.png` | Home — final CTA | → Experience must get its own |
| `she3bo/sheb3o-wave.png` | **Contact — cover** | moved off Home; Home CTA keeps shatta-wave |
| `she3bo/sheb3o-powerup.png` | reserve — Konami egg (future) | not on a page |
| `she3bo/sheb3o-powerup2.png` | 404 — cover | ✓ unique |
| `shata/shatta-powerup.png` | Home — spine climber | → Featured + 404 must get their own |
| `shata/shatta-flex.png` | Home — stats sidekick | → Skills doodle dropped (§13.2) |
| `shata/shatta-flag.png` | Home — current-arc flag | ✓ unique |
| `shata/shatta-wave.png` | Home — final CTA sidekick | ✓ unique |

---

## 2. Target map — every surface → its single asset

| # | Surface | Sheb3o asset | Shatta asset | Status |
|---|---|---|---|---|
| Home hero | `/` ch I | sheb3o-hero | (embedded) | keep |
| Home stats | `/` ch II | sheb3o-flex | shatta-flex | keep |
| Home featured | `/` ch III | — | **shatta-point ⟵ NEW** | new |
| Home origin teaser | `/` ch IV | sheb3o-coding | — | keep |
| Home arcs | `/` ch V | — | shatta-flag | keep |
| Home final CTA | `/` ch VI | sheb3o-sprinting | shatta-wave | keep |
| Home spine climber | `/` global | — | shatta-powerup | keep |
| **Experience** | `/experience` | **sheb3o-march ⟵ NEW** | none (§13.2) | new |
| **Skills** | `/skills` | **sheb3o-technique ⟵ NEW** | none (drop doodle, §13.2) | new |
| **Projects index** | `/projects` | **sheb3o-build ⟵ NEW** | — | new |
| **Project case studies** | `/projects/[slug]` ×6 | — | — | **6 × key-art ⟵ NEW** |
| **Contact cover** | `/contact` | sheb3o-wave (moved here) | — | re-point |
| **Contact section** | `/contact` | — (drop dup wave) | **shatta-yo ⟵ NEW** | new |
| 404 | `/404` | sheb3o-powerup2 | **shatta-lost ⟵ NEW** | new |

---

## 3. NEW ASSETS NEEDED

### 3A. Sheb3o — 3 new poses (transparent cutout PNG, full-body, portrait ~3:4)

| File | Surface | Pose & intent | Higgsfield prompt direction |
|---|---|---|---|
| `she3bo/sheb3o-march.png` | /experience cover ("THREE ARCS") | Walking forward mid-stride, slight limp energy, small duffel over one shoulder, looking ahead — the "walking out, forged" vibe of the Training arc. Distinct from sprinting (no motion blur, grounded). | "full-body manga cutout of Sheb3o mid-stride walking forward, duffel bag on one shoulder, determined calm look, [canon outfit + warm tan], transparent background, ink sketch" — ref-locked to sheb3o board |
| `she3bo/sheb3o-technique.png` | /skills cover ("CURSED TECHNIQUES") | Battle-ready stance, one palm thrust forward (casting a "technique"), faint ink-speed lines — NOT the flex pose. Power without bulk. | "full-body manga cutout of Sheb3o in a ready combat stance, one open palm pushed toward camera, sharp focus, [canon outfit + warm tan], transparent bg, ink sketch, subtle motion lines" |
| `she3bo/sheb3o-build.png` | /projects cover ("THE ISSUES") | Sleeves-pushed, gesturing/presenting toward his work — arms mid-explanation, confident. The "here's what I shipped" pose. | "full-body manga cutout of Sheb3o presenting/gesturing with one hand open to the side, sleeves of tank, confident half-smirk, [canon outfit + warm tan], transparent bg, ink sketch" |

### 3B. Shatta — 3 new poses (transparent cutout PNG, small, knee-height-or-less)

| File | Surface | Pose & shout | Higgsfield prompt direction |
|---|---|---|---|
| `shata/shatta-point.png` | Home featured card (Pilot 100) | Arm thrust out pointing up-right, hyped — pairs with the "TPE!" energy. | "small red chili mascot Shatta pointing enthusiastically up and to the side, big black shades, green stem, mitten hands, small flame, transparent bg, ink+watercolour sketch" — ref-locked to shatta board |
| `shata/shatta-yo.png` | /contact section | One stubby arm raised in a greeting/'YO!' wave, cool lean. Canonical §13.1 contact = "YO!". | "small red chili mascot Shatta raising one arm in a cool 'yo' greeting, shades, green stem, mitten hands, flame, transparent bg, ink sketch" |
| `shata/shatta-lost.png` | /404 | Scratching head, confused, lost among scribbles — §14.1 "AKL NAR!". | "small red chili mascot Shatta scratching its head looking lost/confused, shrug, shades, green stem, mitten hands, flame flickering low, transparent bg, ink sketch" |

### 3C. Project key-art — 6 new framed manga panels (landscape ~16:9 or square, framed — NOT transparent)

Each project gets ONE key-art, used as its index thumbnail **and** its case-study hero (same project identity, not cross-surface reuse). Manga-panel style, cream paper, ink + single red accent, **no characters** (typographic/object focus). Replaces the current typographic thumbnails.

| File | Project | Visual motif |
|---|---|---|
| `projects/pilot-100.png` | Pilot 100 | Cockpit horizon / artificial-horizon instrument, runway vanishing point, "#1" stamp |
| `projects/job-jarvis.png` | Job Jarvis | Small robot/agent scanning a stack of résumés, MCP plug motif, night-shift lamp |
| `projects/xiii-store.png` | XIII Store | Storefront window / shopping-cart silhouette at scale, "XIII" mark |
| `projects/spotify.png` | Spotify Reimagined | Waveform / play-triangle, headphones, original-UI panels |
| `projects/curify.png` | Curify | Pulse line / pill + calendar grid, gentle (health, not clinical-cold) |
| `projects/ols-erp.png` | OLS ERP | Enterprise modules grid / ledger + warehouse, Kuwait skyline hint |

> Style-lock note: project key-art uses the manga-sketch STYLE reference (duo board) but no character refs. Single red accent only; cream paper; ink linework. Keep them readable as small thumbnails.

---

## 4. Edits that pair with the new assets (code, after generation)

- **Home featured card:** swap `shatta-powerup` → `shatta-point` (index.astro:119).
- **Experience cover:** `sheb3o-sprinting` → `sheb3o-march` (experience.astro:18).
- **Skills cover:** `sheb3o-flex` → `sheb3o-technique`; **remove** the `shatta-flex` doodle (skills.astro:20,25) per §13.2.
- **Projects index:** add `sheb3o-build` to the ChapterCover (currently typographic) + render `projects/*` key-art in `ProjectThumbnail` (replace typographic block).
- **Project case studies:** add the project's key-art as the case-study hero in `[slug].astro`.
- **Contact:** cover keeps `sheb3o-wave`; **section** drops the duplicate wave and uses `shatta-yo` + a real "YO!" `SpeechBubble` (currently the section shows a second wave with off-canon "TILL NEXT TIME!"). Also flag: contact section layout reads thin/empty — a density pass (tighter grid, supporting copy) is recommended alongside.
- **404:** add `shatta-lost` (replacing the borrowed `shatta-powerup`) next to the existing `sheb3o-powerup2` + "AKL NAR!" bubble.

---

## 5. Generation batches (Higgsfield, reference-locked)

All via Nano Banana Pro, reference-locked to the saved board media_ids (see project memory):
- Sheb3o refs: `d7716fbc…` (sheet), `b9d63336…` (duo). Shatta ref: `7cc9fe68…` (solo).

| Batch | Assets | Ref | Output |
|---|---|---|---|
| **A — Sheb3o poses** | sheb3o-march, sheb3o-technique, sheb3o-build | Sheb3o sheet/duo | transparent cutout PNG, ~3:4 |
| **B — Shatta poses** | shatta-point, shatta-yo, shatta-lost | Shatta solo | transparent cutout PNG, small |
| **C — Project key-art** | 6 project panels | duo (style only) | framed panels, ~16:9 |

Post: background-removal for A/B (transparent), export WebP for web, drop into `public/she3bo/`, `public/shata/`, `public/projects/`; then wire per §4.

---

## 6. Open scope decisions

- **D1 — Project key-art (6):** generate all 6 now, or ship Projects with the `sheb3o-build` cover + improved typographic thumbnails first and add key-art later? (6 panels is the biggest single batch.)
- **D2 — Skills Shatta:** confirm DROP the doodle (honors §13.2 text-only) vs. keep one new knee-height doodle (needs a 4th new Shatta pose).
- **D3 — Contact section:** assets-only fix (swap to shatta-yo) now, or also do the layout density pass in the same go?
- **D4 — Transparent backgrounds:** confirm Nano Banana Pro outputs usable transparency, or plan a `remove_background` step (Higgsfield supports it).

**Totals:** 6 character poses (3 Sheb3o + 3 Shatta) + 6 project key-art = **12 new assets** (or 6 if D1 defers project key-art).

---

## 7. STATUS — DELIVERED (2026-06-17)

Decisions: D1 = generate all 6 key-art ✓ · D2 = keep a Skills doodle (+1 Shatta `shatta-study`) ✓ · D3 = Contact assets + layout density pass ✓. → **13 new assets** generated, cut out, and wired.

- ✅ **3 Sheb3o cutouts** (`sheb3o-march`/`-technique`/`-build`) + **4 Shatta cutouts** (`shatta-point`/`-yo`/`-lost`/`-study`) — generated via Nano Banana Pro (ref-locked to the boards), background-removed to transparent PNG.
- ✅ **6 project key-art** in `public/projects/` (pilot-100, job-jarvis, xiii-store, spotify, curify, ols-erp).
- ✅ Wired: Experience→march, Skills→technique (+study doodle), Projects→build cover + key-art thumbnails + case-study heroes, Home featured→point, Contact section→shatta-yo + `YO!` bubble (deduped the double wave) + **layout density pass**, 404→lost.
- ✅ **No-duplication verified:** every asset used by exactly one surface; all referenced files exist; clean build (13 pages).
- ⏳ **Follow-up (Phase 6 perf):** project key-art are ~5 MB PNGs — convert to WebP / route through Astro `<Image/>` before deploy (DESIGN.md §12.2 budget).

