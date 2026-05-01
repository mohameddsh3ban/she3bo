# she3bo.com V2 — Project Instructions

## The Constitution

**Read `DESIGN.md` before making ANY visual, structural, or copy change.** It is the single source of truth for this project. Every rule in DESIGN.md is LOCKED — do not deviate without Mohamed's explicit approval.

Key constraints from DESIGN.md (non-exhaustive — always check the full doc):

- **Palette:** Cream paper (#EDE4CC), ink black (#1A1A1A), brand red (#D62828) + tonal siblings. No other colors exist.
- **Fonts:** Bangers (display), Zen Kaku Gothic New (body), JetBrains Mono (mono). No others.
- **Style:** Manga sketch aesthetic — sharp borders, ink lines, halftone, paper grain. Never corporate flat.
- **Shatta scale:** Always knee-height or smaller relative to Sheb3o. Never co-protagonist.
- **No-JS floor:** Site must work fully without JavaScript. Enhancements only on top.
- **Mobile-first:** Must work at 320px. Build mobile, enhance for desktop.
- **Banned words:** passion, ninja, rockstar, 10x, guru — never appear on this site.
- **Section order:** Experience before Projects, always.

## Stack

- Astro 6.1.x (no 7.x without review)
- Tailwind v4 + CSS custom properties
- Svelte 5 islands (only when interactivity needed)
- Cloudflare Pages deploy
- Astro `<Image />` for all images (WebP/AVIF)

## Before Shipping Checklist

Before completing any task, verify against DESIGN.md Section 15:
1. Locked palette only (CSS vars, not raw hex)
2. Approved fonts only
3. Works at 320px
4. Works without JS
5. WCAG AA contrast
6. Reuses existing components
7. Character bible respected
8. Manga sketch, not corporate flat
9. `prefers-reduced-motion` respected
10. No banned words

## Component Library

Reuse before creating. Approved components listed in DESIGN.md Section 6.

## When Unsure

1. Check DESIGN.md
2. Use locked palette via CSS vars
3. Use existing component
4. Lean manga sketch
5. Ask Mohamed before deviating
