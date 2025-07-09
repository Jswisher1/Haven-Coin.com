export default class HomePage {
  render() {
    return `
      <section class="page-hero" style="height: 100vh; display: flex; align-items: center;">
        <div class="container">
          <div class="page-hero-content fade-in">
            <h1 style="font-size: clamp(3rem, 8vw, 5rem); margin-bottom: 2rem;">Haven Coin & Jewelry</h1>
            <p style="font-size: 1.5rem; margin-bottom: 3rem; max-width: 700px; margin-left: auto; margin-right: auto;">Connecticut's Most Trusted Precious Metals & Coin Dealer</p>
            <div class="cta-buttons">
              <a href="/what-we-buy" class="btn btn-primary btn-large" data-route="/what-we-buy">Sell to Us</a>
              <a href="/contact" class="btn btn-secondary btn-large" data-route="/contact">Get Quote</a>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="stats-grid fade-in">
            <div class="stat-card">
              <span class="stat-number">20+</span>
              <span class="stat-label">Years in Business</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">$50M+</span>
              <span class="stat-label">Purchased</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">15k+</span>
              <span class="stat-label">Transactions</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">A+</span>
              <span class="stat-label">BBB Rating</span>
            </div>
          </div>
        </div>
      </section>

      <section class="section" style="background: var(--surface);">
        <div class="container">
          <div class="text-center mb-8 fade-in">
            <h2>We Buy Precious Metals & Collectibles</h2>
            <p class="text-large text-muted">Immediate cash payment • Expert evaluation • Fair market pricing</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card fade-in">
              <div class="service-icon">AU</div>
              <h3>Gold & Silver</h3>
              <p>Bullion coins, bars, jewelry, dental gold, and scrap metals. We test and pay based on current spot prices.</p>
              <div class="mt-6">
                <a href="/what-we-buy/bullion" class="btn btn-primary" data-route="/what-we-buy/bullion">Current Prices</a>
              </div>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">$</div>
              <h3>Rare Coins</h3>
              <p>U.S. and world coins, Morgan dollars, gold coins, and certified pieces. Numismatic expertise since 2003.</p>
              <div class="mt-6">
                <a href="/what-we-buy/coins" class="btn btn-primary" data-route="/what-we-buy/coins">Coin Values</a>
              </div>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">◊</div>
              <h3>Jewelry & Watches</h3>
              <p>Diamond jewelry, luxury watches, estate pieces, and designer items. Professional gemological evaluation.</p>
              <div class="mt-6">
                <a href="/what-we-buy/jewelry" class="btn btn-primary" data-route="/what-we-buy/jewelry">Jewelry Guide</a>
              </div>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">₵</div>
              <h3>Paper Money</h3>
              <p>Collectible currency, large size notes, silver certificates, and error notes. Currency specialists on staff.</p>
              <div class="mt-6">
                <a href="/what-we-buy/currency" class="btn btn-primary" data-route="/what-we-buy/currency">Currency Info</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="text-center mb-8 fade-in">
            <h2>Why Sell to Haven Coin & Jewelry</h2>
          </div>
          
          <div class="grid grid-2">
            <div class="card fade-in">
              <h4 class="mb-4">Competitive Pricing</h4>
              <p>We pay top dollar because we're direct buyers with low overhead. Our prices are based on current market conditions and updated daily.</p>
            </div>

            <div class="card fade-in">
              <h4 class="mb-4">Expert Evaluation</h4>
              <p>Professional numismatists and gemologists with advanced testing equipment. Accurate assessments you can trust.</p>
            </div>

            <div class="card fade-in">
              <h4 class="mb-4">Immediate Payment</h4>
              <p>Cash on the spot for most transactions. No waiting, no delays. Walk in with items, walk out with money.</p>
            </div>

            <div class="card fade-in">
              <h4 class="mb-4">Established Reputation</h4>
              <p>Family-owned business serving Connecticut since 2003. Thousands of satisfied customers and A+ BBB rating.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section" style="background: var(--surface);">
        <div class="container">
          <div class="text-center mb-8 fade-in">
            <h2>Current Market Prices</h2>
            <p class="text-muted">Updated every 15 minutes during market hours</p>
          </div>
          
          <div class="stats-grid">
            <div class="stat-card fade-in">
              <span class="stat-number">$2,045</span>
              <span class="stat-label">Gold Spot</span>
              <div class="text-small text-accent mt-2">We pay 95-98%</div>
            </div>
            <div class="stat-card fade-in">
              <span class="stat-number">$24.85</span>
              <span class="stat-label">Silver Spot</span>
              <div class="text-small text-accent mt-2">We pay 92-96%</div>
            </div>
            <div class="stat-card fade-in">
              <span class="stat-number">$1,025</span>
              <span class="stat-label">Platinum Spot</span>
              <div class="text-small text-accent mt-2">We pay 90-95%</div>
            </div>
            <div class="stat-card fade-in">
              <span class="stat-number">$1,846</span>
              <span class="stat-label">Palladium Spot</span>
              <div class="text-small text-accent mt-2">We pay 88-93%</div>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <div class="container">
          <div class="cta-content fade-in">
            <h2>Ready to Sell?</h2>
            <p>Visit our New Haven location for immediate evaluation and payment</p>
            <div class="cta-buttons">
              <a href="/contact" class="btn btn-primary btn-large" data-route="/contact">Visit Store</a>
              <a href="tel:+12035550123" class="btn btn-secondary btn-large">(203) 555-0123</a>
            </div>
            <div style="margin-top: 2rem; font-size: 0.875rem; opacity: 0.8;">
              <p>123 Chapel Street, New Haven, CT • Mon-Fri 10AM-6PM, Sat 10AM-5PM</p>
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