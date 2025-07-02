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

      <section class="section">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Our Jewelry Collections</h2>
            <p>From timeless classics to contemporary masterpieces</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card large fade-in">
              <div class="service-icon">💍</div>
              <h3>Engagement Rings</h3>
              <p>Create the perfect symbol of your love with our stunning engagement ring collection and custom design services.</p>
              <ul>
                <li>Classic Solitaire Settings</li>
                <li>Vintage-Inspired Halo Designs</li>
                <li>Three-Stone Anniversary Rings</li>
                <li>Art Deco & Victorian Styles</li>
                <li>Modern Tension Settings</li>
                <li>Custom CAD Designs</li>
                <li>Certified Diamond Selection</li>
                <li>Alternative Gemstone Options</li>
              </ul>
            </div>

            <div class="service-card large fade-in">
              <div class="service-icon">💒</div>
              <h3>Wedding Bands</h3>
              <p>Beautiful wedding bands to complement your engagement ring and symbolize your eternal commitment.</p>
              <ul>
                <li>Classic Gold Bands (14k, 18k)</li>
                <li>Platinum Wedding Sets</li>
                <li>Diamond Eternity Bands</li>
                <li>Matching Bridal Sets</li>
                <li>Men's Wedding Bands</li>
                <li>Alternative Metal Options</li>
                <li>Custom Engraving Services</li>
                <li>Vintage-Style Milgrain Details</li>
              </ul>
            </div>

            <div class="service-card large fade-in">
              <div class="service-icon">📿</div>
              <h3>Necklaces & Pendants</h3>
              <p>Elegant necklaces and pendants for every occasion, from everyday wear to special celebrations.</p>
              <ul>
                <li>Diamond Tennis Necklaces</li>
                <li>Pearl Strand Necklaces</li>
                <li>Gold Chain Collections</li>
                <li>Gemstone Pendants</li>
                <li>Religious & Spiritual Jewelry</li>
                <li>Statement Collar Necklaces</li>
                <li>Layering Chain Sets</li>
                <li>Custom Locket Designs</li>
              </ul>
            </div>

            <div class="service-card large fade-in">
              <div class="service-icon">👂</div>
              <h3>Earrings</h3>
              <p>From subtle studs to dramatic chandeliers, our earring collection offers styles for every taste.</p>
              <ul>
                <li>Diamond Stud Earrings</li>
                <li>Pearl Drop Earrings</li>
                <li>Gemstone Hoops</li>
                <li>Chandelier Earrings</li>
                <li>Vintage Clip-On Styles</li>
                <li>Modern Geometric Designs</li>
                <li>Convertible Day-to-Night Pieces</li>
                <li>Custom Matching Sets</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="section" style="background: var(--gray-50);">
        <div class="container">
          <div class="about-content">
            <div class="about-text fade-in">
              <h2>Custom Jewelry Design</h2>
              <p>Bring your vision to life with our comprehensive custom jewelry design services. Our master jewelers work closely with you to create unique, personalized pieces that tell your story and reflect your individual style.</p>
              
              <p>From initial concept to final creation, we guide you through every step of the design process. Using state-of-the-art CAD technology and traditional craftsmanship techniques, we ensure your custom piece exceeds your expectations.</p>
              
              <div class="process-steps" style="margin-top: 2rem;">
                <div class="service-card" style="margin-bottom: 1rem;">
                  <h4>1. Initial Consultation</h4>
                  <p>We begin with a detailed consultation to understand your vision, style preferences, budget, and timeline. We'll discuss design possibilities and show you examples of similar work.</p>
                </div>
                <div class="service-card" style="margin-bottom: 1rem;">
                  <h4>2. Design Development</h4>
                  <p>Our designers create detailed sketches and 3D CAD renderings, allowing you to visualize your piece from every angle before production begins.</p>
                </div>
                <div class="service-card" style="margin-bottom: 1rem;">
                  <h4>3. Material Selection</h4>
                  <p>Choose from our extensive selection of certified diamonds, precious gemstones, and high-quality metals to bring your design to life.</p>
                </div>
                <div class="service-card">
                  <h4>4. Expert Craftsmanship</h4>
                  <p>Our master jewelers handcraft your piece using time-honored techniques combined with modern precision tools, ensuring exceptional quality and durability.</p>
                </div>
              </div>
            </div>
            
            <div class="about-image fade-in">
              <img src="https://images.pexels.com/photos/1232594/pexels-photo-1232594.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" alt="Custom jewelry design process">
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Estate & Vintage Jewelry</h2>
            <p>Discover timeless pieces with rich history and exceptional craftsmanship</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card fade-in">
              <div class="service-icon">🎭</div>
              <h3>Art Deco Collection</h3>
              <p><strong>1920s-1930s:</strong> Geometric designs featuring bold lines, vibrant gemstones, and innovative settings that defined the Jazz Age aesthetic.</p>
              <p>Featuring pieces with emeralds, sapphires, and diamonds in platinum settings with distinctive angular motifs.</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">👑</div>
              <h3>Victorian Treasures</h3>
              <p><strong>1837-1901:</strong> Romantic and ornate pieces reflecting the elegance and sentimentality of the Victorian era.</p>
              <p>Including mourning jewelry, cameos, lockets, and intricate gold work with natural motifs and symbolic elements.</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">🌸</div>
              <h3>Edwardian Elegance</h3>
              <p><strong>1901-1915:</strong> Delicate, feminine designs featuring intricate filigree work and the newly popular platinum metal.</p>
              <p>Characterized by garland motifs, bow designs, and the extensive use of diamonds and pearls.</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">⌚</div>
              <h3>Vintage Timepieces</h3>
              <p><strong>Luxury Watches:</strong> Carefully curated collection of vintage and contemporary luxury watches from renowned manufacturers.</p>
              <p>Including Rolex, Omega, Cartier, and other prestigious brands with full authentication and service history.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section" style="background: var(--gray-50);">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Jewelry Services</h2>
            <p>Complete jewelry care and maintenance services</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card fade-in">
              <div class="service-icon">🔧</div>
              <h3>Repair Services</h3>
              <p><strong>Ring Sizing:</strong> Professional resizing for all ring types while maintaining structural integrity.</p>
              <p><strong>Stone Setting:</strong> Secure setting and replacement of loose or missing gemstones.</p>
              <p><strong>Chain Repair:</strong> Expert repair of broken chains, clasps, and links.</p>
              <p><strong>Prong Retipping:</strong> Restoration of worn prongs to secure valuable stones.</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">✨</div>
              <h3>Restoration Services</h3>
              <p><strong>Antique Restoration:</strong> Careful restoration of vintage and antique pieces to their original beauty.</p>
              <p><strong>Refinishing:</strong> Professional polishing and refinishing to remove scratches and restore luster.</p>
              <p><strong>Replating:</strong> Gold, silver, and rhodium plating services for worn pieces.</p>
              <p><strong>Pearl Restringing:</strong> Expert restringing of pearl necklaces and bracelets.</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">🧽</div>
              <h3>Cleaning & Maintenance</h3>
              <p><strong>Ultrasonic Cleaning:</strong> Deep cleaning using professional ultrasonic equipment.</p>
              <p><strong>Steam Cleaning:</strong> Gentle steam cleaning for delicate pieces and settings.</p>
              <p><strong>Polishing:</strong> Hand polishing to restore original shine and finish.</p>
              <p><strong>Inspection:</strong> Comprehensive inspection to identify potential issues before they become problems.</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">✍️</div>
              <h3>Engraving Services</h3>
              <p><strong>Hand Engraving:</strong> Traditional hand engraving for personalized messages and designs.</p>
              <p><strong>Machine Engraving:</strong> Precise machine engraving for consistent lettering and patterns.</p>
              <p><strong>Monogramming:</strong> Classic monogram designs for rings, pendants, and cufflinks.</p>
              <p><strong>Special Occasions:</strong> Custom engraving for weddings, anniversaries, and milestone celebrations.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Gemstone Education</h2>
            <p>Learn about the precious stones that make jewelry truly special</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card fade-in">
              <div class="service-icon">💎</div>
              <h3>Diamond Knowledge</h3>
              <p>Understanding the 4 Cs: Cut, Color, Clarity, and Carat weight. Learn how these factors affect beauty, rarity, and value in diamond selection.</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">🔴</div>
              <h3>Colored Gemstones</h3>
              <p>Explore the world of rubies, sapphires, emeralds, and other precious stones. Understand treatments, origins, and quality factors.</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">🔵</div>
              <h3>Certification & Grading</h3>
              <p>Learn about gemological certificates from GIA, AGL, and other respected laboratories. Understand what these documents mean for your purchase.</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">🛡️</div>
              <h3>Care & Protection</h3>
              <p>Proper care techniques to maintain your jewelry's beauty and value. Storage, cleaning, and insurance recommendations from our experts.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section">
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

  async init() {
    // Initialize page-specific functionality
    const animationController = new (await import('../js/animations.js')).AnimationController()
    animationController.refresh()
  }
}