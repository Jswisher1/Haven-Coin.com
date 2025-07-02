export default class BlogPage {
  render() {
    return `
      <section class="page-hero">
        <div class="container">
          <div class="page-hero-content fade-in">
            <h1>Blog & News</h1>
            <p>Stay updated with the latest in coins, jewelry, and precious metals</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="blog-grid" style="display: grid; grid-template-columns: 2fr 1fr; gap: 3rem;">
            <div class="blog-main">
              <article class="blog-post featured fade-in" style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow-lg); margin-bottom: 2rem;">
                <div class="post-image" style="height: 300px; overflow: hidden;">
                  <img src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800&h=300&fit=crop" alt="Gold market trends" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
                <div class="post-content" style="padding: 2rem;">
                  <div class="post-meta" style="display: flex; gap: 1rem; margin-bottom: 1rem; font-size: 0.875rem; color: var(--text-light);">
                    <span class="post-category" style="background: var(--primary-gold); color: var(--primary-dark); padding: 0.25rem 0.75rem; border-radius: 1rem; font-weight: 600;">Market Analysis</span>
                    <span class="post-date">January 15, 2024</span>
                  </div>
                  <h2 style="margin-bottom: 1rem; color: var(--text-dark);">Gold Prices Reach New Heights: What Collectors Should Know</h2>
                  <p style="margin-bottom: 1.5rem; color: var(--text-light); line-height: 1.7;">Recent market trends show gold reaching unprecedented levels, driven by global economic uncertainty and increased investor demand. We analyze what this means for coin collectors and precious metals investors in Connecticut and beyond, including strategies for both new and experienced collectors.</p>
                  <a href="#" class="read-more" style="color: var(--primary-gold); font-weight: 600; text-decoration: none;">Read Full Article →</a>
                </div>
              </article>

              <div class="blog-posts-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem;">
                <article class="blog-post fade-in" style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow);">
                  <div class="post-image" style="height: 200px; overflow: hidden;">
                    <img src="https://images.pexels.com/photos/1232594/pexels-photo-1232594.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop" alt="Vintage engagement rings" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div class="post-content" style="padding: 1.5rem;">
                    <div class="post-meta" style="display: flex; gap: 1rem; margin-bottom: 1rem; font-size: 0.875rem; color: var(--text-light);">
                      <span class="post-category" style="background: var(--primary-gold); color: var(--primary-dark); padding: 0.25rem 0.75rem; border-radius: 1rem; font-weight: 600;">Jewelry</span>
                      <span class="post-date">January 10, 2024</span>
                    </div>
                    <h3 style="margin-bottom: 1rem; color: var(--text-dark);">The Return of Vintage Engagement Ring Styles</h3>
                    <p style="margin-bottom: 1rem; color: var(--text-light);">Art Deco and Victorian-inspired engagement rings are making a comeback. Discover the timeless appeal of vintage designs and what makes them perfect for modern couples.</p>
                    <a href="#" class="read-more" style="color: var(--primary-gold); font-weight: 600; text-decoration: none;">Read More →</a>
                  </div>
                </article>

                <article class="blog-post fade-in" style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow);">
                  <div class="post-image" style="height: 200px; overflow: hidden;">
                    <img src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop" alt="Coin collecting guide" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div class="post-content" style="padding: 1.5rem;">
                    <div class="post-meta" style="display: flex; gap: 1rem; margin-bottom: 1rem; font-size: 0.875rem; color: var(--text-light);">
                      <span class="post-category" style="background: var(--primary-gold); color: var(--primary-dark); padding: 0.25rem 0.75rem; border-radius: 1rem; font-weight: 600;">Collecting</span>
                      <span class="post-date">January 5, 2024</span>
                    </div>
                    <h3 style="margin-bottom: 1rem; color: var(--text-dark);">Beginner's Guide to Coin Collecting</h3>
                    <p style="margin-bottom: 1rem; color: var(--text-light);">Starting your coin collection? Our experts share essential tips for new collectors, from choosing your first coins to proper storage and organization.</p>
                    <a href="#" class="read-more" style="color: var(--primary-gold); font-weight: 600; text-decoration: none;">Read More →</a>
                  </div>
                </article>

                <article class="blog-post fade-in" style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow);">
                  <div class="post-image" style="height: 200px; overflow: hidden;">
                    <img src="https://images.pexels.com/photos/1232594/pexels-photo-1232594.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop" alt="Jewelry care tips" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div class="post-content" style="padding: 1.5rem;">
                    <div class="post-meta" style="display: flex; gap: 1rem; margin-bottom: 1rem; font-size: 0.875rem; color: var(--text-light);">
                      <span class="post-category" style="background: var(--primary-gold); color: var(--primary-dark); padding: 0.25rem 0.75rem; border-radius: 1rem; font-weight: 600;">Care Tips</span>
                      <span class="post-date">December 28, 2023</span>
                    </div>
                    <h3 style="margin-bottom: 1rem; color: var(--text-dark);">How to Care for Your Fine Jewelry</h3>
                    <p style="margin-bottom: 1rem; color: var(--text-light);">Proper care extends the life and beauty of your jewelry. Learn professional tips for cleaning, storing, and maintaining your precious pieces.</p>
                    <a href="#" class="read-more" style="color: var(--primary-gold); font-weight: 600; text-decoration: none;">Read More →</a>
                  </div>
                </article>

                <article class="blog-post fade-in" style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow);">
                  <div class="post-image" style="height: 200px; overflow: hidden;">
                    <img src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop" alt="Silver coins" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div class="post-content" style="padding: 1.5rem;">
                    <div class="post-meta" style="display: flex; gap: 1rem; margin-bottom: 1rem; font-size: 0.875rem; color: var(--text-light);">
                      <span class="post-category" style="background: var(--primary-gold); color: var(--primary-dark); padding: 0.25rem 0.75rem; border-radius: 1rem; font-weight: 600;">Investment</span>
                      <span class="post-date">December 20, 2023</span>
                    </div>
                    <h3 style="margin-bottom: 1rem; color: var(--text-dark);">Silver vs. Gold: Investment Comparison</h3>
                    <p style="margin-bottom: 1rem; color: var(--text-light);">Comparing precious metals investments. We break down the pros and cons of silver and gold for your portfolio diversification strategy.</p>
                    <a href="#" class="read-more" style="color: var(--primary-gold); font-weight: 600; text-decoration: none;">Read More →</a>
                  </div>
                </article>

                <article class="blog-post fade-in" style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow);">
                  <div class="post-image" style="height: 200px; overflow: hidden;">
                    <img src="https://images.pexels.com/photos/1232594/pexels-photo-1232594.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop" alt="Custom jewelry design" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div class="post-content" style="padding: 1.5rem;">
                    <div class="post-meta" style="display: flex; gap: 1rem; margin-bottom: 1rem; font-size: 0.875rem; color: var(--text-light);">
                      <span class="post-category" style="background: var(--primary-gold); color: var(--primary-dark); padding: 0.25rem 0.75rem; border-radius: 1rem; font-weight: 600;">Design</span>
                      <span class="post-date">December 15, 2023</span>
                    </div>
                    <h3 style="margin-bottom: 1rem; color: var(--text-dark);">The Custom Jewelry Design Process</h3>
                    <p style="margin-bottom: 1rem; color: var(--text-light);">Ever wondered how custom jewelry is made? Take a behind-the-scenes look at our design and crafting process from concept to completion.</p>
                    <a href="#" class="read-more" style="color: var(--primary-gold); font-weight: 600; text-decoration: none;">Read More →</a>
                  </div>
                </article>

                <article class="blog-post fade-in" style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow);">
                  <div class="post-image" style="height: 200px; overflow: hidden;">
                    <img src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop" alt="Ancient coins" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div class="post-content" style="padding: 1.5rem;">
                    <div class="post-meta" style="display: flex; gap: 1rem; margin-bottom: 1rem; font-size: 0.875rem; color: var(--text-light);">
                      <span class="post-category" style="background: var(--primary-gold); color: var(--primary-dark); padding: 0.25rem 0.75rem; border-radius: 1rem; font-weight: 600;">History</span>
                      <span class="post-date">December 10, 2023</span>
                    </div>
                    <h3 style="margin-bottom: 1rem; color: var(--text-dark);">Ancient Coins: Windows to History</h3>
                    <p style="margin-bottom: 1rem; color: var(--text-light);">Explore the fascinating world of ancient coins and what they reveal about past civilizations, trade routes, and historical events.</p>
                    <a href="#" class="read-more" style="color: var(--primary-gold); font-weight: 600; text-decoration: none;">Read More →</a>
                  </div>
                </article>
              </div>
            </div>

            <div class="blog-sidebar">
              <div class="sidebar-widget fade-in" style="background: white; padding: 2rem; border-radius: 1rem; box-shadow: var(--shadow); margin-bottom: 2rem;">
                <h3 style="margin-bottom: 1.5rem; color: var(--text-dark);">Categories</h3>
                <ul class="category-list" style="list-style: none;">
                  <li style="margin-bottom: 0.75rem;"><a href="#" style="display: flex; justify-content: space-between; color: var(--text-light); text-decoration: none; padding: 0.5rem 0; border-bottom: 1px solid var(--border-light);">Market Analysis <span style="color: var(--primary-gold); font-weight: 600;">(8)</span></a></li>
                  <li style="margin-bottom: 0.75rem;"><a href="#" style="display: flex; justify-content: space-between; color: var(--text-light); text-decoration: none; padding: 0.5rem 0; border-bottom: 1px solid var(--border-light);">Jewelry <span style="color: var(--primary-gold); font-weight: 600;">(12)</span></a></li>
                  <li style="margin-bottom: 0.75rem;"><a href="#" style="display: flex; justify-content: space-between; color: var(--text-light); text-decoration: none; padding: 0.5rem 0; border-bottom: 1px solid var(--border-light);">Collecting <span style="color: var(--primary-gold); font-weight: 600;">(15)</span></a></li>
                  <li style="margin-bottom: 0.75rem;"><a href="#" style="display: flex; justify-content: space-between; color: var(--text-light); text-decoration: none; padding: 0.5rem 0; border-bottom: 1px solid var(--border-light);">Care Tips <span style="color: var(--primary-gold); font-weight: 600;">(6)</span></a></li>
                  <li style="margin-bottom: 0.75rem;"><a href="#" style="display: flex; justify-content: space-between; color: var(--text-light); text-decoration: none; padding: 0.5rem 0; border-bottom: 1px solid var(--border-light);">Investment <span style="color: var(--primary-gold); font-weight: 600;">(9)</span></a></li>
                  <li style="margin-bottom: 0.75rem;"><a href="#" style="display: flex; justify-content: space-between; color: var(--text-light); text-decoration: none; padding: 0.5rem 0; border-bottom: 1px solid var(--border-light);">Design <span style="color: var(--primary-gold); font-weight: 600;">(4)</span></a></li>
                </ul>
              </div>

              <div class="sidebar-widget fade-in" style="background: white; padding: 2rem; border-radius: 1rem; box-shadow: var(--shadow); margin-bottom: 2rem;">
                <h3 style="margin-bottom: 1.5rem; color: var(--text-dark);">Recent Posts</h3>
                <ul class="recent-posts" style="list-style: none;">
                  <li style="margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-light);">
                    <a href="#" style="color: var(--text-dark); text-decoration: none; font-weight: 600; display: block; margin-bottom: 0.25rem;">Gold Prices Reach New Heights</a>
                    <span style="color: var(--text-light); font-size: 0.875rem;">January 15, 2024</span>
                  </li>
                  <li style="margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-light);">
                    <a href="#" style="color: var(--text-dark); text-decoration: none; font-weight: 600; display: block; margin-bottom: 0.25rem;">Vintage Engagement Ring Styles</a>
                    <span style="color: var(--text-light); font-size: 0.875rem;">January 10, 2024</span>
                  </li>
                  <li style="margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-light);">
                    <a href="#" style="color: var(--text-dark); text-decoration: none; font-weight: 600; display: block; margin-bottom: 0.25rem;">Beginner's Guide to Coin Collecting</a>
                    <span style="color: var(--text-light); font-size: 0.875rem;">January 5, 2024</span>
                  </li>
                  <li>
                    <a href="#" style="color: var(--text-dark); text-decoration: none; font-weight: 600; display: block; margin-bottom: 0.25rem;">How to Care for Your Fine Jewelry</a>
                    <span style="color: var(--text-light); font-size: 0.875rem;">December 28, 2023</span>
                  </li>
                </ul>
              </div>

              <div class="sidebar-widget fade-in" style="background: var(--primary-gold); padding: 2rem; border-radius: 1rem; box-shadow: var(--shadow); margin-bottom: 2rem;">
                <h3 style="margin-bottom: 1rem; color: var(--primary-dark);">Newsletter</h3>
                <p style="margin-bottom: 1.5rem; color: var(--primary-dark);">Stay updated with our latest news, market insights, and exclusive offers.</p>
                <form class="newsletter-form">
                  <input type="email" placeholder="Your email address" required style="width: 100%; padding: 0.75rem; border: none; border-radius: 0.5rem; margin-bottom: 1rem; font-size: 1rem;">
                  <button type="submit" class="btn" style="width: 100%; background: var(--primary-dark); color: var(--white); border: none; padding: 0.75rem; border-radius: 0.5rem; font-weight: 600; cursor: pointer;">Subscribe</button>
                </form>
              </div>

              <div class="sidebar-widget fade-in" style="background: white; padding: 2rem; border-radius: 1rem; box-shadow: var(--shadow);">
                <h3 style="margin-bottom: 1.5rem; color: var(--text-dark);">Market Updates</h3>
                <div style="margin-bottom: 1rem; padding: 1rem; background: var(--gray-50); border-radius: 0.5rem;">
                  <h4 style="margin-bottom: 0.5rem; color: var(--text-dark); font-size: 1rem;">Gold</h4>
                  <p style="color: var(--text-light); margin: 0; font-size: 0.875rem;">$2,045.50/oz <span style="color: green;">+1.2%</span></p>
                </div>
                <div style="margin-bottom: 1rem; padding: 1rem; background: var(--gray-50); border-radius: 0.5rem;">
                  <h4 style="margin-bottom: 0.5rem; color: var(--text-dark); font-size: 1rem;">Silver</h4>
                  <p style="color: var(--text-light); margin: 0; font-size: 0.875rem;">$24.85/oz <span style="color: green;">+0.8%</span></p>
                </div>
                <div style="padding: 1rem; background: var(--gray-50); border-radius: 0.5rem;">
                  <h4 style="margin-bottom: 0.5rem; color: var(--text-dark); font-size: 1rem;">Platinum</h4>
                  <p style="color: var(--text-light); margin: 0; font-size: 0.875rem;">$1,025.30/oz <span style="color: red;">-0.3%</span></p>
                </div>
                <p style="margin-top: 1rem; font-size: 0.75rem; color: var(--text-muted);">Prices updated daily at market close</p>
              </div>
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

    // Handle newsletter form
    const newsletterForm = document.querySelector('.newsletter-form')
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault()
        // Handle newsletter subscription
        alert('Thank you for subscribing to our newsletter!')
        newsletterForm.reset()
      })
    }
  }
}