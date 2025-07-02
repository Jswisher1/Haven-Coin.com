export default class CoinsPage {
  render() {
    return `
      <section class="page-hero">
        <div class="container">
          <div class="page-hero-content fade-in">
            <h1>Rare Coins & Collectibles</h1>
            <p>Discover our extensive collection of rare and collectible coins from around the world, spanning ancient civilizations to modern commemoratives</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Our Comprehensive Coin Categories</h2>
            <p>From ancient civilizations to modern commemoratives - building collections for over 20 years</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card large fade-in">
              <div class="service-icon">🇺🇸</div>
              <h3>United States Coins</h3>
              <p>Comprehensive collection of American numismatic treasures spanning over two centuries of U.S. monetary history, from early copper coins to modern commemoratives.</p>
              <ul>
                <li><strong>Morgan Silver Dollars (1878-1921):</strong> Including key dates like 1893-S, 1895, and Carson City mintmarks</li>
                <li><strong>Peace Silver Dollars (1921-1935):</strong> High relief 1921 and other scarce dates in various grades</li>
                <li><strong>Walking Liberty Half Dollars (1916-1947):</strong> Beautiful design by Adolph Weinman, popular with collectors</li>
                <li><strong>Mercury Dimes (1916-1945):</strong> Including the key 1916-D and other semi-key dates</li>
                <li><strong>Indian Head Pennies (1859-1909):</strong> Complete date runs and key varieties available</li>
                <li><strong>Buffalo Nickels (1913-1938):</strong> Three-legged buffalo and other popular varieties</li>
                <li><strong>Standing Liberty Quarters (1916-1930):</strong> Type 1 and Type 2 examples in various conditions</li>
                <li><strong>Barber Coinage (1892-1916):</strong> Dimes, quarters, and half dollars by Charles Barber</li>
                <li><strong>Early American Copper:</strong> Large cents, half cents, and colonial coins</li>
                <li><strong>Gold Coins:</strong> $2.50, $5, $10, and $20 gold pieces from Liberty Head to Saint-Gaudens</li>
              </ul>
            </div>

            <div class="service-card large fade-in">
              <div class="service-icon">🌍</div>
              <h3>World Coins</h3>
              <p>International currency from every continent, representing centuries of global monetary history and diverse cultures from around the world.</p>
              <ul>
                <li><strong>Ancient Roman Coins (27 BC - 476 AD):</strong> Denarii, aurei, and bronze coins from the height of the empire</li>
                <li><strong>Ancient Greek Coins (500-100 BC):</strong> Tetradrachms from Athens, Corinth, and other city-states</li>
                <li><strong>British Coins:</strong> Sovereigns, crowns, and historic British currency from medieval to modern times</li>
                <li><strong>Canadian Currency:</strong> Silver dollars, Maple Leafs, and commemorative issues</li>
                <li><strong>Mexican Coins:</strong> Pesos, reales, and historic Spanish colonial currency</li>
                <li><strong>European Commemoratives:</strong> Special issues from major European nations</li>
                <li><strong>Asian Trade Dollars:</strong> Chinese, Japanese, and other Asian currencies</li>
                <li><strong>Australian & New Zealand:</strong> Sovereigns, florins, and modern commemoratives</li>
                <li><strong>South American Colonial:</strong> Spanish colonial reales and other historic pieces</li>
                <li><strong>African Coins:</strong> South African Krugerrands and other continental currencies</li>
              </ul>
            </div>

            <div class="service-card large fade-in">
              <div class="service-icon">🥇</div>
              <h3>Gold Coins & Bullion</h3>
              <p>Investment-grade gold coins and bullion from trusted mints worldwide, perfect for portfolio diversification and long-term wealth preservation.</p>
              <ul>
                <li><strong>American Gold Eagles (1986-Present):</strong> 1 oz, 1/2 oz, 1/4 oz, and 1/10 oz sizes available</li>
                <li><strong>Canadian Gold Maple Leafs:</strong> .9999 fine gold with advanced security features</li>
                <li><strong>South African Krugerrands:</strong> The world's first modern gold bullion coin</li>
                <li><strong>Austrian Gold Philharmonics:</strong> Beautiful design featuring musical instruments</li>
                <li><strong>Chinese Gold Pandas:</strong> Annual design changes make these highly collectible</li>
                <li><strong>British Gold Britannias:</strong> Iconic design with enhanced security features</li>
                <li><strong>Australian Gold Kangaroos:</strong> Perth Mint quality with changing designs</li>
                <li><strong>Historic U.S. Gold Coins:</strong> Pre-1933 $5, $10, and $20 gold pieces</li>
                <li><strong>Gold Bars:</strong> Various sizes from 1 gram to 1 kilogram from PAMP, Credit Suisse</li>
                <li><strong>Proof Gold Coins:</strong> Special collector versions with mirror-like finishes</li>
              </ul>
            </div>

            <div class="service-card large fade-in">
              <div class="service-icon">🏅</div>
              <h3>Graded & Certified Coins</h3>
              <p>PCGS and NGC certified coins with guaranteed authenticity and professional condition assessment, providing confidence and liquidity for serious collectors.</p>
              <ul>
                <li><strong>PCGS Certified Specimens:</strong> Professional Coin Grading Service authenticated coins</li>
                <li><strong>NGC Graded Examples:</strong> Numismatic Guaranty Corporation certified pieces</li>
                <li><strong>High-Grade MS65+ Coins:</strong> Mint state coins in exceptional condition</li>
                <li><strong>Key Date Rarities:</strong> Scarce dates and mintmarks in certified holders</li>
                <li><strong>Proof Coins (PR65-PR70):</strong> Specially struck coins with mirror-like surfaces</li>
                <li><strong>First Strike Designations:</strong> Coins struck within first 30 days of production</li>
                <li><strong>Early Release Labels:</strong> Special designations for quick submissions</li>
                <li><strong>Population Report Leaders:</strong> Finest known examples in their grades</li>
                <li><strong>CAC Approved Coins:</strong> Certified Acceptance Corporation stickered coins</li>
                <li><strong>Registry Set Coins:</strong> High-grade examples perfect for competitive collecting</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="section" style="background: var(--gray-50);">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Featured Coin Collections</h2>
            <p>Highlighting some of our most exceptional pieces and investment opportunities</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card fade-in">
              <div class="service-icon">🏛️</div>
              <h3>Ancient Coin Collection</h3>
              <p><strong>Roman Imperial Denarii:</strong> Silver coins from the height of the Roman Empire, featuring emperors like Augustus (27 BC-14 AD), Trajan (98-117 AD), and Marcus Aurelius (161-180 AD). Each coin tells a story of power, conquest, and imperial propaganda.</p>
              <p><strong>Greek Tetradrachms:</strong> Beautiful silver coins from ancient Athens featuring the owl of Athena, symbol of wisdom and the city's patron goddess. Also available: coins from Corinth, Syracuse, and other major Greek city-states.</p>
              <p><strong>Byzantine Gold Solidi:</strong> Rare gold coins from the Eastern Roman Empire (330-1453 AD), showcasing medieval Christian iconography and imperial portraits spanning over a millennium of history.</p>
              <p><strong>Celtic and Barbarian Issues:</strong> Fascinating coins from tribes and kingdoms on the edges of the Roman world, showing unique artistic styles and cultural influences.</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">💰</div>
              <h3>Morgan Dollar Vault</h3>
              <p><strong>Key Dates Collection:</strong> 1893-S (only 100,000 minted), 1895 (proof only year), 1901, 1903-O, and other scarce dates in various grades from VF to MS65+.</p>
              <p><strong>Carson City Mint Morgans:</strong> CC mintmarked Morgans from the famous Nevada mint (1878-1885, 1889-1893), including the popular 1883-CC and 1884-CC dates.</p>
              <p><strong>GSA Hoard Coins:</strong> Government-released coins in original GSA holders from the Treasury Department's release of silver dollars in the 1970s-1980s.</p>
              <p><strong>VAM Varieties:</strong> Van Allen-Mallis catalogued varieties for the specialist collector, including popular varieties like the 1878 8TF and 1921 Chapman varieties.</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">🦅</div>
              <h3>American Gold Eagles</h3>
              <p><strong>Bullion Eagles:</strong> Current year and back-dated 1 oz, 1/2 oz, 1/4 oz, and 1/10 oz sizes for investment portfolios. All coins contain their stated weight in .9167 fine gold.</p>
              <p><strong>Proof Gold Eagles:</strong> Stunning proof versions in original mint packaging with certificates of authenticity. Limited mintages make these popular with collectors.</p>
              <p><strong>Burnished Eagles:</strong> Special uncirculated versions with unique satin finish, struck on specially prepared blanks for enhanced visual appeal.</p>
              <p><strong>First Day of Issue:</strong> Special designations for coins submitted on their first day of release, adding collectible value to investment pieces.</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">🎖️</div>
              <h3>Commemorative Coins</h3>
              <p><strong>Classic Commemoratives (1892-1954):</strong> Original commemorative half dollars, silver dollars, and gold coins including the Columbian Exposition, Panama-Pacific, and Oregon Trail issues.</p>
              <p><strong>Modern Commemoratives (1982-Present):</strong> Special issue coins celebrating American history, culture, and achievements, including Olympic Games, National Parks, and historical anniversaries.</p>
              <p><strong>Olympic Coin Sets:</strong> Complete sets from various Olympic games including 1984 Los Angeles, 1996 Atlanta, and 2002 Salt Lake City Olympics.</p>
              <p><strong>Presidential Commemoratives:</strong> Coins honoring American presidents and first ladies, including the popular Ronald Reagan and John F. Kennedy commemoratives.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Coin Investment & Collecting Guide</h2>
            <p>Expert advice for building a valuable and enjoyable coin collection</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card fade-in">
              <div class="service-icon">📈</div>
              <h3>Market Analysis & Trends</h3>
              <p><strong>Current Market Conditions:</strong> Stay informed about precious metals prices, collector demand, and auction results that affect coin values. We provide regular market updates and analysis.</p>
              <p><strong>Historical Performance:</strong> Learn about coins that have shown strong appreciation over time and understand the factors that drive numismatic values beyond precious metals content.</p>
              <p><strong>Emerging Opportunities:</strong> Discover undervalued series and dates that may offer potential for future appreciation based on rarity, condition, and collector interest.</p>
              <p><strong>Market Timing:</strong> Understand when to buy and sell based on market cycles, seasonal patterns, and economic conditions affecting the numismatic marketplace.</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">🎯</div>
              <h3>Collection Strategy</h3>
              <p><strong>Focused Collecting:</strong> Develop a coherent collecting strategy based on your interests, budget, and goals. Whether you prefer type collecting, date collecting, or variety collecting, we help you build meaningful collections.</p>
              <p><strong>Budget Management:</strong> Learn to maximize your collecting budget by understanding value, rarity, and condition. We help you prioritize purchases and avoid common collecting mistakes.</p>
              <p><strong>Quality vs. Quantity:</strong> Understand the benefits of buying fewer, higher-quality coins versus accumulating many lower-grade examples. Build collections that will appreciate and bring lasting enjoyment.</p>
              <p><strong>Diversification:</strong> Balance your collection across different series, time periods, and price ranges to reduce risk and increase potential for appreciation.</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">🔍</div>
              <h3>Grading & Authentication</h3>
              <p><strong>Understanding Grades:</strong> Learn the Sheldon 70-point grading scale and how condition affects value. Understand the difference between circulated and uncirculated grades.</p>
              <p><strong>Authentication Techniques:</strong> Recognize authentic coins and spot common counterfeits. Learn about weight, dimensions, edge characteristics, and other authentication methods.</p>
              <p><strong>Third-Party Grading:</strong> Understand the benefits of PCGS and NGC certification, including authenticity guarantees, consistent grading, and enhanced liquidity.</p>
              <p><strong>Raw vs. Certified:</strong> Learn when to buy raw coins versus certified examples, and understand the costs and benefits of professional grading services.</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">🏦</div>
              <h3>Storage & Insurance</h3>
              <p><strong>Proper Storage:</strong> Learn about coin holders, albums, and storage systems that protect your investment while allowing for enjoyment and study of your collection.</p>
              <p><strong>Environmental Factors:</strong> Understand how temperature, humidity, and air quality affect coin preservation. Create optimal storage conditions for long-term preservation.</p>
              <p><strong>Insurance Coverage:</strong> Protect your investment with appropriate insurance coverage. We provide guidance on documentation, appraisals, and insurance options.</p>
              <p><strong>Security Measures:</strong> Implement appropriate security measures for home storage or consider professional storage options including bank safe deposit boxes and private vaults.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section" style="background: var(--gray-50);">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Our Comprehensive Coin Services</h2>
            <p>Professional numismatic services for collectors and investors at every level</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card fade-in">
              <div class="service-icon">🔍</div>
              <h3>Authentication & Verification</h3>
              <p><strong>Advanced Technology:</strong> Expert authentication using digital microscopy, precision scales, and metallurgical analysis. We can identify counterfeits, alterations, and cleaned coins with confidence.</p>
              <p><strong>Provenance Research:</strong> Investigation of coin history and ownership when possible, adding value and interest to significant pieces in your collection.</p>
              <p><strong>Variety Attribution:</strong> Identification of die varieties, mint errors, and other collectible characteristics that can significantly affect value.</p>
              <p><strong>Condition Assessment:</strong> Professional evaluation of coin condition and grade, helping you understand the true value of your pieces.</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">📊</div>
              <h3>Professional Appraisals</h3>
              <p><strong>Insurance Appraisals:</strong> Detailed written appraisals for insurance coverage with high-resolution photography and current market valuations.</p>
              <p><strong>Estate Valuations:</strong> Comprehensive evaluations for estate planning, probate, and inheritance purposes with complete documentation.</p>
              <p><strong>Fair Market Value:</strong> Current market assessments for resale, donation, or legal purposes based on recent sales data and market conditions.</p>
              <p><strong>Collection Analysis:</strong> Complete inventory and valuation of entire collections with recommendations for improvement and optimization.</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">💰</div>
              <h3>Buying & Selling Services</h3>
              <p><strong>Competitive Buying:</strong> Fair market prices for individual coins, complete collections, and estate holdings with immediate payment available.</p>
              <p><strong>Consignment Sales:</strong> Professional marketing of high-value coins through our network of collectors and dealers to maximize returns.</p>
              <p><strong>Auction Representation:</strong> Bidding services for major auctions when you can't attend in person, ensuring you don't miss important opportunities.</p>
              <p><strong>Want List Services:</strong> We actively search for specific coins on your want list, using our extensive network to find the pieces you need.</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">🎓</div>
              <h3>Educational Services</h3>
              <p><strong>Collecting Seminars:</strong> Regular educational seminars covering topics like grading, authentication, market trends, and collecting strategies.</p>
              <p><strong>Private Consultations:</strong> One-on-one education sessions tailored to your specific interests and collecting goals.</p>
              <p><strong>Library Resources:</strong> Access to numismatic references, price guides, and research materials to enhance your collecting knowledge.</p>
              <p><strong>Youth Programs:</strong> Special programs to introduce young people to coin collecting, including school presentations and youth collector discounts.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Coin Collecting Resources</h2>
            <p>Essential information for both beginning and advanced collectors</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card fade-in">
              <div class="service-icon">📚</div>
              <h3>Reference Materials</h3>
              <p><strong>Standard Catalogs:</strong> Access to the Red Book, Blue Book, and other essential price guides and reference materials for accurate identification and valuation.</p>
              <p><strong>Specialized References:</strong> Detailed references for specific series including VAM varieties, die varieties, and error coins.</p>
              <p><strong>Historical Context:</strong> Learn the historical background of coins, including the economic and political factors that influenced their design and production.</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">🔬</div>
              <h3>Research Services</h3>
              <p><strong>Die Variety Research:</strong> Identification and attribution of die varieties and mint errors that can significantly increase coin values.</p>
              <p><strong>Population Reports:</strong> Access to PCGS and NGC population data to understand rarity in different grades.</p>
              <p><strong>Auction Records:</strong> Research of recent auction results and price trends for specific coins and series.</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">🌐</div>
              <h3>Online Resources</h3>
              <p><strong>Digital Catalogs:</strong> Online access to our current inventory with detailed descriptions and high-resolution images.</p>
              <p><strong>Market Updates:</strong> Regular email updates on market conditions, new acquisitions, and collecting opportunities.</p>
              <p><strong>Virtual Consultations:</strong> Remote consultations and evaluations for clients who cannot visit our store in person.</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">🤝</div>
              <h3>Community Connections</h3>
              <p><strong>Local Coin Clubs:</strong> Information about area coin clubs and collecting organizations for networking and education.</p>
              <p><strong>Coin Shows:</strong> Updates on regional and national coin shows, including representation services for major events.</p>
              <p><strong>Collector Network:</strong> Connections with other collectors for trading, buying, and sharing knowledge about specific series and interests.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <div class="container">
          <div class="cta-content fade-in">
            <h2>Start or Expand Your Collection Today</h2>
            <p>Whether you're a beginner taking your first steps into numismatics or a seasoned collector seeking that elusive key date, we have the expertise and inventory to help you achieve your collecting goals</p>
            <div class="cta-buttons">
              <a href="/contact" class="btn btn-primary" data-route="/contact">Visit Our Store</a>
              <a href="/services" class="btn btn-secondary" data-route="/services">Learn About Our Services</a>
            </div>
            <div style="margin-top: 2rem; font-size: 0.875rem; opacity: 0.8;">
              <p>📞 Call us at (203) 555-0123 to discuss your collecting interests | 💬 Email info@haven-coin.com for inquiries</p>
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