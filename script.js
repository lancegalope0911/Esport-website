// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
  // Initialize mobile menu
  initMobileMenu();
  
  // Initialize active navigation link based on current page
  initActiveNavLink();
  
  // Initialize all animations and interactions
  initScrollAnimations();
  initHoverEffects();
  initNavbarEffects();
  initParallaxEffect();
  initImageLazyLoading();
  initSmoothScrolling();
  initCardInteractions();
  initLoadingAnimation();
  
  // Initialize enhanced dynamic animations
  initTextRevealAnimations();
  initStaggerAnimations();
  initCounterAnimations();
  initParticleEffects();
  initSectionTransitions();
  initModalAnimations();
  initLogoAnimation();
  initSeeMoreAnimation();
  
  // Initialize button functionality
  initButtonFunctionality();
  initModals();
  initSchedulesTabs();
  initNewsCards();
  initVideoPlayer();
  initFooterLinks();
  
  // Initialize match summaries if on schedules page
  if (document.querySelector('.match-summary-btn')) {
    initMatchSummaries();
  }
  
  // Initialize teams page if on teams page
  if (document.getElementById('teamsGrid')) {
    initTeamsPage();
  }
  
  // Initialize team detail page if on team detail page
  if (document.getElementById('teamHeader')) {
    initTeamDetailPage();
  }
  
  // Initialize player detail page if on player detail page
  if (document.getElementById('playerHeader')) {
    initPlayerDetailPage();
  }
});

// Initialize mobile menu toggle
function initMobileMenu() {
  const mobileMenuToggle = document.getElementById('mobileMenuToggle');
  const navLinks = document.getElementById('navLinks');
  
  if (mobileMenuToggle && navLinks) {
    mobileMenuToggle.addEventListener('click', () => {
      mobileMenuToggle.classList.toggle('active');
      navLinks.classList.toggle('active');
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
    
    // Close menu when clicking on a link
    const links = navLinks.querySelectorAll('.nav-link');
    links.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!mobileMenuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        mobileMenuToggle.classList.remove('active');
        navLinks.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
}

// Initialize active navigation link based on current page
function initActiveNavLink() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    
    if (currentPage === 'index.html' && (href === 'index.html' || href === '/')) {
      link.classList.add('active');
    } else if (currentPage === 'news.html' && href === 'news.html') {
      link.classList.add('active');
    } else if (currentPage === 'schedules.html' && href === 'schedules.html') {
      link.classList.add('active');
    } else if (currentPage === 'teams.html' && href === 'teams.html') {
      link.classList.add('active');
    } else if (currentPage === 'team-detail.html' && href === 'teams.html') {
      link.classList.add('active');
    } else if (currentPage === 'player-detail.html' && href === 'teams.html') {
      link.classList.add('active');
    } else if (currentPage === 'about.html' && href === 'about.html') {
      link.classList.add('active');
    }
  });
}

// Enhanced scroll-triggered animations using Intersection Observer
function initScrollAnimations() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('animate-in');
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, index * 50);
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Observe all animated elements
  const animatedElements = document.querySelectorAll(
    '.hero-card, .news-card, .developer-card, .video-container, .about-container, .section-title, .match-card'
  );

  animatedElements.forEach((el, index) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
}

// Enhanced hover effects with dynamic transformations
function initHoverEffects() {
  const cards = document.querySelectorAll('.hero-card, .news-card, .developer-card, .video-container');

  cards.forEach(card => {
    let isHovering = false;
    
    card.addEventListener('mouseenter', function() {
      isHovering = true;
      this.style.transition = 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
      this.style.transform = 'translateY(-12px) scale(1.03)';
      
      // Add glow effect with animation
      this.style.boxShadow = '0 20px 50px rgba(245, 0, 78, 0.5)';
      this.style.filter = 'brightness(1.1)';
      
      // Animate image inside
      const img = this.querySelector('img');
      if (img) {
        img.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        img.style.transform = 'scale(1.15)';
      }
      
      // Animate overlay
      const overlay = this.querySelector('.hero-overlay, .news-overlay, .developer-overlay');
      if (overlay) {
        overlay.style.opacity = '1';
        overlay.style.transition = 'opacity 0.3s ease';
      }
    });

    card.addEventListener('mouseleave', function() {
      isHovering = false;
      this.style.transform = 'translateY(0) scale(1)';
      this.style.boxShadow = '';
      this.style.filter = 'brightness(1)';
      
      const img = this.querySelector('img');
      if (img) {
        img.style.transform = 'scale(1)';
      }
      
      const overlay = this.querySelector('.hero-overlay, .news-overlay, .developer-overlay');
      if (overlay) {
        overlay.style.opacity = '';
      }
    });

    // Enhanced tilt effect on mouse move
    card.addEventListener('mousemove', function(e) {
      if (!isHovering) return;
      
      const rect = this.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 15;
      const rotateY = (centerX - x) / 15;
      
      this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-12px) scale(1.03)`;
      
      // Parallax effect for image
      const img = this.querySelector('img');
      if (img) {
        const moveX = (x - centerX) / 20;
        const moveY = (y - centerY) / 20;
        img.style.transform = `scale(1.15) translate(${moveX}px, ${moveY}px)`;
      }
    });
  });
}

// Navbar scroll effects
function initNavbarEffects() {
  const navbar = document.querySelector('.navbar');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
      navbar.style.backgroundColor = 'rgba(46, 49, 53, 0.98)';
      navbar.style.backdropFilter = 'blur(15px)';
    } else {
      navbar.style.backgroundColor = 'rgba(46, 49, 53, 0.95)';
      navbar.style.backdropFilter = 'blur(10px)';
    }

    // Hide/show navbar on scroll
    if (currentScroll > lastScroll && currentScroll > 200) {
      navbar.style.transform = 'translateY(-100%)';
    } else {
      navbar.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
  });

  // Active nav link highlighting
  const navLinks = document.querySelectorAll('.nav-link[data-nav]');
  const sections = document.querySelectorAll('section[id]');

  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPos = window.pageYOffset + 150;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });

    // Handle home section (at top of page)
    if (window.pageYOffset < 200) {
      current = 'home';
    }

    navLinks.forEach(link => {
      link.classList.remove('active');
      const navData = link.getAttribute('data-nav');
      if (navData === current || (current === '' && navData === 'home')) {
        link.classList.add('active');
      }
    });
  });
  
  // Handle navigation clicks (for single-page navigation)
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    // Only handle anchor links on the same page
    if (href && href.startsWith('#')) {
      link.addEventListener('click', (e) => {
        const target = href.substring(1);
        const targetSection = document.getElementById(target);
        if (targetSection) {
          e.preventDefault();
          const offsetTop = targetSection.offsetTop - 80;
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
          updateActiveNav(target);
        } else if (target === 'home' || target === '') {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
          updateActiveNav('home');
        }
      });
    }
  });
}

// Parallax effect for background texture
function initParallaxEffect() {
  const bgTexture = document.querySelector('.bg-texture');
  
  if (bgTexture) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      const rate = scrolled * 0.5;
      bgTexture.style.transform = `translateY(${rate}px)`;
    });
  }
}

// Lazy loading for images with fade-in effect
function initImageLazyLoading() {
  const images = document.querySelectorAll('img');
  
  // Add error handling for all images
  images.forEach(img => {
    // Handle image load errors
    img.addEventListener('error', function() {
      console.warn('Image failed to load:', this.src);
      // Optionally set a placeholder or hide the image
      this.style.opacity = '0.5';
      this.alt = 'Image not available';
    });
    
    // Handle successful image load
    img.addEventListener('load', function() {
      this.style.opacity = '1';
    });
  });
  
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.style.opacity = '0';
        img.style.transition = 'opacity 0.5s ease';
        
        // Load image
        if (img.dataset.src) {
          img.src = img.dataset.src;
        }
        
        setTimeout(() => {
          img.style.opacity = '1';
        }, 100);
        
        observer.unobserve(img);
      }
    });
  });

  images.forEach(img => {
    imageObserver.observe(img);
  });
}

// Smooth scrolling for anchor links
function initSmoothScrolling() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      
      if (target) {
        const offsetTop = target.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });
}

// Enhanced card interactions with ripple effect
function initCardInteractions() {
  const cards = document.querySelectorAll('.hero-card, .news-card, .developer-card, .video-container');

  cards.forEach(card => {
    card.addEventListener('click', function(e) {
      // Create ripple effect
      const ripple = document.createElement('span');
      const rect = this.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      ripple.style.width = ripple.style.height = size + 'px';
      ripple.style.left = x + 'px';
      ripple.style.top = y + 'px';
      ripple.classList.add('ripple');

      this.appendChild(ripple);

      setTimeout(() => {
        ripple.remove();
      }, 600);
    });
  });
}

// Enhanced loading animation
function initLoadingAnimation() {
  document.body.classList.add('loading');
  
  // Create loading screen
  const loader = document.createElement('div');
  loader.className = 'page-loader';
  loader.innerHTML = `
    <div class="loader-content">
      <div class="loader-logo">
        <svg width="58" height="59" viewBox="0 0 58 59" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M3.64 0H58V59H3.64L0 29.5L3.64 0Z" fill="#FF005E"/>
          <path d="M0 0H54.36V59H0V0Z" fill="#D9D9D9"/>
        </svg>
      </div>
      <div class="loader-text">Loading...</div>
      <div class="loader-bar">
        <div class="loader-progress"></div>
      </div>
    </div>
  `;
  loader.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #1F2225;
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: opacity 0.5s ease, visibility 0.5s ease;
  `;
  
  document.body.appendChild(loader);
  
  // Animate progress bar
  const progressBar = loader.querySelector('.loader-progress');
  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.random() * 15;
    if (progress > 100) progress = 100;
    progressBar.style.width = progress + '%';
    progressBar.style.transition = 'width 0.3s ease';
  }, 100);
  
  window.addEventListener('load', () => {
    clearInterval(interval);
    progressBar.style.width = '100%';
    
    setTimeout(() => {
      loader.style.opacity = '0';
      loader.style.visibility = 'hidden';
      document.body.classList.remove('loading');
      document.body.classList.add('loaded');
      
      setTimeout(() => {
        loader.remove();
      }, 500);
      
      // Trigger initial animations with stagger
      const animatedElements = document.querySelectorAll('.hero-card, .news-card, .developer-card');
      animatedElements.forEach((el, index) => {
        setTimeout(() => {
          el.style.animation = `fadeInUp 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards`;
          el.style.opacity = '1';
        }, index * 150);
      });
    }, 500);
  });
  
  // Add loader styles
  const loaderStyle = document.createElement('style');
  loaderStyle.textContent = `
    .loader-content {
      text-align: center;
      color: #FFFFFF;
    }
    .loader-logo {
      margin-bottom: 20px;
      animation: rotate 2s linear infinite;
    }
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .loader-text {
      font-family: 'Teachers', sans-serif;
      font-size: 18px;
      margin-bottom: 20px;
      animation: pulse 1.5s ease infinite;
    }
    .loader-bar {
      width: 200px;
      height: 4px;
      background: rgba(255, 255, 255, 0.1);
      border-radius: 2px;
      overflow: hidden;
      margin: 0 auto;
    }
    .loader-progress {
      height: 100%;
      background: linear-gradient(90deg, #F5004E, #FF005E);
      border-radius: 2px;
      width: 0%;
      transition: width 0.3s ease;
    }
  `;
  document.head.appendChild(loaderStyle);
}

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
  .ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.3);
    transform: scale(0);
    animation: ripple-animation 0.6s ease-out;
    pointer-events: none;
  }

  @keyframes ripple-animation {
    to {
      transform: scale(4);
      opacity: 0;
    }
  }

  .animate-in {
    animation: fadeInUp 0.6s ease forwards !important;
  }

  /* Stagger animation delays */
  .hero-card:nth-child(1) { animation-delay: 0.1s; }
  .hero-card:nth-child(2) { animation-delay: 0.2s; }
  .hero-card:nth-child(3) { animation-delay: 0.3s; }
  .hero-card:nth-child(4) { animation-delay: 0.4s; }
  
  .news-card:nth-child(1) { animation-delay: 0.1s; }
  .news-card:nth-child(2) { animation-delay: 0.2s; }
  .news-card:nth-child(3) { animation-delay: 0.3s; }
  .news-card:nth-child(4) { animation-delay: 0.4s; }
  
  .developer-card:nth-child(1) { animation-delay: 0.1s; }
  .developer-card:nth-child(2) { animation-delay: 0.2s; }
  .developer-card:nth-child(3) { animation-delay: 0.3s; }

  /* Smooth transitions */
  * {
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  /* Cursor pointer for interactive elements */
  .hero-card,
  .news-card,
  .developer-card,
  .video-container,
  .nav-link,
  .see-more {
    cursor: pointer;
  }

  /* Active state for navigation */
  .nav-link.active {
    position: relative;
  }

  .nav-link.active::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 2px;
    background: #F5004E;
    border-radius: 2px;
    animation: expandWidth 0.3s ease forwards;
  }
  
  @keyframes expandWidth {
    from {
      width: 0;
    }
    to {
      width: 30px;
    }
  }
`;
document.head.appendChild(style);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply debounce to scroll-heavy functions
const debouncedScroll = debounce(() => {
  // Scroll-based animations can be added here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// Add keyboard navigation support
document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    document.body.classList.add('keyboard-navigation');
  }
});

document.addEventListener('mousedown', () => {
  document.body.classList.remove('keyboard-navigation');
});

// Add focus visible styles
style.textContent += `
  .keyboard-navigation *:focus {
    outline: 2px solid #F5004E;
    outline-offset: 2px;
    animation: focusPulse 1s ease infinite;
  }
  
  @keyframes focusPulse {
    0%, 100% {
      outline-width: 2px;
    }
    50% {
      outline-width: 4px;
    }
  }
`;

// Initialize all button functionality
function initButtonFunctionality() {
  // Logo click - scroll to top
  const logoBtn = document.getElementById('logoBtn');
  if (logoBtn) {
    logoBtn.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      // Update active nav link
      document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
      });
      document.querySelector('[data-nav="home"]')?.classList.add('active');
    });
  }

  // Home link
  const homeLink = document.querySelector('[data-nav="home"]');
  if (homeLink) {
    homeLink.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      updateActiveNav('home');
    });
  }

  // See More News button
  const seeMoreNews = document.getElementById('seeMoreNews');
  if (seeMoreNews) {
    const seeMoreLink = seeMoreNews.querySelector('a');
    if (seeMoreLink) {
      // If it's a link, let it navigate naturally
      seeMoreNews.addEventListener('click', (e) => {
        if (seeMoreLink.getAttribute('href') === 'news.html') {
          // Allow navigation to news page
          return;
        }
        e.preventDefault();
        // Scroll to news section if on same page
        const newsSection = document.getElementById('news');
        if (newsSection) {
          newsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          showNotification('Loading more news articles...');
        }
      });
    } else {
      seeMoreNews.addEventListener('click', () => {
        const newsSection = document.getElementById('news');
        if (newsSection) {
          newsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
          showNotification('Loading more news articles...');
        }
      });
    }
  }
}

// Initialize modals (Login/Signup)
function initModals() {
  const loginBtn = document.getElementById('loginBtn');
  const signupBtn = document.getElementById('signupBtn');
  const loginModal = document.getElementById('loginModal');
  const signupModal = document.getElementById('signupModal');
  const switchToSignup = document.getElementById('switchToSignup');
  const switchToLogin = document.getElementById('switchToLogin');
  const closeModals = document.querySelectorAll('.close-modal');

  // Open Login Modal with animation
  if (loginBtn) {
    loginBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (loginModal) {
        loginModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        const modalContent = loginModal.querySelector('.modal-content');
        modalContent.style.animation = 'modalSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards';
      }
    });
  }

  // Open Signup Modal with animation
  if (signupBtn) {
    signupBtn.addEventListener('click', (e) => {
      e.preventDefault();
      if (signupModal) {
        signupModal.classList.add('active');
        document.body.style.overflow = 'hidden';
        const modalContent = signupModal.querySelector('.modal-content');
        modalContent.style.animation = 'modalSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards';
      }
    });
  }

  // Switch to Signup from Login with animation
  if (switchToSignup) {
    switchToSignup.addEventListener('click', (e) => {
      e.preventDefault();
      if (loginModal) {
        const loginContent = loginModal.querySelector('.modal-content');
        loginContent.style.animation = 'modalSlideOut 0.3s ease forwards';
        setTimeout(() => {
          loginModal.classList.remove('active');
          loginContent.style.animation = '';
        }, 300);
      }
      if (signupModal) {
        signupModal.classList.add('active');
        const signupContent = signupModal.querySelector('.modal-content');
        signupContent.style.animation = 'modalSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards';
      }
    });
  }

  // Switch to Login from Signup with animation
  if (switchToLogin) {
    switchToLogin.addEventListener('click', (e) => {
      e.preventDefault();
      if (signupModal) {
        const signupContent = signupModal.querySelector('.modal-content');
        signupContent.style.animation = 'modalSlideOut 0.3s ease forwards';
        setTimeout(() => {
          signupModal.classList.remove('active');
          signupContent.style.animation = '';
        }, 300);
      }
      if (loginModal) {
        loginModal.classList.add('active');
        const loginContent = loginModal.querySelector('.modal-content');
        loginContent.style.animation = 'modalSlideIn 0.4s cubic-bezier(0.4, 0, 0.2, 1) forwards';
      }
    });
  }

  // Close modals with animation
  closeModals.forEach(closeBtn => {
    closeBtn.addEventListener('click', () => {
      document.querySelectorAll('.modal').forEach(modal => {
        if (modal.classList.contains('active')) {
          const modalContent = modal.querySelector('.modal-content');
          modalContent.style.animation = 'modalSlideOut 0.3s ease forwards';
          setTimeout(() => {
            modal.classList.remove('active');
            modalContent.style.animation = '';
          }, 300);
        }
      });
      document.body.style.overflow = '';
    });
  });

  // Close modal when clicking outside
  document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // Handle form submissions
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const formData = new FormData(loginForm);
      const email = loginForm.querySelector('input[type="email"]').value;
      const password = loginForm.querySelector('input[type="password"]').value;
      
      // Simulate login (replace with actual API call)
      showNotification('Logging in...');
      setTimeout(() => {
        showNotification('Login successful!', 'success');
        loginModal.classList.remove('active');
        document.body.style.overflow = '';
        // Update UI to show logged in state
        updateLoginState(true);
      }, 1500);
    });
  }

  const signupForm = document.getElementById('signupForm');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = signupForm.querySelectorAll('input[type="email"]')[0]?.value;
      const password = signupForm.querySelectorAll('input[type="password"]')[0]?.value;
      const repeatPassword = signupForm.querySelectorAll('input[type="password"]')[1]?.value;
      
      if (password !== repeatPassword) {
        showNotification('Passwords do not match!', 'error');
        return;
      }
      
      // Simulate signup (replace with actual API call)
      showNotification('Creating account...');
      setTimeout(() => {
        showNotification('Account created successfully!', 'success');
        signupModal.classList.remove('active');
        document.body.style.overflow = '';
        // Switch to login modal
        setTimeout(() => {
          loginModal.classList.add('active');
        }, 500);
      }, 1500);
    });
  }
}

// Initialize schedules tabs with animations
function initSchedulesTabs() {
  const tabs = document.querySelectorAll('.schedule-tab');
  const tabContents = document.querySelectorAll('.schedule-tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');
      
      // Animate tab switch
      tabs.forEach(t => {
        t.classList.remove('active');
        t.style.transform = 'scale(0.95)';
        setTimeout(() => {
          t.style.transform = 'scale(1)';
        }, 200);
      });
      
      tabContents.forEach(content => {
        content.style.opacity = '0';
        content.style.transform = 'translateX(-20px)';
        content.classList.remove('active');
      });
      
      // Add active class to clicked tab with animation
      tab.style.transform = 'scale(1.05)';
      setTimeout(() => {
        tab.style.transform = 'scale(1)';
      }, 150);
      tab.classList.add('active');
      
      // Show corresponding content with fade-in animation
      const targetContent = document.getElementById(`${targetTab}Matches`);
      if (targetContent) {
        targetContent.classList.add('active');
        setTimeout(() => {
          targetContent.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
          targetContent.style.opacity = '1';
          targetContent.style.transform = 'translateX(0)';
        }, 100);
      }
    });
  });
  
  // Initialize first tab content
  const firstContent = document.querySelector('.schedule-tab-content.active');
  if (firstContent) {
    firstContent.style.opacity = '1';
    firstContent.style.transform = 'translateX(0)';
    firstContent.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  }
  
  // Set initial state for all tab contents
  tabContents.forEach(content => {
    if (!content.classList.contains('active')) {
      content.style.opacity = '0';
      content.style.transform = 'translateX(-20px)';
    }
  });
}

// Initialize news cards click handlers
function initNewsCards() {
  const newsCards = document.querySelectorAll('.hero-card, .news-card, .developer-card');
  
  const newsData = {
    0: {
      title: 'Esports World Cup 2026: 21 Returning Titles Announced',
      content: `
        <h2>Esports World Cup 2026: 21 Returning Titles Announced</h2>
        <p>The Esports World Cup 2026 is set to be the biggest tournament yet, with 21 returning titles confirmed. This year's competition will feature some of the most popular esports games including Valorant, Counter-Strike 2, League of Legends, and Rocket League.</p>
        <p>Organizers have announced that the prize pool will exceed previous years, making this one of the most lucrative esports events in history. Teams from around the world are already preparing for what promises to be an intense competition.</p>
        <p>The tournament will take place over several weeks, with matches broadcasted live to millions of fans worldwide. Stay tuned for more updates on schedules and participating teams.</p>
      `,
      image: 'assets/news_hero.png'
    },
    1: {
      title: 'Team Heretics Complete Stunning Reverse Sweep',
      content: `
        <h2>Team Heretics Complete Stunning Reverse Sweep to Win First VALORANT Title</h2>
        <p>In an all EMEA final, Team Heretics came out on top after an unbelievable comeback against one of their fiercest local rivals to lift the first VALORANT trophy in Esports World Cup history.</p>
        <p>The match was a nail-biter from start to finish, with both teams showing incredible skill and determination. Team Heretics' ability to adapt and overcome adversity was truly remarkable.</p>
        <p>This victory marks a significant milestone for the team and solidifies their position as one of the top VALORANT teams in the world.</p>
      `,
      image: 'assets/news_card_2.png'
    },
    2: {
      title: 'League of Legends at EWC 25 Winners: Gen.G Stay On Top',
      content: `
        <h2>League of Legends at EWC 25 Winners: Gen.G Stay On Top</h2>
        <p>Gen.G continues their dominance in the League of Legends competitive scene with another impressive victory at the Esports World Cup 2025.</p>
        <p>The Korean powerhouse showed why they're considered one of the best teams in the world, executing flawless strategies and demonstrating superior teamwork throughout the tournament.</p>
        <p>Their consistent performance has earned them a reputation as the team to beat in international competitions.</p>
      `,
      image: 'assets/news_card_3.png'
    },
    3: {
      title: 'Rocket League Champions: Karmine Corp Crush',
      content: `
        <h2>Rocket League ft. at EWC 25 Champions: Karmine Corp Crush</h2>
        <p>Karmine Corp delivered an outstanding performance to claim the Rocket League championship at the Esports World Cup 2025.</p>
        <p>The French team's precision and coordination were unmatched, leaving their opponents struggling to keep up with their aggressive playstyle.</p>
        <p>This victory adds another trophy to Karmine Corp's impressive collection and cements their legacy in Rocket League esports.</p>
      `,
      image: 'assets/news_card_4.png'
    }
  };

  newsCards.forEach((card, index) => {
    card.addEventListener('click', () => {
      const data = newsData[index] || newsData[0];
      openNewsModal(data);
    });
  });
}

// Open news article modal
function openNewsModal(data) {
  const modal = document.getElementById('newsModal');
  const content = document.getElementById('newsContent');
  
  if (modal && content) {
    content.innerHTML = `
      <img src="${data.image}" alt="${data.title}">
      ${data.content}
    `;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

// Initialize video player
function initVideoPlayer() {
  const videoContainer = document.getElementById('videoPlayer');
  const videoModal = document.getElementById('videoModal');
  const videoFrame = document.getElementById('videoFrame');
  
  if (videoContainer) {
    videoContainer.addEventListener('click', () => {
      // You can replace this with an actual video URL
      const videoUrl = 'https://www.youtube.com/embed/dQw4w9WgXcQ'; // Example YouTube embed URL
      
      if (videoFrame && videoModal) {
        videoFrame.src = videoUrl;
        videoModal.classList.add('active');
        document.body.style.overflow = 'hidden';
      }
    });
  }
  
  // Close video modal and stop video
  const videoModalClose = videoModal?.querySelector('.close-modal');
  if (videoModalClose) {
    videoModalClose.addEventListener('click', () => {
      if (videoFrame) {
        videoFrame.src = '';
      }
      if (videoModal) {
        videoModal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  }
}

// Initialize footer links
function initFooterLinks() {
  const footerLinks = document.querySelectorAll('[data-action]');
  
  footerLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const action = link.getAttribute('data-action');
      
      switch(action) {
        case 'guides':
          showNotification('Guides page coming soon!');
          break;
        case 'faq':
          showNotification('FAQ page coming soon!');
          break;
        case 'terms':
          showNotification('Terms of Service page coming soon!');
          break;
        case 'privacy':
          showNotification('Privacy Policy page coming soon!');
          break;
        case 'feedback':
          showNotification('Feedback form coming soon!');
          // Could open a feedback modal here
          break;
        default:
          break;
      }
    });
  });
}

// Update active navigation link
function updateActiveNav(active) {
  document.querySelectorAll('.nav-link[data-nav]').forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('data-nav') === active) {
      link.classList.add('active');
    }
  });
}

// Update login state in UI
function updateLoginState(isLoggedIn) {
  const loginBtn = document.getElementById('loginBtn');
  const signupBtn = document.getElementById('signupBtn');
  
  if (isLoggedIn) {
    if (loginBtn) {
      loginBtn.textContent = 'LOGOUT';
      loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        updateLoginState(false);
        showNotification('Logged out successfully!');
      });
    }
    if (signupBtn) {
      signupBtn.style.display = 'none';
    }
  } else {
    if (loginBtn) {
      loginBtn.textContent = 'LOGIN';
    }
    if (signupBtn) {
      signupBtn.style.display = 'block';
    }
  }
}

// Show notification
function showNotification(message, type = 'info') {
  // Remove existing notification
  const existing = document.querySelector('.notification');
  if (existing) {
    existing.remove();
  }
  
  // Create notification element
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.textContent = message;
  notification.style.cssText = `
    position: fixed;
    top: 100px;
    right: 20px;
    background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
    color: white;
    padding: 15px 25px;
    border-radius: 8px;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
    z-index: 10000;
    animation: slideInRight 0.3s ease;
    font-family: 'Teachers', sans-serif;
    font-weight: 500;
  `;
  
  document.body.appendChild(notification);
  
  // Remove after 3 seconds
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.3s ease';
    setTimeout(() => {
      notification.remove();
    }, 300);
  }, 3000);
}

// Add notification animations to style
const notificationStyle = document.createElement('style');
notificationStyle.textContent += `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
`;
document.head.appendChild(notificationStyle);

// Text reveal animations for headings
function initTextRevealAnimations() {
  const titles = document.querySelectorAll('.section-title');
  
  titles.forEach(title => {
    title.style.opacity = '0';
    title.style.transform = 'translateY(20px)';
    title.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            // Add letter-by-letter animation effect
            const text = entry.target.textContent;
            entry.target.textContent = '';
            entry.target.style.display = 'inline-block';
            
            let index = 0;
            const interval = setInterval(() => {
              if (index < text.length) {
                entry.target.textContent += text[index];
                index++;
              } else {
                clearInterval(interval);
              }
            }, 50);
          }, 200);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    
    observer.observe(title);
  });
}

// Stagger animations for grid items
function initStaggerAnimations() {
  const grids = document.querySelectorAll('.hero-grid, .news-grid, .developers-grid');
  
  grids.forEach(grid => {
    const items = grid.querySelectorAll('.hero-card, .news-card, .developer-card');
    
    items.forEach((item, index) => {
      item.style.opacity = '0';
      item.style.transform = 'translateY(50px) scale(0.9)';
      item.style.transition = `all 0.6s cubic-bezier(0.4, 0, 0.2, 1) ${index * 0.1}s`;
    });
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const items = entry.target.querySelectorAll('.hero-card, .news-card, .developer-card');
          items.forEach(item => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0) scale(1)';
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });
    
    observer.observe(grid);
  });
}

// Counter animations for scores
function initCounterAnimations() {
  const scores = document.querySelectorAll('.match-score span');
  
  scores.forEach(score => {
    const finalValue = parseInt(score.textContent);
    if (!isNaN(finalValue)) {
      score.textContent = '0';
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounter(score, 0, finalValue, 1000);
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      
      observer.observe(score.closest('.match-card'));
    }
  });
}

function animateCounter(element, start, end, duration) {
  const startTime = performance.now();
  
  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const current = Math.floor(start + (end - start) * easeOutQuart);
    
    element.textContent = current;
    
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = end;
    }
  }
  
  requestAnimationFrame(updateCounter);
}

// Particle effects for background
function initParticleEffects() {
  const heroSection = document.querySelector('.hero-section');
  if (!heroSection) return;
  
  const canvas = document.createElement('canvas');
  canvas.className = 'particle-canvas';
  canvas.style.position = 'absolute';
  canvas.style.top = '0';
  canvas.style.left = '0';
  canvas.style.width = '100%';
  canvas.style.height = '100%';
  canvas.style.pointerEvents = 'none';
  canvas.style.zIndex = '1';
  canvas.style.opacity = '0.3';
  
  heroSection.style.position = 'relative';
  heroSection.appendChild(canvas);
  
  const ctx = canvas.getContext('2d');
  let particles = [];
  const particleCount = 30;
  
  function resizeCanvas() {
    canvas.width = heroSection.offsetWidth;
    canvas.height = heroSection.offsetHeight;
  }
  
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
  
  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = Math.random() * 0.5 - 0.25;
      this.speedY = Math.random() * 0.5 - 0.25;
      this.opacity = Math.random() * 0.5 + 0.2;
    }
    
    update() {
      this.x += this.speedX;
      this.y += this.speedY;
      
      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }
    
    draw() {
      ctx.fillStyle = `rgba(245, 0, 78, ${this.opacity})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }
  
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
  
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });
    requestAnimationFrame(animate);
  }
  
  animate();
}

// Smooth section transitions
function initSectionTransitions() {
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(50px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, { threshold: 0.1 });
    
    observer.observe(section);
  });
}

// Enhanced modal animations
function initModalAnimations() {
  const modals = document.querySelectorAll('.modal');
  
  modals.forEach(modal => {
    const modalContent = modal.querySelector('.modal-content');
    
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modalContent.style.animation = 'modalSlideOut 0.3s ease forwards';
        setTimeout(() => {
          modal.classList.remove('active');
          modalContent.style.animation = '';
        }, 300);
      }
    });
  });
}

// Logo animation on load
function initLogoAnimation() {
  const logo = document.querySelector('.logo svg');
  if (!logo) return;
  
  logo.style.opacity = '0';
  logo.style.transform = 'scale(0.5) rotate(-180deg)';
  logo.style.transition = 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
  
  setTimeout(() => {
    logo.style.opacity = '1';
    logo.style.transform = 'scale(1) rotate(0deg)';
  }, 200);
}

// See more button animation
function initSeeMoreAnimation() {
  const seeMore = document.getElementById('seeMoreNews');
  if (!seeMore) return;
  
  const arrow = seeMore.querySelector('svg');
  
  seeMore.addEventListener('mouseenter', () => {
    arrow.style.transform = 'translateX(5px)';
    arrow.style.transition = 'transform 0.3s ease';
  });
  
  seeMore.addEventListener('mouseleave', () => {
    arrow.style.transform = 'translateX(0)';
  });
  
  // Pulsing animation
  setInterval(() => {
    seeMore.style.transform = 'scale(1.05)';
    setTimeout(() => {
      seeMore.style.transform = 'scale(1)';
    }, 200);
  }, 3000);
}

// Add CSS animations dynamically
const dynamicStyles = document.createElement('style');
dynamicStyles.textContent += `
  @keyframes modalSlideIn {
    from {
      transform: translateY(-50px) scale(0.9);
      opacity: 0;
    }
    to {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
  }
  
  @keyframes modalSlideOut {
    from {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
    to {
      transform: translateY(-50px) scale(0.9);
      opacity: 0;
    }
  }
  
  @keyframes float {
    0%, 100% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-10px);
    }
  }
  
  @keyframes glow {
    0%, 100% {
      box-shadow: 0 0 20px rgba(245, 0, 78, 0.3);
    }
    50% {
      box-shadow: 0 0 40px rgba(245, 0, 78, 0.6);
    }
  }
  
  .hero-card.featured {
    animation: float 6s ease-in-out infinite;
  }
  
  .play-button {
    animation: glow 2s ease-in-out infinite;
  }
  
  .match-status.live {
    animation: pulse 2s infinite, glow 2s infinite;
  }
  
  .nav-link {
    position: relative;
    overflow: hidden;
  }
  
  .nav-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(245, 0, 78, 0.3), transparent);
    transition: left 0.5s;
  }
  
  .nav-link:hover::before {
    left: 100%;
  }
  
  .schedule-tab {
    position: relative;
    overflow: hidden;
  }
  
  .schedule-tab::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(245, 0, 78, 0.2);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }
  
  .schedule-tab:hover::before {
    width: 300px;
    height: 300px;
  }
  
  .news-label {
    display: inline-block;
    animation: slideInLeft 0.6s ease forwards;
  }
  
  @keyframes slideInLeft {
    from {
      transform: translateX(-50px);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  .date-badge {
    animation: bounceIn 0.5s ease forwards;
  }
  
  @keyframes bounceIn {
    0% {
      transform: scale(0);
      opacity: 0;
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  
  .footer-accent {
    animation: slideDown 0.8s ease forwards;
  }
  
  @keyframes slideDown {
    from {
      transform: translateY(-100%);
    }
    to {
      transform: translateY(0);
    }
  }
  
  .video-container:hover .play-button {
    animation: pulse 1s infinite, glow 1s infinite;
  }
  
  .developer-card:hover .date-badge {
    animation: shake 0.5s ease;
  }
  
  @keyframes shake {
    0%, 100% { transform: translateX(0); }
    25% { transform: translateX(-5px); }
    75% { transform: translateX(5px); }
  }
`;
document.head.appendChild(dynamicStyles);

// Initialize match summaries
function initMatchSummaries() {
  const matchCards = document.querySelectorAll('.match-card');
  
  matchCards.forEach(card => {
    const summaryBtn = card.querySelector('.match-summary-btn');
    const summary = card.querySelector('.match-summary');
    
    if (summaryBtn && summary) {
      summaryBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isVisible = summary.style.display !== 'none';
        const originalText = summaryBtn.getAttribute('data-original-text') || summaryBtn.textContent;
        
        if (!summaryBtn.hasAttribute('data-original-text')) {
          summaryBtn.setAttribute('data-original-text', originalText);
        }
        
        if (isVisible) {
          summary.style.display = 'none';
          summaryBtn.textContent = originalText;
        } else {
          summary.style.display = 'block';
          summaryBtn.textContent = 'Hide Summary';
          summary.style.animation = 'fadeInUp 0.3s ease';
        }
      });
    }
    
    // Make team names clickable
    const teams = card.querySelectorAll('.team[data-team]');
    teams.forEach(team => {
      team.style.cursor = 'pointer';
      team.addEventListener('click', (e) => {
        e.stopPropagation();
        const teamId = team.getAttribute('data-team');
        window.location.href = `team-detail.html?team=${teamId}`;
      });
    });
  });
}

// Teams data
const teamsData = {
  'team-vitality': {
    id: 'team-vitality',
    name: 'Team Vitality',
    region: 'Europe',
    logo: 'assets/news_card_1.png',
    founded: '2013',
    summary: 'Team Vitality is a French esports organization founded in 2013. They are one of the most successful European teams in Counter-Strike 2, with multiple championship titles and a strong presence in international competitions.',
    stats: {
      wins: 245,
      losses: 128,
      winRate: '65.7%',
      championships: 12
    },
    achievements: [
      { title: 'ESL Pro League Season 18', year: '2024', description: 'Champions' },
      { title: 'BLAST Premier World Final', year: '2023', description: 'Runners-up' },
      { title: 'IEM Katowice', year: '2023', description: 'Champions' }
    ],
    roster: [
      { id: 'zywoo', name: 'ZywOo', role: 'AWPer', image: 'assets/hero_1.png' },
      { id: 'spinx', name: 'Spinx', role: 'Rifler', image: 'assets/hero_2.png' },
      { id: 'mezii', name: 'mezii', role: 'Rifler', image: 'assets/hero_3.png' },
      { id: 'flamez', name: 'flameZ', role: 'Rifler', image: 'assets/news_card_1.png' },
      { id: 'apex', name: 'apEX', role: 'IGL', image: 'assets/news_card_2.png' }
    ],
    gallery: [
      'assets/news_card_1.png',
      'assets/news_card_2.png',
      'assets/news_card_3.png',
      'assets/news_card_4.png'
    ]
  },
  'faze-clan': {
    id: 'faze-clan',
    name: 'FaZe Clan',
    region: 'International',
    logo: 'assets/news_card_2.png',
    founded: '2010',
    summary: 'FaZe Clan is an American esports organization known for their dominance in Counter-Strike. They have won multiple major championships and are considered one of the best teams in the world.',
    stats: {
      wins: 312,
      losses: 145,
      winRate: '68.3%',
      championships: 18
    },
    achievements: [
      { title: 'PGL Major Antwerp', year: '2022', description: 'Champions' },
      { title: 'IEM Cologne', year: '2022', description: 'Champions' },
      { title: 'BLAST Premier World Final', year: '2022', description: 'Champions' }
    ],
    roster: [
      { id: 'karrigan', name: 'karrigan', role: 'IGL', image: 'assets/hero_1.png' },
      { id: 'rain', name: 'rain', role: 'Rifler', image: 'assets/hero_2.png' },
      { id: 'ropz', name: 'ropz', role: 'Rifler', image: 'assets/hero_3.png' },
      { id: 'broky', name: 'broky', role: 'AWPer', image: 'assets/news_card_1.png' },
      { id: 'twistzz', name: 'Twistzz', role: 'Rifler', image: 'assets/news_card_2.png' }
    ],
    gallery: [
      'assets/news_card_2.png',
      'assets/news_card_3.png',
      'assets/news_card_4.png',
      'assets/news_hero.png'
    ]
  },
  'team-heretics': {
    id: 'team-heretics',
    name: 'Team Heretics',
    region: 'Europe',
    logo: 'assets/hero_1.png',
    founded: '2016',
    summary: 'Team Heretics is a Spanish esports organization that has made significant strides in VALORANT and Counter-Strike. They recently won their first VALORANT title at the Esports World Cup 2025.',
    stats: {
      wins: 189,
      losses: 112,
      winRate: '62.8%',
      championships: 8
    },
    achievements: [
      { title: 'Esports World Cup 2025', year: '2025', description: 'VALORANT Champions' },
      { title: 'VCT EMEA', year: '2024', description: 'Runners-up' }
    ],
    roster: [
      { id: 'woot', name: 'woot', role: 'Duelist', image: 'assets/hero_1.png' },
      { id: 'benjyfishy', name: 'benjyfishy', role: 'Controller', image: 'assets/hero_2.png' },
      { id: 'kiles', name: 'kiles', role: 'Initiator', image: 'assets/hero_3.png' }
    ],
    gallery: [
      'assets/hero_1.png',
      'assets/hero_2.png',
      'assets/hero_3.png'
    ]
  },
  'gen-g': {
    id: 'gen-g',
    name: 'Gen.G',
    region: 'Korea',
    logo: 'assets/news_card_1.png',
    founded: '2017',
    summary: 'Gen.G is a South Korean esports organization that dominates the League of Legends competitive scene. They have consistently been one of the top teams in the LCK and international competitions.',
    stats: {
      wins: 456,
      losses: 234,
      winRate: '66.1%',
      championships: 25
    },
    achievements: [
      { title: 'LCK Spring Split', year: '2025', description: 'Champions' },
      { title: 'Worlds Championship', year: '2024', description: 'Semi-finals' },
      { title: 'MSI', year: '2024', description: 'Runners-up' }
    ],
    roster: [
      { id: 'chovy', name: 'Chovy', role: 'Mid Lane', image: 'assets/hero_1.png' },
      { id: 'peanut', name: 'Peanut', role: 'Jungle', image: 'assets/hero_2.png' },
      { id: 'kiin', name: 'Kiin', role: 'Top Lane', image: 'assets/hero_3.png' }
    ],
    gallery: [
      'assets/news_card_1.png',
      'assets/news_card_2.png'
    ]
  }
};

// Players data
const playersData = {
  'zywoo': {
    id: 'zywoo',
    name: 'ZywOo',
    team: 'Team Vitality',
    role: 'AWPer',
    image: 'assets/hero_1.png',
    nationality: 'France',
    age: 23,
    info: {
      realName: 'Mathieu Herbaut',
      joinDate: '2018-10-01',
      contractUntil: '2026-12-31'
    },
    stats: {
      rating: 1.28,
      kills: 12450,
      deaths: 9876,
      assists: 3456,
      headshotPercentage: '62.3%',
      mapsPlayed: 1245
    },
    achievements: [
      { title: 'HLTV MVP', year: '2024', description: 'Best Player of the Year' },
      { title: 'Major MVP', year: '2023', description: 'IEM Katowice' }
    ],
    gallery: ['assets/hero_1.png', 'assets/hero_2.png']
  },
  'karrigan': {
    id: 'karrigan',
    name: 'karrigan',
    team: 'FaZe Clan',
    role: 'IGL',
    image: 'assets/hero_1.png',
    nationality: 'Denmark',
    age: 34,
    info: {
      realName: 'Finn Andersen',
      joinDate: '2021-01-15',
      contractUntil: '2025-12-31'
    },
    stats: {
      rating: 1.05,
      kills: 15678,
      deaths: 14567,
      assists: 5678,
      headshotPercentage: '48.2%',
      mapsPlayed: 1890
    },
    achievements: [
      { title: 'Major Champion', year: '2022', description: 'PGL Major Antwerp' },
      { title: 'Best IGL', year: '2022', description: 'HLTV Awards' }
    ],
    gallery: ['assets/hero_2.png', 'assets/hero_3.png']
  }
};

// Initialize teams page
function initTeamsPage() {
  const teamsGrid = document.getElementById('teamsGrid');
  if (!teamsGrid) return;
  
  teamsGrid.innerHTML = '';
  
  Object.values(teamsData).forEach(team => {
    const teamCard = document.createElement('a');
    teamCard.href = `team-detail.html?team=${team.id}`;
    teamCard.className = 'team-card';
    teamCard.innerHTML = `
      <img src="${team.logo}" alt="${team.name}" class="team-card-image">
      <div class="team-card-content">
        <h3 class="team-card-name">${team.name}</h3>
        <p class="team-card-info">Founded: ${team.founded}</p>
        <span class="team-card-region">${team.region}</span>
      </div>
    `;
    teamsGrid.appendChild(teamCard);
  });
}

// Initialize team detail page
function initTeamDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const teamId = urlParams.get('team');
  
  if (!teamId || !teamsData[teamId]) {
    window.location.href = 'teams.html';
    return;
  }
  
  const team = teamsData[teamId];
  
  // Populate header
  const teamHeader = document.getElementById('teamHeader');
  if (teamHeader) {
    teamHeader.innerHTML = `
      <img src="${team.logo}" alt="${team.name}" class="team-header-image">
      <h1 class="team-header-name">${team.name}</h1>
      <p class="team-header-info">${team.region} • Founded ${team.founded}</p>
    `;
  }
  
  // Populate summary
  const summaryTab = document.getElementById('summaryTab');
  if (summaryTab) {
    const summaryContent = document.getElementById('teamSummary');
    summaryContent.innerHTML = `
      <p>${team.summary}</p>
      <div class="team-stats-grid">
        <div class="team-stat-card">
          <span class="team-stat-value">${team.stats.wins}</span>
          <span class="team-stat-label">Wins</span>
        </div>
        <div class="team-stat-card">
          <span class="team-stat-value">${team.stats.losses}</span>
          <span class="team-stat-label">Losses</span>
        </div>
        <div class="team-stat-card">
          <span class="team-stat-value">${team.stats.winRate}</span>
          <span class="team-stat-label">Win Rate</span>
        </div>
        <div class="team-stat-card">
          <span class="team-stat-value">${team.stats.championships}</span>
          <span class="team-stat-label">Championships</span>
        </div>
      </div>
    `;
  }
  
  // Populate achievements
  const achievementsTab = document.getElementById('achievementsTab');
  if (achievementsTab) {
    const achievementsContent = document.getElementById('teamAchievements');
    achievementsContent.innerHTML = team.achievements.map(ach => `
      <div class="achievement-item">
        <div class="achievement-icon">🏆</div>
        <div class="achievement-content">
          <h4>${ach.title} (${ach.year})</h4>
          <p>${ach.description}</p>
        </div>
      </div>
    `).join('');
  }
  
  // Populate roster
  const rosterTab = document.getElementById('rosterTab');
  if (rosterTab) {
    const rosterContent = document.getElementById('teamRoster');
    rosterContent.innerHTML = `
      <div class="roster-grid">
        ${team.roster.map(player => `
          <a href="player-detail.html?player=${player.id}" class="roster-player">
            <img src="${player.image}" alt="${player.name}" class="roster-player-image">
            <div class="roster-player-info">
              <h4 class="roster-player-name">${player.name}</h4>
              <p class="roster-player-role">${player.role}</p>
            </div>
          </a>
        `).join('')}
      </div>
    `;
  }
  
  // Populate gallery
  const galleryTab = document.getElementById('galleryTab');
  if (galleryTab) {
    const galleryContent = document.getElementById('teamGallery');
    galleryContent.innerHTML = `
      <div class="gallery-grid">
        ${team.gallery.map(img => `
          <div class="gallery-item">
            <img src="${img}" alt="${team.name} Gallery">
          </div>
        `).join('')}
      </div>
    `;
  }
  
  // Initialize team tabs
  initTeamTabs();
}

// Initialize team tabs
function initTeamTabs() {
  const tabs = document.querySelectorAll('.team-tab');
  const tabContents = document.querySelectorAll('.team-tab-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');
      
      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      tab.classList.add('active');
      const targetContent = document.getElementById(`${targetTab}Tab`);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
}

// Initialize player detail page
function initPlayerDetailPage() {
  const urlParams = new URLSearchParams(window.location.search);
  const playerId = urlParams.get('player');
  
  if (!playerId || !playersData[playerId]) {
    window.location.href = 'teams.html';
    return;
  }
  
  const player = playersData[playerId];
  
  // Populate header
  const playerHeader = document.getElementById('playerHeader');
  if (playerHeader) {
    playerHeader.innerHTML = `
      <img src="${player.image}" alt="${player.name}" class="player-header-image">
      <h1 class="player-header-name">${player.name}</h1>
      <p class="player-header-info">${player.role} • ${player.team} • ${player.nationality}</p>
    `;
  }
  
  // Populate info
  const infoTab = document.getElementById('infoTab');
  if (infoTab) {
    const infoContent = document.getElementById('playerInfo');
    infoContent.innerHTML = `
      <div class="player-info-grid">
        <div class="player-info-item">
          <div class="player-info-label">Real Name</div>
          <div class="player-info-value">${player.info.realName}</div>
        </div>
        <div class="player-info-item">
          <div class="player-info-label">Age</div>
          <div class="player-info-value">${player.age}</div>
        </div>
        <div class="player-info-item">
          <div class="player-info-label">Nationality</div>
          <div class="player-info-value">${player.nationality}</div>
        </div>
        <div class="player-info-item">
          <div class="player-info-label">Team</div>
          <div class="player-info-value">${player.team}</div>
        </div>
        <div class="player-info-item">
          <div class="player-info-label">Role</div>
          <div class="player-info-value">${player.role}</div>
        </div>
        <div class="player-info-item">
          <div class="player-info-label">Join Date</div>
          <div class="player-info-value">${player.info.joinDate}</div>
        </div>
      </div>
    `;
  }
  
  // Populate stats
  const statsTab = document.getElementById('statsTab');
  if (statsTab) {
    const statsContent = document.getElementById('playerStats');
    statsContent.innerHTML = `
      <div class="stats-grid">
        <div class="stat-card">
          <span class="stat-card-value">${player.stats.rating}</span>
          <span class="stat-card-label">Rating</span>
        </div>
        <div class="stat-card">
          <span class="stat-card-value">${player.stats.kills}</span>
          <span class="stat-card-label">Total Kills</span>
        </div>
        <div class="stat-card">
          <span class="stat-card-value">${player.stats.deaths}</span>
          <span class="stat-card-label">Total Deaths</span>
        </div>
        <div class="stat-card">
          <span class="stat-card-value">${player.stats.assists}</span>
          <span class="stat-card-label">Total Assists</span>
        </div>
        <div class="stat-card">
          <span class="stat-card-value">${player.stats.headshotPercentage}</span>
          <span class="stat-card-label">Headshot %</span>
        </div>
        <div class="stat-card">
          <span class="stat-card-value">${player.stats.mapsPlayed}</span>
          <span class="stat-card-label">Maps Played</span>
        </div>
      </div>
    `;
  }
  
  // Populate achievements
  const achievementsTab = document.getElementById('achievementsTab');
  if (achievementsTab) {
    const achievementsContent = document.getElementById('playerAchievements');
    achievementsContent.innerHTML = player.achievements.map(ach => `
      <div class="achievement-item">
        <div class="achievement-icon">🏆</div>
        <div class="achievement-content">
          <h4>${ach.title} (${ach.year})</h4>
          <p>${ach.description}</p>
        </div>
      </div>
    `).join('');
  }
  
  // Populate gallery
  const galleryTab = document.getElementById('galleryTab');
  if (galleryTab) {
    const galleryContent = document.getElementById('playerGallery');
    galleryContent.innerHTML = `
      <div class="gallery-grid">
        ${player.gallery.map(img => `
          <div class="gallery-item">
            <img src="${img}" alt="${player.name} Gallery">
          </div>
        `).join('')}
      </div>
    `;
  }
  
  // Initialize player tabs
  initPlayerTabs();
}

// Initialize player tabs
function initPlayerTabs() {
  const tabs = document.querySelectorAll('.player-tab');
  const tabContents = document.querySelectorAll('.player-tab-content');
  
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.getAttribute('data-tab');
      
      tabs.forEach(t => t.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
      
      tab.classList.add('active');
      const targetContent = document.getElementById(`${targetTab}Tab`);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
}

// Update initialization to include new functions
document.addEventListener('DOMContentLoaded', () => {
  // ... existing initialization code ...
  
  // Initialize match summaries if on schedules page
  if (document.querySelector('.match-summary-btn')) {
    initMatchSummaries();
  }
  
  // Initialize teams page if on teams page
  if (document.getElementById('teamsGrid')) {
    initTeamsPage();
  }
  
  // Initialize match summaries if on schedules page
  if (document.querySelector('.match-summary-btn')) {
    initMatchSummaries();
  }
  
  // Initialize teams page if on teams page
  if (document.getElementById('teamsGrid')) {
    initTeamsPage();
  }
  
  // Initialize team detail page if on team detail page
  if (document.getElementById('teamHeader')) {
    initTeamDetailPage();
  }
  
  // Initialize player detail page if on player detail page
  if (document.getElementById('playerHeader')) {
    initPlayerDetailPage();
  }
});

// Console log for debugging (remove in production)
console.log('Esports Analytics Platform initialized successfully with enhanced animations!');
