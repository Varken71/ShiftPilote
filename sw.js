const CACHE_NAME = 'shiftpilot-v05-beta-1';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './icon-192-maskable.png',
  './icon-512-maskable.png',
  './icon-180.png',
  'https://cdn.tailwindcss.com',
  'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;700&family=Inter:wght@400;600;800&display=swap'
];

self.addEventListener('install', e=>{
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache=> cache.addAll(ASSETS).catch(err=>console.log('cache addAll fail', err)))
  );
  self.skipWaiting();
});

self.addEventListener('activate', e=>{
  e.waitUntil(
    caches.keys().then(keys=> Promise.all(keys.filter(k=> k!==CACHE_NAME).map(k=> caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener('fetch', e=>{
  // Network first for html, cache first for others
  if(e.request.mode === 'navigate'){
    e.respondWith(
      fetch(e.request).then(res=>{
        const clone=res.clone();
        caches.open(CACHE_NAME).then(c=> c.put(e.request, clone));
        return res;
      }).catch(()=> caches.match('./index.html'))
    );
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached=>{
      return cached || fetch(e.request).then(res=>{
        // cache icons etc
        if(res.ok && e.request.url.startsWith(self.location.origin)){
          const clone=res.clone();
          caches.open(CACHE_NAME).then(c=> c.put(e.request, clone));
        }
        return res;
      });
    })
  );
});
