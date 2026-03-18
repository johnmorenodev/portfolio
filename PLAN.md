# Portfolio — Design & Build Plan

## Goal

Single-page static portfolio. Unique, minimalist, fast to scan for recruiters and clients.
No frameworks. Pure HTML + CSS + JS.

---

## Theme: FullStackOpen-Inspired

Match the visual language of [fullstackopen.com](https://fullstackopen.com/en/).

### Colors

| Role         | Light Mode | Dark Mode  |
|--------------|------------|------------|
| Background   | `#ffffff`  | `#33332d`  |
| Text         | `#33332d`  | `#ffffff`  |
| Muted        | `#a0a0a0`  | `#a0a0a0`  |
| Accent/Links | `#e1e1e1`  | `#e1e1e1`  |
| Hover BG     | `#33332d`  | `#ffffff`  |

### Typography

- **IBM Plex Sans** — body, headings, nav
- **IBM Plex Mono** — code, tech stack labels, availability status
- Base: 18px desktop / 14px mobile
- Line height: 1.45rem
- Weights: 400 (body), 500 (subheadings), 600 (headings)

### Layout

- Max container width: 1300px
- 90% width with horizontal padding on mobile
- Generous vertical spacing (2–5rem) between sections
- Responsive — mobile-first

---

## Page Structure (top to bottom)

### 1. Nav (sticky)
- Name / monogram logo (left)
- Section links: About · Projects · Skills · Contact (right)
- Dark/light theme toggle button
- "Resume" download link (right-most, styled as a subtle button)

---

### 2. Hero / About
- Full viewport height (100vh)
- Large heading: name
- Subtitle: role (e.g., "Full-Stack Developer")
- 2–3 sentence bio
- CTA buttons: "See my work ↓" · "Get in touch"
- Availability badge (IBM Plex Mono, pill-style):
  - `● Available for work` (green dot) or `○ Not available` (grey dot)

---

### 3. Projects
- Grid: 2 columns desktop / 1 column mobile
- Each card:
  - Project name (heading)
  - Short description (1–2 sentences)
  - Tech tags (monospace pill labels)
  - Links: `[Live Demo →]` · `[GitHub →]`
- Hover state: background shifts to `#33332d` (dark) / `#ffffff` (light), text inverts

---

### 4. Skills / Tech Stack
- Two-column layout: categories left, items right
- Categories: Languages · Frontend · Backend · Tools · Databases
- Items displayed as monospace code-style tags
- No progress bars — clean list format only

---

### 5. Contact
- Simple form: Name, Email, Message, Send button
- OR: Direct links only (email, LinkedIn, GitHub) — decide based on preference
- Social icons: text-based or minimal SVG (no icon font bloat)

---

### 6. Footer
- Copyright line
- Resume download link (reiterated)
- Theme toggle (optional duplicate)

---

## Sections Summary

| # | Section     | Key Feature                              |
|---|-------------|------------------------------------------|
| 1 | Nav         | Sticky, theme toggle, resume download    |
| 2 | Hero/About  | Full-height, availability badge          |
| 3 | Projects    | Cards with live demo + GitHub links      |
| 4 | Skills      | Monospace tag grid by category           |
| 5 | Contact     | Form or direct links                     |
| 6 | Footer      | Resume link, copyright                   |

---

## Files

```
portfolio/
├── index.html        # All sections, single page
├── styles.css        # All styles, CSS variables for theming
├── main.js           # Theme toggle, smooth scroll, form handling
├── assets/
│   ├── resume.pdf    # Downloadable resume
│   └── favicon.ico
└── PLAN.md           # This file
```

---

## Interactions

- **Theme toggle**: CSS custom properties swap via `data-theme` attribute on `<html>`
- **Smooth scroll**: CSS `scroll-behavior: smooth` + JS for nav link clicks
- **Active nav highlight**: IntersectionObserver to highlight current section in nav
- **Availability**: Static flag in `main.js` — flip one boolean to update the badge

---

## Constraints

- No build tools, no npm, no frameworks
- IBM Plex fonts loaded from Google Fonts CDN
- Accessibility: semantic HTML, ARIA labels on interactive elements, sufficient contrast
- Performance: no unused CSS, inline critical styles if needed

---

## Decisions

- [x] Contact: social links only (email, LinkedIn, GitHub) — no form
- [x] Projects: 2 now, card grid is open-ended (easy to add more)
- [x] Resume PDF: provided, placed in `assets/resume.pdf`
- [x] Availability: **Available** — green dot badge
- [x] Accent color: stick with FSO palette, no additions
