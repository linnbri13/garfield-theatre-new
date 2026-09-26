// Garfield HS Theatre — minimal JS: mobile nav + sticky-header state.
// No frameworks, no calendar.

(function () {
  "use strict";

  var header = document.getElementById("siteHeader");
  var toggle = document.getElementById("navToggle");
  var nav = document.getElementById("nav");

  // Sticky header: transparent at top, solid after scrolling.
  function onScroll() {
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add("solid");
    } else {
      header.classList.remove("solid");
    }
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Mobile nav toggle.
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });

    // Close the menu after choosing a link (mobile).
    nav.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    });

    // Escape closes the menu.
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("open")) {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }
})();
