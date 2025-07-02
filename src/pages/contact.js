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
            </div>
            
            <div class="contact-form-container fade-in">
              <h3>Send Us a Message</h3>
              <p>Whether you have questions about our inventory, need an appraisal, or want to sell items, we're here to help.</p>
              
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
                  <input type="tel" id="phone" name="phone">
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
                    <option value="other">Other inquiry</option>
                  </select>
                </div>
                
                <div class="form-group">
                  <label for="message">Message *</label>
                  <textarea id="message" name="message" placeholder="Please describe what you're looking for, items you'd like to sell, or any questions you have. The more details you provide, the better we can assist you." required></textarea>
                </div>
                
                <button type="submit" class="submit-button">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section class="map-section">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Find Our Store</h2>
            <p>Conveniently located in downtown New Haven</p>
          </div>
          
          <div class="map-container fade-in">
            <div class="map-placeholder">
              <div class="map-content">
                <div class="map-icon">🗺️</div>
                <p><strong>Interactive Map Coming Soon</strong></p>
                <p>123 Chapel Street, New Haven, CT 06510</p>
                <p>Near the intersection of Chapel and State Streets</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="directions-section">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Getting Here</h2>
            <p>Multiple convenient ways to reach our store</p>
          </div>
          
          <div class="directions-grid">
            <div class="direction-card fade-in">
              <div class="direction-icon">🚗</div>
              <h3>By Car</h3>
              <p><strong>From I-95:</strong> Take Exit 47 (Hamilton Street). Follow signs to downtown New Haven.</p>
              <p><strong>From I-91:</strong> Take Exit 3 (Trumbull Street). Head east toward downtown.</p>
              <p><strong>Parking:</strong> Street parking and nearby parking garages available.</p>
            </div>

            <div class="direction-card fade-in">
              <div class="direction-icon">🚌</div>
              <h3>Public Transportation</h3>
              <p><strong>CT Transit:</strong> Multiple bus routes serve Chapel Street.</p>
              <p><strong>Metro-North:</strong> New Haven Union Station is 0.5 miles away.</p>
              <p><strong>Amtrak:</strong> New Haven Station connects to major Northeast cities.</p>
            </div>

            <div class="direction-card fade-in">
              <div class="direction-icon">🚶</div>
              <h3>Walking</h3>
              <p><strong>From Yale:</strong> 5-minute walk from Yale campus.</p>
              <p><strong>Downtown:</strong> Central location near shops and restaurants.</p>
              <p><strong>Accessibility:</strong> Street-level entrance, wheelchair accessible.</p>
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