export default class CurrencyPage {
  render() {
    return `
      <section class="page-hero">
        <div class="container">
          <div class="page-hero-content fade-in">
            <h1>Paper Money & Currency</h1>
            <p>We buy collectible paper money, vintage currency, and rare banknotes</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="text-center mb-8 fade-in">
            <h2>Currency We Purchase</h2>
            <p class="text-large text-muted">From common notes to rare specimens</p>
          </div>
          
          <div class="grid grid-2">
            <div class="card fade-in">
              <h3 class="mb-4">U.S. Large Size Notes</h3>
              <ul style="list-style: none; padding: 0;" class="text-small">
                <li class="mb-2">• Silver Certificates (1886-1923)</li>
                <li class="mb-2">• Gold Certificates (1863-1922)</li>
                <li class="mb-2">• United States Notes (Legal Tender)</li>
                <li class="mb-2">• National Bank Notes</li>
                <li class="mb-2">• Federal Reserve Bank Notes</li>
                <li class="mb-2">• Treasury Notes (Coin Notes)</li>
                <li class="mb-2">• Interest Bearing Notes</li>
              </ul>
              <div class="text-accent font-semibold mt-4">Premium prices for high grades</div>
            </div>

            <div class="card fade-in">
              <h3 class="mb-4">U.S. Small Size Notes</h3>
              <ul style="list-style: none; padding: 0;" class="text-small">
                <li class="mb-2">• Silver Certificates (1928-1957)</li>
                <li class="mb-2">• Gold Certificates (1928-1934)</li>
                <li class="mb-2">• United States Notes (1928-1966)</li>
                <li class="mb-2">• Federal Reserve Notes</li>
                <li class="mb-2">• Star Notes (replacement notes)</li>
                <li class="mb-2">• Low serial numbers</li>
                <li class="mb-2">• Fancy serial numbers</li>
              </ul>
              <div class="text-accent font-semibold mt-4">Star notes pay premiums</div>
            </div>

            <div class="card fade-in">
              <h3 class="mb-4">Fractional Currency</h3>
              <ul style="list-style: none; padding: 0;" class="text-small">
                <li class="mb-2">• 3 cent fractional notes</li>
                <li class="mb-2">• 5 cent fractional notes</li>
                <li class="mb-2">• 10 cent fractional notes</li>
                <li class="mb-2">• 15 cent fractional notes</li>
                <li class="mb-2">• 25 cent fractional notes</li>
                <li class="mb-2">• 50 cent fractional notes</li>
                <li class="mb-2">• All five issues (1862-1876)</li>
              </ul>
              <div class="text-accent font-semibold mt-4">Civil War era currency</div>
            </div>

            <div class="card fade-in">
              <h3 class="mb-4">Confederate & Obsolete</h3>
              <ul style="list-style: none; padding: 0;" class="text-small">
                <li class="mb-2">• Confederate States currency</li>
                <li class="mb-2">• State bank notes</li>
                <li class="mb-2">• Private bank notes</li>
                <li class="mb-2">• Railroad currency</li>
                <li class="mb-2">• Merchant scrip</li>
                <li class="mb-2">• Colonial currency</li>
                <li class="mb-2">• Broken bank notes</li>
              </ul>
              <div class="text-accent font-semibold mt-4">Historical significance valued</div>
            </div>
          </div>
        </div>
      </section>

      <section class="section" style="background: var(--surface);">
        <div class="container">
          <div class="text-center mb-8 fade-in">
            <h2>Error Notes & Varieties</h2>
          </div>
          
          <div class="grid grid-3">
            <div class="card card-compact fade-in">
              <h4 class="mb-2">Printing Errors</h4>
              <p class="text-small">Ink smears, fold-over errors, misaligned printing</p>
            </div>

            <div class="card card-compact fade-in">
              <h4 class="mb-2">Cutting Errors</h4>
              <p class="text-small">Off-center cuts, partial designs, miscut notes</p>
            </div>

            <div class="card card-compact fade-in">
              <h4 class="mb-2">Star Notes</h4>
              <p class="text-small">Replacement notes with star in serial number</p>
            </div>

            <div class="card card-compact fade-in">
              <h4 class="mb-2">Low Serial Numbers</h4>
              <p class="text-small">Serial numbers under 100, especially under 10</p>
            </div>

            <div class="card card-compact fade-in">
              <h4 class="mb-2">Fancy Serials</h4>
              <p class="text-small">Repeaters, radars, ladders, solids</p>
            </div>

            <div class="card card-compact fade-in">
              <h4 class="mb-2">Uncut Sheets</h4>
              <p class="text-small">Uncut sheets of 4, 16, or 32 notes</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="text-center mb-8 fade-in">
            <h2>Currency Grading Standards</h2>
          </div>
          
          <div class="process-grid">
            <div class="process-step fade-in">
              <div class="process-number">UNC</div>
              <h3>Uncirculated (60-70)</h3>
              <p>No handling, crisp corners, original paper quality</p>
            </div>

            <div class="process-step fade-in">
              <div class="process-number">AU</div>
              <h3>About Uncirculated (50-58)</h3>
              <p>Minimal handling, retains most crispness</p>
            </div>

            <div class="process-step fade-in">
              <div class="process-number">XF</div>
              <h3>Extremely Fine (40-45)</h3>
              <p>Light circulation, minor folds, still attractive</p>
            </div>

            <div class="process-step fade-in">
              <div class="process-number">VF</div>
              <h3>Very Fine (20-35)</h3>
              <p>Moderate circulation, all details visible</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section" style="background: var(--surface);">
        <div class="container">
          <div class="text-center mb-8 fade-in">
            <h2>What Makes Currency Valuable</h2>
          </div>
          
          <div class="grid grid-2">
            <div class="card fade-in">
              <h4 class="mb-4">Key Value Factors</h4>
              <ul style="list-style: none; padding: 0;" class="text-small">
                <li class="mb-2">• Rarity and scarcity</li>
                <li class="mb-2">• Condition and grade</li>
                <li class="mb-2">• Historical significance</li>
                <li class="mb-2">• Serial number features</li>
                <li class="mb-2">• Printing errors and varieties</li>
                <li class="mb-2">• Signature combinations</li>
                <li class="mb-2">• Age and series</li>
              </ul>
            </div>

            <div class="card fade-in">
              <h4 class="mb-4">High-Value Categories</h4>
              <ul style="list-style: none; padding: 0;" class="text-small">
                <li class="mb-2">• Large size gold certificates</li>
                <li class="mb-2">• Early silver certificates</li>
                <li class="mb-2">• National bank notes</li>
                <li class="mb-2">• Star replacement notes</li>
                <li class="mb-2">• Low serial numbers (under 100)</li>
                <li class="mb-2">• Confederate high denominations</li>
                <li class="mb-2">• Error notes and misprints</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <div class="container">
          <div class="cta-content fade-in">
            <h2>Sell Your Paper Money Collection</h2>
            <p>Expert currency evaluation and competitive offers</p>
            <div class="cta-buttons">
              <a href="/contact" class="btn btn-primary btn-large" data-route="/contact">Get Evaluation</a>
              <a href="tel:+12035550123" class="btn btn-secondary btn-large">Call Specialist</a>
            </div>
            <div style="margin-top: 2rem; font-size: 0.875rem; opacity: 0.8;">
              <p>All conditions accepted • Individual notes or collections • Free evaluations</p>
            </div>
          </div>
        </div>
      </section>
    `
  }

  async init() {
    const animationController = new (await import('../js/animations.js')).AnimationController()
    animationController.refresh()
  }
}