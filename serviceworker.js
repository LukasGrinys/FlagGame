const staticFlags = "flag-game-v2";
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/autocomplete.js",
  "/countries.js",
  "/flags/00.png",
  "/flags/01.png",
  "/flags/02.png",
  "/flags/03.png",
  "/flags/04.png",
  "/flags/05.png",
  "/flags/06.png",
  "/flags/07.png",
  "/flags/08.png",
  "/flags/09.png",
  "/flags/10.png",
  "/flags/11.png",
  "/flags/12.png",
  "/flags/13.png",
  "/flags/14.png",
  "/flags/15.png",
  "/flags/16.png",
  "/flags/17.png",
  "/flags/18.png",
  "/flags/19.png",
  "/flags/20.png",
  "/flags/21.png",
  "/flags/22.png",
  "/flags/23.png",
  "/flags/24.png",
  "/flags/25.png",
  "/flags/26.png",
  "/flags/27.png",
  "/flags/28.png",
  "/flags/29.png",
  "/flags/30.png",
  "/flags/31.png",
  "/flags/32.png",
  "/flags/33.png",
  "/flags/34.png",
  "/flags/35.png",
  "/flags/36.png",
  "/flags/37.png",
  "/flags/38.png",
  "/flags/39.png",
  "/flags/40.png",
  "/flags/41.png",
  "/flags/42.png",
  "/flags/43.png",
  "/flags/44.png",
  "/flags/45.png",
  "/flags/46.png",
  "/flags/47.png",
  "/flags/48.png",
  "/flags/49.png",
  "/flags/50.png",
  "/flags/51.png",
  "/flags/52.png",
  "/flags/53.png",
  "/flags/54.png",
  "/flags/55.png",
  "/flags/56.png",
  "/flags/57.png",
  "/flags/58.png",
  "/flags/59.png",
  "/flags/60.png",
  "/flags/61.png",
  "/flags/62.png",
  "/flags/63.png",
  "/flags/64.png",
  "/flags/65.png",
  "/flags/66.png",
  "/flags/67.png",
  "/flags/68.png",
  "/flags/69.png",
  "/flags/70.png",
  "/flags/71.png",
  "/flags/72.png",
  "/flags/73.png",
  "/flags/74.png",
  "/flags/75.png",
  "/flags/76.png",
  "/flags/77.png",
  "/flags/78.png",
  "/flags/79.png",
  "/flags/80.png",
  "/flags/81.png",
  "/flags/82.png",
  "/flags/83.png",
  "/flags/84.png",
  "/flags/85.png",
  "/flags/86.png",
  "/flags/87.png",
  "/flags/88.png",
  "/flags/89.png",
  "/flags/90.png",
  "/flags/91.png",
  "/flags/92.png",
  "/flags/93.png",
  "/flags/94.png",
  "/flags/95.png",
  "/flags/96.png",
  "/flags/97.png",
  "/flags/98.png",
  "/flags/99.png",
  "/flags/100.png",
  "/flags/101.png",
  "/flags/102.png",
  "/flags/103.png",
  "/flags/104.png",
  "/flags/105.png",
  "/flags/106.png",
  "/flags/107.png",
  "/flags/108.png",
  "/flags/109.png",
  "/flags/110.png",
  "/flags/111.png",
  "/flags/112.png",
  "/flags/113.png",
  "/flags/114.png",
  "/flags/115.png",
  "/flags/116.png",
  "/flags/117.png",
  "/flags/118.png",
  "/flags/119.png",
  "/flags/120.png",
  "/flags/121.png",
  "/flags/122.png",
  "/flags/123.png",
  "/flags/124.png",
  "/flags/125.png",
  "/flags/126.png",
  "/flags/127.png",
  "/flags/128.png",
  "/flags/129.png",
  "/flags/130.png",
  "/flags/131.png",
  "/flags/132.png",
  "/flags/133.png",
  "/flags/134.png",
  "/flags/135.png",
  "/flags/136.png",
  "/flags/137.png",
  "/flags/138.png",
  "/flags/139.png",
  "/flags/140.png",
  "/flags/141.png",
  "/flags/142.png",
  "/flags/143.png",
  "/flags/144.png",
  "/flags/145.png",
  "/flags/146.png",
  "/flags/147.png",
  "/flags/148.png",
  "/flags/149.png",
  "/flags/150.png",
  "/flags/151.png",
  "/flags/152.png",
  "/flags/153.png",
  "/flags/154.png",
  "/flags/155.png",
  "/flags/156.png",
  "/flags/157.png",
  "/flags/158.png",
  "/flags/159.png",
  "/flags/160.png",
  "/flags/161.png",
  "/flags/162.png",
  "/flags/163.png",
  "/flags/164.png",
  "/flags/165.png",
  "/flags/166.png",
  "/flags/167.png",
  "/flags/168.png",
  "/flags/169.png",
  "/flags/170.png",
  "/flags/171.png",
  "/flags/172.png",
  "/flags/173.png",
  "/flags/174.png",
  "/flags/175.png",
  "/flags/176.png",
  "/flags/177.png",
  "/flags/178.png",
  "/flags/179.png",
  "/flags/180.png",
  "/flags/181.png",
  "/flags/182.png",
  "/flags/183.png",
  "/flags/184.png",
  "/flags/185.png",
  "/flags/186.png",
  "/flags/187.png",
  "/flags/188.png",
  "/flags/189.png",
  "/flags/190.png",
  "/flags/191.png",
  "/flags/192.png",
  "/flags/193.png",
  "/flags/194.png",
  "/flags/195.png",
  "/images/icon72x72.png",
  "/images/icon96x96.png",
  "/images/icon128x128.png",
  "/images/icon144x144.png",
  "/images/icon152x152.png",
  "/images/icon192x192.png",
  "/images/icon384x384.png",
  "/images/icon512x512.png",
  '/restart.png',
  "/settings.png",
  '/scripts.js',
  '/logo.png'
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticFlags).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
      caches.match(fetchEvent.request).then(res => {
        return res || fetch(fetchEvent.request)
      })
    )
  })

