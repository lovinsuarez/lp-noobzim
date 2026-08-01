/**
 * LP NOOBZIM — Core JavaScript
 * Handles IntersectionObserver animations, dynamic metrics counter, progress bars, and section reveals.
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('⚡ LP NOOBZIM — Application Initialized');

  initMetricsCounter();
  initProgressBars();
  initScrollAnimations();
  initSocialCampaignsSlider();
  initMarquees();
  initContactForm();
  initSmoothScrollSnap();
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
 * Animates audience demographic progress bars on scroll (horizontal & vertical)
 */
function initProgressBars() {
  const barFills = document.querySelectorAll('.bar-fill, .v-bar-fill');
  if (!barFills.length) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const fill = entry.target;
        const percentage = fill.dataset.percentage;
        if (percentage) {
          if (fill.classList.contains('v-bar-fill')) {
            fill.style.height = percentage + '%';
          } else {
            fill.style.width = percentage + '%';
          }
        }
        obs.unobserve(fill);
      }
    });
  }, { threshold: 0.2 });

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

/**
 * Professional Social Campaigns Slider Component with:
 * 1. Auto-rotating campaigns every 8 seconds with tab progress animation.
 * 2. Inner image carousel auto-rotating every 3.5 seconds with Ken Burns cross-fade.
 * 3. Interactive tab selection resetting rotation timers.
 */
function initSocialCampaignsSlider() {
  const container = document.getElementById('acoes-sociais');
  if (!container) return;

  const tabs = document.querySelectorAll('.campaign-tab');
  const details = document.querySelectorAll('.campaign-details-content');
  const slideshowContainer = document.getElementById('slideshow-container-el');

  let activeCampaign = 'natal'; // Default active campaign
  let campaignTimer = null;
  let imageTimer = null;

  // Image indices tracking active image index for each campaign
  const currentImageIndices = {
    natal: 0,
    pascoa: 0
  };

  // Structured campaign selectors & DOM elements references
  const campaignData = {
    natal: {
      tab: document.querySelector('.campaign-tab[data-campaign="natal"]'),
      details: document.getElementById('details-natal'),
      slideshow: document.getElementById('slideshow-natal'),
      get slides() { return this.slideshow.querySelectorAll('.campaign-slide'); }
    },
    pascoa: {
      tab: document.querySelector('.campaign-tab[data-campaign="pascoa"]'),
      details: document.getElementById('details-pascoa'),
      slideshow: document.getElementById('slideshow-pascoa'),
      get slides() { return this.slideshow.querySelectorAll('.campaign-slide'); }
    }
  };

  /**
   * Switches the active campaign tab, details, and slideshow
   * @param {string} campaignKey - 'natal' or 'pascoa'
   */
  function switchCampaign(campaignKey) {
    if (activeCampaign === campaignKey) return;

    // Remove active class from current campaign elements
    campaignData[activeCampaign].tab.classList.remove('active');
    campaignData[activeCampaign].details.classList.remove('active');
    campaignData[activeCampaign].slideshow.classList.remove('active');

    // Set new active campaign
    activeCampaign = campaignKey;

    // Add active class to new campaign elements
    campaignData[activeCampaign].tab.classList.add('active');
    campaignData[activeCampaign].details.classList.add('active');
    campaignData[activeCampaign].slideshow.classList.add('active');

    // Update glow class on slideshow container
    if (slideshowContainer) {
      slideshowContainer.className = `campaign-slideshow-container ${campaignKey}-active`;
    }

    // Reset current image index for the newly active campaign to start from the first image
    const slides = campaignData[activeCampaign].slides;
    slides.forEach((slide, index) => {
      if (index === 0) {
        slide.classList.add('active');
      } else {
        slide.classList.remove('active');
      }
    });
    currentImageIndices[activeCampaign] = 0;

    // Reset and restart timers
    resetCampaignTimer();
    resetImageTimer();
  }

  /**
   * Rotates images within the active campaign (3.5s interval)
   */
  function rotateActiveCampaignImage() {
    const data = campaignData[activeCampaign];
    const slides = data.slides;
    if (slides.length <= 1) return;

    // Remove active class from the current image
    const currentIndex = currentImageIndices[activeCampaign];
    slides[currentIndex].classList.remove('active');

    // Calculate next image index
    const nextIndex = (currentIndex + 1) % slides.length;
    currentImageIndices[activeCampaign] = nextIndex;

    // Add active class to next image
    slides[nextIndex].classList.add('active');
  }

  // Timer controllers
  function startCampaignTimer() {
    campaignTimer = setInterval(() => {
      const nextCampaign = activeCampaign === 'natal' ? 'pascoa' : 'natal';
      switchCampaign(nextCampaign);
    }, 8000);
  }

  function resetCampaignTimer() {
    if (campaignTimer) {
      clearInterval(campaignTimer);
    }
    startCampaignTimer();
  }

  function startImageTimer() {
    imageTimer = setInterval(() => {
      rotateActiveCampaignImage();
    }, 3500);
  }

  function resetImageTimer() {
    if (imageTimer) {
      clearInterval(imageTimer);
    }
    startImageTimer();
  }

  // Attach click event listeners to tabs
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const campaignKey = tab.dataset.campaign;
      switchCampaign(campaignKey);
    });
  });

  // Start campaign timers and initial slide timers
  startCampaignTimer();
  startImageTimer();
}

/**
 * Duplo Carrossel Infinito e Interativo de Marcas com suporte a arrastar
 */
function initMarquees() {
  const marquees = [
    { id: 'marquee-row-1', speed: 0.5 } // Direita para Esquerda (mais lento e suave)
  ];

  marquees.forEach(({ id, speed }) => {
    const el = document.getElementById(id);
    if (!el) return;

    const track = el.querySelector('.marcas-marquee-track');
    if (!track) return;

    // Duplicar elementos programaticamente para efeito infinito
    const children = Array.from(track.children);
    children.forEach(child => {
      const clone = child.cloneNode(true);
      track.appendChild(clone);
    });

    let isDown = false;
    let startX;
    let scrollLeft;
    let wasInitialized = false;

    // Função de animação contínua (subpixel scroll)
    function step() {
      if (!isDown) {
        const midpoint = track.scrollWidth / 2;
        if (midpoint > 0) {
          // Inicialização para rolagem esquerda-para-direita
          if (speed < 0 && !wasInitialized) {
            el.scrollLeft = midpoint;
            wasInitialized = true;
          }

          let currentScroll = el.scrollLeft + speed;

          // Wrap infinito
          if (speed > 0) {
            if (currentScroll >= midpoint) {
              currentScroll -= midpoint;
            }
          } else {
            if (currentScroll <= 0) {
              currentScroll += midpoint;
            }
          }
          el.scrollLeft = currentScroll;
        }
      }
      requestAnimationFrame(step);
    }

    // Drag-to-scroll Mouse
    el.addEventListener('mousedown', (e) => {
      isDown = true;
      el.classList.add('active-dragging');
      startX = e.pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    });

    el.addEventListener('mouseleave', () => {
      isDown = false;
      el.classList.remove('active-dragging');
    });

    el.addEventListener('mouseup', () => {
      isDown = false;
      el.classList.remove('active-dragging');
    });

    el.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5; // sensibilidade do arrasto
      let currentScroll = scrollLeft - walk;

      const midpoint = track.scrollWidth / 2;
      if (midpoint > 0) {
        if (currentScroll >= midpoint) {
          currentScroll -= midpoint;
          scrollLeft -= midpoint;
          startX = x;
        } else if (currentScroll <= 0) {
          currentScroll += midpoint;
          scrollLeft += midpoint;
          startX = x;
        }
      }
      el.scrollLeft = currentScroll;
    });

    // Touch para dispositivos móveis
    el.addEventListener('touchstart', (e) => {
      isDown = true;
      startX = e.touches[0].pageX - el.offsetLeft;
      scrollLeft = el.scrollLeft;
    });

    el.addEventListener('touchend', () => {
      isDown = false;
    });

    el.addEventListener('touchmove', (e) => {
      if (!isDown) return;
      const x = e.touches[0].pageX - el.offsetLeft;
      const walk = (x - startX) * 1.5;
      let currentScroll = scrollLeft - walk;

      const midpoint = track.scrollWidth / 2;
      if (midpoint > 0) {
        if (currentScroll >= midpoint) {
          currentScroll -= midpoint;
          scrollLeft -= midpoint;
          startX = x;
        } else if (currentScroll <= 0) {
          currentScroll += midpoint;
          scrollLeft += midpoint;
          startX = x;
        }
      }
      el.scrollLeft = currentScroll;
    });

    // Iniciar loop
    requestAnimationFrame(step);
  });
}

/**
 * Handles contact form submission
 */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const whatsappInput = document.getElementById('whatsapp');
  if (whatsappInput) {
    whatsappInput.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '');
      if (value.length > 11) value = value.slice(0, 11);
      
      if (value.length === 0) {
        e.target.value = '';
      } else if (value.length <= 2) {
        e.target.value = `(${value}`;
      } else if (value.length <= 6) {
        e.target.value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
      } else if (value.length <= 10) {
        e.target.value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
      } else {
        e.target.value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
      }
    });
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nome = document.getElementById('nome').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const email = document.getElementById('email').value;

    console.log('Formulário Enviado:', { nome, whatsapp, email });
    alert(`Obrigado pelo contato, ${nome}! Retornaremos em breve.`);
    form.reset();
  });
}

/**
 * Intercepts anchor navigation clicks to perform smooth scrolling
 * by temporarily disabling CSS scroll snapping during scroll transitions.
 */
function initSmoothScrollSnap() {
  const navLinks = document.querySelectorAll('a[href^="#"]');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetSection = document.querySelector(targetId);
      if (!targetSection) return;

      e.preventDefault();

      // Temporarily disable scroll-snap on html to allow smooth transition
      document.documentElement.style.scrollSnapType = 'none';

      // Scroll smoothly to target element
      targetSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

      // Update URL hash without jumping
      history.pushState(null, null, targetId);

      // Re-enable scroll snap after transition is complete
      let isScrolling;
      function onScroll() {
        window.clearTimeout(isScrolling);
        isScrolling = setTimeout(() => {
          document.documentElement.style.scrollSnapType = 'y mandatory';
          window.removeEventListener('scroll', onScroll);
        }, 100);
      }
      window.addEventListener('scroll', onScroll);

      // Fallback in case scroll event doesn't fire (e.g. already at target position)
      setTimeout(() => {
        document.documentElement.style.scrollSnapType = 'y mandatory';
        window.removeEventListener('scroll', onScroll);
      }, 1000);
    });
  });
}
