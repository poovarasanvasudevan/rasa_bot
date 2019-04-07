var dataCacheName = 'template-pwa';
var cacheName = 'template-pwa';
var filesToCache = [
    '/',
    "./img/icon-auto-reply.png",
    "./img/icon-close.png",
    "./img/icon-user.png",
    "./css/fonts/Material-Design-Iconic-Font.woff",
    "./css/fonts/Material-Design-Iconic-Font.ttf",
    "./css/fonts/Material-Design-Iconic-Font.woff2",
    "./css/chat.css",
    "./css/icons-min.css",
    "./css/jquery-ui.css",
    "./js/jquery-3.3.1.js",
    "./js/jquery-ui.js",
    "./js/chat-1.0.0.js",
    "./serviceworker.js",
];

self.addEventListener('install', function (e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function (cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', function (e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function (keyList) {
            return Promise.all(keyList.map(function (key) {
                if (key !== cacheName && key !== dataCacheName) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    return self.clients.claim();
});

self.addEventListener('fetch', function (e) {
    console.log('[Service Worker] Fetch', e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});