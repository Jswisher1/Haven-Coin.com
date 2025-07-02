import './style.css'
import { Router } from './js/router.js'
import { Navigation } from './js/navigation.js'
import { ContactForm } from './js/contact-form.js'
import { AnimationController } from './js/animations.js'

class HavenCoinApp {
  constructor() {
    this.router = new Router()
    this.navigation = new Navigation()
    this.contactForm = new ContactForm()
    this.animations = new AnimationController()
    
    this.init()
  }

  init() {
    this.createLayout()
    this.setupRoutes()
    this.router.init()
    this.navigation.init()
    this.animations.init()
  }

  createLayout() {
    document.getElementById('app').innerHTML = `
      <header class="header">
        <div class="container">
          <nav class="nav">
            <a href="/" class="logo">
              <span class="logo-icon">💎</span>
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
        <!-- Page content will be loaded here -->
      </main>

      <footer class="footer">
        <div class="container">
          <div class="footer-content">
            <div class="footer-section">
              <div class="footer-logo">
                <span class="logo-icon">💎</span>
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

  setupRoutes() {
    this.router.addRoute('/', () => import('./pages/home.js'))
    this.router.addRoute('/coins', () => import('./pages/coins.js'))
    this.router.addRoute('/jewelry', () => import('./pages/jewelry.js'))
    this.router.addRoute('/services', () => import('./pages/services.js'))
    this.router.addRoute('/about', () => import('./pages/about.js'))
    this.router.addRoute('/contact', () => import('./pages/contact.js'))
    this.router.addRoute('/blog', () => import('./pages/blog.js'))
  }
}

// Initialize the app
new HavenCoinApp()