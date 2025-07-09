export default class ContactPage {
  render() {
    return `
      <section class="page-hero">
        <div class="container">
          <div class="page-hero-content fade-in">
            <h1>Visit Our Store</h1>
            <p>Located in downtown New Haven • Free evaluations • Immediate payment</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="grid grid-2">
            <div class="card fade-in">
              <h3 class="mb-6">Store Information</h3>
              
              <div class="mb-6">
                <h4 class="mb-2">Address</h4>
                <p class="text-muted">123 Chapel Street<br>New Haven, CT 06510</p>
                <p class="text-small">Downtown location near Yale University</p>
              </div>
              
              <div class="mb-6">
                <h4 class="mb-2">Phone</h4>
                <p><a href="tel:+12035550123" class="text-accent font-semibold text-large">(203) 555-0123</a></p>
                <p class="text-small">Call for current prices and appointments</p>
              </div>
              
              <div class="mb-6">
                <h4 class="mb-2">Email</h4>
                <p><a href="mailto:info@haven-coin.com" class="text-accent">info@haven-coin.com</a></p>
                <p class="text-small">Send photos for preliminary evaluation</p>
              </div>
              
              <div class="mb-6">
                <h4 class="mb-2">Business Hours</h4>
                <p class="text-muted">
                  Monday - Friday: 10:00 AM - 6:00 PM<br>
                  Saturday: 10:00 AM - 5:00 PM<br>
                  Sunday: Closed
                </p>
                <p class="text-small">Extended hours by appointment for large collections</p>
              </div>

              <div class="mb-6">
                <h4 class="mb-2">Parking</h4>
                <p class="text-muted">Street parking available<br>Chapel Square Mall parking garage</p>
                <p class="text-small">Validated parking for customers</p>
              </div>
            </div>
            
            <div class="card fade-in">
              <h3 class="mb-4">Get a Quote</h3>
              <p class="mb-6 text-muted">Send us details about your items for a preliminary evaluation</p>
              
              <form class="contact-form">
                <div class="form-row">
                  <div class="form-group">
                    <label for="name">Name *</label>
                    <input type="text" id="name" name="name" required>
                  </div>
                  
                  <div class="form-group">
                    <label for="phone">Phone *</label>
                    <input type="tel" id="phone" name="phone" required>
                  </div>
                </div>
                
                <div class="form-group">
                  <label for="email">Email</label>
                  <input type="email" id="email" name="email">
                </div>

                <div class="form-group">
                  <label for="item-type">Item Type</label>
                  <select id="item-type" name="item-type">
                    <option value="">Select category</option>
                    <option value="gold-silver">Gold & Silver Bullion</option>
                    <option value="coins">Rare Coins</option>
                    <option value="jewelry">Jewelry & Watches</option>
                    <option value="currency">Paper Money</option>
                    <option value="mixed">Mixed Collection</option>
                    <option value="other">Other Items</option>
                  </select>
                </div>
                
                <div class="form-group">
                  <label for="description">Item Description *</label>
                  <textarea id="description" name="description" placeholder="Please describe your items in detail:

• Type and quantity of items
• Condition and any markings
• Approximate age if known
• Any certificates or documentation

The more details you provide, the better we can assist you." required></textarea>
                </div>

                <div class="form-group">
                  <label style="display: flex; align-items: center; gap: 0.5rem; font-size: 0.875rem; color: var(--text-light);">
                    <input type="checkbox" required style="width: auto;">
                    I understand this is a preliminary evaluation and final pricing requires in-person inspection.
                  </label>
                </div>
                
                <button type="submit" class="btn btn-primary btn-large" style="width: 100%;">Send Inquiry</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section class="section" style="background: var(--surface);">
        <div class="container">
          <div class="text-center mb-8 fade-in">
            <h2>What to Bring</h2>
          </div>
          
          <div class="grid grid-3">
            <div class="card card-compact fade-in">
              <h4 class="mb-2">Required</h4>
              <p class="text-small">Valid government-issued photo ID for all transactions</p>
            </div>

            <div class="card card-compact fade-in">
              <h4 class="mb-2">Helpful</h4>
              <p class="text-small">Original boxes, certificates, receipts, or previous appraisals</p>
            </div>

            <div class="card card-compact fade-in">
              <h4 class="mb-2">Large Collections</h4>
              <p class="text-small">Call ahead to schedule appointment and ensure adequate time</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="text-center mb-8 fade-in">
            <h2>Directions</h2>
          </div>
          
          <div class="grid grid-2">
            <div class="card fade-in">
              <h4 class="mb-4">From I-95</h4>
              <p class="text-small mb-2"><strong>North or South:</strong> Take Exit 47 (Hamilton Street)</p>
              <p class="text-small mb-2">Follow signs to downtown New Haven</p>
              <p class="text-small">Turn right on Chapel Street - we're on the right</p>
            </div>

            <div class="card fade-in">
              <h4 class="mb-4">From I-91</h4>
              <p class="text-small mb-2"><strong>North or South:</strong> Take Exit 3 (Trumbull Street)</p>
              <p class="text-small mb-2">Head east toward downtown</p>
              <p class="text-small">Turn left on Chapel Street - we're on the left</p>
            </div>

            <div class="card fade-in">
              <h4 class="mb-4">Public Transportation</h4>
              <p class="text-small mb-2"><strong>Metro-North:</strong> New Haven Union Station (0.5 miles)</p>
              <p class="text-small mb-2"><strong>CT Transit:</strong> Multiple bus routes serve Chapel Street</p>
              <p class="text-small"><strong>Amtrak:</strong> New Haven Station connects major Northeast cities</p>
            </div>

            <div class="card fade-in">
              <h4 class="mb-4">Nearby Landmarks</h4>
              <p class="text-small mb-2"><strong>Yale University:</strong> 2 blocks north</p>
              <p class="text-small mb-2"><strong>New Haven Green:</strong> 3 blocks east</p>
              <p class="text-small">Easy walking distance from downtown hotels</p>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <div class="container">
          <div class="cta-content fade-in">
            <h2>Ready to Sell?</h2>
            <p>Visit us today for expert evaluation and immediate payment</p>
            <div class="cta-buttons">
              <a href="tel:+12035550123" class="btn btn-primary btn-large">Call (203) 555-0123</a>
              <a href="mailto:info@haven-coin.com" class="btn btn-secondary btn-large">Email Us</a>
            </div>
            <div style="margin-top: 2rem; font-size: 0.875rem; opacity: 0.8;">
              <p>No appointment necessary • Free evaluations • Immediate cash payment</p>
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