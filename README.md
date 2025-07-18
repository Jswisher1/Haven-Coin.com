# Haven Coin & Jewelry Website

A professional website for Haven Coin & Jewelry, New Haven's premier destination for rare coins, precious metals, and fine jewelry.

## Features

- **Modern Single Page Application**: Built with vanilla JavaScript and modern web standards
- **SEO Optimized**: Comprehensive SEO implementation with structured data, meta tags, and semantic HTML
- **Performance Focused**: Optimized loading, image compression, and resource bundling
- **Mobile Responsive**: Fully responsive design that works on all devices
- **Professional Design**: Clean, modern interface with smooth animations and micro-interactions

## Pages

- **Home**: Main landing page with clear call-to-action
- **What We Buy**: Detailed information about items purchased
  - Coins & Collectibles
  - Jewelry & Watches  
  - Bullion & Precious Metals
  - Currency & Paper Money
- **Services**: Comprehensive service offerings
- **About**: Company history and team information
- **Contact**: Store information and contact form
- **Blog**: News and educational content

## Technical Stack

- **Frontend**: Vanilla JavaScript (ES6+), CSS3, HTML5
- **Build Tool**: Vite
- **Performance**: Service Worker, lazy loading, resource optimization
- **SEO**: Structured data, Open Graph, Twitter Cards, sitemap
- **Analytics**: Google Analytics 4 integration

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/haven-coin-jewelry.git
cd haven-coin-jewelry
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
haven-coin-jewelry/
├── index.html              # Main HTML file with SEO optimization
├── src/
│   ├── main.js            # Application entry point
│   ├── style.css          # Main stylesheet
│   ├── pages/             # Page components
│   │   ├── home.js
│   │   ├── coins.js
│   │   ├── jewelry.js
│   │   ├── services.js
│   │   ├── about.js
│   │   ├── contact.js
│   │   ├── blog.js
│   │   └── 404.js
│   ├── js/                # Utility modules
│   │   ├── animations.js
│   │   ├── contact-form.js
│   │   ├── navigation.js
│   │   └── router.js
│   └── utils/             # Helper utilities
│       ├── imageOptimizer.js
│       └── resourceLoader.js
├── robots.txt             # Search engine directives
├── sitemap.xml           # Site structure for search engines
├── sw.js                 # Service worker for caching
└── package.json          # Project dependencies and scripts
```

## SEO Features

- **Structured Data**: Local business schema markup
- **Meta Tags**: Comprehensive meta tag implementation
- **Open Graph**: Social media sharing optimization
- **Sitemap**: XML sitemap for search engines
- **Robots.txt**: Search engine crawling directives
- **Canonical URLs**: Proper URL canonicalization
- **Performance**: Core Web Vitals optimization

## Performance Optimizations

- **Lazy Loading**: Images and components load on demand
- **Resource Bundling**: Minimized HTTP requests
- **Service Worker**: Caching for offline functionality
- **Image Optimization**: Responsive images with WebP support
- **Code Splitting**: Dynamic imports for better loading
- **Critical CSS**: Inline critical styles to prevent render blocking

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is proprietary software owned by Haven Coin & Jewelry.

## Contact

Haven Coin & Jewelry
- **Address**: 123 Chapel Street, New Haven, CT 06510
- **Phone**: (203) 555-0123
- **Email**: info@haven-coin.com
- **Website**: https://haven-coin.com

---

Built with ❤️ for the New Haven community