# Mohamed Shaban — Portfolio V2 🌶️📜

> Senior full-stack developer. Built like a train. Spicy by default.

The "Spicy Sheb3o" portfolio. Manga sketchbook aesthetic on warm cream paper. Built with Astro 6, Tailwind v4, and design discipline.

---

## 🚀 Quick Start

```bash
# Install
npm install

# Dev server (localhost:4321)
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## 📁 Asset Placement

Drop your locked assets into these locations:

```
public/images/
├── sheb3o/
│   ├── hero.png             ← Pose 1 (with embedded Shatta)
│   ├── coding.png           ← Pose 2 (with embedded Shatta + laptop)
│   ├── wave.png             ← Pose 4 (cutout)
│   ├── flex.png             ← Pose 7 (cutout)
│   ├── sprinting.png        ← Pose 6 (cutout with ember trail)
│   ├── powerup.png          ← Pose 8 (with explosion bg)
│   └── powerup-portrait.png ← Bonus side+portrait composition
├── shatta/
│   ├── wave.png
│   ├── flag.png
│   ├── flex.png
│   ├── powerup.png
│   └── solo-hufto.png
└── textures/
    └── paper-grain.png      ← Source from lostandtaken.com or generate
```

Once paper-grain.png is dropped in, the global texture activates automatically.

---

## 🎨 Design System

### Locked Palette

| Token | Hex | Use |
|-------|-----|-----|
| `--color-paper` | `#EDE4CC` | Background |
| `--color-paper-shadow` | `#D4C9A8` | Card depth |
| `--color-ink` | `#1A1A1A` | Primary text, borders |
| `--color-ink-muted` | `#2D2620` | Body text |
| `--color-shatta` | `#D62828` | Brand red, accents |
| `--color-flame` | `#F77F00` | Heat-themed elements |

**No other colors. Discipline keeps the brand cohesive.**

### Typography

- **Display:** Bangers (manga / comic feel) — for headings
- **Body:** Zen Kaku Gothic New — for prose
- **Mono:** JetBrains Mono — for code, labels, technical text

---

## 🗂️ Project Structure

```
src/
├── layouts/         BaseLayout — root template
├── components/
│   ├── ui/         Reusable: PaperPanel, SpeechBubble, InkButton
│   ├── sections/   Page sections: Hero, About, Skills, etc.
│   ├── duo/        Sheb3o + Shatta positioned figures
│   └── nav/        Navigation
├── pages/          Routes (index.astro is the homepage)
├── styles/
│   ├── tokens.css  Design tokens (@theme)
│   └── global.css  Global resets, paper canvas, utilities
└── content/
    ├── projects/   Markdown files for each project
    └── experience/ Markdown files for each role
```

---

## 🛠️ Build Roadmap

- [x] **Chunk 1** — Foundation, design tokens, paper system
- [ ] **Chunk 2** — Hero with real Sheb3o + Shatta
- [ ] **Chunk 3** — Navigation + Experience timeline
- [ ] **Chunk 4** — About + Skills as "cursed techniques"
- [ ] **Chunk 5** — Projects (content collection + filterable grid)
- [ ] **Chunk 6** — Contact + Konami easter egg + polish

---

## 🚢 Deploy

Recommended: Cloudflare Pages.

```bash
# Build once, deploy via Cloudflare dashboard or wrangler
npm run build
# Output: ./dist
```

Domain plan:
- `she3bo.com` → V2 (this build)
- `v1.she3bo.com` → Old V1 archive

---

## 📝 License

Personal portfolio. All character art by Midjourney + manual cutouts in Photoshop. Code MIT (do whatever, I don't care).
