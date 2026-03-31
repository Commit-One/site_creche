const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const anoSpan = document.getElementById('ano');

if (menuToggle && nav) {
    const closeMenu = () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Abrir menu');
  };

  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    const expanded = nav.classList.contains('open');
    menuToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
    menuToggle.setAttribute('aria-label', expanded ? 'Fechar menu' : 'Abrir menu');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      closeMenu();      
    });
  });

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      closeMenu();
    }
  });

  document.addEventListener('click', event => {
    if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
      closeMenu();
    }
  });
}

if (anoSpan) {
  const currentYear = new Date().getFullYear();
  anoSpan.textContent = currentYear;
}

// ScrollReveal - Animações ao fazer scroll
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion && typeof ScrollReveal !== 'undefined') {
  const sr = ScrollReveal({
    origin: 'bottom',
    distance: '60px',
    duration: 700,
    delay: 100,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    reset: false
  });

  // Hero section
  sr.reveal('.hero-text', { origin: 'left', delay: 100 });
  sr.reveal('.hero-card', { origin: 'right', delay: 300 });
  sr.reveal('.chip', { interval: 100 });

  // About section
  sr.reveal('.about > .container > div:first-child', { origin: 'left', delay: 100 });
  sr.reveal('.info-card', { interval: 100, delay: 300 });

  // Programs section
  sr.reveal('.section-header', { delay: 100 });
  sr.reveal('.program-card', { interval: 100, delay: 200 });

  // Gallery section
  sr.reveal('.gallery-card', { interval: 100, delay: 100 });

  // Features section
  sr.reveal('.feature-item', { interval: 100, delay: 100 });

  // Contact section
  sr.reveal('.contact-left', { origin: 'left', delay: 100 });
  sr.reveal('.contact-right', { origin: 'right', delay: 300 });
}