# CHARACTER BOARD — SHEB3O 🚂

**Role:** Protagonist (the dev/athlete hero)
**Status:** LOCKED. Companion to [`DESIGN.md`](DESIGN.md) and the project master context (`PROJECT.md`, pending commit). Governance: **DESIGN.md wins on design-system questions; the master context / Manga Bible wins on character & manga canon.** Conflicts are flagged inline.
**Source of truth:** DESIGN.md §0 (Prime Directive 4), §1.1 (Names), §1.2 (Tagline), §1.3 (Voice), §1.4 (Character Bible), §7.1 (Asset Map), §18.3 (Page→Asset); plus the master context Character Bible (§5.1).
**Counterpart:** [`CHARACTER-SHATTA.md`](CHARACTER-SHATTA.md) — the sidekick.

---

## 0. LOGLINE

> A 22-year-old senior full-stack developer from Cairo who builds software the way he trains his body: discipline first, ego last, results compound. Calm half-smirk, dry humor, never talks about how hard he works. **Built like a train. Spicy by default.**

---

## 1. NAMES (LOCKED — DESIGN.md §1.1)

| Layer | Form | When to use |
|-------|------|-------------|
| **Formal** | `Mohamed Shaban` | SEO, page titles, recruiter-facing copy, contact form, schema.org, signatures |
| **Nickname** | `she3bo` (always lowercase) | personality moments, easter eggs, casual copy, nav logo |
| **Character** | `Sheb3o` | when referring to the drawn protagonist / persona |
| **Domain** | `she3bo.com` | always |

**Never:**
- ❌ "Mohamed Sheb3o" (mixing layers)
- ❌ "She3bo" capitalized
- ❌ "Mr. Shaban" / "M. Shaban"

> ⚠️ **Naming quirk (intentional, documented):** the brand nickname is **she3bo** (3 before b) but the drawn character and the asset filenames are **sheb3o** (b before 3). Asset *folder* is `/she3bo/`, asset *files* are `sheb3o-*.png`. Don't "correct" either — both are canon.

---

## 2. VITALS (DESIGN.md §1.4)

| Attribute | Value |
|-----------|-------|
| Age | 22 |
| Height | 185 cm |
| Build | Lean welterweight — **NOT bulky / not a bodybuilder** |
| Hair | Short black, tousled fade |
| Skin | **Warm tan** — Cairo native, sun-exposed |
| Default expression | Calm, confident half-smirk |
| Origin | Cairo, Egypt |
| Now | Senior full-stack developer @ m2a-fm GmbH, Germany |

> ✅ **Skin-tone (ruled 2026-06-17 — DESIGN.md §1.4 now updated):** warm tan, sun-exposed. Use **"warm tan skin, sun-exposed"** in every generation prompt.

---

## 3. MODEL SHEET — APPEARANCE

The look is fixed. Character art is generated to this spec (Midjourney + manual Photoshop cutouts) and **must never be recolored or restyled** (DESIGN.md §7.3).

- **Face:** calm, composed, a confident half-smirk — never a big toothy grin, never scowling.
- **Hair:** short black tousled fade. (Shown **buzzed** only in the military *Training arc* beats — buzz growing back in the hospital era, fully back by the current era.)
- **Skin:** warm tan — Cairo native, sun-exposed (darker still in the army/Training-arc panels).
- **Build:** athletic but lean — a runner/welterweight silhouette, not gym-bro mass.
- **Posture:** grounded, relaxed dominance. He owns the frame; he doesn't pose for it.

**Canonical scars / honest details (lore, not always drawn):**
- ACL knee injury — "One bad landing" (`about.astro` P14, SFX `POP!`).
- The hospital-bed beat: brace on, laptop on the chest, coding through recovery (P15–P16).

---

## 4. WARDROBE — THE CANON OUTFIT (DESIGN.md §1.4)

The uniform is **locked**. Every full-body pose wears it. Reinforced in-story at `about.astro` P18 ("FULL STACK, FULL POWER — Gold dog tag. Canon outfit. The finished build.").

| Item | Detail |
|------|--------|
| Top | Black athletic tank top |
| Necklace | Gold dog-tag |
| Pants | Dark olive cargo pants |
| Shoes | Black sneakers with **RED LACES** |
| Watch | Black watch, **left** wrist (confirmed by north-star refs + board) |

> 🌶️ **The red laces are the only brand-red (`#D62828`) element that lives inside Sheb3o's art.** Everything else on him is ink/olive/black. The red is a deliberate single accent — the same discipline the whole site follows (DESIGN.md §2.2).

---

## 5. PERSONALITY & PSYCHOLOGY (DESIGN.md §1.3–§1.4)

- **Calm under pressure.** The steady half of the duo. (Shatta is the loud half — see §9.)
- **Dry humor.** Allowed, encouraged — never cringe-funny.
- **Doesn't talk about how hard he works.** "Discipline first, ego last, results compound."
- **Confident, not arrogant.** "I ship what I say I will" — *not* "I'm the best developer you'll ever hire."
- **Egyptian-rooted, internationally fluent.** Never hides the Egyptian identity; never leans on it as a gimmick.
- **Treats code like training:** *"The flashy stuff impresses people once. The boring discipline ships products for years."*
- **Problem-reader first:** *"Code is just my dialect — the real work is reading the problem before writing the solution."*
- **Off the keyboard:** lifting, running, eating spicy food, *"and beating Shatta in arguments he doesn't know we're having."*

---

## 6. VOICE & SPEECH (DESIGN.md §1.2–§1.3)

Sheb3o **owns the prose register** — the first-person monologue, the signoff, the calm narration. He is *"the protagonist"* in every section subtitle (`// the protagonist's stats`, `// the protagonist's monologue`, `// the protagonist's signoff`).

- **Cadence:** Direct. Short sentences. Period. Then the next sentence.
- **He does NOT shout.** The caps exclamations (HUFTO!, TPE!, YO!, AKL NAR!) belong to **Shatta** — Sheb3o is the calm one. (See [`CHARACTER-SHATTA.md`](CHARACTER-SHATTA.md) §6.)
- **Signs off as:** `— Mohamed Shaban` or `— Mohamed Shaban (she3bo)`.

### The locked tagline (DESIGN.md §1.2 — hero-only, never edit)

> **Senior full-stack developer. Built like a train. Spicy by default.**

Appears in the hero, the meta description, and social cards — **and nowhere else**. Don't repeat it on every page.

### 🚫 Banned words — forever (DESIGN.md §1.3, §15)

`passion` · `ninja` · `rockstar` · `10x` · `guru`

These never appear in Sheb3o's copy — or anywhere on the site.

---

## 7. BACKSTORY — THE ORIGIN MANGA (4 arcs, `about.astro`)

The career is told as a manga arc. Sheb3o is the narrated protagonist across 22 panels / 4 arcs.

| Arc | Title | Setting | Beat |
|-----|-------|---------|------|
| **I** | ORIGIN | Cairo | CTO father, glowing monitor in the next room. First broken builds at 10. "The click" at 17. First shipped site (a motorcycle site). |
| **II** | FOUNDATION | Kuwait, 2021 (OLS) | First desk that paid him to build for real. Production code, real users, real consequences. Late nights — *"just me, the bug, and Shatta asleep on the desk."* |
| **III** | TRAINING | Egyptian Armed Forces (mandatory service) | "Service isn't a choice. Winning it was." Placed **first athletically out of 10,000+**. Then the **ACL injury** — and coding from a hospital bed: *"I couldn't run. I couldn't lift. I could type. So I typed."* |
| **IV** | ASCENSION | Germany, now (m2a-fm) | Same discipline, bigger stage. "Built like a train. Discipline first. Ego last. Results compound." Final callback to the Cairo skyline: *"Same skyline as page one. Different man looking at it."* |

**Finale (P22):** *"Sheb3o and Shatta, into the open cream void. No panels. No borders. Neither looking back."*

> The career framing is **locked** (DESIGN.md §10): Foundation Arc (OLS Kuwait 2021–2024) → Training Arc (mandatory service 2024–2025) → Ascension Arc (m2a-fm GmbH, current). Never frame the service year as a "gap year," "career break," or "personal projects."

---

## 8. POSE & ASSET LIBRARY

All character art is transparent-cutout PNG. **Position with CSS, never edit the source PNG. Never recolor. Never stretch non-proportionally.** (DESIGN.md §7.1, §7.3)

> 📁 **Path scheme (canon — DESIGN.md §18.3):** folder `/she3bo/`, files `sheb3o-*.png`, **no `/images/` prefix**. The `/images/sheb3o/...` paths in DESIGN.md §7.1 and README are **stale** — see §13.

| Pose | File (canon path) | Where used | Pairs with Shatta | Do NOT |
|------|-------------------|-----------|-------------------|--------|
| **Hero** | `/she3bo/sheb3o-hero.png` | Homepage hero (`index.astro`) | Shatta **embedded** in the PNG + "HUFTO!" | Don't crop, don't recolor |
| **Coding** | `/she3bo/sheb3o-coding.png` | About / Origin teaser | Shatta **embedded** as knee-height margin doodle + "TPE!" | Don't separate from laptop |
| **Flex** | `/she3bo/sheb3o-flex.png` | Stats / Skills | `shatta-flex.png` (mirrors the pose) | Don't recolor |
| **Sprinting** | `/she3bo/sheb3o-sprinting.png` | Section transitions / final CTA / Experience | `shatta-flag.png` (on shoulder) | Don't crop the ember trail |
| **Wave** | `/she3bo/sheb3o-wave.png` | Contact | `shatta-wave.png` (knee-height) | Don't flip horizontally |
| **Power-up** | `/she3bo/sheb3o-powerup.png` | Konami easter egg **only** | `shatta-powerup.png` (both burning) | Don't show by default |
| **Power-up 2 (explosion)** | `/she3bo/sheb3o-powerup2.png` | 404 page (§18.3) | optional `shatta-powerup.png` | Don't use as the primary hero |

> DESIGN.md §7.1 & README call the last asset `powerup-portrait.png` and map it to "About section, dividers"; the **actual shipped file is `sheb3o-powerup2.png`**, which §18.3 (the corrected map) reassigns to **/404 only**. Use the shipped name and the §18.3 role.

### Scale reference (how big Sheb3o renders, shipped homepage)

| Pose | Desktop max | Mobile max |
|------|-------------|-----------|
| Hero | 580 px | 320 px |
| Coding | 500 px | 280 px |
| Flex | 400 px | 250 px |
| Sprinting (CTA) | 320 px | 220 px |

Sheb3o is always the dominant figure. The paired Shatta is always far smaller (knee-height-or-less) — see §9 and [`CHARACTER-SHATTA.md`](CHARACTER-SHATTA.md) §8.

---

## 9. RELATIONSHIP WITH SHATTA (the duo)

**Prime Directive 4 (DESIGN.md §0):** *Sheb3o is the protagonist, Shatta is the sidekick. Shatta never appears at the same scale as Sheb3o. Shatta amplifies Sheb3o's vibe; he never competes with it.*

- **Comedy engine = contrast.** Calm, composed Sheb3o + unhinged, maximum-hype Shatta. Shatta shouts out loud what Sheb3o is thinking silently — he *externalizes Sheb3o's inner monologue*.
- **Voice split.** Sheb3o owns prose/monologue/signoff. Shatta owns the caps shouts. Sheb3o never shouts.
- **Scale dominance is law.** Every paired render keeps Shatta knee-height or smaller (e.g. final CTA: Sheb3o 320 px vs Shatta wave 110 px). In the hero and coding poses, Shatta is **baked into Sheb3o's PNG** as a small embedded mascot — physically guaranteeing he stays subordinate.
- **The bond.** Bickering desk-buddy ("beating Shatta in arguments he doesn't know we're having") who stays loyal at the lowest point ("Shatta on the screen edge, holding a flame" — the hospital-bed panel).
- **Tie-breaker (DESIGN.md §16):** when in doubt, *prioritize Sheb3o, hide Shatta. Fewer Shatta moments, not more.*

---

## 10. ANIMATION & MOTION (DESIGN.md §8)

- **Approved (spec):** "Sheb3o breath" — a 4s ease-in-out idle breathing loop on the hero. *(Currently spec-only; the shipped hero is a static `<img>`.)*
- **Around him (shipped):** button snap-lift on his CTAs (`translate(-3px,-3px)` + red ink shadow), CV-link arrow rotate, page-enter fade (Astro View Transitions, 250/300 ms).
- **Rule:** motion is *punctuation, not paragraph*. Respect `prefers-reduced-motion` always. Never animate `width/height/top/left` — `transform`/`opacity` only.

---

## 11. WHERE SHEB3O APPEARS

Sheb3o is the dominant figure **everywhere he appears**. There is no section where he is "forbidden" — the About section is explicitly **his solo moment** (DESIGN.md §13.2).

**Lives on the homepage:** hero (CH I), Stats (CH II), Origin teaser/coding (CH IV), final "TO BE CONTINUED" CTA (CH VI). Plus the protagonist voice throughout (nickname, name, tagline).

**Page→primary-asset map (DESIGN.md §18.3):**

| Page | Sheb3o asset |
|------|--------------|
| `/` Home | `sheb3o-hero.png` |
| `/about` | `sheb3o-coding.png` |
| `/experience` | `sheb3o-sprinting.png` |
| `/skills` | `sheb3o-flex.png` |
| `/projects` (index) | *typographic — no character image* |
| `/contact` | `sheb3o-wave.png` |
| `/404` | `sheb3o-powerup2.png` |
| Konami egg | `sheb3o-powerup.png` (full reveal) |

**Text/data-only (no Sheb3o art by design):** Experience timeline, Projects grid/cards, Footer.

> ⚠️ **Conflict (needs ruling):** DESIGN.md §13.2 says Skills is "text-only," but the §18.3 page→asset map above assigns `sheb3o-flex.png` (+ a `shatta-flex.png` doodle) to `/skills`. Decide whether `/skills` carries the flex art or stays text-only. Tracked in [`TASKS.md`](TASKS.md).

---

## 12. CANON CHECKLIST (run before drawing/placing Sheb3o)

- [ ] Wears the canon outfit (black tank, gold dog-tag, olive cargos, **red laces**, left-wrist watch)?
- [ ] Lean welterweight build — not bulky?
- [ ] Calm confident half-smirk (not goofy, not angry)?
- [ ] Art is the original color — **not recolored or restretched**?
- [ ] Positioned with CSS, source PNG untouched?
- [ ] He's the dominant figure; any Shatta present is knee-height-or-smaller?
- [ ] Copy is in his voice (short, direct, dry) and **free of banned words**?
- [ ] Tagline used **only** in the hero (not repeated)?
- [ ] Names follow §1 (`Mohamed Shaban` formal / `she3bo` lowercase nickname)?
- [ ] Works at 320px, without JS, WCAG AA, `prefers-reduced-motion` respected?

---

## 13. ASSET REALITY CHECK (doc vs. shipped — for maintainers)

These are live gaps between the documented canon and the current codebase. Useful when wiring real pages.

- **Path-prefix drift (§18.3 violation):** the homepage (`index.astro`) correctly uses `/she3bo/sheb3o-*.png`. But five **orphaned** section components — `About.astro`, `Contact.astro`, `ContactToBeContinued.astro`, `ContactSpeechBubbles.astro`, `ContactLetter.astro` — use the **`/images/sheb3o/...`** prefix, which DESIGN.md §18.3 forbids. These don't 404: two duplicate files (`sheb3o-coding.png`, `sheb3o-wave.png`) were left in `public/images/sheb3o/`, so they resolve to the wrong (duplicate) location — but any *other* asset under that prefix would 404. None of these components are on a live route (they're imported only by deletable `*-test` pages), so the bug never reaches a shipped page today. Fix: standardize to `/she3bo/` and delete the duplicate `public/images/` folder when wiring real routes.
- **Real `/about` renders no character art yet:** the live `about.astro` is built from `MangaPanel` placeholders (`status="awaiting MJ"`), so the §18.3 `/about → sheb3o-coding.png` assignment is still unfulfilled on the actual route — the `/images/` bug above lives only in the orphaned `About.astro` section component, not on the page.
- **Stale names:** DESIGN.md §7.1 + README use generic `/images/sheb3o/hero.png`, `coding.png`, … and `powerup-portrait.png`. Shipped reality is `/she3bo/sheb3o-hero.png`, … and `sheb3o-powerup2.png`. §18.3 is the corrected map.
- **Unused assets:** `sheb3o-powerup.png` (Konami) and `sheb3o-powerup2.png` (404) exist on disk but are referenced nowhere — no Konami egg and no `/404` page are implemented yet.
- **Unfulfilled assignment:** `/skills` is meant to carry `sheb3o-flex.png` (§18.3) but `SkillsDomainCards.astro` has no character image.
- **Missing routes:** of the routes DESIGN.md §18.6 locks, only `/` and `/about` exist; `/experience`, `/skills`, `/projects`, `/contact`, `/404` are unbuilt (the nav links 404).
- **Missing component:** DESIGN.md §6.1 lists an approved `Sheb3oFigure.astro` ("wraps `<img>` with positioning"). It doesn't exist — every Sheb3o is a raw `<img>` with per-section CSS. Building it would centralize positioning/scale (mirrors the missing `ShattaSidekick.astro` on the counterpart board).
- **Performance:** `sheb3o-hero.png` is ~6.37 MB raw PNG served via plain `<img>`, not Astro `<Image />` — over the §12.2 homepage budget. Run all character art through `<Image />` (WebP/AVIF) when productionizing.

---

## 14. ONE-LINE SUMMARY

> **Sheb3o** — Mohamed Shaban, 22, Cairo-born senior full-stack dev built like a train. Black tank, gold dog-tag, olive cargos, red laces. Calm half-smirk, dry humor, lets the work talk. The protagonist; Shatta is the spice on the side.
