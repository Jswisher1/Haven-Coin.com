export default class JewelryPage {
  render() {
    return `
      <section class="page-hero">
        <div class="container">
          <div class="page-hero-content fade-in">
            <h1>Fine Jewelry & Custom Design</h1>
            <p>Exquisite jewelry pieces crafted with precision, passion, and over two decades of expertise in New Haven</p>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Our Jewelry Collections</h2>
            <p>From timeless classics to contemporary masterpieces - creating memories that last forever</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card large fade-in">
              <div class="service-icon">💍</div>
              <h3>Engagement Rings</h3>
              <p>Create the perfect symbol of your love with our stunning engagement ring collection and custom design services. Each ring is crafted to tell your unique love story.</p>
              <ul>
                <li><strong>Classic Solitaire Settings:</strong> Timeless elegance featuring certified diamonds in traditional 4 or 6-prong settings</li>
                <li><strong>Vintage-Inspired Halo Designs:</strong> Art Deco and Victorian-style rings with intricate details and milgrain work</li>
                <li><strong>Three-Stone Anniversary Rings:</strong> Past, present, and future designs symbolizing your journey together</li>
                <li><strong>Modern Tension Settings:</strong> Contemporary designs that appear to suspend the diamond in mid-air</li>
                <li><strong>Vintage Estate Rings:</strong> Authentic antique rings from the 1920s-1950s with original craftsmanship</li>
                <li><strong>Custom CAD Designs:</strong> 3D computer modeling allows you to see your ring before it's made</li>
                <li><strong>Certified Diamond Selection:</strong> GIA, AGS, and EGL certified diamonds with detailed grading reports</li>
                <li><strong>Alternative Gemstone Options:</strong> Sapphires, emeralds, rubies, and other precious stones for unique rings</li>
                <li><strong>Ethical Sourcing:</strong> Conflict-free diamonds and responsibly sourced gemstones</li>
                <li><strong>Lifetime Services:</strong> Free cleaning, inspection, and maintenance for life</li>
              </ul>
            </div>

            <div class="service-card large fade-in">
              <div class="service-icon">💒</div>
              <h3>Wedding Bands</h3>
              <p>Beautiful wedding bands to complement your engagement ring and symbolize your eternal commitment. From simple elegance to elaborate designs.</p>
              <ul>
                <li><strong>Classic Gold Bands:</strong> 14k and 18k yellow, white, and rose gold in various widths and finishes</li>
                <li><strong>Platinum Wedding Sets:</strong> The ultimate in durability and purity for lifetime wear</li>
                <li><strong>Diamond Eternity Bands:</strong> Continuous diamonds around the entire band for maximum sparkle</li>
                <li><strong>Matching Bridal Sets:</strong> Perfectly coordinated engagement ring and wedding band combinations</li>
                <li><strong>Men's Wedding Bands:</strong> Masculine designs in precious metals with optional diamond accents</li>
                <li><strong>Alternative Metal Options:</strong> Titanium, tungsten, and palladium for modern preferences</li>
                <li><strong>Custom Engraving Services:</strong> Personal messages, dates, and symbols inside or outside the band</li>
                <li><strong>Vintage-Style Milgrain Details:</strong> Hand-finished beaded edges for antique appeal</li>
                <li><strong>Comfort Fit Designs:</strong> Rounded interior for comfortable all-day wear</li>
                <li><strong>Anniversary Upgrades:</strong> Add diamonds or upgrade to larger stones for milestone anniversaries</li>
              </ul>
            </div>

            <div class="service-card large fade-in">
              <div class="service-icon">📿</div>
              <h3>Necklaces & Pendants</h3>
              <p>Elegant necklaces and pendants for every occasion, from everyday wear to special celebrations. Each piece designed to enhance your natural beauty.</p>
              <ul>
                <li><strong>Diamond Tennis Necklaces:</strong> Continuous line of matched diamonds in secure settings</li>
                <li><strong>Pearl Strand Necklaces:</strong> Cultured and natural pearls in various sizes and colors</li>
                <li><strong>Gold Chain Collections:</strong> Rope, box, curb, and figaro chains in multiple lengths</li>
                <li><strong>Gemstone Pendants:</strong> Birthstones and precious gems in artistic settings</li>
                <li><strong>Religious & Spiritual Jewelry:</strong> Crosses, Stars of David, and other meaningful symbols</li>
                <li><strong>Statement Collar Necklaces:</strong> Bold designs for special occasions and evening wear</li>
                <li><strong>Layering Chain Sets:</strong> Multiple chains designed to be worn together</li>
                <li><strong>Custom Locket Designs:</strong> Personalized lockets to hold cherished photos</li>
                <li><strong>Vintage Reproduction Pieces:</strong> Recreations of popular historical designs</li>
                <li><strong>Convertible Designs:</strong> Pieces that transform from necklace to bracelet or brooch</li>
              </ul>
            </div>

            <div class="service-card large fade-in">
              <div class="service-icon">👂</div>
              <h3>Earrings</h3>
              <p>From subtle studs to dramatic chandeliers, our earring collection offers styles for every taste and occasion. Perfect for completing any look.</p>
              <ul>
                <li><strong>Diamond Stud Earrings:</strong> Classic round, princess, and fancy cut diamonds in secure settings</li>
                <li><strong>Pearl Drop Earrings:</strong> Elegant cultured pearls in white, black, and colored varieties</li>
                <li><strong>Gemstone Hoops:</strong> Continuous gemstones in gold or platinum hoops</li>
                <li><strong>Chandelier Earrings:</strong> Dramatic designs for formal occasions and evening wear</li>
                <li><strong>Vintage Clip-On Styles:</strong> Non-pierced options in authentic vintage designs</li>
                <li><strong>Modern Geometric Designs:</strong> Contemporary shapes and patterns for fashion-forward looks</li>
                <li><strong>Convertible Day-to-Night Pieces:</strong> Earrings that transform for different occasions</li>
                <li><strong>Custom Matching Sets:</strong> Earrings designed to coordinate with existing jewelry</li>
                <li><strong>Huggie and Hoop Varieties:</strong> Small to large hoops in various metals and styles</li>
                <li><strong>Ear Climbers and Cuffs:</strong> Modern designs that follow the ear's natural curve</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="section" style="background: var(--gray-50);">
        <div class="container">
          <div class="about-content">
            <div class="about-text fade-in">
              <h2>Custom Jewelry Design Process</h2>
              <p>Bring your vision to life with our comprehensive custom jewelry design services. Our master jewelers work closely with you to create unique, personalized pieces that tell your story and reflect your individual style.</p>
              
              <p>From initial concept to final creation, we guide you through every step of the design process. Using state-of-the-art CAD technology combined with traditional craftsmanship techniques, we ensure your custom piece exceeds your expectations and becomes a treasured heirloom.</p>
              
              <div class="process-steps" style="margin-top: 2rem;">
                <div class="service-card" style="margin-bottom: 1.5rem;">
                  <h4>1. Initial Consultation & Concept Development</h4>
                  <p>We begin with a detailed consultation to understand your vision, style preferences, budget, and timeline. We'll discuss design possibilities, show you examples of similar work, and explore different options for metals and gemstones. This collaborative process ensures we capture your exact vision.</p>
                </div>
                <div class="service-card" style="margin-bottom: 1.5rem;">
                  <h4>2. Design Development & 3D Modeling</h4>
                  <p>Our designers create detailed sketches and 3D CAD renderings, allowing you to visualize your piece from every angle before production begins. We can make adjustments to the design until it's perfect, ensuring complete satisfaction before we begin crafting.</p>
                </div>
                <div class="service-card" style="margin-bottom: 1.5rem;">
                  <h4>3. Material Selection & Sourcing</h4>
                  <p>Choose from our extensive selection of certified diamonds, precious gemstones, and high-quality metals. We source only the finest materials and can accommodate special requests for specific stones or metals. All diamonds come with certification from respected laboratories.</p>
                </div>
                <div class="service-card" style="margin-bottom: 1.5rem;">
                  <h4>4. Expert Craftsmanship & Creation</h4>
                  <p>Our master jewelers handcraft your piece using time-honored techniques combined with modern precision tools. Each step is carefully executed to ensure exceptional quality, durability, and beauty that will last for generations.</p>
                </div>
                <div class="service-card">
                  <h4>5. Final Inspection & Delivery</h4>
                  <p>Before delivery, each piece undergoes rigorous quality inspection. We provide detailed care instructions, warranty information, and schedule follow-up appointments for cleaning and maintenance to keep your jewelry looking its best.</p>
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
            <p>Discover timeless pieces with rich history and exceptional craftsmanship from bygone eras</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card fade-in">
              <div class="service-icon">🎭</div>
              <h3>Art Deco Collection (1920s-1930s)</h3>
              <p><strong>Geometric Designs:</strong> Bold lines, vibrant gemstones, and innovative settings that defined the Jazz Age aesthetic. Featuring pieces with emeralds, sapphires, and diamonds in platinum settings.</p>
              <p><strong>Signature Elements:</strong> Angular motifs, stepped designs, and contrasting gemstone combinations that reflect the era's fascination with modern technology and exotic cultures.</p>
              <p><strong>Notable Pieces:</strong> Cocktail rings, long pearl necklaces, geometric brooches, and elaborate bracelet sets that epitomize the glamour of the Roaring Twenties.</p>
              <p><strong>Investment Value:</strong> Art Deco jewelry continues to appreciate due to its distinctive style, quality craftsmanship, and historical significance.</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">👑</div>
              <h3>Victorian Treasures (1837-1901)</h3>
              <p><strong>Romantic Designs:</strong> Ornate pieces reflecting the elegance and sentimentality of the Victorian era, including mourning jewelry, cameos, and intricate lockets with hidden compartments.</p>
              <p><strong>Symbolic Elements:</strong> Hearts, flowers, hands, and serpents representing love, friendship, and eternity. Many pieces feature hair work and memorial elements.</p>
              <p><strong>Craftsmanship:</strong> Hand-engraved details, intricate gold work with natural motifs, and the use of newly discovered gemstones from colonial territories.</p>
              <p><strong>Collecting Focus:</strong> Mourning jewelry, portrait miniatures, charm bracelets, and elaborate parures (matching jewelry sets).</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">🌸</div>
              <h3>Edwardian Elegance (1901-1915)</h3>
              <p><strong>Delicate Femininity:</strong> Intricate filigree work and the newly popular platinum metal, characterized by garland motifs, bow designs, and extensive use of diamonds and pearls.</p>
              <p><strong>Technical Innovation:</strong> Advanced metalworking techniques allowed for incredibly delicate and detailed designs that seemed to defy gravity.</p>
              <p><strong>Popular Styles:</strong> Dog collar necklaces, tiara-style hair ornaments, delicate brooches, and elaborate stomacher designs.</p>
              <p><strong>Cultural Context:</strong> Jewelry reflecting the Belle Époque period's optimism and technological advancement before World War I changed everything.</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">⌚</div>
              <h3>Vintage Timepieces</h3>
              <p><strong>Luxury Watch Brands:</strong> Carefully curated collection of vintage and contemporary luxury watches from Rolex, Omega, Cartier, Patek Philippe, and other prestigious manufacturers.</p>
              <p><strong>Pocket Watches:</strong> American railroad watches, European dress watches, and hunting case watches with intricate movements and beautiful cases.</p>
              <p><strong>Ladies' Watches:</strong> Art Deco cocktail watches, mid-century modern designs, and contemporary luxury pieces with diamond and gemstone accents.</p>
              <p><strong>Investment Potential:</strong> Vintage watches have shown strong appreciation, especially rare models from prestigious manufacturers with complete documentation.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section" style="background: var(--gray-50);">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Comprehensive Jewelry Services</h2>
            <p>Complete jewelry care and maintenance services to keep your treasures beautiful</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card fade-in">
              <div class="service-icon">🔧</div>
              <h3>Expert Repair Services</h3>
              <p><strong>Ring Sizing:</strong> Professional resizing for all ring types while maintaining structural integrity and original design elements. We can size rings up or down multiple sizes.</p>
              <p><strong>Stone Setting & Replacement:</strong> Secure setting and replacement of loose or missing gemstones using traditional and modern techniques. We maintain an inventory of common replacement stones.</p>
              <p><strong>Chain & Bracelet Repair:</strong> Expert repair of broken chains, clasps, and links using matching metals and techniques that make repairs virtually invisible.</p>
              <p><strong>Prong Retipping:</strong> Restoration of worn prongs to secure valuable stones, preventing loss and maintaining the jewelry's original appearance.</p>
              <p><strong>Clasp Replacement:</strong> Upgrading worn or broken clasps with secure, modern alternatives that match the original design.</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">✨</div>
              <h3>Restoration Services</h3>
              <p><strong>Antique Restoration:</strong> Careful restoration of vintage and antique pieces to their original beauty while preserving historical integrity and value.</p>
              <p><strong>Refinishing & Polishing:</strong> Professional polishing and refinishing to remove scratches and restore luster without removing excessive metal.</p>
              <p><strong>Replating Services:</strong> Gold, silver, rhodium, and rose gold plating services for worn pieces, restoring their original color and protection.</p>
              <p><strong>Pearl Restringing:</strong> Expert restringing of pearl necklaces and bracelets with proper knotting techniques and matching thread colors.</p>
              <p><strong>Enamel Repair:</strong> Specialized restoration of enamel work on vintage and antique pieces using traditional techniques and materials.</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">🧽</div>
              <h3>Cleaning & Maintenance</h3>
              <p><strong>Ultrasonic Cleaning:</strong> Deep cleaning using professional ultrasonic equipment to remove dirt and grime from hard-to-reach areas.</p>
              <p><strong>Steam Cleaning:</strong> Gentle steam cleaning for delicate pieces and settings that cannot withstand ultrasonic cleaning.</p>
              <p><strong>Hand Polishing:</strong> Careful hand polishing to restore original shine and finish without damaging delicate details or settings.</p>
              <p><strong>Comprehensive Inspection:</strong> Thorough inspection to identify potential issues before they become problems, including loose stones and worn prongs.</p>
              <p><strong>Preventive Maintenance:</strong> Regular maintenance schedules to keep your jewelry in optimal condition and prevent costly repairs.</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">✍️</div>
              <h3>Engraving Services</h3>
              <p><strong>Hand Engraving:</strong> Traditional hand engraving for personalized messages, monograms, and decorative designs with artistic flair.</p>
              <p><strong>Machine Engraving:</strong> Precise machine engraving for consistent lettering and patterns, perfect for wedding bands and gifts.</p>
              <p><strong>Monogramming:</strong> Classic monogram designs for rings, pendants, cufflinks, and other personal jewelry pieces.</p>
              <p><strong>Special Occasion Engraving:</strong> Custom engraving for weddings, anniversaries, graduations, and milestone celebrations.</p>
              <p><strong>Memorial Engraving:</strong> Sensitive engraving services for memorial jewelry and remembrance pieces.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Gemstone Education & Selection</h2>
            <p>Learn about the precious stones that make jewelry truly special</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card fade-in">
              <div class="service-icon">💎</div>
              <h3>Diamond Knowledge</h3>
              <p><strong>The 4 Cs Explained:</strong> Understanding Cut, Color, Clarity, and Carat weight and how these factors affect beauty, rarity, and value in diamond selection.</p>
              <p><strong>Cut Quality:</strong> Learn about excellent, very good, good, fair, and poor cut grades and how cut affects a diamond's brilliance and fire.</p>
              <p><strong>Color Grading:</strong> Understanding the D-Z color scale and how subtle color differences affect value and appearance in different settings.</p>
              <p><strong>Clarity Characteristics:</strong> Learning about inclusions and blemishes and how they affect a diamond's beauty and value.</p>
              <p><strong>Certification:</strong> Understanding GIA, AGS, and other laboratory reports and what they mean for your purchase.</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">🔴</div>
              <h3>Colored Gemstones</h3>
              <p><strong>The Big Three:</strong> Rubies, sapphires, and emeralds - understanding quality factors, origins, and treatments that affect value.</p>
              <p><strong>Semi-Precious Stones:</strong> Tanzanite, aquamarine, tourmaline, and other beautiful gemstones for unique jewelry pieces.</p>
              <p><strong>Birthstones:</strong> Traditional and modern birthstone options with historical significance and personal meaning.</p>
              <p><strong>Treatment Disclosure:</strong> Understanding heat treatment, oil filling, and other enhancements and how they affect value.</p>
              <p><strong>Origin Significance:</strong> How geographic origin affects value, especially for Kashmir sapphires, Burmese rubies, and Colombian emeralds.</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">🔵</div>
              <h3>Certification & Grading</h3>
              <p><strong>Laboratory Reports:</strong> Understanding certificates from GIA, AGL, Gübelin, and other respected laboratories and what these documents mean.</p>
              <p><strong>Grading Standards:</strong> How different laboratories grade gemstones and the consistency of their standards.</p>
              <p><strong>Treatment Identification:</strong> How laboratories identify and disclose treatments and enhancements.</p>
              <p><strong>Synthetic Detection:</strong> How modern laboratories distinguish between natural and synthetic gemstones.</p>
              <p><strong>Value Documentation:</strong> How certification affects insurance, resale value, and peace of mind.</p>
            </div>
            
            <div class="service-card fade-in">
              <div class="service-icon">🛡️</div>
              <h3>Care & Protection</h3>
              <p><strong>Daily Care:</strong> Proper techniques for cleaning and maintaining your jewelry to preserve its beauty and value.</p>
              <p><strong>Storage Solutions:</strong> Appropriate storage methods to prevent damage, scratching, and tarnishing.</p>
              <p><strong>Insurance Considerations:</strong> Understanding insurance coverage, appraisals, and documentation requirements.</p>
              <p><strong>Professional Maintenance:</strong> When to seek professional cleaning, inspection, and repair services.</p>
              <p><strong>Travel Tips:</strong> Safe practices for traveling with valuable jewelry and international considerations.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section" style="background: var(--gray-50);">
        <div class="container">
          <div class="text-center fade-in">
            <h2>Jewelry Investment & Collecting</h2>
            <p>Understanding jewelry as both personal adornment and investment</p>
          </div>
          
          <div class="services-grid">
            <div class="service-card fade-in">
              <div class="service-icon">📈</div>
              <h3>Investment Potential</h3>
              <p><strong>Appreciating Categories:</strong> Vintage designer pieces, rare gemstones, and exceptional craftsmanship that tend to appreciate over time.</p>
              <p><strong>Market Trends:</strong> Understanding current market conditions and factors that drive jewelry values in the secondary market.</p>
              <p><strong>Liquidity Considerations:</strong> How easily different types of jewelry can be sold and factors that affect marketability.</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">🏛️</div>
              <h3>Estate Jewelry Value</h3>
              <p><strong>Period Identification:</strong> Recognizing different historical periods and their characteristic design elements.</p>
              <p><strong>Maker Marks:</strong> Identifying signatures, hallmarks, and maker's marks that can significantly affect value.</p>
              <p><strong>Condition Assessment:</strong> Understanding how condition affects value and what repairs are worthwhile.</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">🔍</div>
              <h3>Authentication</h3>
              <p><strong>Designer Authentication:</strong> Verifying authenticity of pieces by Cartier, Tiffany, Van Cleef & Arpels, and other luxury brands.</p>
              <p><strong>Period Verification:</strong> Confirming that pieces are genuinely from their claimed historical periods.</p>
              <p><strong>Gemstone Verification:</strong> Ensuring that gemstones are natural and properly disclosed for treatments.</p>
            </div>

            <div class="service-card fade-in">
              <div class="service-icon">📋</div>
              <h3>Documentation</h3>
              <p><strong>Provenance Records:</strong> Maintaining records of ownership, purchase, and any modifications or repairs.</p>
              <p><strong>Appraisal Updates:</strong> Regular appraisal updates to reflect current market values for insurance purposes.</p>
              <p><strong>Photographic Records:</strong> Detailed photography for insurance claims and identification purposes.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="cta-section">
        <div class="container">
          <div class="cta-content fade-in">
            <h2>Find Your Perfect Piece</h2>
            <p>Whether you're seeking a unique engagement ring, a special gift, or a custom creation that reflects your personal style, our expert team is here to help you find or create the perfect piece</p>
            <div class="cta-buttons">
              <a href="/contact" class="btn btn-primary" data-route="/contact">Schedule Consultation</a>
              <a href="/services" class="btn btn-secondary" data-route="/services">View All Services</a>
            </div>
            <div style="margin-top: 2rem; font-size: 0.875rem; opacity: 0.8;">
              <p>💍 Custom design consultations available | 🔧 Expert repair services | 📞 (203) 555-0123</p>
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