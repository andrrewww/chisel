const CACHE_NAME = 'verse-cleaner-v1.0';

const ASSETS_TO_CACHE = [
  '/verse-cleaner/',
  '/verse-cleaner/index.html',
  '/verse-cleaner/style.css',
  '/verse-cleaner/script.js',
];

// Install event — runs once when the service worker is first registered
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Activate event — cleans up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys
          .filter(key => key !== CACHE_NAME)
          .map(key => caches.delete(key))
      );
    })
  );
});

// Fetch event — intercepts every network request
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      return cached || fetch(event.request);
    })
  );
});