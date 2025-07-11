import './style.css'
import { resourceLoader } from './utils/resourceLoader.js'
import { imageOptimizer } from './utils/imageOptimizer.js'

class HavenCoinApp {
  constructor() {
    this.currentPage = 'home'
    this.pages = {
      '/': () => resourceLoader.loadModule('../pages/home.js'),
      '/what-we-buy': () => resourceLoader.loadModule('../pages/what-we-buy.js'),
      '/what-we-buy/coins': () => resourceLoader.loadModule('../pages/coins.js'),
      '/what-we-buy/jewelry': () => resourceLoader.loadModule('../pages/jewelry.js'),
      '/what-we-buy/bullion': () => resourceLoader.loadModule('../pages/bullion.js'),
      '/what-we-buy/currency': () => resourceLoader.loadModule('../pages/currency.js'),
      '/services': () => resourceLoader.loadModule('../pages/services.js'),
      '/about': () => resourceLoader.loadModule('../pages/about.js'),
      '/contact': () => resourceLoader.loadModule('../pages/contact.js'),
      '/blog': () => resourceLoader.loadModule('../pages/blog.js'),
      '/404': () => resourceLoader.loadModule('../pages/404.js')
    }
    this.init()
  }

  async init() {
    // Ensure fallback content is hidden once JavaScript loads
    this.hideFallbackContent()
    
    this.createLayout()
    this.setupNavigation()
    this.setupRedirects()
    this.setupAnalytics()
    this.setupPerformanceOptimizations()
    await this.loadPage(this.getPageFromURL())
    this.initializeAnimations()
  }

  hideFallbackContent() {
    // Hide SEO fallback content once JavaScript is ready
    const seoContent = document.querySelector('.seo-content')
    if (seoContent) {
      seoContent.style.display = 'none'
    }
  }

  setupPerformanceOptimizations() {
    // Preload critical images
    imageOptimizer.preloadCriticalImages([
      'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
      'https://images.pexels.com/photos/1232594/pexels-photo-1232594.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
    ]);

    // Setup resource bundling for critical paths
    this.bundleCriticalResources();

    // Optimize third-party scripts
    this.optimizeThirdPartyScripts();

    // Setup connection optimization
    this.setupConnectionOptimization();
  }

  bundleCriticalResources() {
    // Inline critical CSS is already in index.html
    // Bundle critical JavaScript functionality
    const criticalJS = `
      // Critical path JavaScript bundled inline
      window.havenCoinUtils = {
        trackEvent: (name, params) => {
          if (typeof gtag !== 'undefined') {
            gtag('event', name, params);
          }
        },
        optimizeImage: (url, width, height) => {
          if (url.includes('pexels.com')) {
            return url + '?auto=compress&cs=tinysrgb&w=' + width + '&h=' + height + '&fit=crop';
          }
          return url;
        }
      };
    `;

    // Execute critical JavaScript
    const script = document.createElement('script');
    script.textContent = criticalJS;
    document.head.appendChild(script);
  }

  optimizeThirdPartyScripts() {
    // Delay non-critical third-party scripts
    const delayedScripts = [];
    
    // Load third-party scripts after user interaction
    const loadDelayedScripts = () => {
      delayedScripts.forEach(script => {
        const scriptElement = document.createElement('script');
        scriptElement.src = script.src;
        scriptElement.async = true;
        document.head.appendChild(scriptElement);
      });
    };

    // Load on first user interaction
    ['click', 'scroll', 'keydown', 'touchstart'].forEach(event => {
      document.addEventListener(event, loadDelayedScripts, { once: true, passive: true });
    });

    // Fallback: load after 3 seconds
    setTimeout(loadDelayedScripts, 3000);
  }

  setupConnectionOptimization() {
    // Use connection-aware loading
    if ('connection' in navigator) {
      const connection = navigator.connection;
      
      // Adjust image quality based on connection speed
      if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
        imageOptimizer.defaultQuality = 60;
      } else if (connection.effectiveType === '3g') {
        imageOptimizer.defaultQuality = 75;
      }

      // Reduce prefetching on slow connections
      if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
        resourceLoader.prefetchEnabled = false;
      }
    }
  }

  setupRedirects() {
    // Handle URL canonicalization - redirect to preferred URLs
    const currentUrl = window.location.href
    const preferredDomain = 'https://haven-coin.com'
    
    // Redirect www to non-www (or vice versa based on preference)
    if (currentUrl.includes('www.haven-coin.com')) {
      window.location.replace(currentUrl.replace('www.haven-coin.com', 'haven-coin.com'))
      return
    }
    
    // Redirect HTTP to HTTPS
    if (currentUrl.startsWith('http://')) {
      window.location.replace(currentUrl.replace('http://', 'https://'))
      return
    }
    
    // Remove trailing slashes except for root
    if (window.location.pathname !== '/' && window.location.pathname.endsWith('/')) {
      const newPath = window.location.pathname.slice(0, -1)
      window.history.replaceState({}, '', newPath + window.location.search + window.location.hash)
    }
  }

  setupAnalytics() {
    // Enhanced analytics tracking for SEO insights
    this.trackPagePerformance()
    this.setupErrorTracking()
    this.setupUserEngagementTracking()
  }

  trackPagePerformance() {
    // Track Core Web Vitals for SEO
    if ('web-vital' in window) {
      import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
        getCLS(this.sendToAnalytics)
        getFID(this.sendToAnalytics)
        getFCP(this.sendToAnalytics)
        getLCP(this.sendToAnalytics)
        getTTFB(this.sendToAnalytics)
      }).catch(() => {
        // Silently fail if web-vitals not available
      })
    }

    // Track page load times
    window.addEventListener('load', () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
      if (typeof gtag !== 'undefined') {
        gtag('event', 'page_load_time', {
          event_category: 'performance',
          event_label: 'milliseconds',
          value: loadTime
        })
      }
    })
  }

  sendToAnalytics(metric) {
    if (typeof gtag !== 'undefined') {
      gtag('event', metric.name, {
        event_category: 'web_vitals',
        event_label: metric.id,
        value: Math.round(metric.name === 'CLS' ? metric.value * 1000 : metric.value),
        non_interaction: true
      })
    }
  }

  setupErrorTracking() {
    // Track JavaScript errors for SEO diagnostics
    window.addEventListener('error', (event) => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'javascript_error', {
          event_category: 'error',
          event_label: event.message,
          value: 1,
          non_interaction: true
        })
      }
    })

    // Track unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      if (typeof gtag !== 'undefined') {
        gtag('event', 'promise_rejection', {
          event_category: 'error',
          event_label: event.reason,
          value: 1,
          non_interaction: true
        })
      }
    })
  }

  setupUserEngagementTracking() {
    // Optimized event tracking with batching
    let eventQueue = [];
    let batchTimeout;

    const batchTrackEvent = (eventName, parameters) => {
      eventQueue.push({name: eventName, params: parameters});
      
      clearTimeout(batchTimeout);
      batchTimeout = setTimeout(() => {
        if (eventQueue.length > 0 && typeof gtag !== 'undefined') {
          eventQueue.forEach(event => {
            gtag('event', event.name, event.params);
          });
          eventQueue = [];
        }
      }, 1000);
    };

    // Track clicks on important elements with event delegation
    document.addEventListener('click', (e) => {
      // Track phone number clicks
      if (e.target.matches('a[href^="tel:"]')) {
        batchTrackEvent('phone_call', {
          event_category: 'contact',
          event_label: 'phone_click'
        });
      }

      // Track email clicks
      if (e.target.matches('a[href^="mailto:"]')) {
        batchTrackEvent('email_click', {
          event_category: 'contact',
          event_label: 'email_click'
        });
      }

      // Track social media clicks
      if (e.target.closest('.social-links a')) {
        const platform = e.target.closest('a').getAttribute('aria-label');
        batchTrackEvent('social_click', {
          event_category: 'social',
          event_label: platform
        });
      }

      // Track CTA button clicks
      if (e.target.matches('.btn-primary, .cta-button')) {
        batchTrackEvent('cta_click', {
          event_category: 'engagement',
          event_label: e.target.textContent.trim()
        });
      }
    });

    // Track form submissions with batching
    document.addEventListener('submit', (e) => {
      if (e.target.matches('form')) {
        const formName = e.target.className || 'unknown_form';
        batchTrackEvent('form_submit', {
          event_category: 'engagement',
          event_label: formName
        });
      }
    });
  }

  getPageFromURL() {
    const path = window.location.pathname
    return this.pages[path] ? path : '/404'
  }

  createLayout() {
    // Use optimized images and inline SVG icons
    document.getElementById('app').innerHTML = `
      <div class="price-ticker">
        <div class="ticker-content">
          <div class="ticker-item">
            <span class="ticker-label">GOLD</span>
            <span class="ticker-price">$2,045.50</span>
            <span class="ticker-change positive">+$12.30 (+0.6%)</span>
          </div>
          <div class="ticker-item">
            <span class="ticker-label">SILVER</span>
            <span class="ticker-price">$24.85</span>
            <span class="ticker-change positive">+$0.18 (+0.7%)</span>
          </div>
          <div class="ticker-item">
            <span class="ticker-label">PLATINUM</span>
            <span class="ticker-price">$1,025.30</span>
            <span class="ticker-change negative">-$3.20 (-0.3%)</span>
          </div>
          <div class="ticker-item">
            <span class="ticker-label">PALLADIUM</span>
            <span class="ticker-price">$1,846.75</span>
            <span class="ticker-change positive">+$22.15 (+1.2%)</span>
          </div>
          <div class="ticker-item">
            <span class="ticker-label">USD/EUR</span>
            <span class="ticker-price">1.0842</span>
            <span class="ticker-change negative">-0.0023 (-0.2%)</span>
          </div>
          <div class="ticker-item">
            <span class="ticker-label">DXY</span>
            <span class="ticker-price">103.45</span>
            <span class="ticker-change positive">+0.15 (+0.1%)</span>
          </div>
          <!-- Duplicate content for seamless loop -->
          <div class="ticker-item">
            <span class="ticker-label">GOLD</span>
            <span class="ticker-price">$2,045.50</span>
            <span class="ticker-change positive">+$12.30 (+0.6%)</span>
          </div>
          <div class="ticker-item">
            <span class="ticker-label">SILVER</span>
            <span class="ticker-price">$24.85</span>
            <span class="ticker-change positive">+$0.18 (+0.7%)</span>
          </div>
          <div class="ticker-item">
            <span class="ticker-label">PLATINUM</span>
            <span class="ticker-price">$1,025.30</span>
            <span class="ticker-change negative">-$3.20 (-0.3%)</span>
          </div>
          <div class="ticker-item">
            <span class="ticker-label">PALLADIUM</span>
            <span class="ticker-price">$1,846.75</span>
            <span class="ticker-change positive">+$22.15 (+1.2%)</span>
          </div>
          <div class="ticker-item">
            <span class="ticker-label">USD/EUR</span>
            <span class="ticker-price">1.0842</span>
            <span class="ticker-change negative">-0.0023 (-0.2%)</span>
          </div>
          <div class="ticker-item">
            <span class="ticker-label">DXY</span>
            <span class="ticker-price">103.45</span>
            <span class="ticker-change positive">+0.15 (+0.1%)</span>
          </div>
        </div>
      </div>

      <header class="header">
        <div class="header-container">
          <div class="header-top">
            <div class="contact-info">
              <a href="tel:+12035550123" class="phone-number">📞 (203) 555-0123</a>
              <span class="address">📍 123 Chapel Street, New Haven, CT</span>
            </div>
            <div class="social-links">
              <a href="https://www.facebook.com/havencoinjewelry" aria-label="Facebook" target="_blank" rel="noopener noreferrer">📘</a>
              <a href="https://www.instagram.com/havencoinjewelry" aria-label="Instagram" target="_blank" rel="noopener noreferrer">📷</a>
              <a href="https://twitter.com/havencoinjewelry" aria-label="Twitter" target="_blank" rel="noopener noreferrer">🐦</a>
            </div>
          </div>
          
          <div class="header-main">
            <div class="logo">
              <a href="/" data-route="/">Haven Coin & Jewelry</a>
            </div>
            
            <nav class="nav-menu">
              <a href="/" data-route="/" class="nav-link">Home</a>
              <div class="nav-dropdown">
                <a href="/what-we-buy" data-route="/what-we-buy" class="nav-link dropdown-toggle">What We Buy</a>
                <div class="dropdown-menu">
                  <a href="/what-we-buy/coins" data-route="/what-we-buy/coins" class="dropdown-link">Coins & Collectibles</a>
                  <a href="/what-we-buy/jewelry" data-route="/what-we-buy/jewelry" class="dropdown-link">Jewelry & Watches</a>
                  <a href="/what-we-buy/bullion" data-route="/what-we-buy/bullion" class="dropdown-link">Bullion & Precious Metals</a>
                  <a href="/what-we-buy/currency" data-route="/what-we-buy/currency" class="dropdown-link">Currency & Paper Money</a>
                </div>
              </div>
              <a href="/services" data-route="/services" class="nav-link">Services</a>
              <a href="/about" data-route="/about" class="nav-link">About</a>
              <a href="/contact" data-route="/contact" class="nav-link">Contact</a>
              <a href="/blog" data-route="/blog" class="nav-link">Blog</a>
            </nav>
            
            <button class="mobile-menu-toggle">
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
      </header>

      <main id="main-content" class="main-content">
        <!-- Page content will be loaded here -->
      </main>

      <footer class="footer">
        <div class="footer-container">
          <div class="footer-content">
            <div class="footer-section">
              <h3>Contact Information</h3>
              <div class="contact-info">
                <p>📍 123 Chapel Street<br>New Haven, CT 06510</p>
                <p>📞 <a href="tel:+12035550123">(203) 555-0123</a></p>
                <p>✉️ <a href="mailto:info@haven-coin.com">info@haven-coin.com</a></p>
              </div>
              <div class="social-links">
                <a href="https://www.facebook.com/havencoinjewelry" aria-label="Facebook" target="_blank" rel="noopener noreferrer">📘</a>
                <a href="https://www.instagram.com/havencoinjewelry" aria-label="Instagram" target="_blank" rel="noopener noreferrer">📷</a>
                <a href="https://twitter.com/havencoinjewelry" aria-label="Twitter" target="_blank" rel="noopener noreferrer">🐦</a>
              </div>
            </div>
            
            <div class="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/what-we-buy">What We Buy</a></li>
                <li><a href="/what-we-buy/coins">Coins & Collectibles</a></li>
                <li><a href="/what-we-buy/jewelry">Jewelry & Watches</a></li>
                <li><a href="/what-we-buy/bullion">Bullion & Precious Metals</a></li>
                <li><a href="/what-we-buy/currency">Currency & Paper Money</a></li>
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
                <p>📍 123 Chapel Street<br>New Haven, CT 06510</p>
                <p>📞 <a href="tel:+12035550123">(203) 555-0123</a></p>
                <p>✉️ <a href="mailto:info@haven-coin.com">info@haven-coin.com</a></p>
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
    // Handle navigation clicks with event delegation
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
    this.setupPriceTicker()
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
        if (e.target.classList.contains('nav-link') || e.target.classList.contains('dropdown-link')) {
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
          // Close any open dropdowns
          document.querySelectorAll('.dropdown-menu').forEach(dropdown => {
            dropdown.classList.remove('active')
          })
        }
      })
    }

    // Setup dropdown functionality
    this.setupDropdowns()
  }

  setupDropdowns() {
    const dropdowns = document.querySelectorAll('.nav-dropdown')
    
    dropdowns.forEach(dropdown => {
      const toggle = dropdown.querySelector('.dropdown-toggle')
      const menu = dropdown.querySelector('.dropdown-menu')
      
      if (toggle && menu) {
        // Desktop hover behavior
        dropdown.addEventListener('mouseenter', () => {
          if (window.innerWidth > 768) {
            menu.classList.add('active')
          }
        })
        
        dropdown.addEventListener('mouseleave', () => {
          if (window.innerWidth > 768) {
            menu.classList.remove('active')
          }
        })
        
        // Mobile click behavior
        toggle.addEventListener('click', (e) => {
          if (window.innerWidth <= 768) {
            e.preventDefault()
            menu.classList.toggle('active')
            toggle.classList.toggle('active')
          }
        })
      }
    })
  }

  setupScrollEffects() {
    const header = document.querySelector('.header')
    let scrollTimeout

    // Throttle scroll events for better performance
    window.addEventListener('scroll', () => {
      if (scrollTimeout) return
      scrollTimeout = setTimeout(() => {
        const currentScrollY = window.scrollY
        
        if (currentScrollY > 100) {
          header.classList.add('scrolled')
        } else {
          header.classList.remove('scrolled')
        }

        scrollTimeout = null
      }, 16) // ~60fps
    }, { passive: true })
  }

  setupPriceTicker() {
    // Update prices periodically (simulate real-time data)
    setInterval(() => {
      this.updateTickerPrices()
    }, 30000) // Update every 30 seconds

    // Add click handlers for ticker items
    document.addEventListener('click', (e) => {
      const tickerItem = e.target.closest('.ticker-item')
      if (tickerItem) {
        const label = tickerItem.querySelector('.ticker-label').textContent
        this.showPriceDetails(label)
      }
    })
  }

  updateTickerPrices() {
    const tickerItems = document.querySelectorAll('.ticker-item')
    
    tickerItems.forEach(item => {
      const priceElement = item.querySelector('.ticker-price')
      const changeElement = item.querySelector('.ticker-change')
      const label = item.querySelector('.ticker-label').textContent
      
      // Simulate price changes (in real app, this would come from API)
      const currentPrice = parseFloat(priceElement.textContent.replace(/[$,]/g, ''))
      const changePercent = (Math.random() - 0.5) * 0.02 // ±1% max change
      const newPrice = currentPrice * (1 + changePercent)
      const priceChange = newPrice - currentPrice
      
      // Update price
      if (label.includes('USD') || label === 'DXY') {
        priceElement.textContent = newPrice.toFixed(4)
        changeElement.textContent = `${priceChange >= 0 ? '+' : ''}${priceChange.toFixed(4)} (${(changePercent * 100).toFixed(2)}%)`
      } else {
        priceElement.textContent = `$${newPrice.toFixed(2)}`
        changeElement.textContent = `${priceChange >= 0 ? '+' : ''}$${Math.abs(priceChange).toFixed(2)} (${(changePercent * 100).toFixed(1)}%)`
      }
      
      // Update change color
      changeElement.className = `ticker-change ${priceChange >= 0 ? 'positive' : 'negative'}`
    })
  }

  showPriceDetails(metal) {
    // Show detailed price information (could open modal or navigate to price page)
    const messages = {
      'GOLD': 'Gold spot price updated every 15 minutes during market hours. We pay 95-98% of spot price.',
      'SILVER': 'Silver spot price updated every 15 minutes during market hours. We pay 92-96% of spot price.',
      'PLATINUM': 'Platinum spot price updated every 15 minutes during market hours. We pay 90-95% of spot price.',
      'PALLADIUM': 'Palladium spot price updated every 15 minutes during market hours. We pay 88-93% of spot price.',
      'USD/EUR': 'US Dollar to Euro exchange rate affects international precious metals pricing.',
      'DXY': 'US Dollar Index - measures USD strength against basket of major currencies.'
    }
    
    // Remove popup notifications - just log for now
    if (messages[metal]) {
      console.log(`${metal}: ${messages[metal]}`)
    }
  }

  async navigate(route) {
    // Handle blog post URLs with query parameters
    let path = route
    let search = ''
    
    if (route.includes('?')) {
      [path, search] = route.split('?')
    }
    
    if (this.currentPage === path && window.location.search === (search ? '?' + search : '')) return
    
    // Update URL with full route including query parameters
    const fullUrl = search ? `${path}?${search}` : path
    window.history.pushState({}, '', fullUrl)
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

      // Load the page module with optimized loading
      const pageLoader = this.pages[path] || this.pages['/404']
      const pageModule = await pageLoader()
      const PageClass = pageModule.default
      const page = new PageClass()
      
      // Render the page with batched DOM updates
      await resourceLoader.batchDOMUpdates([
        () => {
          mainContent.innerHTML = page.render()
        }
      ])
      
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

      // Update page meta
      this.updatePageMeta(path)

      // Track page view in analytics (batched)
      if (typeof gtag !== 'undefined') {
        gtag('config', 'GA_MEASUREMENT_ID', {
          page_title: document.title,
          page_location: window.location.href
        })
        
        gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          content_group1: this.getPageCategory(path)
        })
      }

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

      // Track errors in analytics
      if (typeof gtag !== 'undefined') {
        gtag('event', 'page_load_error', {
          event_category: 'error',
          event_label: path,
          value: 1
        })
      }
    }
  }

  getPageCategory(path) {
    const categories = {
      '/': 'Homepage',
      '/coins': 'Products',
      '/jewelry': 'Products', 
      '/services': 'Services',
      '/about': 'About',
      '/contact': 'Contact',
      '/blog': 'Blog',
      '/404': 'Error'
    }
    return categories[path] || 'Other'
  }

  updatePageMeta(path) {
    const pageTitles = {
      '/': 'Haven Coin & Jewelry - New Haven CT Coin & Jewelry Store',
      '/coins': 'Rare Coins & Collectibles - Haven Coin & Jewelry',
      '/jewelry': 'Fine Jewelry & Custom Design - Haven Coin & Jewelry',
      '/services': 'Our Services - Haven Coin & Jewelry',
      '/about': 'About Us - Haven Coin & Jewelry',
      '/contact': 'Contact Us - Haven Coin & Jewelry',
      '/blog': 'Blog & News - Haven Coin & Jewelry',
      '/404': '404 - Page Not Found - Haven Coin & Jewelry'
    }

    const pageDescriptions = {
      '/': 'Haven Coin & Jewelry in New Haven, Connecticut offers rare coins, precious metals, fine jewelry, and expert appraisal services.',
      '/coins': 'Discover our extensive collection of rare and collectible coins from around the world, spanning ancient civilizations to modern commemoratives.',
      '/jewelry': 'Exquisite fine jewelry including engagement rings, wedding bands, necklaces, and custom pieces crafted by skilled artisans.',
      '/services': 'Comprehensive coin and jewelry services including appraisals, repairs, custom design, and precious metals trading.',
      '/about': 'Learn about Haven Coin & Jewelry, New Haven\'s trusted coin and jewelry experts serving Connecticut since 2003.',
      '/contact': 'Visit our New Haven showroom or contact Haven Coin & Jewelry for expert consultation on coins, jewelry, and precious metals.',
      '/blog': 'Stay updated with the latest insights in coins, jewelry, precious metals, and collecting trends from our expert team.',
      '/404': 'The page you\'re looking for could not be found. Explore our helpful links to find what you need.'
    }

    document.title = pageTitles[path] || pageTitles['/404']
    
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', pageDescriptions[path] || pageDescriptions['/404'])
    }

    // Update canonical URL
    const canonical = document.querySelector('link[rel="canonical"]')
    if (canonical) {
      canonical.setAttribute('href', `https://haven-coin.com${path === '/' ? '' : path}`)
    }

    // Update Open Graph tags
    const ogTitle = document.querySelector('meta[property="og:title"]')
    const ogDescription = document.querySelector('meta[property="og:description"]')
    const ogUrl = document.querySelector('meta[property="og:url"]')
    
    if (ogTitle) ogTitle.setAttribute('content', pageTitles[path] || pageTitles['/404'])
    if (ogDescription) ogDescription.setAttribute('content', pageDescriptions[path] || pageDescriptions['/404'])
    if (ogUrl) ogUrl.setAttribute('href', `https://haven-coin.com${path === '/' ? '' : path}`)

    // Update Twitter Card tags
    const twitterTitle = document.querySelector('meta[property="twitter:title"]')
    const twitterDescription = document.querySelector('meta[property="twitter:description"]')
    const twitterUrl = document.querySelector('meta[property="twitter:url"]')
    
    if (twitterTitle) twitterTitle.setAttribute('content', pageTitles[path] || pageTitles['/404'])
    if (twitterDescription) twitterDescription.setAttribute('content', pageDescriptions[path] || pageDescriptions['/404'])
    if (twitterUrl) twitterUrl.setAttribute('href', `https://haven-coin.com${path === '/' ? '' : path}`)
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
    // Optimized intersection observer for animations
    const fadeElements = document.querySelectorAll('.fade-in')
    
    if (fadeElements.length > 0) {
      const fadeObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            fadeObserver.unobserve(entry.target) // Stop observing once animated
          }
        })
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      })

      fadeElements.forEach(el => {
        fadeObserver.observe(el)
      })
    }

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

          // Track form submission in analytics
          if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submit', {
              event_category: 'engagement',
              event_label: 'contact_form'
            })
          }
          
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
    notification.className = `notification ${type || 'info'}`
    notification.style.cssText = `
      position: fixed;
      top: 20px;
      right: 20px;
      padding: 1rem 1.5rem;
      border-radius: 8px;
      color: white;
      font-weight: 500;
      z-index: 10000;
        <span class="notification-icon">${type === 'success' ? '✓' : type === 'error' ? '✕' : 'ℹ'}</span>
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