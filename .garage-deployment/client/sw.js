const CACHE_NAME = "the-garage-v5";
const APP_SHELL = ["/garage/", "/garage/manifest.webmanifest", "/garage/saujana-logo.png", "/garage/ilford-id11.svg", "/garage/developing-tank.png", "/garage/the-garage-favicon.png", "/garage/og.png", "/garage/garage-apple-touch-icon.png", "/garage/garage-app-icon-192.png", "/garage/garage-app-icon-512.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL)).catch(() => undefined));
  self.skipWaiting();
});
self.addEventListener("activate", (event) => {
  event.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))));
  self.clients.claim();
});
self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  if (new URL(event.request.url).pathname.startsWith("/garage/api/")) {
    event.respondWith(fetch(event.request));
    return;
  }
  event.respondWith(fetch(event.request).then((response) => {
    const copy = response.clone();
    caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
    return response;
  }).catch(() => caches.match(event.request).then((cached) => cached || caches.match("/garage/"))));
});
