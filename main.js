const menuToggle = document.getElementById('menuToggle');
const nav = document.getElementById('nav');
const anoSpan = document.getElementById('ano');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
    const expanded = nav.classList.contains('open');
    menuToggle.setAttribute('aria-expanded', expanded ? 'true' : 'false');
  });

  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

if (anoSpan) {
  const currentYear = new Date().getFullYear();
  anoSpan.textContent = currentYear;
}