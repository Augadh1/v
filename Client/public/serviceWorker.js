const cacheName = 'v1';

self.addEventListener('install', event => {
  console.log('Service Worker is Installed');
});

self.addEventListener('activate', async (event) => {
  console.log('Service Worker is Activated');
  // Remove unwanted caches  
  let cacheNames = await caches.keys()
  return Promise.all(
    cacheNames.map(cache => {
      if (cache !== cacheName)
        return caches.delete(cache);

    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    fetch(event.request)
      .then(res => {
        const resClone = res.clone();
        caches.open(cacheName).then(cache => {
          cache.put(event.request, resClone);
        });
        return res;
      })
      .catch(err => caches.match(event.request).then(res => res))
  );
});
