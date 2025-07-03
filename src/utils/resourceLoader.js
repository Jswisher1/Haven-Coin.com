// Resource loading utilities to minimize HTTP requests
export class ResourceLoader {
  constructor() {
    this.loadedResources = new Set();
    this.loadingPromises = new Map();
    this.prefetchQueue = [];
    this.setupPrefetching();
  }

  // Setup intelligent prefetching based on user behavior
  setupPrefetching() {
    // Prefetch on hover with debouncing
    let hoverTimeout;
    document.addEventListener('mouseover', (e) => {
      clearTimeout(hoverTimeout);
      hoverTimeout = setTimeout(() => {
        const link = e.target.closest('a[data-route]');
        if (link) {
          this.prefetchRoute(link.getAttribute('data-route'));
        }
      }, 100);
    });

    // Prefetch on focus for keyboard navigation
    document.addEventListener('focusin', (e) => {
      const link = e.target.closest('a[data-route]');
      if (link) {
        this.prefetchRoute(link.getAttribute('data-route'));
      }
    });

    // Prefetch based on viewport intersection
    const prefetchObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const link = entry.target.closest('a[data-route]');
          if (link) {
            this.prefetchRoute(link.getAttribute('data-route'));
          }
        }
      });
    }, { rootMargin: '200px' });

    // Observe navigation links
    setTimeout(() => {
      document.querySelectorAll('a[data-route]').forEach(link => {
        prefetchObserver.observe(link);
      });
    }, 1000);
  }

  // Load JavaScript modules with caching
  async loadModule(path) {
    if (this.loadedResources.has(path)) {
      return this.loadingPromises.get(path);
    }

    if (this.loadingPromises.has(path)) {
      return this.loadingPromises.get(path);
    }

    const promise = import(path).then(module => {
      this.loadedResources.add(path);
      return module;
    }).catch(error => {
      this.loadingPromises.delete(path);
      throw error;
    });

    this.loadingPromises.set(path, promise);
    return promise;
  }

  // Prefetch route resources
  async prefetchRoute(route) {
    const routeMap = {
      '/': '/src/pages/home.js',
      '/coins': '/src/pages/coins.js',
      '/jewelry': '/src/pages/jewelry.js',
      '/services': '/src/pages/services.js',
      '/about': '/src/pages/about.js',
      '/contact': '/src/pages/contact.js',
      '/blog': '/src/pages/blog.js',
      '/404': '/src/pages/404.js'
    };

    const modulePath = routeMap[route];
    if (modulePath && !this.loadedResources.has(modulePath)) {
      try {
        await this.loadModule(modulePath);
      } catch (error) {
        console.warn('Prefetch failed for:', modulePath);
      }
    }
  }

  // Bundle and minify inline CSS
  inlineCSS(css) {
    return css
      .replace(/\/\*[\s\S]*?\*\//g, '') // Remove comments
      .replace(/\s+/g, ' ') // Collapse whitespace
      .replace(/;\s*}/g, '}') // Remove unnecessary semicolons
      .replace(/\s*{\s*/g, '{') // Clean up braces
      .replace(/\s*}\s*/g, '}')
      .replace(/\s*;\s*/g, ';')
      .replace(/\s*:\s*/g, ':')
      .trim();
  }

  // Create resource hints
  createResourceHints() {
    const hints = [
      // DNS prefetch for external domains
      '<link rel="dns-prefetch" href="//images.pexels.com">',
      '<link rel="dns-prefetch" href="//www.googletagmanager.com">',
      
      // Preconnect to critical external resources
      '<link rel="preconnect" href="https://images.pexels.com" crossorigin>',
      
      // Prefetch likely next pages
      '<link rel="prefetch" href="/src/pages/coins.js">',
      '<link rel="prefetch" href="/src/pages/jewelry.js">',
      '<link rel="prefetch" href="/src/pages/services.js">'
    ];

    return hints.join('\n');
  }

  // Batch DOM updates to reduce reflows
  batchDOMUpdates(updates) {
    return new Promise(resolve => {
      requestAnimationFrame(() => {
        updates.forEach(update => update());
        resolve();
      });
    });
  }

  // Optimize font loading
  optimizeFontLoading() {
    // Use system fonts to avoid additional HTTP requests
    const systemFontStack = [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(', ');

    return systemFontStack;
  }

  // Create sprite for small icons to reduce requests
  createIconSprite() {
    return `
      <svg style="display: none;">
        <defs>
          <symbol id="icon-phone" viewBox="0 0 24 24">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
          </symbol>
          <symbol id="icon-email" viewBox="0 0 24 24">
            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
            <polyline points="22,6 12,13 2,6"/>
          </symbol>
          <symbol id="icon-location" viewBox="0 0 24 24">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
            <circle cx="12" cy="10" r="3"/>
          </symbol>
        </defs>
      </svg>
    `;
  }

  // Compress and cache API responses
  cacheAPIResponse(url, data, ttl = 300000) { // 5 minutes default
    const cacheKey = `api_${url}`;
    const cacheData = {
      data,
      timestamp: Date.now(),
      ttl
    };
    
    try {
      localStorage.setItem(cacheKey, JSON.stringify(cacheData));
    } catch (error) {
      // Handle storage quota exceeded
      this.clearOldCache();
    }
  }

  getCachedAPIResponse(url) {
    const cacheKey = `api_${url}`;
    try {
      const cached = localStorage.getItem(cacheKey);
      if (cached) {
        const { data, timestamp, ttl } = JSON.parse(cached);
        if (Date.now() - timestamp < ttl) {
          return data;
        } else {
          localStorage.removeItem(cacheKey);
        }
      }
    } catch (error) {
      // Handle JSON parse errors
    }
    return null;
  }

  clearOldCache() {
    const keys = Object.keys(localStorage);
    const apiKeys = keys.filter(key => key.startsWith('api_'));
    
    // Remove oldest entries first
    apiKeys.sort((a, b) => {
      try {
        const aData = JSON.parse(localStorage.getItem(a));
        const bData = JSON.parse(localStorage.getItem(b));
        return aData.timestamp - bData.timestamp;
      } catch {
        return 0;
      }
    });

    // Remove oldest 25% of cached items
    const toRemove = Math.ceil(apiKeys.length * 0.25);
    for (let i = 0; i < toRemove; i++) {
      localStorage.removeItem(apiKeys[i]);
    }
  }
}

// Export singleton instance
export const resourceLoader = new ResourceLoader();