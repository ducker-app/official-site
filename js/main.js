/**
 * VIP Charter Travel - Main JavaScript
 * ===================================
 * All interactive functionality for the website
 */

// =============================================================================
// Global State
// =============================================================================

const state = {
  form: {
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    passengers: '',
    message: ''
  },
  mobileMenuOpen: false,
  isScrolled: false
};

// =============================================================================
// Utility Functions
// =============================================================================

/**
 * Smooth scroll to a section by ID
 */
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
    // Close mobile menu if open
    if (state.mobileMenuOpen) {
      toggleMobileMenu();
    }
  }
}

/**
 * Scroll to top of page
 */
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// =============================================================================
// Navbar Functionality
// =============================================================================

/**
 * Handle scroll event to add/remove navbar background
 */
function handleNavbarScroll() {
  const navbar = document.getElementById('navbar');
  const scrollThreshold = 50;

  if (window.scrollY > scrollThreshold) {
    if (!state.isScrolled) {
      navbar.classList.add('scrolled');
      state.isScrolled = true;
    }
  } else {
    if (state.isScrolled) {
      navbar.classList.remove('scrolled');
      state.isScrolled = false;
    }
  }
}

/**
 * Initialize navbar scroll listener
 */
function initNavbar() {
  window.addEventListener('scroll', handleNavbarScroll);

  // Logo click handler
  const logo = document.getElementById('navbar-logo');
  if (logo) {
    logo.addEventListener('click', scrollToTop);
  }
}

// =============================================================================
// Mobile Menu
// =============================================================================

/**
 * Toggle mobile menu open/close
 */
function toggleMobileMenu() {
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = document.getElementById('menu-icon');
  const closeIcon = document.getElementById('close-icon');
  const menuBtn = document.getElementById('mobile-menu-btn');

  state.mobileMenuOpen = !state.mobileMenuOpen;

  if (state.mobileMenuOpen) {
    mobileMenu.classList.remove('hidden');
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');
    menuBtn.setAttribute('aria-expanded', 'true');
    // Prevent body scroll when menu is open
    document.body.style.overflow = 'hidden';
  } else {
    mobileMenu.classList.add('hidden');
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');
    menuBtn.setAttribute('aria-expanded', 'false');
    // Re-enable body scroll
    document.body.style.overflow = '';
  }
}

/**
 * Initialize mobile menu
 */
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  if (menuBtn) {
    menuBtn.addEventListener('click', toggleMobileMenu);
  }
}

// =============================================================================
// Custom Select Dropdown
// =============================================================================

/**
 * Initialize custom select dropdowns
 */
function initCustomSelects() {
  const customSelects = document.querySelectorAll('.custom-select');

  customSelects.forEach(select => {
    const trigger = select.querySelector('.select-trigger');
    const dropdown = select.querySelector('.select-dropdown');
    const hiddenInput = select.querySelector('input[type="hidden"]');
    const valueSpan = select.querySelector('.select-value');
    const options = select.querySelectorAll('.select-option');

    // Toggle dropdown
    trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = !dropdown.classList.contains('hidden');

      // Close all other selects
      document.querySelectorAll('.custom-select').forEach(s => {
        s.querySelector('.select-dropdown').classList.add('hidden');
        s.classList.remove('open');
      });

      // Toggle this select
      if (isOpen) {
        dropdown.classList.add('hidden');
        select.classList.remove('open');
      } else {
        dropdown.classList.remove('hidden');
        select.classList.add('open');
      }
    });

    // Handle option selection
    options.forEach(option => {
      option.addEventListener('click', (e) => {
        e.stopPropagation();
        const value = option.getAttribute('data-value');
        const text = option.textContent;

        // Update hidden input and display value
        hiddenInput.value = value;
        valueSpan.textContent = text;

        // Update form state
        state.form.passengers = value;

        // Close dropdown
        dropdown.classList.add('hidden');
        select.classList.remove('open');
      });
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.custom-select')) {
      document.querySelectorAll('.select-dropdown').forEach(dropdown => {
        dropdown.classList.add('hidden');
      });
      document.querySelectorAll('.custom-select').forEach(select => {
        select.classList.remove('open');
      });
    }
  });
}

// =============================================================================
// Form Validation
// =============================================================================

/**
 * Validate email format
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone format
 */
function isValidPhone(phone) {
  const phoneRegex = /^[\d\s\-\(\)\+]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 8;
}

/**
 * Validate date is in the future
 */
function isValidDate(dateString) {
  const selectedDate = new Date(dateString);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  return selectedDate >= today;
}

/**
 * Validate form data
 */
function validateForm(formData) {
  const errors = {};

  // Required fields
  if (!formData.name.trim()) {
    errors.name = '請輸入姓名';
  }

  if (!formData.phone.trim()) {
    errors.phone = '請輸入電話';
  } else if (!isValidPhone(formData.phone)) {
    errors.phone = '請輸入有效的電話號碼';
  }

  if (!formData.email.trim()) {
    errors.email = '請輸入電子郵件';
  } else if (!isValidEmail(formData.email)) {
    errors.email = '請輸入有效的電子郵件地址';
  }

  if (!formData.date) {
    errors.date = '請選擇日期';
  } else if (!isValidDate(formData.date)) {
    errors.date = '請選擇今天或未來的日期';
  }

  if (!formData.time) {
    errors.time = '請選擇時間';
  }

  if (!formData.passengers) {
    errors.passengers = '請選擇乘客人數';
  }

  return errors;
}

/**
 * Display form errors
 */
function displayFormErrors(errors) {
  // Clear previous errors
  document.querySelectorAll('.input-error').forEach(el => el.remove());
  document.querySelectorAll('.input, .select-trigger').forEach(el => {
    el.style.borderColor = '';
  });

  // Display new errors
  Object.keys(errors).forEach(fieldName => {
    const field = document.getElementById(fieldName);
    const trigger = document.querySelector(`#${fieldName}-trigger`);
    const targetElement = trigger || field;

    if (targetElement) {
      // Highlight field
      targetElement.style.borderColor = 'hsl(var(--destructive))';

      // Add error message
      const errorDiv = document.createElement('div');
      errorDiv.className = 'input-error text-sm text-destructive';
      errorDiv.style.color = 'hsl(var(--destructive))';
      errorDiv.style.marginTop = '0.25rem';
      errorDiv.textContent = errors[fieldName];
      targetElement.parentElement.appendChild(errorDiv);
    }
  });

  // Focus on first error field
  const firstErrorField = Object.keys(errors)[0];
  const firstField = document.getElementById(firstErrorField);
  if (firstField) {
    firstField.focus();
  }
}

/**
 * Clear form errors
 */
function clearFormErrors() {
  document.querySelectorAll('.input-error').forEach(el => el.remove());
  document.querySelectorAll('.input, .select-trigger').forEach(el => {
    el.style.borderColor = '';
  });
}

// =============================================================================
// Toast Notification System
// =============================================================================

let toastIdCounter = 0;

/**
 * Show a toast notification
 */
function showToast(title, description, duration = 5000) {
  const container = document.getElementById('toast-container');
  const toastId = `toast-${toastIdCounter++}`;

  // Create toast element
  const toast = document.createElement('div');
  toast.id = toastId;
  toast.className = 'toast';
  toast.innerHTML = `
    <div class="toast-title">${title}</div>
    <div class="toast-description">${description}</div>
    <button class="toast-close" aria-label="Close">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
  `;

  // Add to container
  container.appendChild(toast);

  // Close button handler
  const closeBtn = toast.querySelector('.toast-close');
  closeBtn.addEventListener('click', () => {
    removeToast(toastId);
  });

  // Auto-dismiss after duration
  if (duration > 0) {
    setTimeout(() => {
      removeToast(toastId);
    }, duration);
  }
}

/**
 * Remove a toast notification
 */
function removeToast(toastId) {
  const toast = document.getElementById(toastId);
  if (toast) {
    toast.classList.add('toast-exit');
    setTimeout(() => {
      toast.remove();
    }, 200);
  }
}

// =============================================================================
// Form Submission
// =============================================================================

/**
 * Handle form submission
 */
function handleFormSubmit(e) {
  e.preventDefault();

  // Get form data
  const formElement = e.target;
  const formData = {
    name: formElement.name.value,
    phone: formElement.phone.value,
    email: formElement.email.value,
    date: formElement.date.value,
    time: formElement.time.value,
    passengers: formElement.passengers.value,
    message: formElement.message.value
  };

  // Validate form
  const errors = validateForm(formData);

  if (Object.keys(errors).length > 0) {
    displayFormErrors(errors);
    return;
  }

  // Clear errors
  clearFormErrors();

  // Log form data (in production, this would send to backend)
  console.log('Form submitted:', formData);

  // Show success toast
  showToast(
    '預訂已送出',
    '我們將盡快與您聯繫，感謝您的預訂！'
  );

  // Reset form
  formElement.reset();

  // Reset custom select display
  const selectValue = document.querySelector('.select-value');
  if (selectValue) {
    selectValue.textContent = '請選擇人數';
  }

  // Reset state
  state.form = {
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    passengers: '',
    message: ''
  };
}

/**
 * Initialize booking form
 */
function initBookingForm() {
  const form = document.getElementById('booking-form');
  if (form) {
    form.addEventListener('submit', handleFormSubmit);

    // Add input listeners to clear errors on change
    const inputs = form.querySelectorAll('input, textarea');
    inputs.forEach(input => {
      input.addEventListener('input', () => {
        clearFormErrors();
      });
    });
  }
}

// =============================================================================
// Miscellaneous
// =============================================================================

/**
 * Set current year in footer
 */
function setCurrentYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

/**
 * Set minimum date for date input (today)
 */
function setMinDate() {
  const dateInput = document.getElementById('date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }
}

// =============================================================================
// Initialization
// =============================================================================

/**
 * Initialize all functionality when DOM is ready
 */
function init() {
  // Initialize components
  initNavbar();
  initMobileMenu();
  initCustomSelects();
  initBookingForm();

  // Set dynamic content
  setCurrentYear();
  setMinDate();

  // Initial navbar check
  handleNavbarScroll();

  console.log('VIP Charter Travel website initialized');
}

// Run initialization when DOM is fully loaded
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// =============================================================================
// Global Functions (for inline onclick handlers)
// =============================================================================

// Make scrollToSection available globally for inline onclick handlers
window.scrollToSection = scrollToSection;
