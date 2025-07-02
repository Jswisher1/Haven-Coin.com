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

      <section class="section">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Complete Numismatic & Jewelry Services</h2>
            <p>Expert services for collectors, investors, and jewelry enthusiasts</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card large fade-in">
              <div class="service-icon">🪙</div>
              <h3>Coin Services</h3>
              <p>Complete numismatic services for collectors and investors of all levels.</p>
              <ul>
                <li>Rare coin sales and acquisitions</li>
                <li>Professional authentication and verification</li>
                <li>Coin grading consultation and submission</li>
                <li>Portfolio management and diversification</li>
                <li>Market analysis and investment guidance</li>
                <li>Estate coin collection evaluation</li>
                <li>Numismatic education and consulting</li>
                <li>Coin show representation services</li>
              </ul>
            </div>

            <div class="service-card large fade-in">
              <div class="service-icon">💎</div>
              <h3>Jewelry Services</h3>
              <p>Expert jewelry services from design to maintenance and everything in between.</p>
              <ul>
                <li>Custom jewelry design and creation</li>
                <li>Jewelry repair and restoration</li>
                <li>Ring sizing and adjustments</li>
                <li>Stone setting and replacement</li>
                <li>Professional cleaning and polishing</li>
                <li>Antique jewelry restoration</li>
                <li>Watch repair and maintenance</li>
                <li>Jewelry redesign and modernization</li>
              </ul>
            </div>

            <div class="service-card large fade-in">
              <div class="service-icon">⚖️</div>
              <h3>Precious Metals</h3>
              <p>Precious metals trading and investment services with transparent pricing.</p>
              <ul>
                <li>Gold, silver, platinum buying and selling</li>
                <li>Bullion and coin investments</li>
                <li>Market price consultation and analysis</li>
                <li>Portfolio diversification advice</li>
                <li>Secure storage recommendations</li>
                <li>IRA-eligible precious metals</li>
                <li>Scrap gold and silver evaluation</li>
                <li>Precious metals testing and verification</li>
              </ul>
            </div>

            <div class="service-card large fade-in">
              <div class="service-icon">🔍</div>
              <h3>Appraisal Services</h3>
              <p>Certified professional appraisals for all your valuation needs.</p>
              <ul>
                <li>Insurance appraisals with detailed documentation</li>
                <li>Estate valuations for probate and planning</li>
                <li>Fair market value assessments</li>
                <li>Divorce and legal separation valuations</li>
                <li>Charitable donation appraisals</li>
                <li>Damage claims and loss documentation</li>
                <li>Collection inventory and cataloging</li>
                <li>Expert witness testimony services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="section" style="background: var(--gray-50);">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Our Process</h2>
            <p>How we ensure the highest quality service for every client</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card fade-in">
              <div class="service-icon">1️⃣</div>
              <h3>Initial Consultation</h3>
              <p>We begin with a thorough consultation to understand your specific needs, whether you're buying, selling, or seeking appraisal services. Our experts listen carefully to your goals and provide honest, professional guidance.</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">2️⃣</div>
              <h3>Expert Evaluation</h3>
              <p>Our certified professionals conduct detailed evaluations using state-of-the-art technology and decades of experience. We examine authenticity, condition, rarity, and market factors to provide accurate assessments.</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">3️⃣</div>
              <h3>Detailed Documentation</h3>
              <p>We provide comprehensive documentation including certificates, detailed appraisals, high-resolution photography, and complete provenance information for your records and peace of mind.</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">4️⃣</div>
              <h3>Ongoing Support</h3>
              <p>Our relationship doesn't end with the transaction. We provide ongoing support, market updates, maintenance reminders, and are always available to answer questions about your collection or jewelry.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Specialized Services</h2>
            <p>Additional expert services for discerning clients</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card fade-in">
              <div class="service-icon">🏛️</div>
              <h3>Estate Services</h3>
              <p><strong>Complete Estate Evaluation:</strong> Comprehensive assessment of entire coin and jewelry collections.</p>
              <p><strong>Liquidation Services:</strong> Professional assistance with selling inherited collections.</p>
              <p><strong>Probate Support:</strong> Expert testimony and documentation for legal proceedings.</p>
              <p><strong>Family Distribution:</strong> Fair division of collections among heirs with detailed valuations.</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">🎓</div>
              <h3>Educational Services</h3>
              <p><strong>Collecting Seminars:</strong> Regular educational seminars on coin collecting and jewelry care.</p>
              <p><strong>Private Consultations:</strong> One-on-one education sessions tailored to your interests.</p>
              <p><strong>Market Analysis:</strong> Detailed reports on market trends and investment opportunities.</p>
              <p><strong>Authentication Training:</strong> Learn to identify authentic pieces and avoid counterfeits.</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">🔒</div>
              <h3>Security & Storage</h3>
              <p><strong>Storage Consultation:</strong> Advice on proper storage methods and security measures.</p>
              <p><strong>Insurance Guidance:</strong> Help with insurance coverage and claim documentation.</p>
              <p><strong>Safe Deposit Recommendations:</strong> Guidance on secure storage options in the New Haven area.</p>
              <p><strong>Inventory Management:</strong> Digital cataloging and inventory tracking systems.</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">🌐</div>
              <h3>Online Services</h3>
              <p><strong>Virtual Consultations:</strong> Remote consultations via video call for distant clients.</p>
              <p><strong>Digital Appraisals:</strong> Preliminary evaluations using high-quality photographs.</p>
              <p><strong>Market Updates:</strong> Regular email updates on market conditions and opportunities.</p>
              <p><strong>Online Inventory:</strong> Access to our current inventory through our secure portal.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section" style="background: var(--gray-50);">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Professional Certifications</h2>
            <p>Our credentials ensure you receive expert service and accurate evaluations</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card fade-in">
              <h4>American Numismatic Association</h4>
              <p><strong>Life Member #LM-5847</strong></p>
              <p>The ANA is the largest numismatic organization in the world, promoting the study and collection of coins and related items.</p>
            </div>

            <div class="service-card fade-in">
              <h4>Gemological Institute of America</h4>
              <p><strong>Graduate Gemologist</strong></p>
              <p>GIA is the world's foremost authority on diamonds, colored stones, and pearls, setting the standards for gemstone evaluation.</p>
            </div>

            <div class="service-card fade-in">
              <h4>American Society of Appraisers</h4>
              <p><strong>Certified Appraiser</strong></p>
              <p>ASA is the premier appraisal organization, ensuring the highest standards of professional appraisal practice.</p>
            </div>

            <div class="service-card fade-in">
              <h4>Professional Numismatists Guild</h4>
              <p><strong>Member in Good Standing</strong></p>
              <p>PNG is a nonprofit organization of rare coin and paper money dealers dedicated to ethical business practices.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Service Areas</h2>
            <p>We proudly serve clients throughout Connecticut and beyond</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card fade-in">
              <div class="service-icon">🏢</div>
              <h3>New Haven County</h3>
              <p>Our primary service area includes New Haven, West Haven, East Haven, Hamden, North Haven, Branford, Guilford, Madison, and surrounding communities.</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">🌎</div>
              <h3>Connecticut Statewide</h3>
              <p>We serve clients throughout Connecticut, including Hartford, Fairfield, Litchfield, Middlesex, New London, Tolland, and Windham counties.</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">🚗</div>
              <h3>Regional Services</h3>
              <p>For significant collections or special circumstances, we provide services throughout New England, New York, and New Jersey.</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">✈️</div>
              <h3>National Consultations</h3>
              <p>Virtual consultations and specialized services are available to clients nationwide through our secure online platform.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section">
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

  async init() {
    // Initialize page-specific functionality
    const animationController = new (await import('../js/animations.js')).AnimationController()
    animationController.refresh()
  }
}