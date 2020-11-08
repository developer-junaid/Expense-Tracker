const CACHE_NAME = "expenseTrackerCache"

const filesToCache = [
  "/",
  "index.html",
  "manifest.json",
  "/static/js/0.chunk.js",
  "/static/js/1.chunk.js",
  "/static/js/bundle.js",
  "/static/js/main.chunk.js",
  "/static/media/coins.e505caba.svg",
  "/static/css/main.000ed9ea.chunk.css",
  // "/static/js/2.3ab16f3e.chunk.js",
  " /static/js/main.a17110f5.chunk.js",
  "/images/icon-192x192.png",
  "/images/coins.svg",
  "https://pro.fontawesome.com/releases/v5.10.0/webfonts/fa-solid-900.woff2",
  // "https://pro.fontawesome.com/releases/v5.10.0/css/all.css",
  "https://pro.fontawesome.com/releases/v5.10.0/webfonts/fa-brands-400.woff2",
]

// Install SW
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      cache.addAll(filesToCache)
    })
  )
})

// Listen for requests
this.addEventListener("fetch", (event) => {
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
this.addEventListener("activate", (event) => {
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
