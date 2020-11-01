// PWA code
const cacheName = "expenseTrackerData"
const filesToCache = [
  "/",
  "/index.html",
  "/static/js/bundle.js",
  "/static/js/main.chunk.js",
  "/static/js/0.chunk.js",
  "/static/js/1.chunk.js",
  "static/media/coins.e505caba.svg",
  "/coins.svg",
]

// Cache files on install
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      cache.addAll(filesToCache)
    })
  )
})

// Get Data from cache
this.addEventListener("fetch", (event) => {
  // If user is offline
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if (response) {
          return response
        }
       
      })
    )
  }
})
