document.addEventListener("DOMContentLoaded", () => {
  const track = document.getElementById("announceTrack");
  if (track) track.innerHTML += track.innerHTML;
  const header = document.getElementById("siteHeader");
  const onScroll = () =>
    header?.classList.toggle("is-scrolled", window.scrollY > 12);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  const navItems = document.querySelectorAll(".nav-item");
  const closeMegas = (except = null) =>
    navItems.forEach((item) => {
      if (item !== except) {
        item.classList.remove("is-open");
        item
          .querySelector(".nav-link-btn")
          ?.setAttribute("aria-expanded", "false");
      }
    });
  navItems.forEach((item) => {
    const btn = item.querySelector(".nav-link-btn");
    btn?.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = item.classList.contains("is-open");
      closeMegas(item);
      item.classList.toggle("is-open", !open);
      btn.setAttribute("aria-expanded", String(!open));
    });
  });
  document.addEventListener("click", () => closeMegas());

  const burger = document.getElementById("burgerBtn"),
    menu = document.getElementById("mobileMenu"),
    overlay = document.getElementById("mobileOverlay"),
    close = document.getElementById("mobileCloseBtn");
  const closeMobile = () => {
    menu?.classList.remove("is-open");
    overlay?.classList.remove("is-open");
    menu?.setAttribute("aria-hidden", "true");
    burger?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
  };
  const openMobile = () => {
    menu?.classList.add("is-open");
    overlay?.classList.add("is-open");
    menu?.setAttribute("aria-hidden", "false");
    burger?.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";
  };
  burger?.addEventListener("click", openMobile);
  close?.addEventListener("click", closeMobile);
  overlay?.addEventListener("click", closeMobile);
  document
    .querySelectorAll(".mobile-menu .accordion-trigger")
    .forEach((t) =>
      t.addEventListener("click", () =>
        t.closest(".accordion-item")?.classList.toggle("is-open"),
      ),
    );

  const path = location.pathname.replace(/\\/g, "/");
  let key = "home";
  if (path.endsWith("/shop.html")) key = "shop";
  else if (path.endsWith("/new-arrivals.html")) key = "new";
  else if (path.endsWith("/bestsellers.html")) key = "best";
  else if (path.endsWith("/collections.html")) key = "collections";
  else if (path.endsWith("/customised.html")) key = "custom";
  else if (path.includes("/sizing/")) key = "sizing";
  else if (path.endsWith("/about.html")) key = "about";
  else if (path.endsWith("/contact.html")) key = "contact";
  else if (path.includes("/journal/")) key = "journal";
  document
    .querySelectorAll("[data-nav]")
    .forEach((a) => a.classList.toggle("is-active", a.dataset.nav === key));

  const searchBtn = document.getElementById("searchBtn"),
    panel = document.getElementById("searchPanel"),
    searchClose = document.getElementById("searchClose"),
    input = document.getElementById("siteSearchInput");
  const openSearch = () => {
    if (panel) {
      panel.hidden = false;
      searchBtn?.setAttribute("aria-expanded", "true");
      setTimeout(() => input?.focus(), 20);
    }
  };
  const closeSearch = () => {
    if (panel) {
      panel.hidden = true;
      searchBtn?.setAttribute("aria-expanded", "false");
    }
  };
  searchBtn?.addEventListener("click", openSearch);
  searchClose?.addEventListener("click", closeSearch);
  document.getElementById("siteSearchForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = input.value.trim();
    if (q) location.href = `${BASE_URL()}shop.html?q=${encodeURIComponent(q)}`;
  });
  function BASE_URL() {
    return document.body.dataset.base || "";
  }

  document.getElementById("newsletterForm")?.addEventListener("submit", (e) => {
    e.preventDefault();
    const note = document.getElementById("newsletterNote");
    if (note) note.textContent = "You are on the list ♡";
    e.currentTarget.reset();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeMegas();
      closeMobile();
      closeSearch();
    }
  });
});

function setActiveNavigation() {
  const currentPath =
    window.location.pathname.replace(/\\/g, "/").split("/").pop() ||
    "index.html";

  const navLinks = document.querySelectorAll("[data-nav]");

  navLinks.forEach((link) => {
    const href = link.getAttribute("href");

    if (!href) return;

    const linkPage = href.split("/").pop();

    if (
      (currentPath === "" && linkPage === "index.html") ||
      currentPath === linkPage
    ) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    } else {
      link.classList.remove("active");
      link.removeAttribute("aria-current");
    }
  });
}
