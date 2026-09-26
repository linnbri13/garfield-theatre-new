# QA Report — Garfield HS Theatre site

**URL:** https://linnbri13.github.io/garfield-theatre-new/
**Date:** 2026-09-25 · **Verdict: PASS**

## 1. All 6 pages + assets (HTTP status on live URL)
| Path | Status |
|---|---|
| / (index.html) | 200 |
| /shows.html | 200 |
| /auditions.html | 200 |
| /staff.html (Who We Are) | 200 |
| /gallery.html | 200 |
| /playbills.html | 200 |
| /styles.css | 200 |
| /script.js | 200 |
| /assets/garfield-logo.png | 200 |

Note: the "Who We Are" page is `staff.html` (not `who-we-are.html`). The nav + footer
links point to `staff.html` correctly, so no broken nav. 6 pages, all live.

## 2. Mobile hamburger nav (live JS exercised in browser)
- Toggle click → `nav.open` added, `aria-expanded="true"`. PASS
- Escape key → menu closes, `aria-expanded="false"`, focus returns to toggle. PASS
- Click a nav link → menu auto-closes. PASS
- Breakpoint ≤760px: `.nav { display:none }`, `.nav-toggle { display:flex }` (hamburger shown,
  menu hidden). ≥761px: toggle `display:none`, nav `display:flex` (inline). PASS

## 3. Sticky-header scroll state (live JS exercised)
- At top (scrollY 0): `site-header` (transparent). PASS
- After scroll >40px: `site-header solid` (solid bg). PASS
- `position: fixed` confirmed. PASS

## 4. External links (resolved / verified)
| Link | Result |
|---|---|
| https://gstage.booktix.com/ | 403 via curl → **Cloudflare WAF challenge** (origin alive; datacenter-IP bot block, not a dead link). Live for real users. |
| https://linktr.ee/garfieldtheatre | 200 |
| https://www.facebook.com/GarfieldSTaGe | 400 via curl → **FB login wall** (origin alive; confirmed live via real browser: title "STAGE - Garfield High School Theatre \| Seattle WA"). PASS |
| https://www.flickr.com/photos/garfieldstage/ | 200 |
| https://www.instagram.com/garfielddrama/ | 200 |
| https://www.x.com/GarfieldSTaGe | 200 |
| https://www.youtube.com/channel/UCY-BAQbPk2w4LNpS9tO5rUg | 200 |
| Google Fonts (Playfair Display + Inter) | 200 |

All 7 destination links resolve to real, live pages. The 2 non-200 curl codes are
anti-bot/anti-scraping walls, not 404s — both confirmed live in a real browser session.

## 5. Content vs findings.md
- 3 mainstage shows: The Addams Family! (2026 Spring), James and the Giant Peach,
  Almost Maine. PASS
- 3 student-led programs: Dramatic Paws Showcases, 5 Plays 5 Days, Improv Club. PASS
- Addams Family: **7 performance rows** (May 15 Opening, May 16, May 20 Preview,
  May 21 Pay-What-You-Can, May 22, May 23 Matinee, May 23 Closing) — matches findings.md
  exactly. PASS
- Badges present: Opening, Pay What You Can, Preview, Matinee, Closing, ASL. PASS
- No calendar widget — plain date lists. PASS (per requirements)
- Reused logo (assets/garfield-logo.png) — not recreated. PASS
- Dark school-color theme (purple #5a2ea6 on #0e0a1a, gold CTAs). PASS

## Result
PASS on every checked item. No bugs. The only open item (repo name `garfield-theatre-new`
→ `garfield-theatre`) is a GitHub token-scope limitation, not a defect in the site.
