# QA Report — Round 2: De-AI redesign + staff trim

**URL:** https://linnbri13.github.io/garfield-theatre-new/
**Date:** 2026-09-25 · **Verdict: PASS** (all section-E checks)

## E1. Staff page = exactly 4, students only in crew credit
- staff.html staff cards (h3): **Natalie Gress, Blake Saunders, Neely Seams, Ben Lidgus**
  + "Guest Artist" label present. ✓
- Other 3 staff h3s are the kept Thespian/STaGe section headers (Run entirely by students /
  Fall THESPYS / Spring WS Festival) — spec §A says keep these below the grid. ✓
- 4 students: Luloff=0, Newman=0, Alvarez=0, Doty=0 in staff.html; =1 each in shows.html
  crew credit (Assistant Directed/Assistant Music Directed/Choreographed). ✓

## E2. No AI tells (CSS + all 6 live pages)
- `radial-gradient`: **0** (styles.css). ✓
- `linear-gradient`: **1** only — `linear-gradient(transparent, rgba(10,7,20,.95))` = the
  spec-allowed 1-line caption fade for legibility (not a glow). ✓
- `border-radius` values: **0 / 1px / 2px** only — no uniform 16px cards. ✓
- Inter: **0** in CSS, **0** in any page; body font computed = `"Source Sans 3", system-ui…`. ✓
- Emoji: **0** across all 6 pages. ✓
- ALL-CAPS eyebrows: **0** across all 6 pages. ✓

## E3. Home numbered rows + SVG icons
- Numbered program rows **01 / 02 / 03** (Mainstage / Student-Led / Thespians) render. ✓
- **3 inline `<svg>`** line icons, no emoji. ✓

## E4. All 6 pages + assets 200 on live URL
`/`, shows, auditions, staff, gallery, playbills, styles.css, script.js,
assets/garfield-logo.png → all **200**. ✓

## E5. Regression — hamburger + sticky header (real browser, live JS)
- Sticky header: transparent at top (`site-header`) → `site-header solid` after scroll>40px;
  `position: fixed`. ✓
- Hamburger: click → `nav.open` + `aria-expanded=true`; Escape → closes, `aria-expanded=false`. ✓

## E6. Content facts unchanged vs round 1 (voice-only rewrite)
- Addams Family: **7 performance rows** — May 15 Opening, May 16, May 20 (10am) Middle
  School Preview, May 21 Pay What You Can, May 22, May 23 (2pm) Matinee, May 23 Closing.
  Matches round-1 exactly. ✓
- Prices: **$5 students / $10 seniors / $15 general**. ✓
- Full crew intact: Gress, Saunders, Luloff, Newman, Alvarez, Doty. ✓
- Venue: Quincy Jones Auditorium / PAC. ✓
- De-winked voice: shows intro now "Garfield's 2025–26 season: three mainstage productions…"
  (was the winking "presented as simple date lists, because you're more likely…"). ✓

## Result
PASS on every section-E item. No regressions. Open item (repo rename `garfield-theatre-new`
→ `garfield-theatre`) is the standing GitHub token-scope TODO, not a defect.
