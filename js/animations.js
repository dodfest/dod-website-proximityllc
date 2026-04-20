/**
 * Scroll reveal animations using IntersectionObserver.
 * Add class "reveal" to any element to animate it on scroll.
 */

document.addEventListener('DOMContentLoaded', () => {
  // Respect reduced motion preference
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const reveals = document.querySelectorAll('.reveal');
  if (!reveals.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal--visible');
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.15,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  reveals.forEach((el, i) => {
    // Stagger children if data-delay is set
    if (el.dataset.delay) {
      el.style.transitionDelay = el.dataset.delay;
    }
    observer.observe(el);
  });
});
