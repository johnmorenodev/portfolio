// ── Theme ───────────────────────────────────────────────
const html      = document.documentElement;
const themeBtn  = document.querySelector('.theme-toggle');
const stored    = localStorage.getItem('theme') || 'light';

html.setAttribute('data-theme', stored);
syncToggle(stored);

themeBtn.addEventListener('click', () => {
  const next = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  syncToggle(next);
});

function syncToggle(theme) {
  themeBtn.textContent = theme === 'dark' ? '○' : '◐';
  themeBtn.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
}

// ── Mobile nav ──────────────────────────────────────────
const navToggle = document.querySelector('.nav-toggle');
const navMenu   = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  const open = navMenu.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});

// Close on nav link click
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

// ── Active nav highlight ────────────────────────────────
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-link');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.id;
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
      });
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observer.observe(s));
