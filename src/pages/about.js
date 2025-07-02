export default class AboutPage {
  render() {
    return `
      <section class="page-hero">
        <div class="container">
          <div class="page-hero-content fade-in">
            <h1>About Haven Coin & Jewelry</h1>
            <p>New Haven's trusted coin and jewelry experts since 2003</p>
          </div>
        </div>
      </section>

      <section class="story-section">
        <div class="container">
          <div class="story-content">
            <div class="story-text fade-in">
              <h2>Our Story</h2>
              <p>Haven Coin & Jewelry was founded in 2003 by Michael and Sarah Thompson, lifelong residents of New Haven with a shared passion for numismatics and fine jewelry. What started as a small coin shop has grown into Connecticut's premier destination for collectors and jewelry enthusiasts.</p>
              
              <p>Our journey began when Michael, a former bank executive, discovered his love for coin collecting during his travels. Sarah, with her background in gemology, brought expertise in fine jewelry and precious stones. Together, they created a unique business that combines the historical fascination of coins with the timeless beauty of jewelry.</p>
              
              <p>Today, Haven Coin & Jewelry serves customers from across New England, offering everything from ancient Roman coins to contemporary engagement rings. Our reputation for authenticity, fair pricing, and exceptional service has made us a cornerstone of New Haven's downtown business district.</p>
            </div>
            
            <div class="story-image fade-in">
              <img src="https://images.pexels.com/photos/1232594/pexels-photo-1232594.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" alt="Haven Coin & Jewelry founders">
            </div>
          </div>
        </div>
      </section>

      <section class="team-section">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Meet Our Team</h2>
            <p>Experienced professionals dedicated to serving your numismatic and jewelry needs</p>
          </div>
          
          <div class="team-grid">
            <div class="team-member fade-in">
              <div class="member-image">
                <img src="https://images.pexels.com/photos/1232594/pexels-photo-1232594.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" alt="Michael Thompson">
              </div>
              <div class="member-info">
                <h3>Michael Thompson</h3>
                <p class="member-title">Owner & Numismatist</p>
                <p class="member-credentials">ANA Life Member #LM-5847</p>
                <p>Specializes in U.S. coins, world coins, and precious metals. Over 25 years of collecting and dealing experience.</p>
              </div>
            </div>

            <div class="team-member fade-in">
              <div class="member-image">
                <img src="https://images.pexels.com/photos/1232594/pexels-photo-1232594.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" alt="Sarah Thompson">
              </div>
              <div class="member-info">
                <h3>Sarah Thompson</h3>
                <p class="member-title">Owner & Gemologist</p>
                <p class="member-credentials">GIA Graduate Gemologist</p>
                <p>Expert in fine jewelry, diamonds, and colored gemstones. Certified jewelry appraiser with 20+ years experience.</p>
              </div>
            </div>

            <div class="team-member fade-in">
              <div class="member-image">
                <img src="https://images.pexels.com/photos/1232594/pexels-photo-1232594.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" alt="James Rodriguez">
              </div>
              <div class="member-info">
                <h3>James Rodriguez</h3>
                <p class="member-title">Master Jeweler</p>
                <p class="member-credentials">Bench Jeweler Certified</p>
                <p>Specializes in custom jewelry design, repairs, and restoration. 15 years of craftsmanship excellence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="values-section">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Our Values</h2>
            <p>The principles that guide everything we do</p>
          </div>
          
          <div class="values-grid">
            <div class="value-card fade-in">
              <div class="value-icon">🤝</div>
              <h3>Trust & Integrity</h3>
              <p>We build lasting relationships through honest dealings, transparent pricing, and reliable service. Your trust is our most valuable asset.</p>
            </div>

            <div class="value-card fade-in">
              <div class="value-icon">🎓</div>
              <h3>Education & Expertise</h3>
              <p>We believe in sharing knowledge. Whether you're a beginner or expert, we're here to educate and guide you in your collecting journey.</p>
            </div>

            <div class="value-card fade-in">
              <div class="value-icon">🌟</div>
              <h3>Quality & Authenticity</h3>
              <p>Every item in our inventory is carefully selected and authenticated. We stand behind the quality and authenticity of everything we sell.</p>
            </div>

            <div class="value-card fade-in">
              <div class="value-icon">🏘️</div>
              <h3>Community Connection</h3>
              <p>As a local New Haven business, we're committed to supporting our community and contributing to the city's economic vitality.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="about-cta">
        <div class="container">
          <div class="cta-content fade-in">
            <h2>Experience the Difference</h2>
            <p>Visit our showroom and discover why we're New Haven's most trusted coin and jewelry destination</p>
            <div class="cta-buttons">
              <a href="/contact" class="btn btn-primary" data-route="/contact">Visit Our Store</a>
              <a href="/services" class="btn btn-secondary" data-route="/services">Our Services</a>
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