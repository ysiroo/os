const CACHE_NAME = "aboutmeos-v1";

const urlsToCache = [
  "/",
  "/index.html",
  "/dashboard.html",
  "/profile.html",
  "/login.html",
  "/scanner.html",
  "/ai.html",
  "/manifest.json"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});