import './style.css'

class HavenCoinApp {
  constructor() {
    this.currentPage = 'home'
    this.pages = {
      '/': () => import('./pages/home.js'),
      '/coins': () => import('./pages/coins.js'),
      '/jewelry': () => import('./pages/jewelry.js'),
      '/services': () => import('./pages/services.js'),
      '/about': () => import('./pages/about.js'),
      '/contact': () => import('./pages/contact.js'),
      '/blog': () => import('./pages/blog.js')
    }
    this.init()
  }

  async init() {
    this.createLayout()
    this.setupNavigation()
    await this.loadPage(this.getPageFromURL())
    this.initializeAnimations()
  }

  getPageFromURL() {
    const path = window.location.pathname
    return this.pages[path] ? path : '/'
  }

  createLayout() {
    document.getElementById('app').innerHTML = `
      <header class="header">
        <div class="container">
          <nav class="nav">
            <a href="/" class="logo">
              <img src="/favicon.svg" alt="Haven Coin & Jewelry" class="logo-icon" width="32" height="32">
              <span class="logo-text">Haven Coin & Jewelry</span>
            </a>
            
            <ul class="nav-menu">
              <li><a href="/" class="nav-link" data-route="/">Home</a></li>
              <li><a href="/coins" class="nav-link" data-route="/coins">Coins</a></li>
              <li><a href="/jewelry" class="nav-link" data-route="/jewelry">Jewelry</a></li>
              <li><a href="/services" class="nav-link" data-route="/services">Services</a></li>
              <li><a href="/about" class="nav-link" data-route="/about">About</a></li>
              <li><a href="/contact" class="nav-link" data-route="/contact">Contact</a></li>
              <li><a href="/blog" class="nav-link" data-route="/blog">Blog</a></li>
            </ul>
            
            <button class="mobile-menu-toggle" aria-label="Toggle mobile menu">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </nav>
        </div>
      </header>

      <main id="main-content" class="main-content">
        <div class="loading-container">
          <div class="loading-spinner"></div>
          <p>Loading...</p>
        </div>
      </main>

      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-section">
              <div class="footer-logo">
                <img src="/favicon.svg" alt="Haven Coin & Jewelry" class="logo-icon" width="24" height="24">
                <span class="logo-text">Haven Coin & Jewelry</span>
              </div>
              <p>New Haven's premier destination for rare coins, precious metals, and fine jewelry since 2003.</p>
              <div class="social-links">
                <a href="#" aria-label="Facebook"><i class="icon-facebook"></i></a>
                <a href="#" aria-label="Instagram"><i class="icon-instagram"></i></a>
                <a href="#" aria-label="Twitter"><i class="icon-twitter"></i></a>
              </div>
            </div>
            
            <div class="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/coins">Coins</a></li>
                <li><a href="/jewelry">Jewelry</a></li>
                <li><a href="/services">Services</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            
            <div class="footer-section">
              <h3>Services</h3>
              <ul>
                <li>Rare Coins & Collectibles</li>
                <li>Fine Jewelry & Custom Design</li>
                <li>Precious Metals Trading</li>
                <li>Professional Appraisals</li>
                <li>Jewelry Repair & Restoration</li>
              </ul>
            </div>
            
            <div class="footer-section">
              <h3>Contact Info</h3>
              <div class="contact-info">
                <p><i class="icon-location"></i> 123 Chapel Street<br>New Haven, CT 06510</p>
                <p><i class="icon-phone"></i> <a href="tel:+12035550123">(203) 555-0123</a></p>
                <p><i class="icon-email"></i> <a href="mailto:info@haven-coin.com">info@haven-coin.com</a></p>
              </div>
            </div>
          </div>
          
          <div class="footer-bottom">
            <p>&copy; 2024 Haven Coin & Jewelry. All rights reserved.</p>
            <div class="footer-links">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    `
  }

  setupNavigation() {
    // Handle navigation clicks
    document.addEventListener('click', (e) => {
      const link = e.target.closest('[data-route]')
      if (link) {
        e.preventDefault()
        const route = link.getAttribute('data-route')
        this.navigate(route)
      }
    })

    // Handle browser back/forward buttons
    window.addEventListener('popstate', () => {
      this.loadPage(this.getPageFromURL())
    })

    // Setup mobile menu
    this.setupMobileMenu()
    this.setupScrollEffects()
  }

  setupMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle')
    const navMenu = document.querySelector('.nav-menu')
    
    if (mobileToggle && navMenu) {
      mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active')
        mobileToggle.classList.toggle('active')
        document.body.classList.toggle('menu-open')
      })

      // Close menu when clicking on a link
      navMenu.addEventListener('click', (e) => {
        if (e.target.classList.contains('nav-link')) {
          navMenu.classList.remove('active')
          mobileToggle.classList.remove('active')
          document.body.classList.remove('menu-open')
        }
      })

      // Close menu when clicking outside
      document.addEventListener('click', (e) => {
        if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
          navMenu.classList.remove('active')
          mobileToggle.classList.remove('active')
          document.body.classList.remove('menu-open')
        }
      })
    }
  }

  setupScrollEffects() {
    const header = document.querySelector('.header')
    let lastScrollY = window.scrollY

    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY
      
      if (currentScrollY > 100) {
        header.classList.add('scrolled')
      } else {
        header.classList.remove('scrolled')
      }

      // Hide/show header on scroll
      if (currentScrollY > lastScrollY && currentScrollY > 200) {
        header.classList.add('hidden')
      } else {
        header.classList.remove('hidden')
      }

      lastScrollY = currentScrollY
    })
  }

  async navigate(path) {
    if (this.currentPage === path) return
    
    // Update URL without page reload
    window.history.pushState({}, '', path)
    await this.loadPage(path)
  }

  async loadPage(path) {
    try {
      const mainContent = document.getElementById('main-content')
      
      // Show loading state
      mainContent.innerHTML = `
        <div class="loading-container">
          <div class="loading-spinner"></div>
          <p>Loading...</p>
        </div>
      `

      // Load the page module
      const pageLoader = this.pages[path] || this.pages['/']
      const pageModule = await pageLoader()
      const PageClass = pageModule.default
      const page = new PageClass()
      
      // Render the page
      mainContent.innerHTML = page.render()
      
      // Initialize page-specific functionality
      if (page.init) {
        await page.init()
      }

      // Update current page
      this.currentPage = path
      
      // Update active nav link
      this.updateActiveNavLink(path)
      
      // Scroll to top
      window.scrollTo(0, 0)

      // Initialize animations for new content
      this.initializeAnimations()

    } catch (error) {
      console.error('Error loading page:', error)
      const mainContent = document.getElementById('main-content')
      mainContent.innerHTML = `
        <div class="error-container">
          <h2>Oops! Something went wrong</h2>
          <p>We're sorry, but there was an error loading this page.</p>
          <button onclick="window.location.reload()" class="btn btn-primary">Try Again</button>
        </div>
      `
    }
  }

  updateActiveNavLink(path) {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active')
      if (link.getAttribute('data-route') === path) {
        link.classList.add('active')
      }
    })
  }

  initializeAnimations() {
    // Initialize fade-in animations
    const fadeElements = document.querySelectorAll('.fade-in')
    
    const fadeObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
        }
      })
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    })

    fadeElements.forEach(el => {
      fadeObserver.observe(el)
    })

    // Initialize contact forms if present
    this.initializeContactForms()
  }

  initializeContactForms() {
    const contactForms = document.querySelectorAll('.contact-form')
    
    contactForms.forEach(form => {
      // Remove existing listeners to prevent duplicates
      const newForm = form.cloneNode(true)
      form.parentNode.replaceChild(newForm, form)
      
      newForm.addEventListener('submit', async (e) => {
        e.preventDefault()
        
        const submitButton = newForm.querySelector('button[type="submit"]')
        const originalText = submitButton.textContent
        
        // Show loading state
        submitButton.textContent = 'Sending...'
        submitButton.disabled = true
        
        try {
          // Simulate form submission
          await new Promise(resolve => setTimeout(resolve, 1500))
          
          // Show success message
          this.showNotification('Thank you! Your message has been sent successfully.', 'success')
          newForm.reset()
          
        } catch (error) {
          this.showNotification('Sorry, there was an error sending your message. Please try again.', 'error')
        } finally {
          // Reset button
          submitButton.textContent = originalText
          submitButton.disabled = false
        }
      })
    })
  }

  showNotification(message, type) {
    const notification = document.createElement('div')
    notification.className = `notification ${type}`
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      color: white;
      font-weight: 500;
      z-index: 10000;
      transform: translateX(100%);
      transition: transform 0.3s ease;
      ${type === 'success' ? 'background: #10b981;' : 'background: #ef4444;'}
    `
    notification.textContent = message
    
    document.body.appendChild(notification)
    
    // Animate in
    setTimeout(() => {
      notification.style.transform = 'translateX(0)'
    }, 100)
    
    // Remove after 5 seconds
    setTimeout(() => {
      notification.style.transform = 'translateX(100%)'
      setTimeout(() => {
        if (document.body.contains(notification)) {
          document.body.removeChild(notification)
        }
      }, 300)
    }, 5000)
  }
}

// Initialize the app
new HavenCoinApp()