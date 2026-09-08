# Devanshi Mishra — Personal Introduction Page

A responsive personal profile page built for the **Newton School Coding Club × SRM IST** technical recruitment task (Task 2, First Year track).

**[Live demo →]([[#https://devanshi-08.github.io/personal-intro-page/]](https://devanshi-08.github.io/nscc-task2-personal-intro-page/))**https://devanshi-08.github.io/nscc-task2-personal-intro-page/ 

![Theme](https://img.shields.io/badge/theme-light%20%2F%20dark-8b6a32) ![Responsive](https://img.shields.io/badge/responsive-mobile%20--%20desktop-8b6a32) ![No frameworks](https://img.shields.io/badge/stack-HTML%20%2F%20CSS%20%2F%20JS-8b6a32)

---

## About this project

Instead of a typical "hero + card" landing page, this site is designed as an **editorial profile dossier** — the layout borrows from academic journal mastheads and CV-style dossiers, which felt like a natural fit for an AI/ML student's profile: precise, structured, and unafraid of whitespace.

- A masthead at the top, like a paper's title block
- A two-column body: a sticky sidebar (portrait + quick facts + social links) and a flowing content column (About, Focus Areas, Get in Touch)
- Serif display type (**Fraunces**) for headings and identity, paired with a clean sans (**Inter**) for body copy and UI
- A muted brass/bronze accent instead of the more common bright/neon or terracotta palettes
- One deliberate motion moment: the horizontal rule under the masthead draws itself in on load — nothing else animates on scroll, keeping the page calm and readable

## Features implemented

- ✅ Name, short bio, photograph, interests/skills, and social links (LinkedIn, GitHub) — all required content sections
- ✅ Fully responsive layout — two-column desktop layout collapses to a clean single-column stack on mobile, tested from 390px to 1280px+
- ✅ Clean, structured, and interactive UI with hover and focus states on every link and control
- ✅ Semantic, accessible HTML (`<dl>` for facts, `<nav>` for social links, proper `alt` text, visible keyboard focus rings)
- ✅ Respects `prefers-reduced-motion` for users who've disabled animation at the OS level

## Brownie subtask — Dark / Light mode toggle ⭐

- A custom animated toggle switch in the masthead switches between light and dark themes
- The selected theme is saved to `localStorage` and **persists across page refreshes**
- An inline script in `<head>` reads the saved preference (or falls back to the OS-level `prefers-color-scheme`) **before the page paints**, so there's no flash of the wrong theme on reload
- Theme colors are implemented as CSS custom properties (`:root` vs. `html[data-theme="dark"]`), so the whole palette — not just the background — flips consistently

## How to run the project

No build step, no dependencies — it's plain HTML/CSS/JS.

1. Clone the repository:
   ```bash
   git clone https://github.com/Devanshi-08/personal-intro-page.git
   cd personal-intro-page
   ```
2. Open `index.html` directly in a browser, **or** serve it locally (recommended, avoids any file:// quirks):
   ```bash
   python3 -m http.server 8000
   # then visit http://localhost:8000
   ```

## Project structure

```
personal-intro-page/
├── index.html      # Page structure and content
├── style.css       # Design tokens, layout, light/dark themes, responsiveness
├── script.js       # Theme toggle logic + localStorage persistence
├── assets/
│   └── devanshi.jpg
└── README.md
```

## Concepts learned / applied while building this

- **CSS custom properties for theming** — defining a token system (`--paper`, `--ink`, `--accent`, etc.) once and overriding it under an `html[data-theme="dark"]` selector, instead of writing separate dark-mode rules for every element.
- **Avoiding a flash of incorrect theme (FOIT-style flash)** — learned that reading `localStorage` only inside a `DOMContentLoaded`/bottom-of-page script causes a visible flash, since the page has already painted in the default theme. Fixed by running a tiny synchronous script in `<head>`, before the CSS/DOM finishes rendering.
- **`prefers-color-scheme` as a sensible default** — falling back to the OS-level theme preference when the visitor has no saved choice yet, only overriding it once they interact with the toggle.
- **CSS Grid for asymmetric layouts** — using a `240px 1fr` grid for the sidebar/content split, and collapsing it to a single column with a media query rather than maintaining two separate layouts.
- **Respecting accessibility preferences** — using `prefers-reduced-motion` to disable the masthead's load animation for users who've asked their OS to reduce motion, and keeping visible `:focus-visible` outlines for keyboard navigation.
- **Image optimization** — resizing and re-compressing the portrait photo (from ~1.9 MB to under 100 KB) before shipping it, to keep the page fast on mobile networks.

## Additional features beyond the brief

- Sticky sidebar on desktop, so the portrait and contact links stay in view while reading longer content
- A subtle paper-grain texture layered over the background for visual warmth (implemented as an inline SVG noise filter, not an external image)
- `aria-pressed` and dynamic `aria-label` on the theme toggle so screen readers announce the current state correctly
- Auto-updating footer year via JavaScript, so the copyright line never needs a manual edit

## Deploying

Since no backend is involved, this page can be hosted for free on **GitHub Pages**:

1. Push this repository to GitHub (see below).
2. Go to **Settings → Pages** in the repository.
3. Under **Source**, select the `main` branch and `/ (root)` folder, then save.
4. Your page will be live at `https://devanshi-08.github.io/personal-intro-page/` within a minute or two.

---

*Built as part of the Newton School Coding Club × SRM IST recruitment task. Feel free to explore the code — every function in `script.js` is commented to explain what it does.*
