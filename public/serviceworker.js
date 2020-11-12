const CACHE_NAME = "expenseTrackerCache"

const filesToCache = [
  "/",
  "index.html",
  "manifest.json",

  "/static/js/0.chunk.js",
  "/static/js/1.chunk.js",
  "/static/js/bundle.js",
  "/static/js/main.chunk.js",
  "/static/js/main.5a9a5228.chunk.js",
  "/static/js/2.chunk.js",
  "/static/js/2.d8dcbfdf.chunk.js",
  "/static/js/3.bcbe146d.chunk.js",

  "/static/css/main.5bf085b9.chunk.css",
  "/static/css/main.f762c360.chunk.css",
  "/static/css/main.f8829d32.chunk.css",
  "/static/css/3.2874e8ad.chunk.css",
  "/web-fonts/css/all.min.css",

  "/static/media/SourceSansPro-Regular.c1678b46.ttf",

  "/images/coins.svg",
  "/static/media/coins.e505caba.svg",

  "/images/icon-192x192.png",

  "/web-fonts/webfonts/fa-solid-900.woff2",
  "/web-fonts/webfonts/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7l.woff2",
  "/web-fonts/webfonts/fa-brands-400.woff2",
  "/web-fonts/web-fonts/webfonts/fa-brands-400.ttf",
  "/web-fonts/web-fonts/webfonts/fa-solid-900.ttf",
  "/web-fonts/web-fonts/webfonts/fa-brands-400.woff",
  "/web-fonts/web-fonts/webfonts/fa-solid-900.woff",
  "/web-fonts/web-fonts/webfonts/fa-brands-400.woff2",
  "/src/styles/fonts/SourceSansPro-Regular.ttf",
  "/web-fonts/web-fonts/webfonts/fa-solid-900.woff2",
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
