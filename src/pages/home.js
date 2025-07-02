export default class HomePage {
  render() {
    return `
      <section class="hero-modern">
        <div class="hero-background">
          <div class="hero-overlay"></div>
          <img src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop" alt="Luxury jewelry and coins" class="hero-bg-image">
        </div>
        <div class="container">
          <div class="hero-content fade-in">
            <h1 class="hero-title">
              <span class="title-line">Haven Coin</span>
              <span class="title-line">& Jewelry</span>
            </h1>
            <p class="hero-subtitle">New Haven's Premier Destination for Rare Coins, Precious Metals & Fine Jewelry</p>
            <div class="hero-buttons">
              <a href="/contact" class="btn btn-primary" data-route="/contact">Visit Our Store</a>
              <a href="/services" class="btn btn-secondary" data-route="/services">Our Services</a>
            </div>
          </div>
        </div>
        <div class="scroll-indicator">
          <span>Scroll to explore</span>
          <div class="scroll-arrow"></div>
        </div>
      </section>

      <section class="features-section">
        <div class="container">
          <div class="features-grid">
            <div class="feature-card fade-in">
              <div class="feature-icon">🪙</div>
              <h3>Rare Coins</h3>
              <p>Extensive collection from ancient to modern</p>
            </div>
            <div class="feature-card fade-in">
              <div class="feature-icon">💎</div>
              <h3>Fine Jewelry</h3>
              <p>Custom designs and luxury pieces</p>
            </div>
            <div class="feature-card fade-in">
              <div class="feature-icon">⚖️</div>
              <h3>Precious Metals</h3>
              <p>Gold, silver, platinum trading</p>
            </div>
            <div class="feature-card fade-in">
              <div class="feature-icon">🔍</div>
              <h3>Expert Appraisals</h3>
              <p>Certified professional evaluations</p>
            </div>
          </div>
        </div>
      </section>

      <section class="about-preview">
        <div class="container">
          <div class="about-content">
            <div class="about-text fade-in">
              <h2>Trusted Expertise Since 2003</h2>
              <p>Located in the heart of New Haven, Connecticut, Haven Coin & Jewelry has been serving collectors, investors, and jewelry enthusiasts for over two decades.</p>
              <p>Our family-owned business combines traditional craftsmanship with modern expertise, offering unparalleled service in numismatics and fine jewelry.</p>
              <a href="/about" class="btn btn-outline" data-route="/about">Learn More About Us</a>
            </div>
            <div class="about-image fade-in">
              <img src="https://images.pexels.com/photos/1232594/pexels-photo-1232594.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" alt="Haven Coin & Jewelry store interior">
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <div class="container">
          <div class="cta-content fade-in">
            <h2>Ready to Discover Your Next Treasure?</h2>
            <p>Visit our showroom in downtown New Haven or contact us for expert consultation</p>
            <div class="cta-buttons">
              <a href="/contact" class="btn btn-primary" data-route="/contact">Visit Our Store</a>
              <a href="tel:+12035550123" class="btn btn-secondary">Call (203) 555-0123</a>
            </div>
          </div>
        </div>
      </section>
    `
  }

  async init() {
    // Initialize page-specific functionality
    const animationController = new (await import('../js/animations.js')).AnimationController()
    animationController.refresh()
  }
}