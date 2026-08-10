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
    <!-- Announcement Bar -->
    <div class="announcement-bar">
      <div class="container">
        <p class="announcement-text">
          <span class="announcement-icon">✦</span>
          Handcrafted Press-On Nails
          <span class="announcement-divider">|</span>
          Custom Designs Available
          <span class="announcement-divider">|</span>
          Order via WhatsApp
        </p>
      </div>
    </div>

    <!-- Main Header -->
    <header class="site-header" id="siteHeader">
      <div class="container">
        <nav class="navbar navbar-expand-lg custom-navbar">

          <!-- Brand -->
          <a
            class="navbar-brand brand-mark"
            href="index.html"
            aria-label="YK Polish Co. Home"
          >
            <span class="brand-name">YK</span>
            <span class="brand-divider"></span>
            <span class="brand-text">
              <strong>POLISH</strong>
              <small>CO.</small>
            </span>
          </a>

          <!-- Mobile actions -->
          <div class="mobile-header-actions d-lg-none">

            <button
              class="header-icon-btn"
              type="button"
              data-search-toggle
              aria-label="Search"
              aria-expanded="false"
            >
              <i class="bi bi-search"></i>
            </button>

            <a
              class="header-icon-btn whatsapp-header"
              href="${SITE_CONFIG.whatsappUrl}"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Chat on WhatsApp"
            >
              <i class="bi bi-whatsapp"></i>
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-mobile-menu-toggle
              aria-label="Open navigation menu"
              aria-expanded="false"
            >
              <i class="bi bi-list"></i>
            </button>

          </div>

          <!-- Desktop navigation -->
          <div
            class="collapse navbar-collapse"
            id="mainNavigation"
          >

            <ul class="navbar-nav mx-auto align-items-lg-center">

              <li class="nav-item">
                <a
                  class="nav-link"
                  href="index.html"
                  data-nav="home"
                >
                  Home
                </a>
              </li>

              <!-- Shop -->
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="shop.html"
                  id="shopDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Shop
                </a>

                <div
                  class="dropdown-menu shop-mega-menu"
                  aria-labelledby="shopDropdown"
                >
                  <div class="container-fluid">
                    <div class="row g-4">

                      <div class="col-lg-4">
                        <p class="mega-heading">
                          Shop
                        </p>

                        <a
                          class="mega-link mega-link-featured"
                          href="shop.html"
                        >
                          <span>
                            <strong>All Press-On Nails</strong>
                            <small>Explore the full collection</small>
                          </span>
                          <i class="bi bi-arrow-up-right"></i>
                        </a>

                        <a
                          class="mega-link"
                          href="new-arrivals.html"
                        >
                          New Arrivals
                        </a>

                        <a
                          class="mega-link"
                          href="bestsellers.html"
                        >
                          Bestsellers
                        </a>
                      </div>

                      <div class="col-lg-4">
                        <p class="mega-heading">
                          Shop by Style
                        </p>

                        <div class="mega-grid">
                          <a href="shop.html?style=minimal">Minimal</a>
                          <a href="shop.html?style=floral">Floral</a>
                          <a href="shop.html?style=french">French</a>
                          <a href="shop.html?style=glam">Glam</a>
                          <a href="shop.html?style=cute">Cute</a>
                          <a href="shop.html?style=chrome">Chrome</a>
                          <a href="shop.html?style=glitter">Glitter</a>
                        </div>
                      </div>

                      <div class="col-lg-4">
                        <p class="mega-heading">
                          Shop by Colour
                        </p>

                        <div class="mega-grid">
                          <a href="shop.html?colour=nude">Nude</a>
                          <a href="shop.html?colour=pink">Pink</a>
                          <a href="shop.html?colour=red">Red</a>
                          <a href="shop.html?colour=black">Black</a>
                          <a href="shop.html?colour=blue">Blue</a>
                          <a href="shop.html?colour=green">Green</a>
                          <a href="shop.html?colour=purple">Purple</a>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link"
                  href="new-arrivals.html"
                  data-nav="new-arrivals"
                >
                  New Arrivals
                </a>
              </li>

              <!-- Collections -->
              <li class="nav-item dropdown">
                <a
                  class="nav-link dropdown-toggle"
                  href="collections.html"
                  id="collectionsDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Collections
                </a>

                <div
                  class="dropdown-menu collections-mega-menu"
                  aria-labelledby="collectionsDropdown"
                >
                  <div class="container-fluid">

                    <div class="d-flex justify-content-between align-items-center mb-4">
                      <div>
                        <p class="mega-eyebrow">
                          Discover your moment
                        </p>

                        <h3 class="mega-title">
                          Shop by Collection
                        </h3>
                      </div>

                      <a
                        href="collections.html"
                        class="mega-view-all"
                      >
                        View all collections
                        <i class="bi bi-arrow-up-right"></i>
                      </a>
                    </div>

                    <div class="collection-menu-grid">

                      <a href="collections.html?collection=bridal">
                        <span>Bridal</span>
                        <small>For your forever moments</small>
                      </a>

                      <a href="collections.html?collection=corporate">
                        <span>Corporate Girlies</span>
                        <small>Polished for every workday</small>
                      </a>

                      <a href="collections.html?collection=moms-to-be">
                        <span>Moms-to-Be</span>
                        <small>Soft and beautiful</small>
                      </a>

                      <a href="collections.html?collection=party">
                        <span>Party</span>
                        <small>Bring on the sparkle</small>
                      </a>

                      <a href="collections.html?collection=everyday">
                        <span>Everyday</span>
                        <small>Easy beauty, on repeat</small>
                      </a>

                      <a href="collections.html?collection=occasion">
                        <span>Occasion</span>
                        <small>Made for dressing up</small>
                      </a>

                      <a href="collections.html?collection=festive">
                        <span>Festive</span>
                        <small>Celebrate at your fingertips</small>
                      </a>

                      <a href="collections.html?collection=gifts">
                        <span>Gifts</span>
                        <small>A little love, wrapped in pretty</small>
                      </a>

                      <a href="collections.html?collection=college-events">
                        <span>College & Events</span>
                        <small>Fun, expressive and fresh</small>
                      </a>

                      <a href="collections.html?collection=vacation">
                        <span>Vacation</span>
                        <small>Holiday mood</small>
                      </a>

                      <a href="collections.html?collection=minimalist">
                        <span>Minimalist</span>
                        <small>Clean and timeless</small>
                      </a>

                      <a href="collections.html?collection=statement">
                        <span>Statement</span>
                        <small>For when more is more</small>
                      </a>

                    </div>

                    <div class="mega-custom-cta mt-4">
                      <div>
                        <span class="mega-custom-icon">
                          <i class="bi bi-stars"></i>
                        </span>

                        <div>
                          <strong>Want something uniquely yours?</strong>
                          <small>
                            Create a custom press-on nail set.
                          </small>
                        </div>
                      </div>

                      <a href="customised.html">
                        Start a Custom Order
                        <i class="bi bi-arrow-right"></i>
                      </a>
                    </div>

                  </div>
                </div>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link nav-link-custom"
                  href="customised.html"
                  data-nav="customised"
                >
                  Customised
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link size-nav-link"
                  href="sizing/index.html"
                  data-nav="sizing"
                >
                  <i class="bi bi-rulers"></i>
                  Find Your Size
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link"
                  href="about.html"
                  data-nav="about"
                >
                  About
                </a>
              </li>

              <li class="nav-item">
                <a
                  class="nav-link"
                  href="contact.html"
                  data-nav="contact"
                >
                  Contact
                </a>
              </li>

            </ul>

            <!-- Desktop actions -->
            <div class="header-actions d-none d-lg-flex">

              <button
                class="header-icon-btn"
                type="button"
                data-search-toggle
                aria-label="Search"
                aria-expanded="false"
              >
                <i class="bi bi-search"></i>
              </button>

              <a
                href="${SITE_CONFIG.whatsappUrl}"
                class="header-whatsapp"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i class="bi bi-whatsapp"></i>
                <span>WhatsApp</span>
              </a>

            </div>

          </div>

        </nav>
      </div>
    </header>

    <!-- Search Panel -->
    <div
      class="search-panel"
      id="siteSearchPanel"
      aria-hidden="true"
    >
      <div class="container">

        <div class="search-panel-inner">

          <div class="search-panel-header">
            <div>
              <span class="search-eyebrow">
                Find your style
              </span>

              <h2>
                What are you looking for?
              </h2>
            </div>

            <button
              type="button"
              class="search-close"
              data-search-close
              aria-label="Close search"
            >
              <i class="bi bi-x-lg"></i>
            </button>
          </div>

          <form
            class="site-search-form"
            action="shop.html"
            method="get"
          >
            <div class="search-input-wrap">

              <i class="bi bi-search"></i>

              <input
                type="search"
                name="q"
                placeholder="Search nails, styles, colours..."
                autocomplete="off"
                aria-label="Search products"
              />

              <button type="submit">
                Search
              </button>

            </div>
          </form>

          <div class="search-suggestions">
            <span>Popular:</span>

            <a href="shop.html?style=minimal">
              Minimal
            </a>

            <a href="shop.html?style=french">
              French
            </a>

            <a href="shop.html?style=glam">
              Glam
            </a>

            <a href="shop.html?colour=pink">
              Pink
            </a>

            <a href="shop.html?collection=bridal">
              Bridal
            </a>
          </div>

        </div>

      </div>
    </div>
  `;
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
