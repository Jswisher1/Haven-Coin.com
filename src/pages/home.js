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
            <p class="hero-subtitle">New Haven's Premier Destination for Rare Coins, Precious Metals & Fine Jewelry Since 2003</p>
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
              <p>Ancient to modern collectibles with authentication</p>
            </div>
            <div class="feature-card fade-in">
              <div class="feature-icon">💎</div>
              <h3>Fine Jewelry</h3>
              <p>Custom designs and luxury pieces</p>
            </div>
            <div class="feature-card fade-in">
              <div class="feature-icon">⚖️</div>
              <h3>Precious Metals</h3>
              <p>Gold, silver, platinum investment options</p>
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
              <p>Our certified professionals have decades of experience in numismatics and gemology. We're members of the American Numismatic Association and employ GIA-certified gemologists with extensive training in coin grading, precious metals evaluation, and jewelry appraisal.</p>
              <p>Our team regularly attends industry conferences, maintains continuing education certifications, and stays current with market trends to provide you with the most accurate and up-to-date information.</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">🔒</div>
              <h3>Authenticity Guaranteed</h3>
              <p>Every item undergoes rigorous authentication using state-of-the-art equipment including digital microscopes, precision scales, and advanced testing methods. We maintain relationships with leading grading services like PCGS, NGC, and GIA.</p>
              <p>Our authentication process includes provenance research, metallurgical analysis, and comprehensive documentation. We stand behind every piece we sell with written guarantees and detailed certificates of authenticity.</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">💯</div>
              <h3>Fair & Transparent Pricing</h3>
              <p>No hidden fees or surprise charges. Our pricing is based on current market values with complete transparency in our evaluation process. We provide detailed explanations of how we arrive at our valuations and offer competitive rates for both buying and selling.</p>
              <p>We use real-time market data from multiple sources and provide written documentation of our pricing methodology. Our goal is to build long-term relationships based on trust and fair dealing.</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">🏘️</div>
              <h3>Local New Haven Business</h3>
              <p>Family-owned and operated since 2003, we're deeply committed to serving our community and building lasting relationships with our customers. We support local charities, sponsor community events, and contribute to New Haven's economic vitality.</p>
              <p>As longtime residents of New Haven, we understand the local market and take pride in being a trusted neighborhood business that customers can rely on for generations.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="about-preview">
        <div class="container">
          <div class="about-content">
            <div class="about-text fade-in">
              <h2>Trusted Expertise Since 2003</h2>
              <p>Located in the heart of New Haven, Connecticut, Haven Coin & Jewelry has been serving collectors, investors, and jewelry enthusiasts for over two decades. Our family-owned business combines traditional craftsmanship with modern expertise.</p>
              
              <p>Founded by Michael and Sarah Thompson, our store began as a small coin shop and has grown into Connecticut's premier destination for numismatics and fine jewelry. Michael's background in banking and passion for coin collecting, combined with Sarah's gemological expertise and artistic vision, created a unique business that serves both serious collectors and casual enthusiasts.</p>
              
              <p>Whether you're starting your first collection, searching for the perfect engagement ring, seeking professional appraisal services, or looking to sell inherited items, our knowledgeable team provides personalized service and expert guidance every step of the way.</p>
              
              <div style="margin-top: 2rem;">
                <h4 style="color: var(--primary-gold); margin-bottom: 1rem;">Our Specialties Include:</h4>
                <ul style="list-style: none; padding: 0;">
                  <li style="margin-bottom: 0.5rem; color: var(--text-light);">✓ Ancient and world coins from major civilizations</li>
                  <li style="margin-bottom: 0.5rem; color: var(--text-light);">✓ U.S. coins including key dates and varieties</li>
                  <li style="margin-bottom: 0.5rem; color: var(--text-light);">✓ Custom engagement rings and wedding jewelry</li>
                  <li style="margin-bottom: 0.5rem; color: var(--text-light);">✓ Estate and vintage jewelry restoration</li>
                  <li style="margin-bottom: 0.5rem; color: var(--text-light);">✓ Precious metals investment and trading</li>
                  <li style="margin-bottom: 0.5rem; color: var(--text-light);">✓ Professional appraisals for all purposes</li>
                </ul>
              </div>
              
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
            <p>Discover some of our most sought-after pieces and investment opportunities</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card fade-in">
              <div class="service-icon">🏛️</div>
              <h3>Ancient Coin Collection</h3>
              <p><strong>Roman Empire (27 BC - 476 AD):</strong> Rare denarii and aurei featuring emperors like Augustus, Trajan, and Marcus Aurelius. Each piece comes with detailed provenance and authentication certificates.</p>
              <p><strong>Greek City-States:</strong> Silver tetradrachms from Athens featuring the iconic owl of Athena, and coins from other major Greek cities including Corinth, Syracuse, and Aegina.</p>
              <p><strong>Byzantine Gold:</strong> Exceptional solidus coins from the Eastern Roman Empire, showcasing medieval Christian iconography and imperial portraits spanning centuries of history.</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">💍</div>
              <h3>Vintage Engagement Rings</h3>
              <p><strong>Art Deco Masterpieces (1920s-1930s):</strong> Stunning geometric designs featuring old European cut diamonds, emeralds, and sapphires in platinum settings with intricate milgrain details.</p>
              <p><strong>Victorian Romance (1837-1901):</strong> Ornate rings with rose-cut diamonds, colored gemstones, and symbolic motifs including hearts, flowers, and serpents representing eternal love.</p>
              <p><strong>Edwardian Elegance (1901-1915):</strong> Delicate filigree work featuring garland motifs, bow designs, and the newly popular platinum metal with extensive use of diamonds and pearls.</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">🥇</div>
              <h3>Gold Investment Coins</h3>
              <p><strong>American Gold Eagles:</strong> The official gold bullion coin of the United States, available in 1 oz, 1/2 oz, 1/4 oz, and 1/10 oz sizes. Both bullion and proof versions available.</p>
              <p><strong>Canadian Gold Maple Leafs:</strong> .9999 fine gold coins featuring the iconic maple leaf design, known for their purity and security features including radial lines and micro-engraving.</p>
              <p><strong>Historic U.S. Gold:</strong> Pre-1933 $5, $10, and $20 gold pieces including Liberty Head and Saint-Gaudens double eagles, Indian Head eagles, and other classic American gold coins.</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">⌚</div>
              <h3>Luxury Timepieces</h3>
              <p><strong>Swiss Luxury Brands:</strong> Carefully curated selection of Rolex, Omega, Cartier, and Patek Philippe watches, both vintage and contemporary, with full authentication and service history.</p>
              <p><strong>American Classics:</strong> Historic Hamilton, Elgin, and Waltham pocket watches and wristwatches representing the golden age of American watchmaking.</p>
              <p><strong>Investment Pieces:</strong> Rare and collectible timepieces that have shown strong appreciation over time, perfect for collectors and investors seeking alternative assets.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="text-center fade-in">
            <h2>What Our Customers Say</h2>
            <p>Read testimonials from our valued clients throughout Connecticut</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card fade-in">
              <h4>"Exceptional Custom Design Service"</h4>
              <p>"Michael and Sarah helped me create the perfect engagement ring for my fiancée. Their knowledge of diamonds and attention to detail made the entire process enjoyable and stress-free. The custom design exceeded all our expectations, and the quality is outstanding. I couldn't be happier with the result!"</p>
              <small><strong>- David M., New Haven</strong></small>
              <div style="margin-top: 1rem; color: var(--primary-gold);">★★★★★</div>
            </div>
            
            <div class="service-card fade-in">
              <h4>"Most Trusted Coin Dealer"</h4>
              <p>"I've been collecting coins for over 30 years, and Haven Coin & Jewelry is hands down the most knowledgeable and honest dealer I've worked with. Their authentication process is impeccable, and they've helped me build a collection I'm truly proud of. Michael's expertise in ancient coins is particularly impressive."</p>
              <small><strong>- Robert K., Hamden</strong></small>
              <div style="margin-top: 1rem; color: var(--primary-gold);">★★★★★</div>
            </div>
            
            <div class="service-card fade-in">
              <h4>"Professional Appraisal Service"</h4>
              <p>"Needed an appraisal for my grandmother's extensive jewelry collection for insurance purposes. Sarah provided a detailed, professional report with beautiful photography and thorough documentation. The pricing was very fair, and the service was completed promptly. Highly recommend their appraisal services."</p>
              <small><strong>- Jennifer L., West Haven</strong></small>
              <div style="margin-top: 1rem; color: var(--primary-gold);">★★★★★</div>
            </div>

            <div class="service-card fade-in">
              <h4>"Excellent Jewelry Repair"</h4>
              <p>"Brought in my great-grandmother's antique brooch that had been damaged. James did an incredible restoration job - it looks better than I ever imagined it could. The craftsmanship is exceptional, and they treated this family heirloom with the care and respect it deserved."</p>
              <small><strong>- Maria S., Branford</strong></small>
              <div style="margin-top: 1rem; color: var(--primary-gold);">★★★★★</div>
            </div>

            <div class="service-card fade-in">
              <h4>"Fair Precious Metals Pricing"</h4>
              <p>"I've sold gold and silver to several dealers in the area, and Haven Coin & Jewelry consistently offers the best prices. They explain their evaluation process clearly and pay immediately. No pressure, no games - just honest, fair dealing. They've earned my trust and my business."</p>
              <small><strong>- Thomas R., Guilford</strong></small>
              <div style="margin-top: 1rem; color: var(--primary-gold);">★★★★★</div>
            </div>

            <div class="service-card fade-in">
              <h4>"Educational and Patient"</h4>
              <p>"As a new coin collector, I was intimidated by the complexity of the hobby. The team at Haven Coin & Jewelry took the time to educate me about grading, authentication, and market trends. They helped me start a focused collection within my budget and continue to provide valuable guidance."</p>
              <small><strong>- Alex C., North Haven</strong></small>
              <div style="margin-top: 1rem; color: var(--primary-gold);">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      <section class="section" style="background: var(--gray-50);">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Current Market Highlights</h2>
            <p>Stay informed about precious metals and collectibles markets</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card fade-in">
              <div class="service-icon">📈</div>
              <h3>Precious Metals Update</h3>
              <p><strong>Gold:</strong> Currently trading near historic highs due to global economic uncertainty and inflation concerns. Excellent time for portfolio diversification.</p>
              <p><strong>Silver:</strong> Strong industrial demand combined with investment interest continues to support prices. Silver Eagles remain popular.</p>
              <p><strong>Market Outlook:</strong> We provide regular market analysis and can help you time your precious metals transactions for optimal results.</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">🪙</div>
              <h3>Coin Market Trends</h3>
              <p><strong>Morgan Dollars:</strong> Key dates continue to appreciate, with Carson City mintmarks showing particular strength in the current market.</p>
              <p><strong>Ancient Coins:</strong> Growing collector interest in Roman and Greek coins has created strong demand for quality examples with good provenance.</p>
              <p><strong>Modern Issues:</strong> Limited mintage commemoratives and special releases offer potential for future appreciation.</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">💎</div>
              <h3>Jewelry Trends</h3>
              <p><strong>Vintage Revival:</strong> Art Deco and Victorian-era pieces are experiencing renewed popularity among younger buyers seeking unique, sustainable options.</p>
              <p><strong>Custom Design:</strong> Increasing demand for personalized, one-of-a-kind pieces that reflect individual style and values.</p>
              <p><strong>Alternative Stones:</strong> Growing interest in colored gemstones and unique diamond cuts beyond traditional round brilliants.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <div class="container">
          <div class="cta-content fade-in">
            <h2>Ready to Discover Your Next Treasure?</h2>
            <p>Visit our showroom in downtown New Haven or contact us for expert consultation on coins, jewelry, and precious metals</p>
            <div class="cta-buttons">
              <a href="/contact" class="btn btn-primary" data-route="/contact">Visit Our Store</a>
              <a href="tel:+12035550123" class="btn btn-secondary">Call (203) 555-0123</a>
            </div>
            <div style="margin-top: 2rem; font-size: 0.875rem; opacity: 0.8;">
              <p>📍 123 Chapel Street, New Haven, CT 06510 | 🕒 Mon-Fri 10AM-6PM, Sat 10AM-5PM</p>
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