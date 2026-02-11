const CACHE_NAME = 'smarter-hub-v2';
const ASSETS = [
  'local_ai_chat.html',
  'manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css',
  'https://cdn.jsdelivr.net/npm/marked/marked.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/highlight.min.js',
  'https://fonts.googleapis.com/css2?family=Vazirmatn:wght@100;400;700&display=swap'
];

// نصب سرویس ورکر و کش کردن فایل‌ها
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// مدیریت درخواست‌ها در حالت آفلاین
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});