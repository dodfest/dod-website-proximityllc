/**
 * Schedule page: tab switching and category filtering.
 */

document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.schedule-tab');
  const days = document.querySelectorAll('.schedule-day');
  const pills = document.querySelectorAll('.category-pill');

  if (!tabs.length) return;

  // Tab switching
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetDay = tab.dataset.day;

      // Update tabs
      tabs.forEach(t => t.setAttribute('aria-selected', 'false'));
      tab.setAttribute('aria-selected', 'true');

      // Show/hide day panels
      days.forEach(d => {
        d.classList.toggle('schedule-day--active', d.dataset.day === targetDay);
        d.setAttribute('aria-hidden', d.dataset.day !== targetDay);
      });

      // Reset category filter
      pills.forEach(p => p.setAttribute('aria-pressed', p.dataset.category === 'all' ? 'true' : 'false'));
      const activeDay = document.querySelector(`.schedule-day[data-day="${targetDay}"]`);
      if (activeDay) {
        activeDay.querySelectorAll('.schedule-item').forEach(item => {
          item.classList.remove('schedule-item--hidden');
        });
      }

      // Update URL hash
      history.replaceState(null, '', `#${targetDay}`);
    });
  });

  // Category filtering
  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      const category = pill.dataset.category;

      // Update pills
      pills.forEach(p => p.setAttribute('aria-pressed', 'false'));
      pill.setAttribute('aria-pressed', 'true');

      // Filter items in active day
      const activeDay = document.querySelector('.schedule-day--active');
      if (!activeDay) return;

      activeDay.querySelectorAll('.schedule-item').forEach(item => {
        if (category === 'all') {
          item.classList.remove('schedule-item--hidden');
        } else {
          item.classList.toggle('schedule-item--hidden', item.dataset.category !== category);
        }
      });
    });
  });

  // Check URL hash on load
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    const matchingTab = document.querySelector(`.schedule-tab[data-day="${hash}"]`);
    if (matchingTab) matchingTab.click();
  }
});
