/**
 * LP NOOBZIM — Core JavaScript
 * Handles IntersectionObserver animations, dynamic metrics counter, progress bars, and section reveals.
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('⚡ LP NOOBZIM — Application Initialized');

  initMetricsCounter();
  initProgressBars();
  initScrollAnimations();
});

/**
 * Animates metric counters when they scroll into view
 */
function initMetricsCounter() {
  const counterElements = document.querySelectorAll('[data-target]');
  if (!counterElements.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  counterElements.forEach(el => observer.observe(el));
}

/**
 * Increments number values smoothly from 0 to target
 * @param {HTMLElement} element 
 */
function animateCounter(element) {
  const target = parseFloat(element.dataset.target);
  if (isNaN(target)) return;

  const hasDecimals = element.dataset.decimals !== undefined;
  const duration = 1800; // ms
  const stepTime = 20;   // ms
  const steps = duration / stepTime;
  const increment = target / steps;
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= target) {
      element.textContent = hasDecimals ? target.toFixed(0) : Math.round(target).toLocaleString('pt-BR');
      clearInterval(timer);
    } else {
      element.textContent = hasDecimals ? Math.floor(current).toString() : Math.floor(current).toLocaleString('pt-BR');
    }
  }, stepTime);
}

/**
 * Animates audience demographic progress bars on scroll
 */
function initProgressBars() {
  const barFills = document.querySelectorAll('.bar-fill');
  if (!barFills.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const percentage = fill.dataset.percentage;
        if (percentage) {
          fill.style.width = percentage + '%';
        }
        obs.unobserve(fill);
      }
    });
  }, { threshold: 0.3 });

  barFills.forEach(fill => observer.observe(fill));
}

/**
 * Adds fade-in and slide-up animations to sections on scroll
 */
function initScrollAnimations() {
  const sections = document.querySelectorAll('.fade-in-section');
  if (!sections.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  sections.forEach(section => observer.observe(section));
}
