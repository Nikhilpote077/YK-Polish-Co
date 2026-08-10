/* Shared site components. One header/footer powers every page. */
const BASE = document.body.dataset.base || "";
const cfg = window.SITE_CONFIG;

function whatsappUrl(
  message = "Hi YK Polish Co., I would like to know more about your press-on nails.",
) {
  return `https://wa.me/${cfg.whatsapp}?text=${encodeURIComponent(message)}`;
}

function headerHTML() {
  return `
  <div class="announce-bar">
    <div class="announce-track" id="announceTrack">
      <span>✨ Handcrafted Press-On Nails · <strong>New designs dropping regularly</strong></span>
      <span>📏 Not sure about your size? <strong>Start with our sizing guide</strong></span>
      <span>🎨 <strong>Custom sets</strong> available on request</span>
      <span>🤍 Made with care, packed with intention</span>
    </div>
  </div>
  <header class="site-header" id="siteHeader">
    <div class="container">
      <div class="nav-row">
        <a href="${BASE}index.html" class="brand" aria-label="${cfg.brand} home">
          <span class="brand-mark" aria-hidden="true">YK</span>
          <span class="brand-word">YK Polish Co.<small>HANDCRAFTED PRESS-ONS</small></span>
        </a>
        <nav aria-label="Primary navigation">
          <ul class="primary-nav">
            <li><a data-nav="home" href="${BASE}index.html">Home</a></li>
            <li class="nav-item">
              <button class="nav-link-btn" aria-expanded="false">Shop <span class="chevron"></span></button>
              <div class="mega">
                <div class="mega-inner cols-3">
                  <div class="mega-col"><h6>Shop</h6><ul>
                    <li><a data-nav="shop" href="${BASE}shop.html">All Press-On Nails</a></li>
                    <li><a data-nav="new" href="${BASE}new-arrivals.html">New Arrivals</a></li>
                    <li><a data-nav="best" href="${BASE}bestsellers.html">Bestsellers</a></li>
                  </ul></div>
                  <div class="mega-col"><h6>Shop by Style</h6><ul>
                    ${["minimal", "floral", "french", "glam", "cute", "chrome", "glitter"].map((x) => `<li><a href="${BASE}shop.html?style=${x}">${x[0].toUpperCase() + x.slice(1)}</a></li>`).join("")}
                  </ul></div>
                  <div class="mega-col"><h6>Shop by Colour</h6><ul>
                    ${["nude", "pink", "red", "black", "blue", "green", "purple"].map((x) => `<li><a href="${BASE}shop.html?colour=${x}">${x[0].toUpperCase() + x.slice(1)}</a></li>`).join("")}
                  </ul></div>
                  <div class="view-all-row"><a href="${BASE}shop.html">Explore the full collection →</a></div>
                </div>
              </div>
            </li>
            <li><a data-nav="new" href="${BASE}new-arrivals.html">New Arrivals</a></li>
            <li><a data-nav="collections" href="${BASE}collections.html">Collections</a></li>
            <li><a data-nav="custom" href="${BASE}customised.html">Customised</a></li>
            <li><a data-nav="sizing" href="${BASE}sizing/index.html">Find Your Size</a></li>
            <li><a data-nav="about" href="${BASE}about.html">About</a></li>
            <li><a data-nav="contact" href="${BASE}contact.html">Contact</a></li>
          </ul>
        </nav>
        <div class="nav-icons">
          <button class="icon-btn" id="searchBtn" aria-label="Search" aria-expanded="false">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
          </button>
          <a href="${whatsappUrl()}" class="icon-btn whatsapp" aria-label="Chat on WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.85.5 3.58 1.36 5.07L2 22l5.2-1.44a9.9 9.9 0 0 0 4.84 1.24h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.11c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.06.28-3.58-.75-3.01-1.24-4.93-4.28-5.08-4.48-.15-.2-1.2-1.6-1.2-3.06 0-1.45.76-2.16 1.03-2.46.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.19 0 .44-.07.68.53.25.6.86 2.1.94 2.25.08.15.13.33.02.53-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.3.76 1.27 1.64 2.06 1.13 1.02 2.08 1.34 2.37 1.49.3.15.47.13.65-.08.17-.2.73-.86.93-1.16.2-.3.4-.25.66-.15.27.1 1.71.82 2 .97.3.15.5.22.57.35.07.13.07.75-.17 1.44Z"/></svg>
          </a>
          <button class="burger" id="burgerBtn" aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg></button>
        </div>
      </div>
    </div>
  </header>
  <div class="search-panel" id="searchPanel" hidden>
    <div class="container"><form id="siteSearchForm"><label for="siteSearchInput">Search the collection</label><div class="search-row"><input id="siteSearchInput" type="search" placeholder="Try bridal, chrome, nude…" autocomplete="off"><button class="btn btn-primary" type="submit">Search</button></div></form><button class="search-close" id="searchClose">Close</button></div>
  </div>`;
}

function mobileMenuHTML() {
  return `<div class="mobile-overlay" id="mobileOverlay"></div><aside class="mobile-menu" id="mobileMenu" aria-hidden="true">
    <div class="mobile-menu-head"><span class="brand-word">YK Polish Co.</span><button class="icon-btn" id="mobileCloseBtn" aria-label="Close menu">✕</button></div>
    <a href="${BASE}index.html" class="top-link">Home</a>
    <div class="accordion-item"><button class="accordion-trigger">Shop <span class="chevron"></span></button><div class="accordion-panel"><ul>
      <li><a href="${BASE}shop.html">All Nails</a></li><li><a href="${BASE}new-arrivals.html">New Arrivals</a></li><li><a href="${BASE}bestsellers.html">Bestsellers</a></li><li><a href="${BASE}shop.html?style=minimal">Shop by Style</a></li><li><a href="${BASE}shop.html?colour=nude">Shop by Colour</a></li>
    </ul></div></div>
    <a href="${BASE}collections.html" class="top-link">Collections</a>
    <a href="${BASE}customised.html" class="top-link">Customised</a>
    <a href="${BASE}sizing/index.html" class="top-link">Find Your Size</a>
    <a href="${BASE}about.html" class="top-link">About</a>
    <a href="${BASE}contact.html" class="top-link">Contact</a>
    <div class="mobile-cta"><a href="${whatsappUrl()}" class="btn btn-primary" style="flex:1;justify-content:center">WhatsApp</a><a href="tel:${cfg.phone.replace(/\s/g, "")}" class="btn btn-ghost-ink">Call</a></div>
  </aside>`;
}

function footerHTML() {
  return `<section class="final-cta"><div class="container final-cta-inner"><span class="eyebrow">made for your moment</span><h2>Find the set that feels <span class="swipe">like you.</span></h2><p>Choose a ready-to-wear design or create something completely your own.</p><div class="hero-cta" style="justify-content:center"><a href="${BASE}shop.html" class="btn btn-primary">Explore Nails →</a><a href="${whatsappUrl()}" class="btn btn-ghost-ink">Order on WhatsApp</a></div></div></section>
  <section class="newsletter"><div class="container newsletter-inner"><div><h3>Join the YK Nail Club ♡</h3><p>New drops, styling ideas and occasional offers. No unnecessary noise.</p></div><form class="newsletter-form" id="newsletterForm"><input type="email" required placeholder="Your email address" aria-label="Email address"><button type="submit">Join</button></form></div><p class="newsletter-note" id="newsletterNote">No spam. Just pretty nails.</p></section>
  <footer class="site-footer"><div class="container footer-grid">
    <div class="footer-brand"><a href="${BASE}index.html" class="brand"><span class="brand-mark">YK</span><span class="brand-word">YK Polish Co.<small>HANDCRAFTED PRESS-ONS</small></span></a><p>Your Nails. Your Mood. Your Moment.</p><div class="footer-social"><a href="${cfg.instagram}" target="_blank" rel="noopener" aria-label="Instagram">IG</a><a href="${whatsappUrl()}" aria-label="WhatsApp">WA</a><a href="mailto:${cfg.email}" aria-label="Email">✉</a><a href="tel:${cfg.phone.replace(/\s/g, "")}" aria-label="Phone">☎</a></div></div>
    <div class="footer-col"><h6>Shop</h6><ul><li><a href="${BASE}new-arrivals.html">New Arrivals</a></li><li><a href="${BASE}shop.html">All Nails</a></li><li><a href="${BASE}bestsellers.html">Bestsellers</a></li><li><a href="${BASE}collections.html">Collections</a></li><li><a href="${BASE}customised.html">Customised</a></li></ul></div>
    <div class="footer-col"><h6>Help</h6><ul><li><a href="${BASE}sizing/index.html">Find Your Size</a></li><li><a href="${BASE}sizing/size-chart.html">Size Chart</a></li><li><a href="${BASE}sizing/sizing-kit.html">Sizing Kit</a></li><li><a href="${BASE}journal/apply-press-ons.html">Application Guide</a></li><li><a href="${BASE}journal/make-them-last.html">Care & Removal</a></li><li><a href="${BASE}contact.html">Contact</a></li></ul></div>
    <div class="footer-col"><h6>About</h6><ul><li><a href="${BASE}about.html">Our Story</a></li><li><a href="${BASE}journal/index.html">Nail Journal</a></li><li><a href="${cfg.instagram}" target="_blank" rel="noopener">Instagram</a></li></ul></div>
    <div class="footer-col"><h6>Policies</h6><ul><li><a href="${BASE}policies/shipping.html">Shipping</a></li><li><a href="${BASE}policies/returns.html">Returns</a></li><li><a href="${BASE}policies/cancellation.html">Cancellation</a></li><li><a href="${BASE}policies/custom-order.html">Custom Orders</a></li><li><a href="${BASE}policies/privacy.html">Privacy</a></li><li><a href="${BASE}policies/terms.html">Terms</a></li></ul></div>
  </div><div class="container footer-bottom"><span>© ${cfg.year} ${cfg.brand}. All Rights Reserved.</span><span>Handcrafted with intention.</span></div></footer><a href="${whatsappUrl()}" class="whatsapp-fab" aria-label="Chat on WhatsApp">WA</a>`;
}

function injectComponents() {
  const h = document.getElementById("site-header-root");
  const f = document.getElementById("site-footer-root");
  if (h) h.innerHTML = headerHTML() + mobileMenuHTML();
  if (f) f.innerHTML = footerHTML();
}
injectComponents();
