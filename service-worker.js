// Installazione del service worker
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('offline-cache').then(function(cache) {
      return cache.addAll([
        '/', // La tua home page
        '/index.html', // Assicurati di includere tutte le pagine che vuoi rendere disponibili offline
        // Aggiungi qui tutte le risorse che vuoi memorizzare nella cache per l'accesso offline
      ]);
    })
  );
});

// Interceptor per gestire le richieste di risorse
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
