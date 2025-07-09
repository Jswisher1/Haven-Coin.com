export default class CurrencyPage {
  render() {
    return `
      <section class="page-hero">
        <div class="container">
          <div class="page-hero-content fade-in">
            <h1>Currency & Paper Money</h1>
            <p>We buy collectible paper money, vintage currency, and rare banknotes from the United States and around the world</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Currency We Purchase</h2>
            <p>Expert evaluation of paper money from common notes to rare specimens</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card large fade-in">
              <div class="service-icon">🇺🇸</div>
              <h3>United States Currency</h3>
              <p>We buy all types of U.S. paper money, from large size notes to modern small size currency, with expert knowledge of varieties and values.</p>
              <ul>
                <li><strong>Large Size Notes (1862-1923):</strong> Legal tender, silver certificates, gold certificates, national bank notes</li>
                <li><strong>Silver Certificates:</strong> $1, $5, $10, and $20 notes redeemable for silver</li>
                <li><strong>Gold Certificates:</strong> $10, $20, $50, $100, and higher denominations</li>
                <li><strong>United States Notes:</strong> "Greenbacks" and legal tender notes</li>
                <li><strong>National Bank Notes:</strong> Notes issued by individual national banks</li>
                <li><strong>Federal Reserve Bank Notes:</strong> Early Federal Reserve issues</li>
                <li><strong>Small Size Currency (1928-Present):</strong> Modern U.S. currency</li>
                <li><strong>Star Notes:</strong> Replacement notes with star in serial number</li>
                <li><strong>Low Serial Numbers:</strong> Notes with desirable low numbers</li>
                <li><strong>Error Notes:</strong> Printing errors, cutting errors, and other varieties</li>
              </ul>
            </div>

            <div class="service-card large fade-in">
              <div class="service-icon">⚔️</div>
              <h3>Confederate & Civil War Currency</h3>
              <p>We purchase Confederate States of America currency and Civil War era notes, including fractional currency and military payment certificates.</p>
              <ul>
                <li><strong>Confederate States Notes:</strong> CSA currency from $0.50 to $1000 denominations</li>
                <li><strong>Confederate Bonds:</strong> CSA government bonds and treasury notes</li>
                <li><strong>Southern States Currency:</strong> Individual state issues during the Civil War</li>
                <li><strong>Fractional Currency:</strong> Small denomination notes (3¢, 5¢, 10¢, 15¢, 25¢, 50¢)</li>
                <li><strong>Postage Currency:</strong> First issue fractional currency with postage stamp designs</li>
                <li><strong>Encased Postage:</strong> Postage stamps in protective cases used as currency</li>
                <li><strong>Sutler Notes:</strong> Private currency used by Civil War merchants</li>
                <li><strong>Military Payment Certificates:</strong> MPC from various conflicts</li>
              </ul>
            </div>

            <div class="service-card large fade-in">
              <div class="service-icon">🌍</div>
              <h3>World Currency</h3>
              <p>We buy foreign currency and international banknotes, from common world notes to rare and obsolete currency from around the globe.</p>
              <ul>
                <li><strong>British Currency:</strong> Bank of England notes, Scottish and Irish notes</li>
                <li><strong>Canadian Currency:</strong> Dominion of Canada and Bank of Canada notes</li>
                <li><strong>European Currency:</strong> Pre-Euro currency from major European nations</li>
                <li><strong>Asian Currency:</strong> Chinese, Japanese, and other Asian banknotes</li>
                <li><strong>Latin American Currency:</strong> Mexican, Brazilian, and South American notes</li>
                <li><strong>African Currency:</strong> Colonial and modern African banknotes</li>
                <li><strong>Obsolete Currency:</strong> Currency from countries that no longer exist</li>
                <li><strong>Emergency Currency:</strong> Notgeld and emergency issues from various countries</li>
                <li><strong>Specimen Notes:</strong> Unissued specimen and proof notes</li>
                <li><strong>Polymer Notes:</strong> Modern plastic currency from various countries</li>
              </ul>
            </div>

            <div class="service-card large fade-in">
              <div class="service-icon">🏛️</div>
              <h3>Obsolete & Broken Bank Notes</h3>
              <p>We purchase obsolete currency from defunct banks and institutions, including broken bank notes and private currency issues.</p>
              <ul>
                <li><strong>Broken Bank Notes:</strong> Currency from failed banks (1800s-1860s)</li>
                <li><strong>State Bank Notes:</strong> Pre-Civil War state-chartered bank currency</li>
                <li><strong>Private Bank Notes:</strong> Currency issued by private banks and institutions</li>
                <li><strong>Railroad Currency:</strong> Notes issued by railroad companies</li>
                <li><strong>Merchant Scrip:</strong> Private company currency and trade tokens</li>
                <li><strong>Colonial Currency:</strong> Pre-Revolutionary War colonial notes</li>
                <li><strong>Continental Currency:</strong> Revolutionary War era Continental Congress notes</li>
                <li><strong>Territorial Currency:</strong> Notes from U.S. territories before statehood</li>
                <li><strong>Depression Scrip:</strong> Local currency issued during the Great Depression</li>
                <li><strong>Advertising Notes:</strong> Promotional notes used by businesses</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="section" style="background: var(--gray-50);">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Currency Grading & Condition</h2>
            <p>Understanding how condition affects currency value</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card fade-in">
              <div class="service-icon">🏆</div>
              <h3>Uncirculated (UNC)</h3>
              <p><strong>Perfect Condition:</strong> No signs of handling, crisp corners, original paper quality</p>
              <p><strong>Grades 60-70:</strong> Gem Uncirculated (65-70), Choice Uncirculated (63-64), Uncirculated (60-62)</p>
              <p><strong>Value Impact:</strong> Highest values, especially for rare notes</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">⭐</div>
              <h3>About Uncirculated (AU)</h3>
              <p><strong>Minimal Handling:</strong> Slight evidence of handling but retains most original crispness</p>
              <p><strong>Grades 50-58:</strong> Choice About Uncirculated (55-58), About Uncirculated (50-53)</p>
              <p><strong>Value Impact:</strong> Strong values, popular with collectors</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">💎</div>
              <h3>Extremely Fine (XF/EF)</h3>
              <p><strong>Light Circulation:</strong> Light handling with minor folds but still attractive</p>
              <p><strong>Grades 40-45:</strong> Choice Extremely Fine (45), Extremely Fine (40)</p>
              <p><strong>Value Impact:</strong> Good values for scarce notes</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">✨</div>
              <h3>Very Fine (VF)</h3>
              <p><strong>Moderate Circulation:</strong> Clear evidence of folding but all details visible</p>
              <p><strong>Grades 20-35:</strong> Choice Very Fine (30-35), Very Fine (20-25)</p>
              <p><strong>Value Impact:</strong> Solid values for common to scarce notes</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">📄</div>
              <h3>Fine (F) & Very Good (VG)</h3>
              <p><strong>Heavy Circulation:</strong> Multiple folds, some wear but still intact</p>
              <p><strong>Grades 8-15:</strong> Fine (12-15), Very Good (8-10)</p>
              <p><strong>Value Impact:</strong> Lower values but still collectible for rare notes</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">📋</div>
              <h3>Good (G) & Fair</h3>
              <p><strong>Extensive Wear:</strong> Heavy folds, possible tears, but still complete</p>
              <p><strong>Grades 4-6:</strong> Good (4-6), Fair (2-3)</p>
              <p><strong>Value Impact:</strong> Minimal values except for very rare notes</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="text-center fade-in">
            <h2>What Makes Currency Valuable</h2>
            <p>Key factors that determine paper money value</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card fade-in">
              <div class="service-icon">🔢</div>
              <h3>Rarity & Scarcity</h3>
              <p><strong>Print Runs:</strong> Notes with smaller print runs are generally more valuable</p>
              <p><strong>Survival Rate:</strong> How many examples still exist in collectible condition</p>
              <p><strong>Key Dates:</strong> Certain years or series are scarcer than others</p>
              <p><strong>Varieties:</strong> Different signatures, seals, or printing variations</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">🎯</div>
              <h3>Condition & Grade</h3>
              <p><strong>Paper Quality:</strong> Original crispness and color retention</p>
              <p><strong>Centering:</strong> How well the design is centered on the note</p>
              <p><strong>Margins:</strong> Adequate borders around the printed design</p>
              <p><strong>Defects:</strong> Tears, stains, writing, or other damage</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">📊</div>
              <h3>Historical Significance</h3>
              <p><strong>Historical Period:</strong> Notes from important historical eras</p>
              <p><strong>Design Elements:</strong> Attractive or significant artwork and designs</p>
              <p><strong>Issuing Authority:</strong> Federal vs. state vs. private bank issues</p>
              <p><strong>Regional Interest:</strong> Local bank notes from specific areas</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">⭐</div>
              <h3>Special Features</h3>
              <p><strong>Serial Numbers:</strong> Low numbers, solid numbers, or special patterns</p>
              <p><strong>Star Notes:</strong> Replacement notes marked with a star</p>
              <p><strong>Errors:</strong> Printing, cutting, or other production errors</p>
              <p><strong>Signatures:</strong> Rare or desirable signature combinations</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section" style="background: var(--gray-50);">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Currency Authentication</h2>
            <p>How we verify authenticity and detect counterfeits</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card fade-in">
              <div class="service-icon">🔍</div>
              <h3>Paper & Printing Analysis</h3>
              <p><strong>Paper Composition:</strong> Genuine currency uses specific cotton/linen blend paper</p>
              <p><strong>Printing Methods:</strong> Intaglio printing creates raised ink texture</p>
              <p><strong>Ink Analysis:</strong> Magnetic and color-changing inks in genuine notes</p>
              <p><strong>Watermarks:</strong> Embedded watermarks visible when held to light</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">🔬</div>
              <h3>Security Features</h3>
              <p><strong>Security Threads:</strong> Embedded threads in modern currency</p>
              <p><strong>Microprinting:</strong> Tiny text visible under magnification</p>
              <p><strong>Color-Changing Ink:</strong> Ink that changes color when tilted</p>
              <p><strong>UV Features:</strong> Elements visible under ultraviolet light</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">📏</div>
              <h3>Physical Characteristics</h3>
              <p><strong>Dimensions:</strong> Precise measurements for each denomination and series</p>
              <p><strong>Thickness:</strong> Consistent paper thickness and feel</p>
              <p><strong>Edge Quality:</strong> Clean, precise cutting of genuine notes</p>
              <p><strong>Serial Numbers:</strong> Proper fonts, spacing, and ink consistency</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">📚</div>
              <h3>Reference Materials</h3>
              <p><strong>Standard Catalogs:</strong> Friedberg, Hessler, and other reference works</p>
              <p><strong>Population Reports:</strong> PMG and PCGS Currency population data</p>
              <p><strong>Auction Records:</strong> Recent sales data for comparable notes</p>
              <p><strong>Variety Guides:</strong> Detailed information on known varieties and errors</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Selling Your Currency Collection</h2>
            <p>Tips for maximizing the value of your paper money</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card fade-in">
              <h4>Preparation Tips</h4>
              <ul>
                <li>Handle notes carefully by the edges to avoid damage</li>
                <li>Store notes flat in protective holders or albums</li>
                <li>Organize by type, denomination, or series</li>
                <li>Research your notes using standard reference guides</li>
                <li>Document any special features or varieties</li>
              </ul>
            </div>

            <div class="service-card fade-in">
              <h4>What Not to Do</h4>
              <ul>
                <li>Never clean or wash currency - it destroys value</li>
                <li>Don't tape or glue damaged notes</li>
                <li>Avoid folding notes unnecessarily</li>
                <li>Don't write on or mark currency</li>
                <li>Never iron or press wrinkled notes</li>
              </ul>
            </div>

            <div class="service-card fade-in">
              <h4>Documentation to Bring</h4>
              <ul>
                <li>Any certificates or grading reports</li>
                <li>Purchase receipts or previous appraisals</li>
                <li>Family history or provenance information</li>
                <li>Reference materials showing varieties</li>
                <li>Insurance documentation if applicable</li>
              </ul>
            </div>

            <div class="service-card fade-in">
              <h4>Evaluation Process</h4>
              <ul>
                <li>Authentication verification using multiple methods</li>
                <li>Condition assessment and grading</li>
                <li>Rarity and variety identification</li>
                <li>Current market value research</li>
                <li>Competitive offer based on wholesale values</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <div class="container">
          <div class="cta-content fade-in">
            <h2>Sell Your Currency Collection Today</h2>
            <p>Get expert evaluation and competitive offers for your paper money and currency collection</p>
            <div class="cta-buttons">
              <a href="/contact" class="btn btn-primary" data-route="/contact">Visit Our Store</a>
              <a href="tel:+12035550123" class="btn btn-secondary">Call (203) 555-0123</a>
            </div>
            <div style="margin-top: 2rem; font-size: 0.875rem; opacity: 0.8;">
              <p>💵 Free evaluations | 📚 Expert knowledge | 💰 Immediate payment available</p>
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