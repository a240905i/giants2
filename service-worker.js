const CACHE_NAME = "giants-cache-v1";

const FILES_TO_CACHE = [
  "/giants2/",
  "/giants2/index.html",
  "/giants2/style.css",
  "/giants2/script.js"
];

// インストール時にキャッシュ
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

// リクエストがあったらキャッシュ優先
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

