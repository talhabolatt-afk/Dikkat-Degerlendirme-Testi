const CACHE_NAME = 'dikkat-testi-v3';
const ASSETS = [
  '/Dikkat-Degerlendirme-Testi/',
  '/Dikkat-Degerlendirme-Testi/index.html'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
