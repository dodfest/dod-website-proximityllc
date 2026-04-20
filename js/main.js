/**
 * Main JS: Mobile menu, sticky header, smooth scroll
 */

document.addEventListener('DOMContentLoaded', () => {
  // Wait a tick for components.js to inject the header
  requestAnimationFrame(() => {
    initMobileMenu();
    initStickyHeader();
  });
});

/* ─── Mobile Menu ──────────────────────────────────── */

function initMobileMenu() {
  const hamburger = document.getElementById('hamburger-btn');
  const mobileNav = document.getElementById('mobile-nav');
  if (!hamburger || !mobileNav) return;

  const focusableEls = () => mobileNav.querySelectorAll('a, button');

  hamburger.addEventListener('click', () => {
    const isOpen = document.body.classList.toggle('nav-open');
    hamburger.setAttribute('aria-expanded', isOpen);
    mobileNav.setAttribute('aria-hidden', !isOpen);

    if (isOpen) {
      // Focus first link
      const firstLink = mobileNav.querySelector('a');
      if (firstLink) firstLink.focus();
    }
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && document.body.classList.contains('nav-open')) {
      document.body.classList.remove('nav-open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
      hamburger.focus();
    }
  });

  // Close when clicking a link
  mobileNav.addEventListener('click', (e) => {
    if (e.target.matches('.mobile-nav__link, .mobile-nav__cta a')) {
      document.body.classList.remove('nav-open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileNav.setAttribute('aria-hidden', 'true');
    }
  });

  // Trap focus
  mobileNav.addEventListener('keydown', (e) => {
    if (e.key !== 'Tab') return;
    const els = Array.from(focusableEls());
    if (!els.length) return;
    const first = els[0];
    const last = els[els.length - 1];

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
}

/* ─── Sticky Header Shadow ─────────────────────────── */

function initStickyHeader() {
  const header = document.getElementById('site-header-el');
  if (!header) return;

  // Use a sentinel element at the top of the page
  const sentinel = document.createElement('div');
  sentinel.style.height = '1px';
  sentinel.style.position = 'absolute';
  sentinel.style.top = '0';
  document.body.prepend(sentinel);

  const observer = new IntersectionObserver(
    ([entry]) => {
      header.classList.toggle('site-header--scrolled', !entry.isIntersecting);
    },
    { threshold: 0 }
  );

  observer.observe(sentinel);
}

/* ─── Countdown Timer (used on home page) ──────────── */

function initCountdown() {
  const countdownEl = document.getElementById('countdown');
  if (!countdownEl) return;

  const eventDate = new Date('2026-06-27T12:00:00-04:00').getTime();

  function update() {
    const now = Date.now();
    const diff = eventDate - now;

    if (diff <= 0) {
      countdownEl.innerHTML = '<div class="countdown__item"><span class="countdown__number">NOW</span><span class="countdown__label">Event Day!</span></div>';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((diff % (1000 * 60)) / 1000);

    countdownEl.innerHTML = `
      <div class="countdown__item"><span class="countdown__number">${days}</span><span class="countdown__label">Days</span></div>
      <div class="countdown__item"><span class="countdown__number">${hours}</span><span class="countdown__label">Hours</span></div>
      <div class="countdown__item"><span class="countdown__number">${mins}</span><span class="countdown__label">Minutes</span></div>
      <div class="countdown__item"><span class="countdown__number">${secs}</span><span class="countdown__label">Seconds</span></div>
    `;
  }

  update();
  setInterval(update, 1000);
}

// Auto-init countdown if element exists
document.addEventListener('DOMContentLoaded', initCountdown);
