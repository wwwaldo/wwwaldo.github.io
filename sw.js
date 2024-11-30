const CACHE_NAME = 'serif-blog-v1';
const URLS_TO_CACHE = [
  '/',
  '/index.html',
  '/post.html',
  '/styles.css',
  '/manifest.json',
  // We'll add more URLs as needed
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
