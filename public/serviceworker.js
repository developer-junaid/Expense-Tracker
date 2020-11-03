const CACHE_NAME = "expenseTrackerCache"

const filesToCache = [
  "/",
  "manifest.json",
  "index.html",
  "/static/js/0.chunk.js",
  "/static/js/bundle.js",
  "/static/js/main.chunk.js",
  "/images/icon-192x192.png",
  "/images/coins.svg",
  "/static/media/coins.e505caba.svg",
  "https://fonts.googleapis.com/css2?family=Acme&display=swap",
  "https://fonts.googleapis.com/icon?family=Material+Icons",
  "https://fonts.googleapis.com/css2?family=Kaushan+Script&display=swap",
  "https://fonts.gstatic.com/s/acme/v11/RrQfboBx-C5_XxrBbk_m3Lg.woff2",

  // "https://fonts.googleapis.com/css2?family=Acme&display=swap",
]

const self = this
// Install SW
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(filesToCache)
    })
  )
})

// Listen for requests
self.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches.match(event.request).then((resp) => {
        if (resp) {
          return resp
        }
      })
    )
  }
})

// Activate the SW
self.addEventListener("activate", (event) => {
  const cacheWhiteList = []
  cacheWhiteList.push(CACHE_NAME)

  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhiteList.includes(cacheName)) {
            return caches.delete(cacheName)
          }
        })
      )
    )
  )
})
