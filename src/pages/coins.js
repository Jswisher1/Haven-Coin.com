export default class CoinsPage {
  render() {
    return `
      <section class="page-hero">
        <div class="container">
          <div class="page-hero-content fade-in">
            <h1>Rare Coins & Collectibles</h1>
            <p>Discover our extensive collection of rare and collectible coins from around the world</p>
          </div>
        </div>
      </section>

      <section class="coin-categories">
        <div class="container">
          <div class="categories-grid">
            <div class="category-card fade-in">
              <div class="category-image">
                <img src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" alt="US Coins">
              </div>
              <div class="category-content">
                <h3>U.S. Coins</h3>
                <p>Morgan silver dollars, Walking Liberty half dollars, Mercury dimes, and rare date coins</p>
                <ul>
                  <li>Morgan & Peace Silver Dollars</li>
                  <li>Walking Liberty Half Dollars</li>
                  <li>Mercury Dimes</li>
                  <li>Indian Head Pennies</li>
                  <li>Buffalo Nickels</li>
                </ul>
              </div>
            </div>

            <div class="category-card fade-in">
              <div class="category-image">
                <img src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" alt="World Coins">
              </div>
              <div class="category-content">
                <h3>World Coins</h3>
                <p>International currency from Europe, Asia, and the Americas spanning centuries</p>
                <ul>
                  <li>Ancient Roman & Greek Coins</li>
                  <li>British Sovereigns</li>
                  <li>Canadian Maple Leafs</li>
                  <li>Mexican Pesos</li>
                  <li>European Commemoratives</li>
                </ul>
              </div>
            </div>

            <div class="category-card fade-in">
              <div class="category-image">
                <img src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" alt="Gold Coins">
              </div>
              <div class="category-content">
                <h3>Gold Coins</h3>
                <p>Investment-grade gold coins and bullion from trusted mints worldwide</p>
                <ul>
                  <li>American Gold Eagles</li>
                  <li>Canadian Gold Maple Leafs</li>
                  <li>South African Krugerrands</li>
                  <li>Austrian Philharmonics</li>
                  <li>Chinese Gold Pandas</li>
                </ul>
              </div>
            </div>

            <div class="category-card fade-in">
              <div class="category-image">
                <img src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop" alt="Graded Coins">
              </div>
              <div class="category-content">
                <h3>Graded Coins</h3>
                <p>PCGS and NGC certified coins with guaranteed authenticity and condition</p>
                <ul>
                  <li>PCGS Certified Coins</li>
                  <li>NGC Graded Specimens</li>
                  <li>High-Grade Examples</li>
                  <li>Key Date Rarities</li>
                  <li>Proof Coins</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="coin-services">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Our Coin Services</h2>
            <p>Comprehensive numismatic services for collectors and investors</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card fade-in">
              <div class="service-icon">🔍</div>
              <h3>Authentication</h3>
              <p>Expert authentication services using the latest technology and decades of experience</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">📊</div>
              <h3>Appraisals</h3>
              <p>Professional coin appraisals for insurance, estate, or resale purposes</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">💰</div>
              <h3>Buying & Selling</h3>
              <p>Fair market prices for buying and selling coins with transparent evaluations</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">🎓</div>
              <h3>Education</h3>
              <p>Learn about coin collecting, grading, and market trends from our experts</p>
            </div>
          </div>
        </div>
      </section>

      <section class="coin-cta">
        <div class="container">
          <div class="cta-content fade-in">
            <h2>Start or Expand Your Collection Today</h2>
            <p>Whether you're a beginner or seasoned collector, we have the perfect coins for you</p>
            <div class="cta-buttons">
              <a href="/contact" class="btn btn-primary" data-route="/contact">Visit Our Store</a>
              <a href="/services" class="btn btn-secondary" data-route="/services">Learn More</a>
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