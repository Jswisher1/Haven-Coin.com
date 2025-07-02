export default class ContactPage {
  render() {
    return `
      <section class="page-hero">
        <div class="container">
          <div class="page-hero-content fade-in">
            <h1>Contact Us</h1>
            <p>Visit our New Haven showroom or get in touch today</p>
          </div>
        </div>
      </section>

      <section class="contact-main">
        <div class="container">
          <div class="contact-grid">
            <div class="contact-info fade-in">
              <h3>Store Information</h3>
              
              <div class="contact-item">
                <div class="contact-icon">📍</div>
                <div>
                  <strong>Address</strong><br>
                  123 Chapel Street<br>
                  New Haven, CT 06510<br>
                  <small>Located in the heart of downtown New Haven, near Yale University</small>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">📞</div>
                <div>
                  <strong>Phone</strong><br>
                  <a href="tel:+12035550123">(203) 555-0123</a><br>
                  <small>Call for appointments or questions</small>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">✉️</div>
                <div>
                  <strong>Email</strong><br>
                  <a href="mailto:info@haven-coin.com">info@haven-coin.com</a><br>
                  <small>We respond within 24 hours</small>
                </div>
              </div>
              
              <div class="contact-item">
                <div class="contact-icon">🕒</div>
                <div>
                  <strong>Store Hours</strong><br>
                  Monday - Friday: 10:00 AM - 6:00 PM<br>
                  Saturday: 10:00 AM - 5:00 PM<br>
                  Sunday: Closed<br>
                  <small>Extended hours by appointment</small>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">🚗</div>
                <div>
                  <strong>Parking</strong><br>
                  Street parking available<br>
                  Chapel Square Mall parking garage<br>
                  <small>Validated parking for customers</small>
                </div>
              </div>

              <div class="contact-item">
                <div class="contact-icon">🏛️</div>
                <div>
                  <strong>Nearby Landmarks</strong><br>
                  Yale University (2 blocks)<br>
                  New Haven Green (3 blocks)<br>
                  <small>Easy walking distance from major attractions</small>
                </div>
              </div>
            </div>
            
            <div class="contact-form-container fade-in">
              <h3>Send Us a Message</h3>
              <p>Whether you have questions about our inventory, need an appraisal, or want to sell items, we're here to help. Please provide as much detail as possible so we can assist you effectively.</p>
              
              <form class="contact-form">
                <div class="form-row">
                  <div class="form-group">
                    <label for="name">Full Name *</label>
                    <input type="text" id="name" name="name" required>
                  </div>
                  
                  <div class="form-group">
                    <label for="email">Email Address *</label>
                    <input type="email" id="email" name="email" required>
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="phone">Phone Number</label>
                  <input type="tel" id="phone" name="phone" placeholder="(203) 555-0123">
                </div>

                <div class="form-group">
                  <label for="subject">Subject</label>
                  <select id="subject" name="subject">
                    <option value="">Select a topic</option>
                    <option value="buying">I want to buy coins/jewelry</option>
                    <option value="selling">I want to sell items</option>
                    <option value="appraisal">I need an appraisal</option>
                    <option value="repair">Jewelry repair service</option>
                    <option value="custom">Custom jewelry design</option>
                    <option value="consultation">Investment consultation</option>
                    <option value="education">Educational services</option>
                    <option value="other">Other inquiry</option>
                  </select>
                </div>
                
                <div class="form-group">
                  <label for="message">Message *</label>
                  <textarea id="message" name="message" placeholder="Please describe what you're looking for, items you'd like to sell, or any questions you have. Include details such as:

• For buying: What type of items interest you and your budget range
• For selling: Description of items, approximate age, and any documentation
• For appraisals: Purpose (insurance, estate, etc.) and number of items
• For repairs: Description of the issue and timeline needed

The more details you provide, the better we can assist you." required></textarea>
                </div>

                <div class="form-group">
                  <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: var(--text-light);">
                    <input type="checkbox" required style="width: auto;">
                    I agree to be contacted regarding my inquiry and understand that my information will be kept confidential.
                  </label>
                </div>
                
                <button type="submit" class="submit-button">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section class="section" style="background: var(--gray-50);">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Find Our Store</h2>
            <p>Conveniently located in downtown New Haven</p>
          </div>
          
          <div class="service-card fade-in" style="margin-top: 2rem; padding: 3rem; text-align: center;">
            <div style="font-size: 4rem; margin-bottom: 2rem;">🗺️</div>
            <h3 style="margin-bottom: 1rem;">Interactive Map Coming Soon</h3>
            <p style="margin-bottom: 1rem;"><strong>123 Chapel Street, New Haven, CT 06510</strong></p>
            <p style="margin-bottom: 2rem;">Near the intersection of Chapel and State Streets, in the heart of downtown New Haven</p>
            <div style="display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap;">
              <a href="https://maps.google.com/?q=123+Chapel+Street+New+Haven+CT" target="_blank" class="btn btn-primary">View on Google Maps</a>
              <a href="https://www.bing.com/maps?q=123+Chapel+Street+New+Haven+CT" target="_blank" class="btn btn-secondary">View on Bing Maps</a>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Getting Here</h2>
            <p>Multiple convenient ways to reach our store</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card fade-in">
              <div class="service-icon">🚗</div>
              <h3>By Car</h3>
              <p><strong>From I-95 North:</strong> Take Exit 47 (Hamilton Street). Follow signs to downtown New Haven. Turn right on Chapel Street.</p>
              <p><strong>From I-95 South:</strong> Take Exit 47 (Hamilton Street). Follow signs to downtown New Haven. Turn right on Chapel Street.</p>
              <p><strong>From I-91:</strong> Take Exit 3 (Trumbull Street). Head east toward downtown. Turn left on Chapel Street.</p>
              <p><strong>Parking:</strong> Street parking available. Chapel Square Mall parking garage offers validated parking for customers.</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">🚌</div>
              <h3>Public Transportation</h3>
              <p><strong>CT Transit:</strong> Multiple bus routes serve Chapel Street, including Routes 215, 224, 228, and 231.</p>
              <p><strong>Metro-North:</strong> New Haven Union Station is 0.5 miles away. Take a taxi or bus to Chapel Street.</p>
              <p><strong>Amtrak:</strong> New Haven Station connects to major Northeast cities including New York, Boston, and Washington DC.</p>
              <p><strong>Shore Line East:</strong> Commuter rail service connecting New Haven to eastern Connecticut towns.</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">🚶</div>
              <h3>Walking & Accessibility</h3>
              <p><strong>From Yale University:</strong> 5-minute walk from Yale campus. Head south on College Street to Chapel Street.</p>
              <p><strong>From New Haven Green:</strong> 3-minute walk. Head west on Chapel Street.</p>
              <p><strong>Downtown Hotels:</strong> Walking distance from most downtown hotels and accommodations.</p>
              <p><strong>Accessibility:</strong> Street-level entrance, wheelchair accessible, and ADA compliant facilities.</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">🏨</div>
              <h3>Nearby Amenities</h3>
              <p><strong>Dining:</strong> Numerous restaurants and cafes within walking distance for lunch or dinner.</p>
              <p><strong>Shopping:</strong> Chapel Street shopping district with boutiques and specialty stores.</p>
              <p><strong>Hotels:</strong> Several hotels nearby including Omni New Haven, Graduate New Haven, and Study at Yale.</p>
              <p><strong>Attractions:</strong> Yale University Art Gallery, Peabody Museum, and Shubert Theatre all nearby.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section" style="background: var(--gray-50);">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Frequently Asked Questions</h2>
            <p>Common questions about visiting our store and services</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card fade-in">
              <h4>Do I need an appointment?</h4>
              <p>Walk-ins are welcome during business hours. However, we recommend calling ahead for appraisals, custom design consultations, or if you're bringing a large collection for evaluation.</p>
            </div>

            <div class="service-card fade-in">
              <h4>What should I bring when selling items?</h4>
              <p>Bring the items you wish to sell along with any documentation you have (certificates, receipts, previous appraisals). Also bring a valid photo ID for our records.</p>
            </div>

            <div class="service-card fade-in">
              <h4>Do you offer free evaluations?</h4>
              <p>Yes, we provide free preliminary evaluations for items you're considering selling. Formal written appraisals for insurance or legal purposes have associated fees.</p>
            </div>

            <div class="service-card fade-in">
              <h4>What payment methods do you accept?</h4>
              <p>We accept cash, all major credit cards, personal checks (with proper ID), and bank transfers for larger transactions. We can also arrange financing for qualified purchases.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <div class="container">
          <div class="cta-content fade-in">
            <h2>Ready to Visit?</h2>
            <p>We look forward to meeting you and helping with all your coin and jewelry needs</p>
            <div class="cta-buttons">
              <a href="tel:+12035550123" class="btn btn-primary">Call (203) 555-0123</a>
              <a href="mailto:info@haven-coin.com" class="btn btn-secondary">Email Us</a>
            </div>
          </div>
        </div>
      </section>
    `
  }

  async init() {
    // Initialize contact form
    const ContactForm = (await import('../js/contact-form.js')).ContactForm
    const contactForm = new ContactForm()
    contactForm.bindForms()

    // Initialize animations
    const AnimationController = (await import('../js/animations.js')).AnimationController
    const animationController = new AnimationController()
    animationController.refresh()
  }
}