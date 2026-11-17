// Guarda o app no aparelho para funcionar sem internet. Mude VERSAO a cada atualização do app.
const VERSAO = "feira-app-1.0";
const ARQUIVOS = ["./", "index.html", "manifest.webmanifest", "icone-192.png", "icone-512.png", "icone-512-mascara.png"];

self.addEventListener("install", (e) => {
  e.waitUntil(caches.open(VERSAO).then((c) => c.addAll(ARQUIVOS)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSAO).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
// Primeiro o que está guardado (funciona offline); em paralelo busca a versão nova para a próxima abertura.
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || new URL(e.request.url).origin !== location.origin) return;
  e.respondWith(caches.open(VERSAO).then((c) => c.match(e.request, { ignoreSearch: true }).then((guardado) => {
    const rede = fetch(e.request).then((r) => { if (r && r.ok) c.put(e.request, r.clone()); return r; }).catch(() => guardado);
    return guardado || rede;
  })));
});
