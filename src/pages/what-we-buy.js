export default class WhatWeBuyPage {
  render() {
    return `
      <section class="page-hero">
        <div class="container">
          <div class="page-hero-content fade-in">
            <h1>What We Buy</h1>
            <p>Immediate cash payment for precious metals, coins, jewelry, and collectibles</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="text-center mb-8 fade-in">
            <h2>We Purchase These Items Daily</h2>
            <p class="text-large text-muted">Professional evaluation • Fair market pricing • Immediate payment</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card fade-in">
              <div class="service-icon">AU</div>
              <h3>Gold & Silver Bullion</h3>
              <p>American Eagles, Maple Leafs, Krugerrands, bars, rounds, and all recognized bullion products.</p>
              <div class="mt-4">
                <div class="text-accent font-semibold">Gold: 95-98% of spot</div>
                <div class="text-accent font-semibold">Silver: 92-96% of spot</div>
              </div>
              <div class="mt-6">
                <a href="/what-we-buy/bullion" class="btn btn-primary" data-route="/what-we-buy/bullion">View Details</a>
              </div>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">$</div>
              <h3>Rare Coins</h3>
              <p>Morgan dollars, Walking Liberty halves, gold coins, ancient coins, and certified numismatic pieces.</p>
              <div class="mt-4">
                <div class="text-accent font-semibold">Key dates premium pricing</div>
                <div class="text-accent font-semibold">Certified coins welcomed</div>
              </div>
              <div class="mt-6">
                <a href="/what-we-buy/coins" class="btn btn-primary" data-route="/what-we-buy/coins">View Details</a>
              </div>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">◊</div>
              <h3>Jewelry & Watches</h3>
              <p>Gold jewelry, diamond pieces, luxury watches, estate jewelry, and designer items.</p>
              <div class="mt-4">
                <div class="text-accent font-semibold">GIA certified evaluation</div>
                <div class="text-accent font-semibold">Rolex, Omega, Cartier</div>
              </div>
              <div class="mt-6">
                <a href="/what-we-buy/jewelry" class="btn btn-primary" data-route="/what-we-buy/jewelry">View Details</a>
              </div>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">₵</div>
              <h3>Paper Money</h3>
              <p>Large size notes, silver certificates, star notes, error currency, and collectible paper money.</p>
              <div class="mt-4">
                <div class="text-accent font-semibold">Currency specialists</div>
                <div class="text-accent font-semibold">All conditions accepted</div>
              </div>
              <div class="mt-6">
                <a href="/what-we-buy/currency" class="btn btn-primary" data-route="/what-we-buy/currency">View Details</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="section" style="background: var(--surface);">
        <div class="container">
          <div class="text-center mb-8 fade-in">
            <h2>Our Buying Process</h2>
            <p class="text-large text-muted">Simple, fast, and transparent</p>
          </div>
          
          <div class="process-grid">
            <div class="process-step fade-in">
              <div class="process-number">1</div>
              <h3>Bring Items</h3>
              <p>Walk in during business hours or call for appointment</p>
            </div>

            <div class="process-step fade-in">
              <div class="process-number">2</div>
              <h3>Expert Testing</h3>
              <p>Professional evaluation using advanced equipment</p>
            </div>

            <div class="process-step fade-in">
              <div class="process-number">3</div>
              <h3>Fair Offer</h3>
              <p>Competitive pricing based on current market values</p>
            </div>

            <div class="process-step fade-in">
              <div class="process-number">4</div>
              <h3>Get Paid</h3>
              <p>Immediate cash payment or check - your choice</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="text-center mb-8 fade-in">
            <h2>Why Choose Haven Coin & Jewelry</h2>
          </div>
          
          <div class="grid grid-2">
            <div class="card fade-in">
              <h4 class="mb-4">Highest Payouts</h4>
              <p>We consistently pay more than our competitors because we're direct buyers with minimal overhead costs.</p>
            </div>

            <div class="card fade-in">
              <h4 class="mb-4">Professional Staff</h4>
              <p>Certified numismatists and gemologists with decades of experience and professional credentials.</p>
            </div>

            <div class="card fade-in">
              <h4 class="mb-4">Advanced Testing</h4>
              <p>XRF analyzers, electronic gold testers, and professional scales ensure accurate evaluations.</p>
            </div>

            <div class="card fade-in">
              <h4 class="mb-4">Established Business</h4>
              <p>Family-owned since 2003 with thousands of satisfied customers and A+ Better Business Bureau rating.</p>
            </div>

            <div class="card fade-in">
              <h4 class="mb-4">No Pressure Sales</h4>
              <p>Free evaluations with no obligation. Take time to consider our offers - we want repeat customers.</p>
            </div>

            <div class="card fade-in">
              <h4 class="mb-4">Secure Transactions</h4>
              <p>All transactions are confidential and properly documented. Safe, secure environment for all customers.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <div class="container">
          <div class="cta-content fade-in">
            <h2>Turn Your Items Into Cash Today</h2>
            <p>Professional evaluation and immediate payment</p>
            <div class="cta-buttons">
              <a href="/contact" class="btn btn-primary btn-large" data-route="/contact">Visit Our Store</a>
              <a href="tel:+12035550123" class="btn btn-secondary btn-large">Call (203) 555-0123</a>
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