/* ==========================================================================
   YK Polish Co. — components.js
   Injects the header, mobile menu and footer on every page from one place.
   BASE is read from <body data-base="..."> so pages inside /sizing, /journal
   and /policies can resolve links back to the site root correctly.
   ========================================================================== */

const BASE = document.body.dataset.base || "";

function headerHTML() {
  return `
<div class="announce-bar">
  <div class="announce-track" id="announceTrack">
    <span>✨ Handcrafted Press-On Nails &nbsp;·&nbsp; <strong>New Designs Dropping Regularly</strong> &nbsp;·&nbsp; Order via WhatsApp, Email or Call</span>
    <span>📏 Not Sure About Your Size? &nbsp;<strong>Try Our Sizing Kit</strong></span>
    <span>🎨 <strong>Custom Press-On Nails</strong> Available</span>
    <span>🤍 <strong>Handcrafted Nail Art</strong>, Made for You</span>
  </div>
</div>

<header class="site-header" id="siteHeader">
  <div class="container">
    <div class="nav-row">

      <a href="${BASE}index.html" class="brand">
        <img src="${BASE}assets/images/logo/yk-logo.png" alt="YK Polish Co. logo">
        <span class="brand-word">YK Polish Co.<small>HANDCRAFTED PRESS-ONS</small></span>
      </a>

      <nav aria-label="Primary">
        <ul class="primary-nav">
          <li><a href="${BASE}index.html">Home</a></li>

          <li class="nav-item">
            <button class="nav-link-btn" aria-expanded="false">Shop <span class="chevron"></span></button>
            <div class="mega">
              <div class="mega-inner cols-3">
                <div class="mega-col">
                  <h6>Shop</h6>
                  <ul>
                    <li><a href="${BASE}shop.html">All Press-On Nails</a></li>
                    <li><a href="${BASE}new-arrivals.html">New Arrivals</a></li>
                    <li><a href="${BASE}bestsellers.html">Bestsellers</a></li>
                  </ul>
                </div>
                <div class="mega-col">
                  <h6>Shop by Style</h6>
                  <ul>
                    <li><a href="${BASE}shop.html?style=minimal">Minimal</a></li>
                    <li><a href="${BASE}shop.html?style=floral">Floral</a></li>
                    <li><a href="${BASE}shop.html?style=french">French</a></li>
                    <li><a href="${BASE}shop.html?style=glam">Glam</a></li>
                    <li><a href="${BASE}shop.html?style=cute">Cute</a></li>
                    <li><a href="${BASE}shop.html?style=chrome">Chrome</a></li>
                    <li><a href="${BASE}shop.html?style=glitter">Glitter</a></li>
                  </ul>
                </div>
                <div class="mega-col">
                  <h6>Shop by Colour</h6>
                  <ul>
                    <li><a href="${BASE}shop.html?colour=nude">Nude</a></li>
                    <li><a href="${BASE}shop.html?colour=pink">Pink</a></li>
                    <li><a href="${BASE}shop.html?colour=red">Red</a></li>
                    <li><a href="${BASE}shop.html?colour=black">Black</a></li>
                    <li><a href="${BASE}shop.html?colour=blue">Blue</a></li>
                    <li><a href="${BASE}shop.html?colour=green">Green</a></li>
                    <li><a href="${BASE}shop.html?colour=purple">Purple</a></li>
                  </ul>
                </div>
                <div class="view-all-row"><a href="${BASE}shop.html">View All Designs →</a></div>
              </div>
            </div>
          </li>

          <li><a href="${BASE}new-arrivals.html">New Arrivals</a></li>

          <li class="nav-item">
            <button class="nav-link-btn" aria-expanded="false">Collections <span class="chevron"></span></button>
            <div class="mega">
              <div class="mega-inner cols-2">
                <div class="mega-col">
                  <h6>Shop by Collection</h6>
                  <div class="mega-collections">
                    <a href="${BASE}collections.html#bridal">💍 Bridal</a>
                    <a href="${BASE}collections.html#corporate">💼 Corporate Girlies</a>
                    <a href="${BASE}collections.html#moms-to-be">🤍 Moms-to-Be</a>
                    <a href="${BASE}collections.html#party">🥂 Party</a>
                    <a href="${BASE}collections.html#everyday">🌸 Everyday</a>
                    <a href="${BASE}collections.html#occasion">✨ Occasion</a>
                    <a href="${BASE}collections.html#festive">🪔 Festive</a>
                    <a href="${BASE}collections.html#gifts">🎁 Gifts</a>
                    <a href="${BASE}collections.html#college">🎓 College &amp; Events</a>
                    <a href="${BASE}collections.html#vacation">🏖️ Vacation</a>
                    <a href="${BASE}collections.html#minimalist">🤍 Minimalist</a>
                    <a href="${BASE}collections.html#statement">💎 Statement</a>
                  </div>
                </div>
                <div class="mega-feature">
                  <div>
                    <h5>🎨 Customised</h5>
                    <p>Create a set that's uniquely yours — your colours, your story.</p>
                  </div>
                  <a href="${BASE}customised.html" class="link-arrow">Start a custom order →</a>
                </div>
              </div>
              <div class="view-all-row"><a href="${BASE}collections.html">View All Collections →</a></div>
            </div>
          </li>

          <li><a href="${BASE}customised.html">Customised</a></li>
          <li><a href="${BASE}sizing/index.html" class="nav-find-size">📏 Find Your Size</a></li>
          <li><a href="${BASE}about.html">About</a></li>
          <li><a href="${BASE}contact.html">Contact</a></li>
        </ul>
      </nav>

      <div class="nav-icons">
        <button class="icon-btn" aria-label="Search">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
        </button>
        <a href="https://wa.me/910000000000" class="icon-btn whatsapp" aria-label="Chat on WhatsApp">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.85.5 3.58 1.36 5.07L2 22l5.2-1.44a9.9 9.9 0 0 0 4.84 1.24h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.11c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.06.28-3.58-.75-3.01-1.24-4.93-4.28-5.08-4.48-.15-.2-1.2-1.6-1.2-3.06 0-1.45.76-2.16 1.03-2.46.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.19.01.44-.07.68.53.25.6.86 2.1.94 2.25.08.15.13.33.02.53-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.3.76 1.27 1.64 2.06 1.13 1.02 2.08 1.34 2.37 1.49.3.15.47.13.65-.08.17-.2.73-.86.93-1.16.2-.3.4-.25.66-.15.27.1 1.71.82 2 .97.3.15.5.22.57.35.07.13.07.75-.17 1.44Z"/></svg>
        </a>
        <button class="burger" id="burgerBtn" aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
        </button>
      </div>

    </div>
  </div>
</header>`;
}

function mobileMenuHTML() {
  return `
<div class="mobile-overlay" id="mobileOverlay"></div>
<aside class="mobile-menu" id="mobileMenu" aria-hidden="true">
  <div class="mobile-menu-head">
    <span class="brand-word">YK Polish Co.</span>
    <button class="icon-btn" id="mobileCloseBtn" aria-label="Close menu" style="color:var(--text-on-ink)">✕</button>
  </div>

  <a href="${BASE}index.html" class="top-link">Home</a>

  <div class="accordion-item">
    <button class="accordion-trigger">Shop <span class="chevron"></span></button>
    <div class="accordion-panel">
      <ul>
        <li><a href="${BASE}shop.html">All Nails</a></li>
        <li><a href="${BASE}new-arrivals.html">New Arrivals</a></li>
        <li><a href="${BASE}bestsellers.html">Bestsellers</a></li>
        <li><a href="${BASE}shop.html#style">Shop by Style</a></li>
        <li><a href="${BASE}shop.html#colour">Shop by Colour</a></li>
      </ul>
    </div>
  </div>

  <div class="accordion-item">
    <button class="accordion-trigger">Collections <span class="chevron"></span></button>
    <div class="accordion-panel">
      <ul>
        <li><a href="${BASE}collections.html#bridal">Bridal</a></li>
        <li><a href="${BASE}collections.html#corporate">Corporate Girlies</a></li>
        <li><a href="${BASE}collections.html#moms-to-be">Moms-to-Be</a></li>
        <li><a href="${BASE}collections.html#party">Party</a></li>
        <li><a href="${BASE}collections.html#everyday">Everyday</a></li>
        <li><a href="${BASE}collections.html#occasion">Occasion</a></li>
        <li><a href="${BASE}collections.html#festive">Festive</a></li>
        <li><a href="${BASE}collections.html#gifts">Gifts</a></li>
        <li><a href="${BASE}collections.html#college">College &amp; Events</a></li>
        <li><a href="${BASE}collections.html#vacation">Vacation</a></li>
        <li><a href="${BASE}collections.html#minimalist">Minimalist</a></li>
        <li><a href="${BASE}collections.html#statement">Statement</a></li>
      </ul>
    </div>
  </div>

  <a href="${BASE}customised.html" class="top-link">Customised</a>
  <a href="${BASE}sizing/index.html" class="top-link">📏 Find Your Size</a>
  <a href="${BASE}about.html" class="top-link">About</a>
  <a href="${BASE}contact.html" class="top-link">Contact</a>

  <div class="mobile-cta">
    <a href="https://wa.me/910000000000" class="btn btn-primary" style="flex:1; justify-content:center;">💬 WhatsApp</a>
    <a href="tel:+910000000000" class="btn btn-ghost-ink" style="justify-content:center;">📞</a>
  </div>
</aside>`;
}

function footerHTML() {
  return `
<section class="final-cta">
  <div class="container final-cta-inner">
    <span class="eyebrow">before you go</span>
    <h2>Your next favourite set is <span class="swipe">waiting</span>. 💅</h2>
    <p>Find your style. Find your fit. Make it yours.</p>
    <div class="hero-cta" style="justify-content:center;">
      <a href="${BASE}shop.html" class="btn btn-primary">Explore All Nails →</a>
      <a href="https://wa.me/910000000000" class="btn btn-ghost-ink">Order on WhatsApp</a>
    </div>
  </div>
</section>

<section class="newsletter">
  <div class="container newsletter-inner">
    <div>
      <h3>Join the YK Nail Club ♡</h3>
      <p>Be the first to know about new designs, new collections, special offers, festive drops &amp; custom launches.</p>
    </div>
    <form class="newsletter-form" onsubmit="event.preventDefault(); this.querySelector('button').textContent='Joined ♡';">
      <input type="email" required placeholder="Your email address" aria-label="Email address">
      <button type="submit">Join</button>
    </form>
  </div>
  <p class="newsletter-note">No spam. Just pretty nails.</p>
</section>

<footer class="site-footer">
  <div class="container footer-grid">
    <div class="footer-brand">
      <a href="${BASE}index.html" class="brand">
        <img src="${BASE}assets/images/logo/yk-logo.png" alt="YK Polish Co. logo">
        <span class="brand-word">YK Polish Co.<small>HANDCRAFTED PRESS-ONS</small></span>
      </a>
      <p>Your Nails. Your Mood. Your Moment.</p>
      <div class="footer-social">
        <a href="https://instagram.com" aria-label="Instagram">IG</a>
        <a href="https://wa.me/910000000000" aria-label="WhatsApp">WA</a>
        <a href="mailto:hello@ykpolishco.com" aria-label="Email">✉</a>
        <a href="tel:+910000000000" aria-label="Phone">☎</a>
      </div>
    </div>

    <div class="footer-col">
      <h6>Shop</h6>
      <ul>
        <li><a href="${BASE}new-arrivals.html">New Arrivals</a></li>
        <li><a href="${BASE}shop.html">All Nails</a></li>
        <li><a href="${BASE}bestsellers.html">Bestsellers</a></li>
        <li><a href="${BASE}collections.html">Collections</a></li>
        <li><a href="${BASE}customised.html">Customised</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h6>Collections</h6>
      <ul>
        <li><a href="${BASE}collections.html#bridal">Bridal</a></li>
        <li><a href="${BASE}collections.html#corporate">Corporate Girlies</a></li>
        <li><a href="${BASE}collections.html#party">Party</a></li>
        <li><a href="${BASE}collections.html#festive">Festive</a></li>
        <li><a href="${BASE}collections.html#gifts">Gifts</a></li>
        <li><a href="${BASE}collections.html">View All →</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h6>Help</h6>
      <ul>
        <li><a href="${BASE}sizing/index.html">Find Your Size</a></li>
        <li><a href="${BASE}sizing/size-chart.html">Size Chart</a></li>
        <li><a href="${BASE}sizing/sizing-kit.html">Sizing Kit</a></li>
        <li><a href="${BASE}journal/apply-press-ons.html">Application Guide</a></li>
        <li><a href="${BASE}journal/make-them-last.html">Removal &amp; Care</a></li>
        <li><a href="${BASE}contact.html">Contact</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h6>About</h6>
      <ul>
        <li><a href="${BASE}about.html">Our Story</a></li>
        <li><a href="${BASE}about.html#difference">The YK Difference</a></li>
        <li><a href="https://instagram.com">Instagram</a></li>
        <li><a href="${BASE}journal/index.html">YK Nail Journal</a></li>
      </ul>
    </div>

    <div class="footer-col">
      <h6>Policies</h6>
      <ul>
        <li><a href="${BASE}policies/shipping.html">Shipping Policy</a></li>
        <li><a href="${BASE}policies/returns.html">Returns &amp; Refunds</a></li>
        <li><a href="${BASE}policies/cancellation.html">Cancellation Policy</a></li>
        <li><a href="${BASE}policies/custom-order.html">Custom Order Policy</a></li>
        <li><a href="${BASE}policies/privacy.html">Privacy Policy</a></li>
        <li><a href="${BASE}policies/terms.html">Terms &amp; Conditions</a></li>
      </ul>
    </div>
  </div>

  <div class="container footer-bottom">
    <span>© 2026 YK Polish Co. All Rights Reserved.</span>
    <span>Created by Yogita Patil</span>
  </div>
</footer>

<a href="https://wa.me/910000000000" class="whatsapp-fab" aria-label="Chat on WhatsApp">
  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.85.5 3.58 1.36 5.07L2 22l5.2-1.44a9.9 9.9 0 0 0 4.84 1.24h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.11c-.24.68-1.4 1.3-1.93 1.36-.5.06-1.06.28-3.58-.75-3.01-1.24-4.93-4.28-5.08-4.48-.15-.2-1.2-1.6-1.2-3.06 0-1.45.76-2.16 1.03-2.46.27-.3.6-.37.8-.37.2 0 .4 0 .58.01.19.01.44-.07.68.53.25.6.86 2.1.94 2.25.08.15.13.33.02.53-.1.2-.15.32-.3.5-.15.17-.31.39-.44.52-.15.15-.3.31-.13.6.17.3.76 1.27 1.64 2.06 1.13 1.02 2.08 1.34 2.37 1.49.3.15.47.13.65-.08.17-.2.73-.86.93-1.16.2-.3.4-.25.66-.15.27.1 1.71.82 2 .97.3.15.5.22.57.35.07.13.07.75-.17 1.44Z"/></svg>
</a>`;
}

function injectComponents() {
  const h = document.getElementById("site-header-root");
  const f = document.getElementById("site-footer-root");
  if (h) h.innerHTML = headerHTML() + mobileMenuHTML();
  if (f) f.innerHTML = footerHTML();
}

injectComponents();
