# CHARACTER BOARD — SHATTA 🌶️

**Arabic:** شطة ("shatta" — hot chili sauce/paste)
**Role:** Sidekick / mascot (NOT a co-protagonist)
**Status:** LOCKED. Companion to [`DESIGN.md`](DESIGN.md) and the project master context (`PROJECT.md`, pending commit). Governance: **DESIGN.md wins on design-system questions; the master context / Manga Bible wins on character & manga canon.** Conflicts are flagged inline.
**Source of truth:** DESIGN.md §0 (Prime Directive 4), §1.4 (Character Bible), §7.2 (Asset Map), §13 (Shatta Rules — the sidekick contract), §14 (Easter Eggs), §16 (When in Doubt), §18.3 (Page→Asset); plus the master context Character Bible (§5.2).
**Counterpart:** [`CHARACTER-SHEB3O.md`](CHARACTER-SHEB3O.md) — the protagonist.

---

## 0. LOGLINE

> A palm-sized red chili pepper in big black sunglasses, permanently on fire and permanently hyped. He shouts out loud what calm Sheb3o is thinking. Maximum energy, minimum size. He amplifies the hero — **he never competes with him.**

---

## 1. THE SIDEKICK CONTRACT (the single most important rule)

**Prime Directive 4 (DESIGN.md §0):**

> *Sheb3o is the protagonist, Shatta is the sidekick. Shatta never appears at the same scale as Sheb3o. Shatta is always **knee-height or smaller**. Shatta amplifies Sheb3o's vibe; he never competes with it.*

And the tie-breaker (DESIGN.md §16, item 4):

> *Prioritize Sheb3o, hide Shatta. When in doubt, **fewer Shatta moments, not more.***

Everything else on this board is subordinate to those two lines. If a Shatta placement would read as a co-protagonist, it's wrong.

---

## 2. VITALS (DESIGN.md §1.4)

| Attribute | Value |
|-----------|-------|
| Species | Red habanero chili pepper |
| Size | Palm-sized — **knee-height or smaller** relative to Sheb3o, always |
| Class | Mascot / sidekick |
| Status effect | Always on fire (flame somewhere on the body) |
| Energy | Maximum hype, 24/7 |

---

## 3. MODEL SHEET — APPEARANCE (DESIGN.md §1.4)

Generated art (Midjourney + manual Photoshop cutouts), transparent-cutout PNG. **Never recolor — the palette is baked into the art** (DESIGN.md §7.3).

- **Body:** small, palm-sized red habanero chili pepper.
- **Eyes:** big black sunglasses (his signature — he's basically never without them).
- **Stem:** a single curved green stem on top.
- **Limbs:** tiny stubby arms and legs, ending in small **black mitten-style hands and shoes** (master context §5.2) — keeps him reading as a *character*, not a vegetable.
- **Flame:** **always** has flame somewhere — head, hand, or tail. The flame is never absent.

> 🔥 **Flame is the only place `--color-flame` (`#F77F00`) lives** — and it lives *inside the art*, not in CSS. The flame tokens exist in `tokens.css` but are deliberately unused in markup; the heat is drawn, not styled. (DESIGN.md §2.2: flame-orange is for things literally about heat/power-up.)

---

## 4. FORM & ACCESSORIES

Shatta has no wardrobe — his body *is* his form. The fixed, non-negotiable features:

| Feature | Detail |
|---------|--------|
| Sunglasses | Big and black — the defining accessory |
| Stem | Single, curved, green |
| Arms/legs | Tiny, stubby — black mitten-style hands & shoes |
| Flame | Always present (head / hand / tail) |

---

## 5. PERSONALITY (DESIGN.md §1.4)

- **Maximum hype.** Unhinged energy — deliberately the opposite of Sheb3o's calm.
- **Externalizes Sheb3o's inner monologue.** Says out loud what the composed protagonist is thinking.
- **The comedy engine.** The whole joke is *contrast*: calm Sheb3o + unhinged Shatta.
- **Amplifier, never competitor.** He turns the volume up on Sheb3o's vibe; he never steals the scene.
- **Loyal.** Desk companion through everything — *"Shatta asleep on the desk"* during late nights, *"Shatta on the screen edge, holding a flame"* on the hospital-bed panel (the lowest point of the Training arc).

---

## 6. VOICE & SPEECH (DESIGN.md §13.3)

Shatta is the **loud half** of the duo. He owns the caps shouts; Sheb3o never shouts.

**Speech rules — all three are LOCKED:**
1. **ALWAYS in caps.**
2. **ALWAYS short — 1–3 words.**
3. **Only** Egyptian/Arabic transliterations or single English exclamations.

### Approved vocabulary (the full locked list)

> `HUFTO!` · `TPE!` · `YO!` · `AKL NAR!` · `BAS!` · `YALLA!` · `KHALAS!` · `NAR!` · `WAH!`

Nothing outside this list. (No "TILL NEXT TIME!", no "EMAIL ME ↗" — those are not Shatta lines.)

### Bubble assignments per location (DESIGN.md §13.1, §14.1)

| Location | Line |
|----------|------|
| Hero | `HUFTO!` |
| Featured project intro | `TPE!` |
| Contact section | `YO!` |
| 404 page | `AKL NAR!` |
| Logo clicked 5× (easter egg) | `BAS!` |

### How the bubble looks — `SpeechBubble.astro` `variant="shout"`

Shatta's shouts use the **shout** variant of `SpeechBubble`: red fill (`--color-shatta`), cream text, sharp explosive spiked outline (`clip-path`), no rotation. The `normal` variant (cream bubble, ink border, soft ellipse, slight tilt, tail in 4 directions) is for everyone else.

```astro
<SpeechBubble text="HUFTO!" variant="shout" tail="down" />
```

> ⚠️ **Shipped reality:** no Shatta shout bubble is rendered yet. The `shout` variant is defined but never instantiated — every live bubble uses the `normal` variant and is **off-vocab**: "TILL NEXT TIME!" (`Contact.astro:50`, `ContactToBeContinued.astro:73`) and the four `ContactSpeechBubbles.astro` lines ("EMAIL ME ↗", "LINKEDIN?", "SEE MY CODE", "OFF THE KEYBOARD"). Shatta's approved shouts currently survive only inside image `alt` text ("HUFTO! moment", "cheering TPE!"). See §13.

---

## 7. WHERE SHATTA APPEARS — AND WHERE HE DOESN'T (DESIGN.md §13.1–§13.2)

### ✅ Approved appearances

- Hero (with `HUFTO!` bubble)
- Featured project intro (with `TPE!` bubble)
- Contact section (with `YO!` bubble)
- Loading states (solo, animated — tiny hop)
- 404 page (solo, `AKL NAR!`)
- Konami easter egg (full power-up duo, beside Sheb3o, both burning)
- Hover state on certain links (tiny appearance)

### 🚫 Forbidden — Shatta DOES NOT appear here

- **About section** — this is Sheb3o's solo moment
- **Experience timeline** — professional, no jokes
- **Skills technical breakdowns** — text-only
- **Footer** — keep it clean
- **Any form labels** — don't make recruiters smile while filling forms

> **Edge case (reconciled):** the *About/coding* asset has Shatta **embedded** as a tiny knee-height margin doodle with a `TPE!` bubble. DESIGN.md §13.2 forbids Shatta "in the About section," but an embedded mascot-scale doodle inside Sheb3o's own PNG is treated as on-brand (it can't compete at that scale). A *separate, sized* Shatta element in About would violate the rule.

> ⚠️ **Conflict (needs ruling):** §13.2 lists Skills as Shatta-free ("text-only"), but the §18.3 page→asset map assigns `/shata/shatta-flex.png` to `/skills` as a margin doodle. These disagree — decide whether a knee-height Shatta doodle is allowed on `/skills`. Tracked in [`TASKS.md`](TASKS.md).

---

## 8. POSE & ASSET LIBRARY

Transparent-cutout PNGs. **Position with CSS, never edit/recolor/stretch the source.** (DESIGN.md §7.2–§7.3)

> 📁 **Path scheme (canon — DESIGN.md §18.3):** folder is **`/shata/` (one T)**, files are **`shatta-*.png` (two Ts)**, **no `/images/` prefix**. The `/images/shatta/...` paths in DESIGN.md §7.2 and README are **stale** — see §13.

| Pose | File (canon path) | Pairs with Sheb3o | Notes / Do |
|------|-------------------|-------------------|------------|
| **Wave** | `/shata/shatta-wave.png` | `sheb3o-wave.png` (Contact) | Always knee-height. Never flip the paired Sheb3o wave. |
| **Flag** | `/shata/shatta-flag.png` | `sheb3o-sprinting.png` | Plant on the shoulder (arc-end marker). |
| **Flex** | `/shata/shatta-flex.png` | `sheb3o-flex.png` | **Mirror** Sheb3o's flex pose. |
| **Power-up** | `/shata/shatta-powerup.png` | `sheb3o-powerup.png` (Konami) | Beside Sheb3o, both burning. Reused on the live site as the small spine climber + featured-card sticker. |
| **Solo HUFTO** | `/shata/shatta-solo-hufto.png` | — (standalone) | Standalone only: 404, loading states. **⚠️ Not shipped yet** (file missing — see §13). |

### Scale enforcement (shipped homepage — the contract in numbers)

| Placement | Shatta render size | Paired Sheb3o | Ratio |
|-----------|-------------------|---------------|-------|
| Chapter-spine climber | 44 px | — | mascot |
| Featured Pilot 100 card | 75 px sticker | — | mascot |
| Stats strip | 95 px (rotate 8°) | 400 px flex | ~1:4 |
| Final CTA "TO BE CONTINUED" | 110 px (rotate −5°) | 320 px sprinting | ~1:3 |
| Current-arc flag | 50 px | — | mascot |

Every shipped Shatta is dramatically smaller than the Sheb3o he stands next to. **This is the contract — never break it.**

---

## 9. ANIMATION & MOTION (DESIGN.md §8)

Shatta is the **only** character allowed bouncy/wobbly motion (DESIGN.md §8.3 forbids it on professional content).

- **`shatta-bob` (shipped):** the chapter-spine climber bobs up 4px on a 2.4s ease-in-out loop. Disabled mid-slide and under `prefers-reduced-motion`.
- **Spine climb (shipped, JS):** an IntersectionObserver makes Shatta literally scamper up the homepage chapter-spine as you scroll, with a direction-aware tilt (springy `cubic-bezier(0.34,1.2,0.64,1)`, 450ms). Desktop only; the spine is hidden on mobile. *(This is a shipped flourish, not in DESIGN.md — pure sidekick energy.)*
- **Shatta hop (spec):** DESIGN.md §8.2 approves a 1.2s idle-hype hop and a loading-state tiny hop. *(Currently spec-only — the implemented idle motion is the bob, not a hop.)*
- **Mobile nav 🌶️ trigger:** the chili-emoji nav toggle lifts with a red snap-shadow on hover.

**Rules:** respect `prefers-reduced-motion` always; `transform`/`opacity` only; never autoplay sound (DESIGN.md §14.2).

---

## 10. EASTER EGGS — SHATTA'S PLAYGROUND (DESIGN.md §14)

These are *his* moments. All must be discoverable-but-not-intrusive, dismissible (Esc/click), and silent by default.

1. **Konami code** (`↑↑↓↓←→←→BA`) → Sheb3o + Shatta power-up explosion overlay (3s).
2. **Logo clicked 5×** → Shatta solo pops into a corner with `BAS!` (2s).
3. **404 page** → Shatta lost in scribbles with `AKL NAR!` + "go back home" link.
4. **Loading states** → Shatta solo doing a tiny hop.
5. **Hover the 🌶️ in the hero tagline** → small flame burst.

> ⚠️ **Shipped reality:** none of these are implemented yet (see §13). They're the canon spec for when the eggs get built.

---

## 11. RELATIONSHIP WITH SHEB3O (the duo)

- **Comedy = contrast.** Calm Sheb3o ↔ unhinged Shatta. Shatta says the quiet part loud.
- **Voice split.** Shatta = caps shouts (1–3 words). Sheb3o = calm prose. They never overlap registers.
- **Scale subordination is law.** Knee-height or smaller, always (§8). In hero + coding poses he's *baked into Sheb3o's PNG* so he physically can't outgrow the hero.
- **Pairing rules (DESIGN.md §7.2):** wave-with-wave at Contact, flag-on-shoulder with sprinting, mirror-flex with flex, both-burning beside Sheb3o for Konami.
- **The bond.** Friction + loyalty: the desk buddy Sheb3o "argues with," who's still there holding a flame at the hospital bed, and who walks "into the open cream void" beside him in the finale.

See [`CHARACTER-SHEB3O.md`](CHARACTER-SHEB3O.md) §9 for the protagonist's side of this.

---

## 12. CANON CHECKLIST (run before drawing/placing Shatta)

- [ ] **Knee-height or smaller** relative to any Sheb3o in frame? (The #1 rule.)
- [ ] Red habanero body, big black sunglasses, single green stem, stubby limbs?
- [ ] **Flame present** somewhere (head/hand/tail)?
- [ ] Art is original color — **not recolored or restretched**?
- [ ] Positioned with CSS, source PNG untouched?
- [ ] If speaking: ALL CAPS, 1–3 words, from the approved vocab only?
- [ ] Bubble uses `SpeechBubble variant="shout"` (red, spiked)?
- [ ] He's in an **approved** location (not About/Experience/Skills/Footer/forms)?
- [ ] He amplifies Sheb3o without competing — and could be removed without breaking the page?
- [ ] Easter-egg use is dismissible and silent by default?
- [ ] Works at 320px, without JS, `prefers-reduced-motion` respected?

---

## 13. ASSET REALITY CHECK (doc vs. shipped — for maintainers)

Live gaps between documented canon and the current codebase:

- **Path scheme:** shipped code uses `/shata/shatta-*.png` (folder one T, files two Ts, no `/images/` prefix) — this is the §18.3 canon. DESIGN.md §7.2 and README still show the stale `/images/shatta/wave.png`-style paths.
- **Missing asset:** `shatta-solo-hufto.png` is documented (§7.2, README) but **does not exist** in `public/shata/`. The folder ships only 4 files: `shatta-flag.png`, `shatta-flex.png`, `shatta-powerup.png`, `shatta-wave.png`. The 404/loading/standalone surfaces that need it don't exist yet either.
- **Missing component:** DESIGN.md §6.1 lists an approved `ShattaSidekick.astro` ("always knee-height or smaller"). It doesn't exist — every Shatta is a raw `<img>` with per-section CSS. Building `ShattaSidekick.astro` would centralize the knee-height contract.
- **No shout bubbles rendered:** the approved vocab (HUFTO!/TPE!/YO!/AKL NAR!/BAS!/…) appears only in `alt` text. The `SpeechBubble` `shout` variant is defined but never instantiated. The live bubbles are off-vocab and use the `normal` variant: "TILL NEXT TIME!" on **two** components (`Contact.astro:50`, `ContactToBeContinued.astro:73`), plus four more in `ContactSpeechBubbles.astro` ("EMAIL ME ↗", "LINKEDIN?", "SEE MY CODE", "OFF THE KEYBOARD"). Note also that `ContactSpeechBubbles.astro` uses a **bespoke** bubble system (`.sbub__bubble-inner`), not the `SpeechBubble` component — reconcile when the shout variant is wired.
- **Easter eggs unbuilt:** Konami, logo-5× `BAS!`, 404 `AKL NAR!`, loading hop, hero chili-flame-burst — all spec-only. The 🌶️ in the hero tagline has no hover handler yet.
- **One file, three jobs:** `shatta-powerup.png` is reused for the spine climber, the featured-card sticker, and the (unbuilt) Konami duo. Fine for now, but note it if poses ever need to diverge.

---

## 14. ONE-LINE SUMMARY

> **Shatta** (شطة) — palm-sized red chili in black shades, always on fire, always hyped. Shouts 1–3 caps words (HUFTO! TPE! YO!) — the loud voice of Sheb3o's quiet thoughts. Knee-height or smaller, always. The spice on the side; never the main dish.
