import './style.css'

// Load the home page content directly
document.getElementById('app').innerHTML = `
  <!-- Header -->
  <header class="header">
    <div class="container">
      <nav class="nav">
        <a href="#home" class="logo">
          🪙 Haven Coin & Jewelry
        </a>
        
        <ul class="nav-menu">
          <li><a href="#home" class="nav-link active">Home</a></li>
          <li><a href="#services" class="nav-link">Services</a></li>
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#contact" class="nav-link">Contact</a></li>
        </ul>
        
        <button class="mobile-menu-toggle">☰</button>
      </nav>
    </div>
  </header>

  <!-- Main Content -->
  <main>
    <!-- Hero Section -->
    <section class="hero" id="home">
      <div class="container">
        <div class="hero-content fade-in">
          <h1>Haven Coin & Jewelry</h1>
          <p class="hero-subtitle">New Haven's Premier Destination for Rare Coins, Precious Metals & Fine Jewelry</p>
          <a href="#contact" class="cta-button">Visit Our Store Today</a>
        </div>
      </div>
    </section>

    <!-- Services Section -->
    <section class="section" id="services">
      <div class="container">
        <div class="text-center fade-in">
          <h2>Our <span class="text-gold">Services</span></h2>
          <p>Discover our comprehensive range of numismatic and jewelry services</p>
        </div>
        
        <div class="services-grid">
          <div class="service-card fade-in">
            <div class="service-icon">🪙</div>
            <h3>Rare Coins</h3>
            <p>Extensive collection of rare and collectible coins from around the world. From ancient Roman coins to modern commemoratives, we have something for every collector.</p>
          </div>
          
          <div class="service-card fade-in">
            <div class="service-icon">💎</div>
            <h3>Fine Jewelry</h3>
            <p>Exquisite selection of fine jewelry including engagement rings, wedding bands, necklaces, and custom pieces crafted by skilled artisans.</p>
          </div>
          
          <div class="service-card fade-in">
            <div class="service-icon">⚖️</div>
            <h3>Precious Metals</h3>
            <p>Gold, silver, platinum, and palladium bullion. We buy and sell precious metals at competitive market prices with transparent pricing.</p>
          </div>
          
          <div class="service-card fade-in">
            <div class="service-icon">🔍</div>
            <h3>Appraisals</h3>
            <p>Professional appraisal services for insurance, estate planning, or resale purposes. Our certified appraisers provide detailed documentation.</p>
          </div>
          
          <div class="service-card fade-in">
            <div class="service-icon">🔧</div>
            <h3>Jewelry Repair</h3>
            <p>Expert jewelry repair and restoration services. From simple ring sizing to complex antique restoration, we handle it all with care.</p>
          </div>
          
          <div class="service-card fade-in">
            <div class="service-icon">💰</div>
            <h3>Buying & Selling</h3>
            <p>We buy and sell coins, jewelry, and precious metals. Get top dollar for your items with our fair and transparent evaluation process.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section class="section about" id="about">
      <div class="container">
        <div class="about-content">
          <div class="about-text fade-in">
            <h2>About <span class="text-gold">Haven Coin & Jewelry</span></h2>
            <p>Located in the heart of New Haven, Connecticut, Haven Coin & Jewelry has been serving collectors, investors, and jewelry enthusiasts for over two decades. Our family-owned business combines traditional craftsmanship with modern expertise.</p>
            
            <p>We pride ourselves on our extensive knowledge of numismatics, precious metals markets, and fine jewelry. Whether you're a seasoned collector looking for that rare piece or someone just starting their journey into coins and jewelry, our experienced team is here to guide you.</p>
            
            <p>Our commitment to authenticity, fair pricing, and exceptional customer service has made us New Haven's most trusted coin and jewelry destination. Visit our showroom to experience the difference that expertise and passion make.</p>
          </div>
          
          <div class="about-image fade-in">
            <img src="https://images.pexels.com/photos/1232594/pexels-photo-1232594.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" alt="Haven Coin & Jewelry Store Interior" />
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="section" id="contact">
      <div class="container">
        <div class="text-center fade-in">
          <h2>Visit Our <span class="text-gold">Store</span></h2>
          <p>Located in downtown New Haven, we're easy to find and always ready to help</p>
        </div>
        
        <div class="contact-grid">
          <div class="contact-info fade-in">
            <h3>Store Information</h3>
            
            <div class="contact-item">
              <div class="contact-icon">📍</div>
              <div>
                <strong>Address</strong><br>
                123 Chapel Street<br>
                New Haven, CT 06510
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">📞</div>
              <div>
                <strong>Phone</strong><br>
                <a href="tel:+12035550123">(203) 555-0123</a>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">✉️</div>
              <div>
                <strong>Email</strong><br>
                <a href="mailto:info@haven-coin.com">info@haven-coin.com</a>
              </div>
            </div>
            
            <div class="contact-item">
              <div class="contact-icon">🕒</div>
              <div>
                <strong>Hours</strong><br>
                Monday - Friday: 10:00 AM - 6:00 PM<br>
                Saturday: 10:00 AM - 5:00 PM<br>
                Sunday: Closed
              </div>
            </div>
          </div>
          
          <div class="contact-form fade-in">
            <h3>Send Us a Message</h3>
            <form id="contact-form">
              <div class="form-group">
                <label for="name">Name *</label>
                <input type="text" id="name" name="name" required>
              </div>
              
              <div class="form-group">
                <label for="email">Email *</label>
                <input type="email" id="email" name="email" required>
              </div>
              
              <div class="form-group">
                <label for="phone">Phone</label>
                <input type="tel" id="phone" name="phone">
              </div>
              
              <div class="form-group">
                <label for="message">Message *</label>
                <textarea id="message" name="message" placeholder="Tell us about what you're looking for or how we can help you..." required></textarea>
              </div>
              
              <button type="submit" class="submit-button">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  </main>

  <!-- Footer -->
  <footer class="footer">
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
  </footer>
`

// Initialize functionality after content is loaded
setTimeout(() => {
  // Initialize navigation
  const header = document.querySelector('.header')
  const mobileToggle = document.querySelector('.mobile-menu-toggle')
  const navMenu = document.querySelector('.nav-menu')
  const navLinks = document.querySelectorAll('.nav-link')

  // Handle scroll effect on header
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      header.classList.add('scrolled')
    } else {
      header.classList.remove('scrolled')
    }
  })

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('active')
      mobileToggle.innerHTML = navMenu.classList.contains('active') ? '✕' : '☰'
    })

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active')
        mobileToggle.innerHTML = '☰'
      })
    })

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !mobileToggle.contains(e.target)) {
        navMenu.classList.remove('active')
        mobileToggle.innerHTML = '☰'
      }
    })
  }

  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute('href'))
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        })
      }
    })
  })

  // Initialize contact form
  const contactForm = document.getElementById('contact-form')
  
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault()
      
      const submitButton = contactForm.querySelector('.submit-button')
      const originalText = submitButton.textContent
      
      // Show loading state
      submitButton.textContent = 'Sending...'
      submitButton.disabled = true
      
      // Simulate form submission
      try {
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Show success message
        showNotification('Thank you! Your message has been sent successfully.', 'success')
        contactForm.reset()
        
      } catch (error) {
        showNotification('Sorry, there was an error sending your message. Please try again.', 'error')
      } finally {
        // Reset button
        submitButton.textContent = originalText
        submitButton.disabled = false
      }
    })
  }

  // Initialize fade-in animations
  const fadeElements = document.querySelectorAll('.fade-in')
  
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible')
      }
    })
  }, {
    threshold: 0.1
  })

  fadeElements.forEach(el => {
    fadeObserver.observe(el)
  })

}, 100)

function showNotification(message, type) {
  const notification = document.createElement('div')
  notification.className = `notification ${type}`
  notification.textContent = message
  
  // Add notification styles
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
  
  document.body.appendChild(notification)
  
  // Animate in
  setTimeout(() => {
    notification.style.transform = 'translateX(0)'
  }, 100)
  
  // Remove after 5 seconds
  setTimeout(() => {
    notification.style.transform = 'translateX(100%)'
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 5000)
}