// Image optimization utilities to reduce HTTP requests and improve performance
export class ImageOptimizer {
  constructor() {
    this.cache = new Map();
    this.observer = null;
    this.setupIntersectionObserver();
  }

  setupIntersectionObserver() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.loadImage(entry.target);
        }
      });
    }, {
      rootMargin: '50px 0px',
      threshold: 0.01
    });
  }

  // Optimize image URLs for better performance
  optimizeImageUrl(url, width = 800, height = 400, quality = 80) {
    if (url.includes('pexels.com')) {
      // Add Pexels optimization parameters
      const baseUrl = url.split('?')[0];
      return `${baseUrl}?auto=compress&cs=tinysrgb&w=${width}&h=${height}&fit=crop&q=${quality}`;
    }
    return url;
  }

  // Create responsive image sources
  createResponsiveSources(baseUrl) {
    return {
      mobile: this.optimizeImageUrl(baseUrl, 400, 300, 75),
      tablet: this.optimizeImageUrl(baseUrl, 800, 400, 80),
      desktop: this.optimizeImageUrl(baseUrl, 1200, 600, 85)
    };
  }

  // Lazy load images with intersection observer
  lazyLoadImage(img, src) {
    img.dataset.src = src;
    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB2aWV3Qm94PSIwIDAgMSAxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9IiNmN2ZhZmMiLz48L3N2Zz4=';
    img.classList.add('lazy-loading');
    this.observer.observe(img);
  }

  // Load image when it becomes visible
  async loadImage(img) {
    const src = img.dataset.src;
    if (!src) return;

    try {
      // Check cache first
      if (this.cache.has(src)) {
        img.src = this.cache.get(src);
        this.onImageLoaded(img);
        return;
      }

      // Create new image to preload
      const newImg = new Image();
      newImg.onload = () => {
        this.cache.set(src, src);
        img.src = src;
        this.onImageLoaded(img);
      };
      newImg.onerror = () => {
        this.onImageError(img);
      };
      newImg.src = src;

    } catch (error) {
      this.onImageError(img);
    }
  }

  onImageLoaded(img) {
    img.classList.remove('lazy-loading');
    img.classList.add('lazy-loaded');
    this.observer.unobserve(img);
  }

  onImageError(img) {
    img.classList.remove('lazy-loading');
    img.classList.add('lazy-error');
    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjIwMCIgaGVpZ2h0PSIyMDAiIGZpbGw9IiNmN2ZhZmMiLz48dGV4dCB4PSIxMDAiIHk9IjEwMCIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZmlsbD0iIzlmYTZiNyI+SW1hZ2UgTm90IEZvdW5kPC90ZXh0Pjwvc3ZnPg==';
    this.observer.unobserve(img);
  }

  // Preload critical images
  preloadCriticalImages(urls) {
    urls.forEach(url => {
      if (!this.cache.has(url)) {
        const img = new Image();
        img.onload = () => this.cache.set(url, url);
        img.src = url;
      }
    });
  }

  // Generate WebP sources for better compression
  generateWebPSource(url) {
    if (url.includes('pexels.com')) {
      return url.replace(/\.(jpg|jpeg|png)/, '.webp');
    }
    return url;
  }

  // Create picture element with multiple sources
  createPictureElement(baseUrl, alt, className = '') {
    const sources = this.createResponsiveSources(baseUrl);
    const webpSources = {
      mobile: this.generateWebPSource(sources.mobile),
      tablet: this.generateWebPSource(sources.tablet),
      desktop: this.generateWebPSource(sources.desktop)
    };

    return `
      <picture class="${className}">
        <source media="(min-width: 1024px)" srcset="${webpSources.desktop}" type="image/webp">
        <source media="(min-width: 1024px)" srcset="${sources.desktop}">
        <source media="(min-width: 768px)" srcset="${webpSources.tablet}" type="image/webp">
        <source media="(min-width: 768px)" srcset="${sources.tablet}">
        <source srcset="${webpSources.mobile}" type="image/webp">
        <img src="${sources.mobile}" alt="${alt}" class="lazy-image" loading="lazy">
      </picture>
    `;
  }
}

// Export singleton instance
export const imageOptimizer = new ImageOptimizer();