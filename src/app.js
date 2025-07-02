import { initializeNavigation } from './js/navigation.js'
import { initializeContactForm } from './js/contact.js'
import { initializeImageLazyLoading } from './js/lazyload.js'

class HavenCoinApp {
  constructor() {
    this.currentPage = 'home'
    this.pages = {
      home: '/src/pages/home.html',
      services: '/src/pages/services.html',
      about: '/src/pages/about.html',
      contact: '/src/pages/contact.html'
    }
    this.init()
  }

  async init() {
    this.createHeader()
    this.createFooter()
    await this.loadPage(this.getPageFromURL())
    this.setupRouting()
    
    // Initialize components
    initializeNavigation()
    initializeContactForm()
    initializeImageLazyLoading()
  }

  getPageFromURL() {
    const hash = window.location.hash.slice(1)
    return this.pages[hash] ? hash : 'home'
  }

  createHeader() {
    const header = document.createElement('header')
    header.className = 'header'
    header.innerHTML = `
      <div class="container">
        <nav class="nav">
          <a href="#home" class="logo">
            🪙 Haven Coin & Jewelry
          </a>
          
          <ul class="nav-menu">
            <li><a href="#home" class="nav-link">Home</a></li>
            <li><a href="#services" class="nav-link">Services</a></li>
            <li><a href="#about" class="nav-link">About</a></li>
            <li><a href="#contact" class="nav-link">Contact</a></li>
          </ul>
          
          <button class="mobile-menu-toggle">☰</button>
        </nav>
      </div>
    `
    document.body.insertBefore(header, document.getElementById('app'))
  }

  createFooter() {
    const footer = document.createElement('footer')
    footer.className = 'footer'
    footer.innerHTML = `
      <div class="container">
        <div class="footer-content">
          <div class="footer-section">
            <h3>Haven Coin & Jewelry</h3>
            <p>New Haven's premier destination for rare coins, precious metals, and fine jewelry since 2003.</p>
            <p>Trusted by collectors and jewelry enthusiasts throughout Connecticut.</p>
          </div>
          
          <div class="footer-section">
            <h3>Quick Links</h3>
            <p><a href="#home">Home</a></p>
            <p><a href="#services">Services</a></p>
            <p><a href="#about">About Us</a></p>
            <p><a href="#contact">Contact</a></p>
          </div>
          
          <div class="footer-section">
            <h3>Services</h3>
            <p>Rare Coins & Collectibles</p>
            <p>Fine Jewelry & Custom Design</p>
            <p>Precious Metals Trading</p>
            <p>Professional Appraisals</p>
          </div>
          
          <div class="footer-section">
            <h3>Contact Info</h3>
            <p>📍 123 Chapel Street<br>New Haven, CT 06510</p>
            <p>📞 <a href="tel:+12035550123">(203) 555-0123</a></p>
            <p>✉️ <a href="mailto:info@haven-coin.com">info@haven-coin.com</a></p>
          </div>
        </div>
        
        <div class="footer-bottom">
          <p>&copy; 2024 Haven Coin & Jewelry. All rights reserved. | New Haven, Connecticut</p>
        </div>
      </div>
    `
    document.body.appendChild(footer)
  }

  async loadPage(pageName) {
    try {
      const response = await fetch(this.pages[pageName])
      const html = await response.text()
      document.getElementById('app').innerHTML = html
      this.currentPage = pageName
      this.updateActiveNavLink()
      
      // Re-initialize components after page load
      setTimeout(() => {
        initializeContactForm()
        initializeImageLazyLoading()
      }, 100)
      
    } catch (error) {
      console.error('Error loading page:', error)
      document.getElementById('app').innerHTML = '<p>Error loading page. Please try again.</p>'
    }
  }

  updateActiveNavLink() {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active')
      if (link.getAttribute('href') === `#${this.currentPage}`) {
        link.classList.add('active')
      }
    })
  }

  setupRouting() {
    window.addEventListener('hashchange', () => {
      const page = this.getPageFromURL()
      if (page !== this.currentPage) {
        this.loadPage(page)
      }
    })

    // Handle navigation clicks
    document.addEventListener('click', (e) => {
      if (e.target.matches('.nav-link')) {
        e.preventDefault()
        const href = e.target.getAttribute('href')
        window.location.hash = href
      }
    })
  }
}

// Initialize the app
new HavenCoinApp()