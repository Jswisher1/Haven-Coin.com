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

      <section class="section">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Why Choose Haven Coin & Jewelry?</h2>
            <p>Over 20 years of trusted expertise in New Haven</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card fade-in">
              <div class="service-icon">🏆</div>
              <h3>Expert Knowledge</h3>
              <p>Our certified professionals have decades of experience in numismatics and gemology. We're members of the American Numismatic Association and employ GIA-certified gemologists.</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">🔒</div>
              <h3>Authenticity Guaranteed</h3>
              <p>Every item undergoes rigorous authentication using state-of-the-art equipment and expert evaluation. We stand behind every piece we sell with comprehensive guarantees.</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">💯</div>
              <h3>Fair & Transparent Pricing</h3>
              <p>No hidden fees or surprise charges. Our pricing is based on current market values with complete transparency in our evaluation process.</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">🏘️</div>
              <h3>Local New Haven Business</h3>
              <p>Family-owned and operated since 2003, we're committed to serving our community and building lasting relationships with our customers.</p>
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
              <p>Our family-owned business combines traditional craftsmanship with modern expertise, offering unparalleled service in numismatics and fine jewelry. From rare ancient coins to contemporary engagement rings, we provide expert guidance for every customer.</p>
              <p>Whether you're starting your first collection, looking for that perfect engagement ring, or seeking professional appraisal services, our team is here to help you every step of the way.</p>
              <a href="/about" class="btn btn-outline" data-route="/about">Learn More About Us</a>
            </div>
            <div class="about-image fade-in">
              <img src="https://images.pexels.com/photos/1232594/pexels-photo-1232594.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" alt="Haven Coin & Jewelry store interior">
            </div>
          </div>
        </div>
      </section>

      <section class="section" style="background: var(--gray-50);">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Featured Collections</h2>
            <p>Discover some of our most sought-after pieces</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card fade-in">
              <div class="service-icon">🏛️</div>
              <h3>Ancient Coins</h3>
              <p>Rare Roman, Greek, and Byzantine coins dating back thousands of years. Each piece comes with detailed provenance and authentication certificates.</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">💍</div>
              <h3>Vintage Engagement Rings</h3>
              <p>Stunning Art Deco and Victorian-era engagement rings featuring old European cut diamonds and intricate metalwork from bygone eras.</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">🥇</div>
              <h3>Gold Investment Coins</h3>
              <p>American Eagles, Canadian Maple Leafs, and other government-minted gold coins perfect for precious metals portfolios and long-term investment.</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">⌚</div>
              <h3>Luxury Timepieces</h3>
              <p>Carefully curated selection of vintage and contemporary luxury watches from renowned Swiss and American manufacturers.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="text-center fade-in">
            <h2>What Our Customers Say</h2>
            <p>Read testimonials from our valued clients</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card fade-in">
              <h4>"Exceptional Service"</h4>
              <p>"Michael and Sarah helped me find the perfect engagement ring. Their knowledge and patience made the entire process enjoyable. The custom design exceeded all expectations!"</p>
              <small><strong>- David M., New Haven</strong></small>
            </div>
            
            <div class="service-card fade-in">
              <h4>"Trusted Coin Dealer"</h4>
              <p>"I've been collecting coins for 30 years, and Haven Coin & Jewelry is the most knowledgeable and honest dealer I've worked with. Their authentication is impeccable."</p>
              <small><strong>- Robert K., Hamden</strong></small>
            </div>
            
            <div class="service-card fade-in">
              <h4>"Fair Appraisal Service"</h4>
              <p>"Needed an appraisal for my grandmother's jewelry collection. The detailed report was professional and the pricing was very fair. Highly recommend their services."</p>
              <small><strong>- Jennifer L., West Haven</strong></small>
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