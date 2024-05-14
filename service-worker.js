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

// Change this to your repository name
var GHPATH = '/sfida-classi';
 
// Choose a different app prefix name
var APP_PREFIX = 'gppwa_';
 
// The version of the cache. Every time you change any of the files
// you need to change this version (version_01, version_02…). 
// If you don't change the version, the service worker will give your
// users the old files!
var VERSION = 'version_00';
 
// The files to make available for offline use. make sure to add 
// others to this list
var URLS = [    
  `${GHPATH}/`,
  `${GHPATH}/index.html`