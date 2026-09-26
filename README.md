# Garfield High School Theatre — Website

Dark-themed static site for Garfield High School Theatre (Seattle) and STaGe
(Supporters of Theatre at Garfield). Plain HTML/CSS/JS — no build step, no
framework — hand-editable and hosted on GitHub Pages.

## Pages

- `index.html` — hero (Addams Family 2026), what-we-do, now-playing card, STaGe
- `shows.html` — all productions as plain date lists (no calendar) + student-led programs
- `auditions.html` — audition process, Linktree CTA, tech team, Thespian IEs
- `staff.html` — Who We Are: staff bios, Thespian troupe #5419, STaGe
- `gallery.html` — photo grid (placeholders) + Flickr archive + YouTube
- `playbills.html` — minimal playbill placeholder + ad-sales note

## Assets

- `assets/garfield-logo.png` — the existing Garfield Theatre header logo (reused, not recreated)
- `assets/gallery/` — drop show photos here (see `assets/gallery/README.md`)

## Design

School colors (purple/white) on a dark base:

| Token | Value |
|---|---|
| Base bg | `#0e0a1a` |
| Surface | `#1e1533` |
| School purple | `#5a2ea6` |
| Highlight | `#8b5cf6` |
| Text | `#f5f3fa` / muted `#b8a8d9` |
| Gold (ticket CTA) | `#d9a441` |

Fonts: Playfair Display (show titles) + Inter (body) via Google Fonts.

## Local preview

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

## Deploy (GitHub Pages)

Repo: `linnbri13/garfield-theatre` → `https://linnbri13.github.io/garfield-theatre/`

```bash
git add -A && git commit -m "update"
git push
```
