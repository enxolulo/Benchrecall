/* Bench Recall — offline support (optional).
   index.html is fully self-contained, so this only guarantees that the browser
   keeps a copy instead of relying on its ordinary HTTP cache.

   After uploading a new index.html, bump CACHE below. */

const CACHE = "bench-recall-v9";

const CORE = ["./", "./index.html"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(CORE))
      .then(() => self.skipWaiting())
      .catch(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// Lets the page force an immediate takeover after an update.
self.addEventListener("message", (event) => {
  if (event.data === "SKIP_WAITING") self.skipWaiting();
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  if (new URL(req.url).origin !== self.location.origin) return;

  // The page itself must never be served from the browser's own HTTP cache, or
  // a stale copy survives every redeploy. `cache: "no-store"` forces a real
  // request for the document; everything else may use the normal cache.
  const isPage =
    req.mode === "navigate" ||
    (req.headers.get("accept") || "").indexOf("text/html") !== -1;

  const fromNetwork = isPage
    ? fetch(req.url, { cache: "no-store", credentials: "same-origin" })
    : fetch(req);

  event.respondWith(
    fromNetwork
      .then((res) => {
        if (res && res.status === 200 && res.type === "basic") {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy)).catch(() => {});
        }
        return res;
      })
      .catch(() => caches.match(req).then((c) => c || caches.match("./index.html")))
  );
});
