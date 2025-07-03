// Service Worker for caching and reducing HTTP requests
const CACHE_NAME = 'haven-coin-v1';
const STATIC_CACHE = 'haven-coin-static-v1';
const DYNAMIC_CACHE = 'haven-coin-dynamic-v1';

// Resources to cache immediately
const STATIC_ASSETS = [
  '/',
  '/src/main.js',
  '/src/style.css',
  '/src/pages/home.js',
  '/src/pages/coins.js',
  '/src/pages/jewelry.js',
  '/src/pages/services.js',
  '/src/pages/about.js',
  '/src/pages/contact.js',
  '/src/pages/blog.js',
  '/src/pages/404.js',
  '/robots.txt',
  '/sitemap.xml'
];

// External resources to cache
const EXTERNAL_RESOURCES = [
  'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
  'https://images.pexels.com/photos/1232594/pexels-photo-1232594.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    Promise.all([
      caches.open(STATIC_CACHE).then(cache => {
        return cache.addAll(STATIC_ASSETS);
      }),
      caches.open(DYNAMIC_CACHE).then(cache => {
        return cache.addAll(EXTERNAL_RESOURCES);
      })
    ])
  );
  self.skipWaiting();
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== STATIC_CACHE && cacheName !== DYNAMIC_CACHE) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
  self.clients.claim();
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Handle navigation requests
  if (request.mode === 'navigate') {
    event.respondWith(
      caches.match('/').then(response => {
        return response || fetch(request);
      })
    );
    return;
  }

  // Handle static assets
  if (STATIC_ASSETS.includes(url.pathname)) {
    event.respondWith(
      caches.match(request).then(response => {
        return response || fetch(request).then(fetchResponse => {
          const responseClone = fetchResponse.clone();
          caches.open(STATIC_CACHE).then(cache => {
            cache.put(request, responseClone);
          });
          return fetchResponse;
        });
      })
    );
    return;
  }

  // Handle images with cache-first strategy
  if (request.destination === 'image') {
    event.respondWith(
      caches.match(request).then(response => {
        if (response) {
          return response;
        }
        return fetch(request).then(fetchResponse => {
          // Only cache successful responses
          if (fetchResponse.status === 200) {
            const responseClone = fetchResponse.clone();
            caches.open(DYNAMIC_CACHE).then(cache => {
              cache.put(request, responseClone);
            });
          }
          return fetchResponse;
        });
      })
    );
    return;
  }

  // Handle other requests with network-first strategy
  event.respondWith(
    fetch(request).then(response => {
      // Cache successful responses
      if (response.status === 200 && request.method === 'GET') {
        const responseClone = response.clone();
        caches.open(DYNAMIC_CACHE).then(cache => {
          cache.put(request, responseClone);
        });
      }
      return response;
    }).catch(() => {
      // Fallback to cache if network fails
      return caches.match(request);
    })
  );
});

// Background sync for analytics (when supported)
self.addEventListener('sync', (event) => {
  if (event.tag === 'analytics-sync') {
    event.waitUntil(
      // Sync queued analytics events
      syncAnalytics()
    );
  }
});

async function syncAnalytics() {
  // Implementation for syncing queued analytics events
  // This would batch and send any queued events when connection is restored
  try {
    const cache = await caches.open('analytics-queue');
    const requests = await cache.keys();
    
    for (const request of requests) {
      try {
        await fetch(request);
        await cache.delete(request);
      } catch (error) {
        // Keep in queue for next sync
        console.log('Analytics sync failed, will retry');
      }
    }
  } catch (error) {
    console.log('Analytics sync error:', error);
  }
}