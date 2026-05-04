/**
 * Shared header and footer components.
 * Injected via JS to avoid duplicating HTML across 8 pages.
 */

const currentPage = document.body.dataset.page || 'home';

function navLink(href, label, page) {
  const isActive = currentPage === page;
  const activeClass = isActive ? ' site-header__nav-link--active' : '';
  const mobileActiveClass = isActive ? ' mobile-nav__link--active' : '';
  return {
    desktop: `<li><a href="${href}" class="site-header__nav-link${activeClass}">${label}</a></li>`,
    mobile: `<li><a href="${href}" class="mobile-nav__link${mobileActiveClass}">${label}</a></li>`,
  };
}

const navItems = [
  navLink('index.html', 'Home', 'home'),
  navLink('about.html', 'About', 'about'),
  navLink('schedule.html', 'Schedule', 'schedule'),
  navLink('vendors.html', 'Vendors', 'vendors'),
  navLink('merch.html', 'Merch', 'merch'),
  navLink('charity-night.html', 'Charity Night', 'charity-night'),
  navLink('sponsors.html', 'Sponsors', 'sponsors'),
  navLink('donate.html', 'Donate', 'donate'),
  navLink('faq.html', 'FAQ', 'faq'),
  navLink('contact.html', 'Contact', 'contact'),
];

// Header
const headerHTML = `
  <a href="#main-content" class="visually-hidden">Skip to main content</a>
  <header class="site-header" id="site-header-el">
    <div class="site-header__inner">
      <a href="index.html" class="site-header__logo">
        <img src="assets/Untitled_Artwork.png" alt="Day of Danbury" class="site-header__logo-img">
        Day <span>of</span> Danbury
      </a>

      <nav class="site-header__nav" aria-label="Main navigation">
        <ul class="site-header__nav-list">
          ${navItems.map(n => n.desktop).join('\n          ')}
        </ul>
      </nav>

      <a href="donate.html" class="btn btn--primary btn--sm site-header__cta">Donate</a>

      <button class="site-header__hamburger" aria-label="Open menu" aria-expanded="false" aria-controls="mobile-nav" id="hamburger-btn">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>

  <nav class="mobile-nav" id="mobile-nav" aria-label="Mobile navigation" aria-hidden="true">
    <div class="mobile-nav__header">
      <a href="index.html" class="mobile-nav__brand">
        <img src="assets/logo-blue.png" alt="" class="mobile-nav__logo">
        <div>
          <div class="mobile-nav__brand-title">Day of Danbury</div>
          <div class="mobile-nav__brand-sub">June 27–28, 2026</div>
        </div>
      </a>
    </div>
    <ul class="mobile-nav__list">
      ${navItems.map(n => n.mobile).join('\n      ')}
    </ul>
    <div class="mobile-nav__cta">
      <a href="charity-night.html" class="btn btn--primary btn--lg">Charity Night Tickets</a>
      <a href="donate.html" class="btn btn--outline-white btn--lg">Donate</a>
    </div>
    <div class="mobile-nav__footer">
      <p>CityCenter Danbury Green &middot; The Downtown Danbury Venue</p>
      <p><a href="mailto:dayofdanbury@gmail.com">dayofdanbury@gmail.com</a></p>
    </div>
  </nav>
`;

// Footer
const footerHTML = `
  <div class="footer-newsletter">
    <div class="footer-newsletter__inner">
      <img src="assets/logo-blue.png" alt="Day of Danbury" class="footer-newsletter__logo">
      <div class="footer-newsletter__copy">
        <h3>Keep Up With Day of Danbury</h3>
        <p>Schedule drops, ticket announcements, merch releases — sent the moment they're live.</p>
      </div>
      <form action="https://app.kit.com/forms/9304522/subscriptions" method="post" class="footer-newsletter__form">
        <input type="email" name="email_address" placeholder="Your email" required class="footer-newsletter__input">
        <button type="submit" class="btn btn--white">Join</button>
      </form>
    </div>
  </div>
  <footer class="site-footer">
    <div class="site-footer__grid">
      <div class="site-footer__about">
        <h3 class="site-footer__heading">Day of Danbury</h3>
        <p>A two-day, free-admission cultural festival and ticketed charity event celebrating the diverse communities that call Danbury, CT home.</p>
        <div class="site-footer__social">
          <a href="https://www.instagram.com/dayofdanbury/" target="_blank" rel="noopener" aria-label="Instagram — @dayofdanbury">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <rect x="2.5" y="2.5" width="19" height="19" rx="5" stroke="currentColor" stroke-width="1.8"/>
              <circle cx="12" cy="12" r="4.2" stroke="currentColor" stroke-width="1.8"/>
              <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor"/>
            </svg>
          </a>
        </div>
      </div>

      <div>
        <h3 class="site-footer__heading">Quick Links</h3>
        <ul class="site-footer__links">
          <li><a href="schedule.html">Festival Schedule</a></li>
          <li><a href="vendors.html">Vendors</a></li>
          <li><a href="charity-night.html">Charity Night</a></li>
          <li><a href="sponsors.html">Become a Sponsor</a></li>
          <li><a href="donate.html">Donate</a></li>
        </ul>
      </div>

      <div>
        <h3 class="site-footer__heading">Event Info</h3>
        <ul class="site-footer__links">
          <li><a href="schedule.html#day1">Day 1: June 27</a></li>
          <li><a href="schedule.html#day2">Day 2: June 28</a></li>
          <li><a href="charity-night.html">Charity Night</a></li>
          <li><a href="about.html">Our Mission</a></li>
          <li><a href="about.html#team">Meet the Team</a></li>
        </ul>
      </div>

      <div>
        <h3 class="site-footer__heading">Contact</h3>
        <p class="site-footer__contact-item">
          <a href="mailto:dayofdanbury@gmail.com">dayofdanbury@gmail.com</a>
        </p>
        <p class="site-footer__contact-item">Danbury Green & Downtown Danbury Venue</p>
        <p class="site-footer__contact-item">Danbury, CT</p>
        <p class="site-footer__contact-item" style="margin-top: var(--space-md);">
          <a href="https://livingtraditionsfoundation.lovable.app/index.html" target="_blank" rel="noopener" style="color: inherit; text-decoration: underline;"><strong>Living Traditions Foundation Inc.</strong></a>
        </p>
      </div>
    </div>

    <div class="site-footer__bottom">
      <div class="site-footer__bottom-inner">
        <p>&copy; 2026 Day of Danbury. All rights reserved.</p>
        <p>A production of <a href="https://livingtraditionsfoundation.lovable.app/index.html" target="_blank" rel="noopener" style="color: inherit; text-decoration: underline;">Living Traditions Foundation Inc.</a></p>
        <p style="margin-top: var(--space-xs); font-size: 0.7rem; opacity: 0.5;">Website designed and powered by <a href="https://proximity-llc-ai.lovable.app/" target="_blank" rel="noopener" style="color: inherit; text-decoration: underline;">Proximity LLC</a></p>
      </div>
    </div>
  </footer>
`;

// Newsletter Popup (site-wide)
const newsletterPopupHTML = `
  <div id="newsletterPopup" class="newsletter-popup" role="dialog" aria-label="Newsletter signup" aria-hidden="true">
    <div class="newsletter-popup__backdrop" data-close-popup></div>
    <div class="newsletter-popup__box">
      <button class="newsletter-popup__close" data-close-popup aria-label="Close">&times;</button>
      <p style="font-family: var(--font-accent); font-style: italic; font-size: var(--text-lg); color: var(--color-gold); margin-bottom: var(--space-xs);">Isn't it beautiful to be in Danbury?</p>
      <h2 style="color: var(--color-white); margin-bottom: var(--space-sm);">Don't miss a moment.</h2>
      <p style="color: rgba(255,255,255,0.85); margin-bottom: var(--space-lg); font-size: var(--text-base);">Get schedule drops, ticket announcements, and behind-the-scenes updates straight to your inbox.</p>
      <form action="https://app.kit.com/forms/9304522/subscriptions" method="post" class="newsletter-form" data-newsletter-popup-form>
        <input type="email" name="email_address" placeholder="Your email address" required class="newsletter-input">
        <button type="submit" class="btn btn--white">Notify Me</button>
      </form>
      <p style="font-size: var(--text-xs); color: rgba(255,255,255,0.5); margin-top: var(--space-md);">No spam. Unsubscribe anytime.</p>
    </div>
  </div>
  <style>
    .newsletter-popup { position: fixed; inset: 0; z-index: 9999; display: none; align-items: center; justify-content: center; padding: var(--space-lg); }
    .newsletter-popup.is-open { display: flex; animation: popFadeIn 0.4s ease; }
    .newsletter-popup__backdrop { position: absolute; inset: 0; background: rgba(0,0,0,0.7); backdrop-filter: blur(4px); -webkit-backdrop-filter: blur(4px); cursor: pointer; }
    .newsletter-popup__box { position: relative; background: var(--color-dod-blue); border-radius: 12px; padding: var(--space-2xl) var(--space-xl); max-width: 520px; width: 100%; text-align: center; box-shadow: 0 20px 60px rgba(0,0,0,0.5); animation: popSlideUp 0.5s ease; }
    .newsletter-popup__close { position: absolute; top: 12px; right: 16px; background: none; border: none; color: rgba(255,255,255,0.7); font-size: 2rem; line-height: 1; cursor: pointer; padding: 0 8px; transition: color 0.2s; }
    .newsletter-popup__close:hover { color: var(--color-white); }
    @keyframes popFadeIn { from { opacity: 0; } to { opacity: 1; } }
    @keyframes popSlideUp { from { transform: translateY(30px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
    @media (max-width: 500px) {
      .newsletter-popup__box { padding: var(--space-xl) var(--space-md); }
    }
  </style>
`;

const NEWSLETTER_DISMISS_LIMIT = 3;
const NEWSLETTER_DELAY_MS = 5000;

function initNewsletterPopup() {
  let signedUp = null, dismissCount = 0;
  try {
    signedUp = localStorage.getItem('dod_newsletter_signup');
    dismissCount = parseInt(localStorage.getItem('dod_newsletter_dismiss_count') || '0', 10) || 0;
  } catch (e) {}
  if (signedUp) return;
  if (dismissCount >= NEWSLETTER_DISMISS_LIMIT) return;

  const wrapper = document.createElement('div');
  wrapper.innerHTML = newsletterPopupHTML;
  document.body.appendChild(wrapper);

  const popup = document.getElementById('newsletterPopup');
  if (!popup) return;

  function close() {
    popup.classList.remove('is-open');
    popup.setAttribute('aria-hidden', 'true');
    try {
      const next = (parseInt(localStorage.getItem('dod_newsletter_dismiss_count') || '0', 10) || 0) + 1;
      localStorage.setItem('dod_newsletter_dismiss_count', String(next));
    } catch (e) {}
  }

  popup.querySelectorAll('[data-close-popup]').forEach(el => el.addEventListener('click', close));
  const form = popup.querySelector('[data-newsletter-popup-form]');
  if (form) {
    form.addEventListener('submit', () => {
      try { localStorage.setItem('dod_newsletter_signup', '1'); } catch (e) {}
    });
  }

  setTimeout(() => {
    popup.classList.add('is-open');
    popup.setAttribute('aria-hidden', 'false');
  }, NEWSLETTER_DELAY_MS);
}

// Inject
document.addEventListener('DOMContentLoaded', () => {
  const headerContainer = document.getElementById('site-header');
  const footerContainer = document.getElementById('site-footer');
  if (headerContainer) headerContainer.innerHTML = headerHTML;
  if (footerContainer) footerContainer.innerHTML = footerHTML;
  initNewsletterPopup();
});
