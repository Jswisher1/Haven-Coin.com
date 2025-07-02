export default class JewelryPage {
  render() {
    return `
      <section class="page-hero">
        <div class="container">
          <div class="page-hero-content fade-in">
            <h1>Fine Jewelry & Custom Design</h1>
            <p>Exquisite jewelry pieces crafted with precision and passion</p>
          </div>
        </div>
      </section>

      <section class="jewelry-categories">
        <div class="container">
          <div class="categories-grid">
            <div class="category-card fade-in">
              <div class="category-image">
                <img src="https://images.pexels.com/photos/1232594/pexels-photo-1232594.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" alt="Engagement Rings">
              </div>
              <div class="category-content">
                <h3>Engagement Rings</h3>
                <p>Stunning engagement rings featuring certified diamonds and precious gemstones</p>
                <ul>
                  <li>Solitaire Settings</li>
                  <li>Halo Designs</li>
                  <li>Vintage Styles</li>
                  <li>Three-Stone Rings</li>
                  <li>Custom Creations</li>
                </ul>
              </div>
            </div>

            <div class="category-card fade-in">
              <div class="category-image">
                <img src="https://images.pexels.com/photos/1232594/pexels-photo-1232594.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" alt="Wedding Bands">
              </div>
              <div class="category-content">
                <h3>Wedding Bands</h3>
                <p>Beautiful wedding bands in gold, platinum, and alternative metals</p>
                <ul>
                  <li>Classic Gold Bands</li>
                  <li>Platinum Collections</li>
                  <li>Diamond Eternity Bands</li>
                  <li>Matching Sets</li>
                  <li>Engraved Options</li>
                </ul>
              </div>
            </div>

            <div class="category-card fade-in">
              <div class="category-image">
                <img src="https://images.pexels.com/photos/1232594/pexels-photo-1232594.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" alt="Necklaces">
              </div>
              <div class="category-content">
                <h3>Necklaces & Pendants</h3>
                <p>Elegant necklaces and pendants for every occasion and style</p>
                <ul>
                  <li>Diamond Pendants</li>
                  <li>Pearl Necklaces</li>
                  <li>Gold Chains</li>
                  <li>Gemstone Pieces</li>
                  <li>Statement Necklaces</li>
                </ul>
              </div>
            </div>

            <div class="category-card fade-in">
              <div class="category-image">
                <img src="https://images.pexels.com/photos/1232594/pexels-photo-1232594.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" alt="Estate Jewelry">
              </div>
              <div class="category-content">
                <h3>Estate & Vintage</h3>
                <p>Carefully curated estate and vintage jewelry with historical significance</p>
                <ul>
                  <li>Art Deco Pieces</li>
                  <li>Victorian Jewelry</li>
                  <li>Mid-Century Modern</li>
                  <li>Antique Brooches</li>
                  <li>Vintage Watches</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="custom-design">
        <div class="container">
          <div class="custom-content">
            <div class="custom-text fade-in">
              <h2>Custom Jewelry Design</h2>
              <p>Bring your vision to life with our custom jewelry design services. Our master jewelers work closely with you to create unique, personalized pieces that tell your story.</p>
              
              <div class="process-steps">
                <div class="step">
                  <div class="step-number">1</div>
                  <div class="step-content">
                    <h4>Consultation</h4>
                    <p>Discuss your vision, style preferences, and budget</p>
                  </div>
                </div>
                <div class="step">
                  <div class="step-number">2</div>
                  <div class="step-content">
                    <h4>Design</h4>
                    <p>Create detailed sketches and 3D renderings</p>
                  </div>
                </div>
                <div class="step">
                  <div class="step-number">3</div>
                  <div class="step-content">
                    <h4>Crafting</h4>
                    <p>Expert craftsmanship brings your design to life</p>
                  </div>
                </div>
                <div class="step">
                  <div class="step-number">4</div>
                  <div class="step-content">
                    <h4>Delivery</h4>
                    <p>Present your finished, one-of-a-kind piece</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div class="custom-image fade-in">
              <img src="https://images.pexels.com/photos/1232594/pexels-photo-1232594.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" alt="Custom jewelry design process">
            </div>
          </div>
        </div>
      </section>

      <section class="jewelry-services">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Jewelry Services</h2>
            <p>Complete jewelry care and maintenance services</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card fade-in">
              <div class="service-icon">🔧</div>
              <h3>Repairs</h3>
              <p>Expert jewelry repair services including ring sizing, chain repair, and stone setting</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">✨</div>
              <h3>Restoration</h3>
              <p>Antique jewelry restoration and refinishing to bring pieces back to their original beauty</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">🧽</div>
              <h3>Cleaning</h3>
              <p>Professional ultrasonic cleaning and polishing services</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">✍️</div>
              <h3>Engraving</h3>
              <p>Custom engraving services for special occasions and personalization</p>
            </div>
          </div>
        </div>
      </section>

      <section class="jewelry-cta">
        <div class="container">
          <div class="cta-content fade-in">
            <h2>Find Your Perfect Piece</h2>
            <p>Discover our collection or create something uniquely yours</p>
            <div class="cta-buttons">
              <a href="/contact" class="btn btn-primary" data-route="/contact">Schedule Consultation</a>
              <a href="/services" class="btn btn-secondary" data-route="/services">View Services</a>
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