document.addEventListener('DOMContentLoaded', () => {
  if (window.lucide) {
    window.lucide.createIcons();
  }

  const header = document.getElementById('siteHeader');
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const hamburgerIcon = document.getElementById('hamburgerIcon');
  const closeMenuIcon = document.getElementById('closeMenuIcon');

  const marqueeRow = document.querySelector('.work-marquee-row');
  let marqueeResumeTimer;

  // Let touch, pointer, and trackpad scrolling take over the moving strip.
  marqueeRow?.addEventListener('scroll', () => {
    marqueeRow.classList.add('is-manually-scrolling');
    window.clearTimeout(marqueeResumeTimer);
    marqueeResumeTimer = window.setTimeout(() => {
      marqueeRow.classList.remove('is-manually-scrolling');
    }, 1400);
  }, { passive: true });

  marqueeRow?.addEventListener('wheel', (event) => {
    if (Math.abs(event.deltaY) > Math.abs(event.deltaX)) {
      marqueeRow.scrollLeft += event.deltaY;
    }
  }, { passive: true });

  const toggleMobileMenu = (forceState) => {
    if (!mobileDrawer) return;
    const isOpen = mobileDrawer.classList.contains('open');
    const willOpen = forceState === undefined ? !isOpen : forceState;
    mobileDrawer.classList.toggle('open', willOpen);
    mobileDrawer.setAttribute('aria-hidden', String(!willOpen));
    mobileToggle?.setAttribute('aria-expanded', String(willOpen));
    hamburgerIcon?.classList.toggle('hidden', willOpen);
    closeMenuIcon?.classList.toggle('hidden', !willOpen);
    document.body.style.overflow = willOpen ? 'hidden' : '';
  };

  mobileToggle?.addEventListener('click', () => toggleMobileMenu());
  document.querySelectorAll('.mobile-nav-link').forEach((link) => {
    link.addEventListener('click', () => toggleMobileMenu(false));
  });
  window.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') toggleMobileMenu(false);
  });
  window.addEventListener('scroll', () => {
    header?.classList.toggle('scrolled', window.scrollY > 15);
  }, { passive: true });
});
