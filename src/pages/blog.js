export default class BlogPage {
  render() {
    return `
      <section class="page-hero">
        <div class="container">
          <div class="page-hero-content fade-in">
            <h1>Blog & News</h1>
            <p>Stay updated with the latest insights in coins, jewelry, precious metals, and collecting trends</p>
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
                    <span class="read-time">8 min read</span>
                  </div>
                  <h2 style="margin-bottom: 1rem; color: var(--text-dark);">Gold Prices Reach New Heights: What Collectors and Investors Should Know</h2>
                  <p style="margin-bottom: 1.5rem; color: var(--text-light); line-height: 1.7;">Recent market trends show gold reaching unprecedented levels, driven by global economic uncertainty, inflation concerns, and increased investor demand for safe-haven assets. We analyze what this means for coin collectors and precious metals investors in Connecticut and beyond, including strategies for both new and experienced collectors looking to capitalize on current market conditions.</p>
                  <p style="margin-bottom: 1.5rem; color: var(--text-light); line-height: 1.7;">The surge in gold prices has created interesting opportunities in the numismatic market, particularly for gold coins that carry both precious metals value and collector premiums. We explore which categories are showing the strongest performance and what this means for your collection strategy.</p>
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
                    <p style="margin-bottom: 1rem; color: var(--text-light);">Art Deco and Victorian-inspired engagement rings are making a dramatic comeback among modern couples. Discover the timeless appeal of vintage designs, what makes them perfect for today's brides, and how to choose authentic pieces versus reproductions.</p>
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
                    <h3 style="margin-bottom: 1rem; color: var(--text-dark);">Beginner's Guide to Coin Collecting in 2024</h3>
                    <p style="margin-bottom: 1rem; color: var(--text-light);">Starting your coin collection can be overwhelming with so many options available. Our experts share essential tips for new collectors, from choosing your first coins to proper storage, organization, and building a collection that will appreciate over time.</p>
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
                    <h3 style="margin-bottom: 1rem; color: var(--text-dark);">Professional Jewelry Care: Keeping Your Treasures Beautiful</h3>
                    <p style="margin-bottom: 1rem; color: var(--text-light);">Proper care extends the life and beauty of your jewelry investment. Learn professional tips for cleaning, storing, and maintaining your precious pieces, plus when to seek professional services for optimal preservation.</p>
                    <a href="#" class="read-more" style="color: var(--primary-gold); font-weight: 600; text-decoration: none;">Read More →</a>
                  </div>
                </article>

                <article class="blog-post fade-in" style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow);">
                  <div class="post-image" style="height: 200px; overflow: hidden;">
                    <img src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop" alt="Silver coins investment" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div class="post-content" style="padding: 1.5rem;">
                    <div class="post-meta" style="display: flex; gap: 1rem; margin-bottom: 1rem; font-size: 0.875rem; color: var(--text-light);">
                      <span class="post-category" style="background: var(--primary-gold); color: var(--primary-dark); padding: 0.25rem 0.75rem; border-radius: 1rem; font-weight: 600;">Investment</span>
                      <span class="post-date">December 20, 2023</span>
                    </div>
                    <h3 style="margin-bottom: 1rem; color: var(--text-dark);">Silver vs. Gold: A Complete Investment Comparison</h3>
                    <p style="margin-bottom: 1rem; color: var(--text-light);">Comparing precious metals investments for portfolio diversification. We break down the pros and cons of silver and gold, including industrial demand factors, storage considerations, and long-term appreciation potential.</p>
                    <a href="#" class="read-more" style="color: var(--primary-gold); font-weight: 600; text-decoration: none;">Read More →</a>
                  </div>
                </article>

                <article class="blog-post fade-in" style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow);">
                  <div class="post-image" style="height: 200px; overflow: hidden;">
                    <img src="https://images.pexels.com/photos/1232594/pexels-photo-1232594.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop" alt="Custom jewelry design process" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div class="post-content" style="padding: 1.5rem;">
                    <div class="post-meta" style="display: flex; gap: 1rem; margin-bottom: 1rem; font-size: 0.875rem; color: var(--text-light);">
                      <span class="post-category" style="background: var(--primary-gold); color: var(--primary-dark); padding: 0.25rem 0.75rem; border-radius: 1rem; font-weight: 600;">Design</span>
                      <span class="post-date">December 15, 2023</span>
                    </div>
                    <h3 style="margin-bottom: 1rem; color: var(--text-dark);">Behind the Scenes: The Custom Jewelry Design Process</h3>
                    <p style="margin-bottom: 1rem; color: var(--text-light);">Ever wondered how custom jewelry comes to life? Take a detailed behind-the-scenes look at our design and crafting process from initial concept to final creation, including CAD modeling and traditional craftsmanship techniques.</p>
                    <a href="#" class="read-more" style="color: var(--primary-gold); font-weight: 600; text-decoration: none;">Read More →</a>
                  </div>
                </article>

                <article class="blog-post fade-in" style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow);">
                  <div class="post-image" style="height: 200px; overflow: hidden;">
                    <img src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop" alt="Ancient Roman coins" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div class="post-content" style="padding: 1.5rem;">
                    <div class="post-meta" style="display: flex; gap: 1rem; margin-bottom: 1rem; font-size: 0.875rem; color: var(--text-light);">
                      <span class="post-category" style="background: var(--primary-gold); color: var(--primary-dark); padding: 0.25rem 0.75rem; border-radius: 1rem; font-weight: 600;">History</span>
                      <span class="post-date">December 10, 2023</span>
                    </div>
                    <h3 style="margin-bottom: 1rem; color: var(--text-dark);">Ancient Coins: Windows to Lost Civilizations</h3>
                    <p style="margin-bottom: 1rem; color: var(--text-light);">Explore the fascinating world of ancient coins and what they reveal about past civilizations, trade routes, political systems, and daily life in the ancient world. Learn how to start collecting these historical treasures.</p>
                    <a href="#" class="read-more" style="color: var(--primary-gold); font-weight: 600; text-decoration: none;">Read More →</a>
                  </div>
                </article>

                <article class="blog-post fade-in" style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow);">
                  <div class="post-image" style="height: 200px; overflow: hidden;">
                    <img src="https://images.pexels.com/photos/1232594/pexels-photo-1232594.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop" alt="Diamond education" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div class="post-content" style="padding: 1.5rem;">
                    <div class="post-meta" style="display: flex; gap: 1rem; margin-bottom: 1rem; font-size: 0.875rem; color: var(--text-light);">
                      <span class="post-category" style="background: var(--primary-gold); color: var(--primary-dark); padding: 0.25rem 0.75rem; border-radius: 1rem; font-weight: 600;">Education</span>
                      <span class="post-date">December 5, 2023</span>
                    </div>
                    <h3 style="margin-bottom: 1rem; color: var(--text-dark);">Understanding Diamond Quality: Beyond the 4 Cs</h3>
                    <p style="margin-bottom: 1rem; color: var(--text-light);">While most people know about the 4 Cs, there's much more to diamond quality. Learn about fluorescence, symmetry, polish, and other factors that affect a diamond's beauty and value in this comprehensive guide.</p>
                    <a href="#" class="read-more" style="color: var(--primary-gold); font-weight: 600; text-decoration: none;">Read More →</a>
                  </div>
                </article>

                <article class="blog-post fade-in" style="background: white; border-radius: 1rem; overflow: hidden; box-shadow: var(--shadow);">
                  <div class="post-image" style="height: 200px; overflow: hidden;">
                    <img src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop" alt="Estate jewelry appraisal" style="width: 100%; height: 100%; object-fit: cover;">
                  </div>
                  <div class="post-content" style="padding: 1.5rem;">
                    <div class="post-meta" style="display: flex; gap: 1rem; margin-bottom: 1rem; font-size: 0.875rem; color: var(--text-light);">
                      <span class="post-category" style="background: var(--primary-gold); color: var(--primary-dark); padding: 0.25rem 0.75rem; border-radius: 1rem; font-weight: 600;">Appraisal</span>
                      <span class="post-date">November 28, 2023</span>
                    </div>
                    <h3 style="margin-bottom: 1rem; color: var(--text-dark);">Estate Jewelry Appraisals: What You Need to Know</h3>
                    <p style="margin-bottom: 1rem; color: var(--text-light);">Inheriting jewelry can be both exciting and overwhelming. Learn about the appraisal process, different types of appraisals, and how to determine the true value of estate jewelry pieces for insurance, sale, or family distribution.</p>
                    <a href="#" class="read-more" style="color: var(--primary-gold); font-weight: 600; text-decoration: none;">Read More →</a>
                  </div>
                </article>
              </div>

              <div style="margin-top: 3rem; text-align: center;">
                <button class="btn btn-outline" style="margin-right: 1rem;">← Previous Posts</button>
                <button class="btn btn-primary">Load More Articles</button>
              </div>
            </div>

            <div class="blog-sidebar">
              <div class="sidebar-widget fade-in" style="background: white; padding: 2rem; border-radius: 1rem; box-shadow: var(--shadow); margin-bottom: 2rem;">
                <h3 style="margin-bottom: 1.5rem; color: var(--text-dark);">Categories</h3>
                <ul class="category-list" style="list-style: none;">
                  <li style="margin-bottom: 0.75rem;"><a href="#" style="display: flex; justify-content: space-between; color: var(--text-light); text-decoration: none; padding: 0.5rem 0; border-bottom: 1px solid var(--border-light); transition: var(--transition);">Market Analysis <span style="color: var(--primary-gold); font-weight: 600;">(12)</span></a></li>
                  <li style="margin-bottom: 0.75rem;"><a href="#" style="display: flex; justify-content: space-between; color: var(--text-light); text-decoration: none; padding: 0.5rem 0; border-bottom: 1px solid var(--border-light); transition: var(--transition);">Jewelry <span style="color: var(--primary-gold); font-weight: 600;">(18)</span></a></li>
                  <li style="margin-bottom: 0.75rem;"><a href="#" style="display: flex; justify-content: space-between; color: var(--text-light); text-decoration: none; padding: 0.5rem 0; border-bottom: 1px solid var(--border-light); transition: var(--transition);">Collecting <span style="color: var(--primary-gold); font-weight: 600;">(24)</span></a></li>
                  <li style="margin-bottom: 0.75rem;"><a href="#" style="display: flex; justify-content: space-between; color: var(--text-light); text-decoration: none; padding: 0.5rem 0; border-bottom: 1px solid var(--border-light); transition: var(--transition);">Care Tips <span style="color: var(--primary-gold); font-weight: 600;">(9)</span></a></li>
                  <li style="margin-bottom: 0.75rem;"><a href="#" style="display: flex; justify-content: space-between; color: var(--text-light); text-decoration: none; padding: 0.5rem 0; border-bottom: 1px solid var(--border-light); transition: var(--transition);">Investment <span style="color: var(--primary-gold); font-weight: 600;">(15)</span></a></li>
                  <li style="margin-bottom: 0.75rem;"><a href="#" style="display: flex; justify-content: space-between; color: var(--text-light); text-decoration: none; padding: 0.5rem 0; border-bottom: 1px solid var(--border-light); transition: var(--transition);">Design <span style="color: var(--primary-gold); font-weight: 600;">(7)</span></a></li>
                  <li style="margin-bottom: 0.75rem;"><a href="#" style="display: flex; justify-content: space-between; color: var(--text-light); text-decoration: none; padding: 0.5rem 0; border-bottom: 1px solid var(--border-light); transition: var(--transition);">History <span style="color: var(--primary-gold); font-weight: 600;">(11)</span></a></li>
                  <li><a href="#" style="display: flex; justify-content: space-between; color: var(--text-light); text-decoration: none; padding: 0.5rem 0; transition: var(--transition);">Education <span style="color: var(--primary-gold); font-weight: 600;">(13)</span></a></li>
                </ul>
              </div>

              <div class="sidebar-widget fade-in" style="background: white; padding: 2rem; border-radius: 1rem; box-shadow: var(--shadow); margin-bottom: 2rem;">
                <h3 style="margin-bottom: 1.5rem; color: var(--text-dark);">Recent Posts</h3>
                <ul class="recent-posts" style="list-style: none;">
                  <li style="margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-light);">
                    <a href="#" style="color: var(--text-dark); text-decoration: none; font-weight: 600; display: block; margin-bottom: 0.25rem; line-height: 1.3;">Gold Prices Reach New Heights: What Collectors Should Know</a>
                    <span style="color: var(--text-light); font-size: 0.875rem;">January 15, 2024</span>
                  </li>
                  <li style="margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-light);">
                    <a href="#" style="color: var(--text-dark); text-decoration: none; font-weight: 600; display: block; margin-bottom: 0.25rem; line-height: 1.3;">The Return of Vintage Engagement Ring Styles</a>
                    <span style="color: var(--text-light); font-size: 0.875rem;">January 10, 2024</span>
                  </li>
                  <li style="margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-light);">
                    <a href="#" style="color: var(--text-dark); text-decoration: none; font-weight: 600; display: block; margin-bottom: 0.25rem; line-height: 1.3;">Beginner's Guide to Coin Collecting in 2024</a>
                    <span style="color: var(--text-light); font-size: 0.875rem;">January 5, 2024</span>
                  </li>
                  <li style="margin-bottom: 1rem; padding-bottom: 1rem; border-bottom: 1px solid var(--border-light);">
                    <a href="#" style="color: var(--text-dark); text-decoration: none; font-weight: 600; display: block; margin-bottom: 0.25rem; line-height: 1.3;">Professional Jewelry Care Tips</a>
                    <span style="color: var(--text-light); font-size: 0.875rem;">December 28, 2023</span>
                  </li>
                  <li>
                    <a href="#" style="color: var(--text-dark); text-decoration: none; font-weight: 600; display: block; margin-bottom: 0.25rem; line-height: 1.3;">Silver vs. Gold Investment Comparison</a>
                    <span style="color: var(--text-light); font-size: 0.875rem;">December 20, 2023</span>
                  </li>
                </ul>
              </div>

              <div class="sidebar-widget fade-in" style="background: var(--primary-gold); padding: 2rem; border-radius: 1rem; box-shadow: var(--shadow); margin-bottom: 2rem;">
                <h3 style="margin-bottom: 1rem; color: var(--primary-dark);">Newsletter Signup</h3>
                <p style="margin-bottom: 1.5rem; color: var(--primary-dark);">Stay updated with our latest news, market insights, collecting tips, and exclusive offers delivered to your inbox.</p>
                <form class="newsletter-form">
                  <input type="email" placeholder="Your email address" required style="width: 100%; padding: 0.75rem; border: none; border-radius: 0.5rem; margin-bottom: 1rem; font-size: 1rem;">
                  <button type="submit" class="btn" style="width: 100%; background: var(--primary-dark); color: var(--white); border: none; padding: 0.75rem; border-radius: 0.5rem; font-weight: 600; cursor: pointer;">Subscribe Now</button>
                </form>
                <p style="margin-top: 1rem; font-size: 0.75rem; color: var(--primary-dark); opacity: 0.8;">We respect your privacy. Unsubscribe at any time.</p>
              </div>

              <div class="sidebar-widget fade-in" style="background: white; padding: 2rem; border-radius: 1rem; box-shadow: var(--shadow); margin-bottom: 2rem;">
                <h3 style="margin-bottom: 1.5rem; color: var(--text-dark);">Live Market Updates</h3>
                <div style="margin-bottom: 1rem; padding: 1rem; background: var(--gray-50); border-radius: 0.5rem;">
                  <h4 style="margin-bottom: 0.5rem; color: var(--text-dark); font-size: 1rem;">Gold Spot Price</h4>
                  <p style="color: var(--text-light); margin: 0; font-size: 0.875rem;">$2,045.50/oz <span style="color: green; font-weight: 600;">+1.2% ↗</span></p>
                  <small style="color: var(--text-muted);">Last updated: 2 hours ago</small>
                </div>
                <div style="margin-bottom: 1rem; padding: 1rem; background: var(--gray-50); border-radius: 0.5rem;">
                  <h4 style="margin-bottom: 0.5rem; color: var(--text-dark); font-size: 1rem;">Silver Spot Price</h4>
                  <p style="color: var(--text-light); margin: 0; font-size: 0.875rem;">$24.85/oz <span style="color: green; font-weight: 600;">+0.8% ↗</span></p>
                  <small style="color: var(--text-muted);">Last updated: 2 hours ago</small>
                </div>
                <div style="margin-bottom: 1rem; padding: 1rem; background: var(--gray-50); border-radius: 0.5rem;">
                  <h4 style="margin-bottom: 0.5rem; color: var(--text-dark); font-size: 1rem;">Platinum Price</h4>
                  <p style="color: var(--text-light); margin: 0; font-size: 0.875rem;">$1,025.30/oz <span style="color: red; font-weight: 600;">-0.3% ↘</span></p>
                  <small style="color: var(--text-muted);">Last updated: 2 hours ago</small>
                </div>
                <div style="padding: 1rem; background: var(--gray-50); border-radius: 0.5rem;">
                  <h4 style="margin-bottom: 0.5rem; color: var(--text-dark); font-size: 1rem;">Palladium Price</h4>
                  <p style="color: var(--text-light); margin: 0; font-size: 0.875rem;">$1,156.75/oz <span style="color: green; font-weight: 600;">+2.1% ↗</span></p>
                  <small style="color: var(--text-muted);">Last updated: 2 hours ago</small>
                </div>
                <p style="margin-top: 1rem; font-size: 0.75rem; color: var(--text-muted); text-align: center;">Prices updated every 15 minutes during market hours</p>
              </div>

              <div class="sidebar-widget fade-in" style="background: white; padding: 2rem; border-radius: 1rem; box-shadow: var(--shadow);">
                <h3 style="margin-bottom: 1.5rem; color: var(--text-dark);">Popular Tags</h3>
                <div style="display: flex; flex-wrap: wrap; gap: 0.5rem;">
                  <span style="background: var(--gray-100); color: var(--text-dark); padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.875rem; cursor: pointer; transition: var(--transition);">Gold Coins</span>
                  <span style="background: var(--gray-100); color: var(--text-dark); padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.875rem; cursor: pointer; transition: var(--transition);">Morgan Dollars</span>
                  <span style="background: var(--gray-100); color: var(--text-dark); padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.875rem; cursor: pointer; transition: var(--transition);">Engagement Rings</span>
                  <span style="background: var(--gray-100); color: var(--text-dark); padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.875rem; cursor: pointer; transition: var(--transition);">Ancient Coins</span>
                  <span style="background: var(--gray-100); color: var(--text-dark); padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.875rem; cursor: pointer; transition: var(--transition);">Diamond Education</span>
                  <span style="background: var(--gray-100); color: var(--text-dark); padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.875rem; cursor: pointer; transition: var(--transition);">Estate Jewelry</span>
                  <span style="background: var(--gray-100); color: var(--text-dark); padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.875rem; cursor: pointer; transition: var(--transition);">Silver Investment</span>
                  <span style="background: var(--gray-100); color: var(--text-dark); padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.875rem; cursor: pointer; transition: var(--transition);">Vintage Watches</span>
                  <span style="background: var(--gray-100); color: var(--text-dark); padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.875rem; cursor: pointer; transition: var(--transition);">Custom Design</span>
                  <span style="background: var(--gray-100); color: var(--text-dark); padding: 0.25rem 0.75rem; border-radius: 1rem; font-size: 0.875rem; cursor: pointer; transition: var(--transition);">Appraisals</span>
                </div>
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
        const email = e.target.querySelector('input[type="email"]').value
        if (email) {
          alert('Thank you for subscribing to our newsletter! You will receive our latest updates and insights.')
          newsletterForm.reset()
        }
      })
    }

    // Add hover effects to category links
    const categoryLinks = document.querySelectorAll('.category-list a')
    categoryLinks.forEach(link => {
      link.addEventListener('mouseenter', () => {
        link.style.color = 'var(--primary-gold)'
        link.style.paddingLeft = '0.5rem'
      })
      link.addEventListener('mouseleave', () => {
        link.style.color = 'var(--text-light)'
        link.style.paddingLeft = '0'
      })
    })

    // Add hover effects to tags
    const tags = document.querySelectorAll('[style*="background: var(--gray-100)"]')
    tags.forEach(tag => {
      tag.addEventListener('mouseenter', () => {
        tag.style.background = 'var(--primary-gold)'
        tag.style.color = 'var(--primary-dark)'
      })
      tag.addEventListener('mouseleave', () => {
        tag.style.background = 'var(--gray-100)'
        tag.style.color = 'var(--text-dark)'
      })
    })
  }
}