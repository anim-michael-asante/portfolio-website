/**
 * About Page — Scroll Reveal & Counter Animations
 * Vanilla ES6+ | IntersectionObserver Driven
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Re-initialize Lucide Icons for About page elements
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Scroll Reveal — IntersectionObserver
  const revealElements = document.querySelectorAll('[data-abt-reveal]');

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            // Stagger delay based on sibling index within parent
            const siblings = entry.target.parentElement
              ? Array.from(
                  entry.target.parentElement.querySelectorAll(
                    '[data-abt-reveal]'
                  )
                )
              : [];
            const siblingIndex = siblings.indexOf(entry.target);
            const delay = Math.min(siblingIndex * 80, 400);

            setTimeout(() => {
              entry.target.classList.add('abt-visible');
            }, delay);

            revealObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.15,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealElements.forEach((el) => {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show everything immediately
    revealElements.forEach((el) => el.classList.add('abt-visible'));
  }

  // 3. Animated Counters — count up on reveal
  const counters = document.querySelectorAll('[data-count]');

  if (counters.length > 0 && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCounter(entry.target);
            counterObserver.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    counters.forEach((counter) => counterObserver.observe(counter));
  }

  function animateCounter(el) {
    const target = parseInt(el.getAttribute('data-count'), 10);
    const duration = 1200;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(eased * target);

      el.textContent = current;

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  // 4. Header scroll shadow (re-bind for About page)
  const siteHeader = document.getElementById('siteHeader');
  if (siteHeader) {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        siteHeader.classList.add('scrolled');
      } else {
        siteHeader.classList.remove('scrolled');
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
  }

  // 5. Mobile menu drawer (re-bind for About page)
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const hamburgerIcon = document.getElementById('hamburgerIcon');
  const closeMenuIcon = document.getElementById('closeMenuIcon');

  const toggleMobileMenu = (forceState) => {
    if (!mobileDrawer) return;
    const isOpen = mobileDrawer.classList.contains('open');
    const willOpen = forceState !== undefined ? forceState : !isOpen;

    if (willOpen) {
      mobileDrawer.classList.add('open');
      mobileDrawer.setAttribute('aria-hidden', 'false');
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'true');
      if (hamburgerIcon) hamburgerIcon.classList.add('hidden');
      if (closeMenuIcon) closeMenuIcon.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    } else {
      mobileDrawer.classList.remove('open');
      mobileDrawer.setAttribute('aria-hidden', 'true');
      if (mobileToggle) mobileToggle.setAttribute('aria-expanded', 'false');
      if (hamburgerIcon) hamburgerIcon.classList.remove('hidden');
      if (closeMenuIcon) closeMenuIcon.classList.add('hidden');
      document.body.style.overflow = '';
    }
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => toggleMobileMenu());
  }

  // Quote carousel
  const quoteSlides = Array.from(document.querySelectorAll('[data-quote-slide]'));
  const quoteDots = Array.from(document.querySelectorAll('[data-quote-dot]'));
  const previousQuote = document.querySelector('[data-quote-prev]');
  const nextQuote = document.querySelector('[data-quote-next]');
  let activeQuote = 0;

  const showQuote = (index) => {
    activeQuote = (index + quoteSlides.length) % quoteSlides.length;
    quoteSlides.forEach((slide, slideIndex) => {
      slide.classList.toggle('is-active', slideIndex === activeQuote);
    });
    quoteDots.forEach((dot, dotIndex) => {
      dot.classList.toggle('is-active', dotIndex === activeQuote);
    });
  };

  if (quoteSlides.length > 1) {
    previousQuote?.addEventListener('click', () => showQuote(activeQuote - 1));
    nextQuote?.addEventListener('click', () => showQuote(activeQuote + 1));
  }

  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => toggleMobileMenu(false));
  });

  // Close on Escape
  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('open')) {
      toggleMobileMenu(false);
    }
  });
});
