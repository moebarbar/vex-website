# VEX — Shaping Tomorrow

A single-page scrolling website for **VEX**, a venture capital firm that invests in, builds, and advises the next generation of companies.

Built with React, TypeScript, Vite, and Tailwind CSS v3.

---

## Stack

| Tool | Version |
|------|---------|
| React | 19 |
| TypeScript | 6 |
| Vite | 8 |
| Tailwind CSS | 3 |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev
```

Visit `http://localhost:5173`

```bash
# Production build
npm run build

# Preview production build
npm run preview
```

---

## Project Structure

```
vex-website/
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.ts
├── tsconfig.json
└── src/
    ├── index.css          # Global styles, liquid-glass, grain overlay, cursor
    ├── main.tsx           # Entry point
    ├── App.tsx            # Root — wires all sections together
    ├── hooks/
    │   └── useInView.ts   # IntersectionObserver hook for scroll animations
    └── components/
        ├── Cursor.tsx     # Custom lerp cursor with mix-blend-mode: difference
        ├── Marquee.tsx    # Infinite horizontal ticker
        ├── Navbar.tsx     # Fixed liquid-glass nav
        ├── Hero.tsx       # Fullscreen video hero with char animation
        ├── Story.tsx      # Origin story + stats grid
        ├── Investing.tsx  # Investment thesis cards
        ├── Building.tsx   # In-house ventures list
        ├── Advisory.tsx   # Advisory services grid
        ├── Contact.tsx    # Contact form
        └── Footer.tsx     # Footer with links
```

---

## Design System

### Liquid Glass
A reusable `.liquid-glass` component class defined in `index.css`. Used on the navbar, cards, form inputs, and buttons. Creates a frosted-glass effect with a gradient border shimmer via `::before`.

### Accent Color
Warm gold `#C8A465` — used on section labels, stat numbers, and hover states. Defined as `accent` in `tailwind.config.js`.

### Animations
- **Char animation** — hero heading builds letter-by-letter with a 30ms stagger
- **Scroll reveals** — every section uses `useInView` to fade/slide in on scroll
- **Marquee** — CSS `@keyframes marquee` at 24s linear infinite
- **Cursor** — `requestAnimationFrame` lerp loop (factor 0.15) tracking mouse position
- **Live pulse** — Tailwind `animate-ping` on venture stage badges

### Film Grain
A fixed `body::after` SVG turbulence overlay at ~4% opacity gives the site a tactile, printed quality.

### Custom Cursor
`Cursor.tsx` renders a 12px white circle with `mix-blend-mode: difference` — it inverts to black over white elements. Grows to 40px on `<a>` and `<button>` hover. Event delegation on `document` keeps it reliable with zero listener buildup.

---

## Sections

| Section | ID | Description |
|---------|----|-------------|
| Navbar | — | Fixed, liquid-glass, collapses on scroll |
| Hero | `#hero` | Fullscreen video background, animated heading |
| Marquee | — | Kinetic ticker between hero and content |
| Story | `#story` | Company origin + 4 key stats |
| Investing | `#investing` | 4 investment thesis cards |
| Building | `#building` | 4 in-house ventures with live indicators |
| Advisory | `#advisory` | 6 advisory service cards |
| Contact | `#contact` | Name / email / message form |
| Footer | — | Links, copyright, personal credit |

---

## Credits

Built with ❤️ by [Moe Barbar](https://www.instagram.com/immoebarbar)
