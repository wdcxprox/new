// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.style.display === 'flex';
    if (window.innerWidth <= 680) {
      navLinks.style.display = isOpen ? 'none' : 'flex';
    }
  });
  window.addEventListener('resize', () => {
    if (window.innerWidth > 680) navLinks.style.display = 'flex';
    else navLinks.style.display = 'none';
  });
}

// GSAP entrance animations
if (window.gsap) {
  gsap.registerPlugin(ScrollTrigger);
  gsap.from('.hero h1', { y: 20, opacity: 0, duration: 0.8, ease: 'power2.out' });
  gsap.from('.hero .lead', { y: 16, opacity: 0, delay: 0.1, duration: 0.8 });
  gsap.from('.hero-ctas', { y: 12, opacity: 0, delay: 0.2, duration: 0.8 });

  gsap.utils.toArray('.card').forEach((el) => {
    gsap.from(el, {
      scrollTrigger: { trigger: el, start: 'top 80%' },
      y: 24,
      opacity: 0,
      duration: 0.6,
      ease: 'power2.out',
    });
  });
}

// Subtle tilt on cards
const tiltCards = document.querySelectorAll('.tilt');
const constrain = 12;
function makeTilt(event, card) {
  const rect = card.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  const dx = event.clientX - cx;
  const dy = event.clientY - cy;
  const rx = (+1) * (dy / (rect.height / 2)) * constrain;
  const ry = (-1) * (dx / (rect.width / 2)) * constrain;
  card.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
}
function resetTilt(card) {
  card.style.transform = 'rotateX(0deg) rotateY(0deg)';
}

tiltCards.forEach((card) => {
  card.addEventListener('mousemove', (e) => makeTilt(e, card));
  card.addEventListener('mouseleave', () => resetTilt(card));
});