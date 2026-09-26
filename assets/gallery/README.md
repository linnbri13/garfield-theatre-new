# Gallery photos

Drop show photos into this folder (`.jpg` or `.png`), then add one block to
`gallery.html` for each photo. Replace the matching placeholder card
(`<figure class="gallery-card">` with a `<div class="ph">`) with:

```html
<figure class="gallery-card">
  <img src="assets/gallery/addams-family-opening.jpg" alt="Addams Family opening night" loading="lazy" />
  <figcaption>The Addams Family! — Spring 2026</figcaption>
</figure>
```

- Keep files reasonably sized (< ~1.5 MB each) so the page stays fast.
- Naming suggestion: `<show>-<moment>.jpg` (e.g. `addams-family-opening.jpg`).
- Captions render on hover (always visible on touch devices).
