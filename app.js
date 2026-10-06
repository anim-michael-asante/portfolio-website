/**
 * Anim Michael Asante — Portfolio Hero Application Controller
 * Vanilla ES6+ | State-Driven | Accessible & Performant
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Initialize Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // 2. Header Scroll Shadow State
  const siteHeader = document.getElementById('siteHeader');
  const handleScroll = () => {
    if (window.scrollY > 15) {
      siteHeader.classList.add('scrolled');
    } else {
      siteHeader.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 3. Navigation Active Link State Management
  const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
  navLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      navLinks.forEach((l) => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

  // 4. Mobile Menu Drawer Navigation
  const mobileToggle = document.getElementById('mobileMenuToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const hamburgerIcon = document.getElementById('hamburgerIcon');
  const closeMenuIcon = document.getElementById('closeMenuIcon');

  const toggleMobileMenu = (forceState) => {
    const isCurrentlyOpen = mobileDrawer.classList.contains('open');
    const willOpen = forceState !== undefined ? forceState : !isCurrentlyOpen;

    if (willOpen) {
      mobileDrawer.classList.add('open');
      mobileDrawer.setAttribute('aria-hidden', 'false');
      mobileToggle.setAttribute('aria-expanded', 'true');
      hamburgerIcon.classList.add('hidden');
      closeMenuIcon.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
    } else {
      mobileDrawer.classList.remove('open');
      mobileDrawer.setAttribute('aria-hidden', 'true');
      mobileToggle.setAttribute('aria-expanded', 'false');
      hamburgerIcon.classList.remove('hidden');
      closeMenuIcon.classList.add('hidden');
      document.body.style.overflow = '';
    }
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => toggleMobileMenu());
  }

  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => toggleMobileMenu(false));
  });

  // 5. Hero background kept static without parallax motion as requested

  // 6. Contact Modal Handling ("Let's talk")
  const contactModal = document.getElementById('contactModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const openContactButtons = document.querySelectorAll('.open-contact-btn');

  const openContactModal = () => {
    toggleMobileMenu(false);
    contactModal.classList.add('open');
    contactModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    const firstInput = document.getElementById('userName');
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 100);
    }
  };

  const closeContactModal = () => {
    contactModal.classList.remove('open');
    contactModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  openContactButtons.forEach((btn) => {
    btn.addEventListener('click', openContactModal);
  });

  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeContactModal);
  }

  window.addEventListener('click', (e) => {
    if (e.target === contactModal) {
      closeContactModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (contactModal && contactModal.classList.contains('open')) {
        closeContactModal();
      }
      if (mobileDrawer && mobileDrawer.classList.contains('open')) {
        toggleMobileMenu(false);
      }
    }
  });

  // 7. Global Toast Notification System
  const toastContainer = document.getElementById('toastContainer');
  const showToast = (message, type = 'success') => {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    toast.setAttribute('role', 'alert');

    const iconName = type === 'success' ? 'check-circle' : 'alert-circle';
    toast.innerHTML = `
      <i data-lucide="${iconName}" class="toast-icon"></i>
      <span class="toast-message">${message}</span>
    `;

    toastContainer.appendChild(toast);
    if (window.lucide) {
      window.lucide.createIcons();
    }

    setTimeout(() => {
      toast.classList.add('toast-exit');
      setTimeout(() => {
        toast.remove();
      }, 300);
    }, 4000);
  };

  // 8. Contact Form Client-Side Validation (OWASP Sanitized)
  const contactForm = document.getElementById('contactForm');
  const userNameInput = document.getElementById('userName');
  const userEmailInput = document.getElementById('userEmail');
  const userMessageInput = document.getElementById('userMessage');
  const submitBtn = document.getElementById('submitFormBtn');
  const btnText = submitBtn ? submitBtn.querySelector('.btn-text') : null;
  const btnSpinner = submitBtn ? submitBtn.querySelector('.btn-spinner') : null;

  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');

  const sanitizeInput = (str) => {
    return str.replace(/[<>&"']/g, (char) => {
      switch (char) {
        case '<': return '&lt;';
        case '>': return '&gt;';
        case '&': return '&amp;';
        case '"': return '&quot;';
        case "'": return '&#39;';
        default: return char;
      }
    }).trim();
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      let isValid = true;

      nameError.textContent = '';
      emailError.textContent = '';
      messageError.textContent = '';
      userNameInput.classList.remove('is-invalid');
      userEmailInput.classList.remove('is-invalid');
      userMessageInput.classList.remove('is-invalid');

      const nameVal = sanitizeInput(userNameInput.value);
      const emailVal = sanitizeInput(userEmailInput.value);
      const messageVal = sanitizeInput(userMessageInput.value);

      if (!nameVal || nameVal.length < 2) {
        nameError.textContent = 'Please enter your name (minimum 2 characters).';
        userNameInput.classList.add('is-invalid');
        isValid = false;
      }

      if (!emailVal || !validateEmail(emailVal)) {
        emailError.textContent = 'Please provide a valid email address.';
        userEmailInput.classList.add('is-invalid');
        isValid = false;
      }

      if (!messageVal || messageVal.length < 10) {
        messageError.textContent = 'Please provide details about your inquiry (minimum 10 characters).';
        userMessageInput.classList.add('is-invalid');
        isValid = false;
      }

      if (!isValid) return;

      submitBtn.disabled = true;
      submitBtn.setAttribute('aria-disabled', 'true');
      btnText.textContent = 'Sending Inquiry...';
      btnSpinner.classList.remove('hidden');

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.removeAttribute('aria-disabled');
        btnText.textContent = 'Send Inquiry';
        btnSpinner.classList.add('hidden');

        closeContactModal();
        contactForm.reset();
        showToast('Thank you! Your inquiry has been received. I will be in touch shortly.', 'success');
      }, 850);
    });
  }
});
