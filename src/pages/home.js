export default class HomePage {
  render() {
    return `
      <section class="hero-simple">
        <div class="container">
          <div class="hero-content-simple fade-in">
            <h1>We Buy Gold, Silver, Coins & Jewelry</h1>
            <p class="hero-subtitle">Get cash today for your precious metals and collectibles</p>
            
            <div class="hero-actions">
              <a href="tel:+12035550123" class="btn btn-primary btn-large">
                📞 Call (203) 555-0123
              </a>
              <a href="/contact" class="btn btn-secondary btn-large" data-route="/contact">
                Visit Our Store
              </a>
            </div>
            
            <div class="hero-trust">
              <span>✓ 20+ Years in Business</span>
              <span>✓ A+ BBB Rating</span>
              <span>✓ Immediate Payment</span>
            </div>
          </div>
        </div>
      </section>

      <section class="quick-contact">
        <div class="container">
          <div class="contact-options fade-in">
            <div class="contact-option">
              <div class="contact-icon">📞</div>
              <h3>Call Now</h3>
              <p>Speak with an expert</p>
              <a href="tel:+12035550123" class="btn btn-primary">(203) 555-0123</a>
            </div>
            
            <div class="contact-option">
              <div class="contact-icon">🏪</div>
              <h3>Visit Store</h3>
              <p>123 Chapel Street, New Haven</p>
              <a href="/contact" class="btn btn-secondary" data-route="/contact">Get Directions</a>
            </div>
            
            <div class="contact-option">
              <div class="contact-icon">💬</div>
              <h3>Send Photos</h3>
              <p>Get a preliminary quote</p>
              <a href="mailto:info@haven-coin.com" class="btn btn-secondary">Email Photos</a>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="text-center mb-8 fade-in">
            <h2>What We Buy</h2>
            <p class="text-large">We purchase these items at top market prices</p>
          </div>
          
          <div class="what-we-buy-grid">
            <div class="buy-category fade-in">
              <div class="category-icon">🥇</div>
              <h3>Gold & Silver</h3>
              <div class="category-items">
                <span>Gold Jewelry</span>
                <span>Silver Coins</span>
                <span>Gold Coins</span>
                <span>Bullion</span>
                <span>Dental Gold</span>
                <span>Broken Jewelry</span>
              </div>
              <div class="category-price">We pay 95-98% of spot</div>
              <a href="/what-we-buy/bullion" class="btn btn-outline" data-route="/what-we-buy/bullion">Learn More</a>
            </div>

            <div class="buy-category fade-in">
              <div class="category-icon">🪙</div>
              <h3>Coins & Collectibles</h3>
              <div class="category-items">
                <span>Morgan Dollars</span>
                <span>Peace Dollars</span>
                <span>Walking Liberty</span>
                <span>Mercury Dimes</span>
                <span>Wheat Pennies</span>
                <span>Proof Sets</span>
              </div>
              <div class="category-price">Based on rarity & condition</div>
              <a href="/what-we-buy/coins" class="btn btn-outline" data-route="/what-we-buy/coins">Learn More</a>
            </div>

            <div class="buy-category fade-in">
              <div class="category-icon">💎</div>
              <h3>Jewelry & Watches</h3>
              <div class="category-items">
                <span>Diamond Rings</span>
                <span>Gold Chains</span>
                <span>Rolex Watches</span>
                <span>Estate Jewelry</span>
                <span>Broken Pieces</span>
                <span>Single Earrings</span>
              </div>
              <div class="category-price">Professional evaluation</div>
              <a href="/what-we-buy/jewelry" class="btn btn-outline" data-route="/what-we-buy/jewelry">Learn More</a>
            </div>

            <div class="buy-category fade-in">
              <div class="category-icon">💵</div>
              <h3>Paper Money</h3>
              <div class="category-items">
                <span>Old Bills</span>
                <span>Silver Certificates</span>
                <span>Star Notes</span>
                <span>Large Size Notes</span>
                <span>Error Notes</span>
                <span>Foreign Currency</span>
              </div>
              <div class="category-price">Collector value pricing</div>
              <a href="/what-we-buy/currency" class="btn btn-outline" data-route="/what-we-buy/currency">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      <section class="section" style="background: var(--surface-secondary);">
        <div class="container">
          <div class="text-center mb-8 fade-in">
            <h2>Don't Know What You Have?</h2>
            <p class="text-large">We help people every day who inherited collections or found items</p>
          </div>
          
          <div class="help-scenarios">
            <div class="scenario fade-in">
              <div class="scenario-icon">👴</div>
              <h3>Inherited Collection</h3>
              <p>Your relative collected coins or jewelry and you're not sure what's valuable? We'll evaluate everything and explain what you have.</p>
            </div>

            <div class="scenario fade-in">
              <div class="scenario-icon">🏠</div>
              <h3>Estate Cleanout</h3>
              <p>Found old coins, jewelry, or paper money while cleaning out a house? Bring it all in - we'll sort through everything.</p>
            </div>

            <div class="scenario fade-in">
              <div class="scenario-icon">❓</div>
              <h3>Not Sure If It's Real</h3>
              <p>Wondering if that gold chain or old coin is authentic? Our experts use professional testing equipment to verify authenticity.</p>
            </div>
          </div>
          
          <div class="text-center mt-8 fade-in">
            <h3>We Make It Simple</h3>
            <p>No appointment needed • Free evaluation • No pressure to sell</p>
            <a href="tel:+12035550123" class="btn btn-primary btn-large">Call (203) 555-0123 Now</a>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="simple-process fade-in">
            <h2>How It Works</h2>
            <div class="process-steps">
              <div class="step">
                <div class="step-number">1</div>
                <h3>Bring Items</h3>
                <p>Walk in with your items</p>
              </div>
              <div class="step">
                <div class="step-number">2</div>
                <h3>We Test</h3>
                <p>Professional evaluation</p>
              </div>
              <div class="step">
                <div class="step-number">3</div>
                <h3>Get Offer</h3>
                <p>Fair market price</p>
              </div>
              <div class="step">
                <div class="step-number">4</div>
                <h3>Get Paid</h3>
                <p>Cash on the spot</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="final-cta">
        <div class="container">
          <div class="cta-content fade-in">
            <h2>Ready to Get Cash for Your Items?</h2>
            <p>Call now or visit our New Haven location</p>
            <div class="cta-buttons">
              <a href="tel:+12035550123" class="btn btn-primary btn-large">📞 (203) 555-0123</a>
              <a href="/contact" class="btn btn-secondary btn-large" data-route="/contact">Visit Store</a>
            </div>
            <div class="store-hours">
              <p><strong>123 Chapel Street, New Haven, CT</strong></p>
              <p>Mon-Fri 10AM-6PM • Sat 10AM-5PM</p>
            </div>
          </div>
        </div>
      </section>
    `
  }

  async init() {
    const animationController = new (await import('../js/animations.js')).AnimationController()
    animationController.refresh()
  }
}