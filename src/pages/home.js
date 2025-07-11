export default class HomePage {
  render() {
    return `
      <section class="page-hero">
        <div class="container">
          <div class="page-hero-content fade-in">
            <h1>Connecticut's Most Trusted Precious Metals Dealer</h1>
            <p>We buy gold, silver, platinum, rare coins, jewelry, and collectibles at the highest prices in Connecticut</p>
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
              <span class="stat-label">Items Purchased</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">15,000+</span>
              <span class="stat-label">Satisfied Customers</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">A+</span>
              <span class="stat-label">BBB Rating</span>
            </div>
          </div>
        </div>
      </section>

      <section class="section" style="background: var(--surface-secondary);">
        <div class="container">
          <div class="text-center mb-8 fade-in">
            <h2>Current Market Prices</h2>
            <p class="text-muted">Updated every 15 minutes during market hours</p>
          </div>
          
          <div class="stats-grid">
            <div class="stat-card fade-in">
              <span class="stat-number">$2,045</span>
              <span class="stat-label">Gold Spot Price</span>
              <div class="text-small text-accent mt-2 font-medium">We pay 95-98%</div>
            </div>
            <div class="stat-card fade-in">
              <span class="stat-number">$24.85</span>
              <span class="stat-label">Silver Spot Price</span>
              <div class="text-small text-accent mt-2 font-medium">We pay 92-96%</div>
            </div>
            <div class="stat-card fade-in">
              <span class="stat-number">$1,025</span>
              <span class="stat-label">Platinum Spot</span>
              <div class="text-small text-accent mt-2 font-medium">We pay 90-95%</div>
            </div>
            <div class="stat-card fade-in">
              <span class="stat-number">$1,846</span>
              <span class="stat-label">Palladium Spot</span>
              <div class="text-small text-accent mt-2 font-medium">We pay 88-93%</div>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="text-center mb-8 fade-in">
            <h2>What We Buy</h2>
            <p class="text-large text-muted">Immediate cash payment • Expert evaluation • Fair market pricing</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card fade-in">
              <div class="service-icon">AU</div>
              <h3>Gold & Silver Bullion</h3>
              <p>American Eagles, Maple Leafs, Krugerrands, bars, rounds, and all recognized bullion products.</p>
              <ul>
                <li>American Gold & Silver Eagles</li>
                <li>Canadian Maple Leafs</li>
                <li>Gold and silver bars (all sizes)</li>
                <li>90% silver coins (pre-1965)</li>
                <li>Platinum and palladium bullion</li>
              </ul>
              <div class="mt-6">
                <a href="/what-we-buy/bullion" class="btn btn-primary" data-route="/what-we-buy/bullion">View Details</a>
              </div>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">$</div>
              <h3>Rare Coins & Collectibles</h3>
              <p>Morgan dollars, Walking Liberty halves, gold coins, ancient coins, and certified numismatic pieces.</p>
              <ul>
                <li>Morgan & Peace silver dollars</li>
                <li>Pre-1933 U.S. gold coins</li>
                <li>Certified coins (PCGS, NGC)</li>
                <li>World coins and ancient coins</li>
                <li>Proof sets and mint sets</li>
              </ul>
              <div class="mt-6">
                <a href="/what-we-buy/coins" class="btn btn-primary" data-route="/what-we-buy/coins">View Details</a>
              </div>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">◊</div>
              <h3>Jewelry & Watches</h3>
              <p>Gold jewelry, diamond pieces, luxury watches, estate jewelry, and designer items.</p>
              <ul>
                <li>Gold jewelry (10k, 14k, 18k, 22k)</li>
                <li>Diamond jewelry and loose stones</li>
                <li>Luxury watches (Rolex, Omega, etc.)</li>
                <li>Estate and vintage jewelry</li>
                <li>Platinum and silver jewelry</li>
              </ul>
              <div class="mt-6">
                <a href="/what-we-buy/jewelry" class="btn btn-primary" data-route="/what-we-buy/jewelry">View Details</a>
              </div>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">₵</div>
              <h3>Paper Money & Currency</h3>
              <p>Large size notes, silver certificates, star notes, error currency, and collectible paper money.</p>
              <ul>
                <li>Large size U.S. notes (pre-1928)</li>
                <li>Silver certificates and gold certificates</li>
                <li>Star notes and error notes</li>
                <li>Confederate and obsolete currency</li>
                <li>Foreign currency and banknotes</li>
              </ul>
              <div class="mt-6">
                <a href="/what-we-buy/currency" class="btn btn-primary" data-route="/what-we-buy/currency">View Details</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section" style="background: var(--surface-secondary);">
        <div class="container">
          <div class="text-center mb-8 fade-in">
            <h2>Why Choose Haven Coin & Jewelry</h2>
          </div>
          
          <div class="grid grid-2">
            <div class="card fade-in">
              <h4 class="mb-4">Highest Payouts in Connecticut</h4>
              <p>We consistently pay more than our competitors because we're direct buyers with minimal overhead costs. Our prices are updated daily based on current market conditions.</p>
            </div>

            <div class="card fade-in">
              <h4 class="mb-4">Professional Evaluation</h4>
              <p>Certified numismatists and gemologists with decades of experience. We use advanced testing equipment including XRF analyzers and professional scales.</p>
            </div>

            <div class="card fade-in">
              <h4 class="mb-4">Immediate Payment</h4>
              <p>Cash on the spot for most transactions. No waiting periods, no delays. Walk in with items, walk out with money the same day.</p>
            </div>

            <div class="card fade-in">
              <h4 class="mb-4">Established Reputation</h4>
              <p>Family-owned business serving Connecticut since 2003. Thousands of satisfied customers and A+ Better Business Bureau rating.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="text-center mb-8 fade-in">
            <h2>Our Simple Process</h2>
          </div>
          
          <div class="process-grid">
            <div class="process-step fade-in">
              <div class="process-number">1</div>
              <h3>Bring Your Items</h3>
              <p>Walk in during business hours or call for an appointment</p>
            </div>

            <div class="process-step fade-in">
              <div class="process-number">2</div>
              <h3>Expert Evaluation</h3>
              <p>Professional testing and authentication using advanced equipment</p>
            </div>

            <div class="process-step fade-in">
              <div class="process-number">3</div>
              <h3>Receive Fair Offer</h3>
              <p>Competitive pricing based on current market values</p>
            </div>

            <div class="process-step fade-in">
              <div class="process-number">4</div>
              <h3>Get Paid Immediately</h3>
              <p>Cash or check payment on the spot - your choice</p>
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
              <a href="/contact" class="btn btn-primary btn-large" data-route="/contact">Visit Our Store</a>
              <a href="tel:+12035550123" class="btn btn-secondary btn-large">(203) 555-0123</a>
            </div>
            <div style="margin-top: 2rem; font-size: 0.875rem; opacity: 0.9;">
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