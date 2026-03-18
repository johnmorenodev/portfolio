# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Single-page static portfolio for John Christopher Moreno. No build tools, no npm, no frameworks — pure HTML + CSS + JS. Open `index.html` directly in a browser.

## Architecture

Three files, one page:

- **`index.html`** — all content and markup. Sections in order: `#about` (hero), `#projects`, `#skills`, `#contact`, footer.
- **`styles.css`** — all styles. Theming via CSS custom properties on `[data-theme]` attribute (`light` / `dark`). FSO-inspired palette: `#ffffff` / `#33332d`.
- **`main.js`** — three responsibilities: theme toggle (persisted in `localStorage`), mobile nav open/close, active nav link via `IntersectionObserver`.
- **`assets/resume.pdf`** — downloadable resume linked from nav and footer.

## Design system

- **Fonts**: IBM Plex Sans (body/headings) + IBM Plex Mono (labels, tags, badges, code-style elements) — loaded from Google Fonts CDN.
- **Theme variables**: `--bg`, `--text`, `--muted`, `--border`, `--hover-bg`, `--hover-text` defined in `:root` and overridden in `[data-theme="dark"]`.
- **Hover pattern**: cards and nav items invert using `--hover-bg` / `--hover-text` (dark bg ↔ light bg).
- **Tag style**: monospace pill with `1px solid var(--border)`, used for tech stack and project tags.
- **Section labels**: small monospace text above `h2`, formatted as `01 / Section`.

## Content TODOs

Placeholders marked with `<!-- TODO -->` in `index.html`:
- AutoLocal live demo URL
- AutoLocal GitHub URL
- GitHub profile URL (contact section)
- AutoLocal tech stack tags (currently guessed from resume)
- Second project details (name, description, stack, links)
