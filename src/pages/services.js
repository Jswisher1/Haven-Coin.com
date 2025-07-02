export default class ServicesPage {
  render() {
    return `
      <section class="page-hero">
        <div class="container">
          <div class="page-hero-content fade-in">
            <h1>Our Services</h1>
            <p>Comprehensive coin and jewelry services in New Haven, Connecticut</p>
          </div>
        </div>
      </section>

      <section class="services-overview">
        <div class="container">
          <div class="services-grid">
            <div class="service-card large fade-in">
              <div class="service-icon">🪙</div>
              <h3>Coin Services</h3>
              <p>Complete numismatic services for collectors and investors</p>
              <ul>
                <li>Rare coin sales and acquisitions</li>
                <li>Professional authentication</li>
                <li>Coin grading consultation</li>
                <li>Portfolio management</li>
                <li>Market analysis and trends</li>
              </ul>
            </div>

            <div class="service-card large fade-in">
              <div class="service-icon">💎</div>
              <h3>Jewelry Services</h3>
              <p>Expert jewelry services from design to maintenance</p>
              <ul>
                <li>Custom jewelry design</li>
                <li>Jewelry repair and restoration</li>
                <li>Ring sizing and adjustments</li>
                <li>Stone setting and replacement</li>
                <li>Professional cleaning and polishing</li>
              </ul>
            </div>

            <div class="service-card large fade-in">
              <div class="service-icon">⚖️</div>
              <h3>Precious Metals</h3>
              <p>Precious metals trading and investment services</p>
              <ul>
                <li>Gold, silver, platinum buying/selling</li>
                <li>Bullion and coin investments</li>
                <li>Market price consultation</li>
                <li>Portfolio diversification advice</li>
                <li>Secure storage recommendations</li>
              </ul>
            </div>

            <div class="service-card large fade-in">
              <div class="service-icon">🔍</div>
              <h3>Appraisal Services</h3>
              <p>Certified professional appraisals for all your needs</p>
              <ul>
                <li>Insurance appraisals</li>
                <li>Estate valuations</li>
                <li>Fair market value assessments</li>
                <li>Probate and legal documentation</li>
                <li>Detailed written reports</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="process-section">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Our Process</h2>
            <p>How we ensure the highest quality service for every client</p>
          </div>
          
          <div class="process-timeline">
            <div class="timeline-item fade-in">
              <div class="timeline-icon">1</div>
              <div class="timeline-content">
                <h3>Consultation</h3>
                <p>We begin with a thorough consultation to understand your needs, whether you're buying, selling, or seeking appraisal services.</p>
              </div>
            </div>

            <div class="timeline-item fade-in">
              <div class="timeline-icon">2</div>
              <div class="timeline-content">
                <h3>Evaluation</h3>
                <p>Our experts conduct detailed evaluations using the latest technology and decades of experience in numismatics and gemology.</p>
              </div>
            </div>

            <div class="timeline-item fade-in">
              <div class="timeline-icon">3</div>
              <div class="timeline-content">
                <h3>Documentation</h3>
                <p>We provide comprehensive documentation including certificates, appraisals, and detailed reports for your records.</p>
              </div>
            </div>

            <div class="timeline-item fade-in">
              <div class="timeline-icon">4</div>
              <div class="timeline-content">
                <h3>Follow-up</h3>
                <p>Our relationship doesn't end with the transaction. We provide ongoing support and market updates to our valued clients.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="certifications">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Professional Certifications</h2>
            <p>Our credentials ensure you receive expert service and accurate evaluations</p>
          </div>
          
          <div class="cert-grid">
            <div class="cert-card fade-in">
              <h4>American Numismatic Association</h4>
              <p>Life Member #LM-5847</p>
            </div>

            <div class="cert-card fade-in">
              <h4>Gemological Institute of America</h4>
              <p>Graduate Gemologist</p>
            </div>

            <div class="cert-card fade-in">
              <h4>American Society of Appraisers</h4>
              <p>Certified Appraiser</p>
            </div>

            <div class="cert-card fade-in">
              <h4>Professional Numismatists Guild</h4>
              <p>Member in Good Standing</p>
            </div>
          </div>
        </div>
      </section>

      <section class="services-cta">
        <div class="container">
          <div class="cta-content fade-in">
            <h2>Ready to Get Started?</h2>
            <p>Contact us today to discuss your coin and jewelry needs</p>
            <div class="cta-buttons">
              <a href="/contact" class="btn btn-primary" data-route="/contact">Schedule Consultation</a>
              <a href="tel:+12035550123" class="btn btn-secondary">Call (203) 555-0123</a>
            </div>
          </div>
        </div>
      </section>
    `
  }

  init() {
    // Initialize page-specific functionality
    const animationController = new (await import('../js/animations.js')).AnimationController()
    animationController.refresh()
  }
}