export default class NotFoundPage {
  render() {
    return `
      <section class="error-page">
        <div class="container">
          <div class="error-content fade-in">
            <div class="error-icon">🔍</div>
            <h1>Page Not Found</h1>
            <p class="error-message">Sorry, we couldn't find the page you're looking for. The page may have been moved, deleted, or you may have entered an incorrect URL.</p>
            
            <div class="error-suggestions">
              <h3>Here are some helpful links:</h3>
              <div class="suggestion-grid">
                <div class="suggestion-card">
                  <div class="suggestion-icon">🏠</div>
                  <h4><a href="/" data-route="/">Home</a></h4>
                  <p>Return to our homepage to explore our services</p>
                </div>
                
                <div class="suggestion-card">
                  <div class="suggestion-icon">🪙</div>
                  <h4><a href="/coins" data-route="/coins">Rare Coins</a></h4>
                  <p>Browse our extensive coin collection</p>
                </div>
                
                <div class="suggestion-card">
                  <div class="suggestion-icon">💎</div>
                  <h4><a href="/jewelry" data-route="/jewelry">Fine Jewelry</a></h4>
                  <p>Discover our jewelry and custom designs</p>
                </div>
                
                <div class="suggestion-card">
                  <div class="suggestion-icon">🔧</div>
                  <h4><a href="/services" data-route="/services">Our Services</a></h4>
                  <p>Learn about our comprehensive services</p>
                </div>
                
                <div class="suggestion-card">
                  <div class="suggestion-icon">📞</div>
                  <h4><a href="/contact" data-route="/contact">Contact Us</a></h4>
                  <p>Get in touch with our expert team</p>
                </div>
                
                <div class="suggestion-card">
                  <div class="suggestion-icon">📰</div>
                  <h4><a href="/blog" data-route="/blog">Blog & News</a></h4>
                  <p>Read our latest insights and market updates</p>
                </div>
              </div>
            </div>
            
            <div class="search-section">
              <h3>Search Our Site</h3>
              <form class="search-form">
                <input type="search" placeholder="Search for coins, jewelry, services..." aria-label="Search">
                <button type="submit" class="btn btn-primary">Search</button>
              </form>
            </div>
            
            <div class="contact-help">
              <h3>Need Help?</h3>
              <p>If you're looking for something specific, our team is here to help:</p>
              <div class="help-options">
                <a href="tel:+12035550123" class="btn btn-primary">Call (203) 555-0123</a>
                <a href="mailto:info@haven-coin.com" class="btn btn-secondary">Email Us</a>
                <a href="/contact" class="btn btn-outline" data-route="/contact">Visit Our Store</a>
              </div>
            </div>
            
            <div class="recent-content">
              <h3>Recent Blog Posts</h3>
              <div class="recent-posts-grid">
                <article class="recent-post">
                  <h4><a href="/blog?post=gold-prices-new-heights" data-route="/blog?post=gold-prices-new-heights">Gold Prices Reach New Heights</a></h4>
                  <p>Market analysis and what it means for collectors</p>
                </article>
                <article class="recent-post">
                  <h4><a href="/blog?post=vintage-engagement-rings" data-route="/blog?post=vintage-engagement-rings">Vintage Engagement Ring Styles</a></h4>
                  <p>The return of Art Deco and Victorian designs</p>
                </article>
                <article class="recent-post">
                  <h4><a href="/blog?post=coin-collecting-guide-2024" data-route="/blog?post=coin-collecting-guide-2024">Beginner's Guide to Coin Collecting</a></h4>
                  <p>Essential tips for new collectors in 2024</p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    `
  }

  async init() {
    // Initialize animations
    const animationController = new (await import('../js/animations.js')).AnimationController()
    animationController.refresh()

    // Handle search form
    const searchForm = document.querySelector('.search-form')
    if (searchForm) {
      searchForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const query = e.target.querySelector('input').value.trim()
        if (query) {
          // In a real implementation, this would redirect to a search results page
          alert(`Search functionality coming soon! You searched for: "${query}"`)
        }
      })
    }

    // Track 404 errors for analytics (if implemented)
    if (typeof gtag !== 'undefined') {
      gtag('event', 'page_view', {
        page_title: '404 - Page Not Found',
        page_location: window.location.href
      })
    }
  }
}