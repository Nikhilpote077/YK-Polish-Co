/* ==========================================================================
   YK Polish Co. — main.js
   Handles: announcement ticker loop, sticky header shadow, mega menus,
   mobile drawer + accordions. No frameworks — vanilla JS.
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  /* ---- 1. Announcement bar: duplicate track for a seamless loop ---- */
  const track = document.getElementById("announceTrack");
  if (track) {
    track.innerHTML += track.innerHTML; // duplicate content once for seamless -50% scroll
  }

  /* ---- 2. Sticky header shadow on scroll ---- */
  const header = document.getElementById("siteHeader");
  const onScroll = () => {
    if (window.scrollY > 12) header.classList.add("is-scrolled");
    else header.classList.remove("is-scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- 3. Desktop mega menus (click to open, click outside/escape to close) ---- */
  const navItems = document.querySelectorAll(".nav-item");

  function closeAllMegas(except) {
    navItems.forEach((item) => {
      if (item !== except) {
        item.classList.remove("is-open");
        const btn = item.querySelector(".nav-link-btn");
        if (btn) btn.setAttribute("aria-expanded", "false");
      }
    });
  }

  navItems.forEach((item) => {
    const btn = item.querySelector(".nav-link-btn");
    if (!btn) return;
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = item.classList.contains("is-open");
      closeAllMegas(item);
      item.classList.toggle("is-open", !isOpen);
      btn.setAttribute("aria-expanded", String(!isOpen));
    });
  });

  document.addEventListener("click", () => closeAllMegas());
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeAllMegas();
  });

  /* ---- 4. Mobile menu drawer ---- */
  const burgerBtn = document.getElementById("burgerBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileOverlay = document.getElementById("mobileOverlay");
  const mobileCloseBtn = document.getElementById("mobileCloseBtn");

  function openMobileMenu() {
    mobileMenu.classList.add("is-open");
    mobileOverlay.classList.add("is-open");
    mobileMenu.setAttribute("aria-hidden", "false");
    burgerBtn.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  }
  function closeMobileMenu() {
    mobileMenu.classList.remove("is-open");
    mobileOverlay.classList.remove("is-open");
    mobileMenu.setAttribute("aria-hidden", "true");
    burgerBtn.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  }

  burgerBtn?.addEventListener("click", openMobileMenu);
  mobileCloseBtn?.addEventListener("click", closeMobileMenu);
  mobileOverlay?.addEventListener("click", closeMobileMenu);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMobileMenu();
  });

  /* ---- 5. Mobile accordions (Shop / Collections) ---- */
  document
    .querySelectorAll(".mobile-menu .accordion-trigger")
    .forEach((trigger) => {
      trigger.addEventListener("click", () => {
        trigger.closest(".accordion-item").classList.toggle("is-open");
      });
    });
});

/* ---- Page loader: hide once everything has loaded (min. 400ms so the logo is seen) ---- */
(function () {
  const hideLoader = () => setTimeout(() => document.body.classList.add("is-loaded"), 400);
  if (document.readyState === "complete") hideLoader();
  else window.addEventListener("load", hideLoader);
})();
