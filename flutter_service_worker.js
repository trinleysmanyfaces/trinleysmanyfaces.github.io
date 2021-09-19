'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1ec0c8c7d27b046518f890433bf272f4",
"assets/assets/ab2.png": "a58edb38fc88ec1e9bed6ffe60c8c0b0",
"assets/assets/metadata.json": "772d767b22cad5d9e987c3a9780cb34a",
"assets/assets/randgallery.png": "8e0d93812d891e263d2bee68a6d9b88c",
"assets/assets/reddit_logo.png": "4bb7afacc17922303a6b0e2796558216",
"assets/assets/twitter_logo.png": "b36ad77387e6497a2c5f87841f18fc07",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/1.png": "f3032098a1899db207899bf90fb7efb2",
"assets/images/10.png": "fc70f0b816b16731f0049998db25146f",
"assets/images/100.png": "12786c119f134ee84216773c52464d3f",
"assets/images/11.png": "f16ca550ad7e74196a210edfcd7ba7d6",
"assets/images/12.png": "d062d146336483d764ac4b4f73622b4e",
"assets/images/13.png": "5b32ce495d79174ca3efcd4df3b77707",
"assets/images/14.png": "7536317ad5fa1a8bc2fb33340a99b7bc",
"assets/images/15.png": "5ee5de7f8ab7cc618a9c707d889af5cf",
"assets/images/16.png": "84d3e490403465dd439b8d6432035589",
"assets/images/17.png": "5af9cb0aba4d3cac26447ec4e82d7ff0",
"assets/images/18.png": "0cc238a0968878945bd53f892f2a9b0a",
"assets/images/19.png": "94a29aea1dcba0b260feaa2ef50a574d",
"assets/images/2.png": "5c2e01a98f202d73a0f4d808c18d8e45",
"assets/images/20.png": "967bd8a240600997de82e9aa6d46b059",
"assets/images/21.png": "f779ed80ead0176bce6349e779cf42c4",
"assets/images/22.png": "16789f43111bd10de43f97fa0d64330e",
"assets/images/23.png": "3316c67cac8ce11b5c448c54a949cb43",
"assets/images/24.png": "6c36bed0d5d916d007f7c3407c102452",
"assets/images/25.png": "3df1bc0279e85f5160b4c07de12b1c93",
"assets/images/26.png": "78401b59f69d30352d6d115399caeaf2",
"assets/images/27.png": "8a4cb1ef9176e2c68a0cfa8600baa700",
"assets/images/28.png": "dbf7c16b23ce6a55b6153b4ba2eb5bd9",
"assets/images/29.png": "fe8ebeabadec644bf3600bf0ce37f444",
"assets/images/3.png": "f6058eee27e53c7c6b8a5a05e0bcc629",
"assets/images/30.png": "7d78ed6968751220cc33b64459d470ce",
"assets/images/31.png": "f4454c0e262a8728dc62535ce029ac4a",
"assets/images/32.png": "44a3018b6243f9828cc3fb0b50b9936e",
"assets/images/33.png": "ed778b43005a3497c892fdd79fd3a8a0",
"assets/images/34.png": "87119c4322b71dfcd4f58d51532bfeef",
"assets/images/35.png": "7886710a1c21c62e9504f2d9ffec4f83",
"assets/images/36.png": "d446519d461a675ad28e1360ffab83d0",
"assets/images/37.png": "a52f858841f360d2051ec808b120601d",
"assets/images/38.png": "66127666b4f3fa303eaee77da4df24a6",
"assets/images/39.png": "df23b0cc025ba33239b75364772e848e",
"assets/images/4.png": "7230e708b4825b5d987f796a28486c0e",
"assets/images/40.png": "e57c1f3d7193ee4ab9c49d9fd680468c",
"assets/images/41.png": "6961e9d6c458e42320fbd8cb7674c4e9",
"assets/images/42.png": "38481843562a58de39ac9ee5b1021d4e",
"assets/images/43.png": "a691851cf7fcf876abd63092172c6010",
"assets/images/44.png": "23403a0c64cb4441d35bcbfb7f00616f",
"assets/images/45.png": "bb2605ecd02c311cf669e5508abb5a9b",
"assets/images/46.png": "a1cfb63e512a6c39d102630c75997d27",
"assets/images/47.png": "ec40ce87c1f7da22672a08aad938648f",
"assets/images/48.png": "5194f51496c05dd5e9329a4b4b7fef82",
"assets/images/49.png": "67de8465d5fa0502c7ac28ffa1822a87",
"assets/images/5.png": "878a8ebe4ec2ffae6b871d5d2345675b",
"assets/images/50.png": "3cf3433ac512f6c61da23cbb455099b3",
"assets/images/51.png": "3ff2f0aac276bd3caf6db28f4532706e",
"assets/images/52.png": "510126c446f4ab207d4b03e704d86d79",
"assets/images/53.png": "8110828979a845a9aa53ceb1142fcfa9",
"assets/images/54.png": "3b5465c884cf3d5a5b2ce598cacf75d9",
"assets/images/55.png": "606d7bdc67d474f4eae5477a4421038b",
"assets/images/56.png": "ae9b7c868436f8062b34722b70c8ef7d",
"assets/images/57.png": "8d335372fd55e296b750614506a66442",
"assets/images/58.png": "1e07bd1bb9d3dc287e3b93695e587bfc",
"assets/images/59.png": "1d501acb3f86fc290e9878b1a0bddd9f",
"assets/images/6.png": "39f1292529745d7c3e71c3ef3edbe56e",
"assets/images/60.png": "cee8189b8d8e7231f1e9a95dfdc04d85",
"assets/images/61.png": "af895d23cb24ec8e6b161966ec54cd55",
"assets/images/62.png": "f2ee54f55bfca194b0391b8aca814b07",
"assets/images/63.png": "1a0fb8af22a740413f13c760eb07653b",
"assets/images/64.png": "ce371e80a88b5c2dfa1c83c3228a31dd",
"assets/images/65.png": "c783411375bb69b80f026e3d182d357b",
"assets/images/66.png": "5d41731c136a7411d83abd15c6d78721",
"assets/images/67.png": "ef4f83cb15c942656c65b5be9e10a472",
"assets/images/68.png": "dbe297dba2919485864cffafd7ba8b88",
"assets/images/69.png": "3a61aef89d5c2a9db82e5b8378a579ce",
"assets/images/7.png": "9c1342ec1d2c7981050a3276252fc552",
"assets/images/70.png": "c9dd3a1eda1efcf7b8276bce564a673c",
"assets/images/71.png": "e022783c99a8fabd2c0507080b2b4eec",
"assets/images/72.png": "23e724c69840af0ac882ceb1d6186768",
"assets/images/73.png": "b52acead915414669b8d4d9ea760e1d1",
"assets/images/74.png": "943a67aac7aec4a4522e1c1b44dca041",
"assets/images/75.png": "6dbde40da034ab896993a5c79d514a84",
"assets/images/76.png": "8c5feb575fdb5087d483ee6ddccbb6cd",
"assets/images/77.png": "4031a2d349e0b2180efd5d3690cb2eb3",
"assets/images/78.png": "5ec82d0ecea35699dd47d07be2bc03e7",
"assets/images/79.png": "fe1d5adeb296ce29e770ade19a976bed",
"assets/images/8.png": "9760c9db4968d4fa270c3c2e51be33c5",
"assets/images/80.png": "cbe13d6d0791d6e86028dfd785e32979",
"assets/images/81.png": "1148de0114e3af63b474283983d55441",
"assets/images/82.png": "b0bebc2fbe2aa1a216624a88a404e36e",
"assets/images/83.png": "ae5e70f5a42b17e0e39208ddd0216f10",
"assets/images/84.png": "0c0218d05f98b5ec39fb8fbb4f75734c",
"assets/images/85.png": "08c3a32cf33bccdb5ed64aa5b1b9d65f",
"assets/images/86.png": "3805688106238ce72f22dad2d1780cec",
"assets/images/87.png": "5566d1fa292153677d8241fbaab0976b",
"assets/images/88.png": "633d8823a11335d9b82739f287a931eb",
"assets/images/89.png": "f38b42020abbbd467c020b2a927b90d1",
"assets/images/9.png": "40de2c7397eef063973fbeb1b7726127",
"assets/images/90.png": "0c1192e89ba7d7e0025d4220e741a9d5",
"assets/images/91.png": "f015599fb5488c94d33a24a6c34e0917",
"assets/images/92.png": "9c0f77a1fd642cec314a5fe8b7419499",
"assets/images/93.png": "8d9f606a0546d2ee2018c72018e30504",
"assets/images/94.png": "cab986e1b5a75d3d5639cf19d57d05f4",
"assets/images/95.png": "97347fc0988c58633727bf607753b7f2",
"assets/images/96.png": "ed5eadadf6803974984f7bebd54dc814",
"assets/images/97.png": "f13d88a4ad796b0f71891d16ae489658",
"assets/images/98.png": "096e1dda36ed016b59c5159e7643f1c3",
"assets/images/99.png": "41e9a7cb8bea15163166d8a4b877de63",
"assets/NOTICES": "e433e08aa2b03ee91f9b9a19424dc254",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "f6df25d21b4c61d75f5c923cabfa4a80",
"index.html": "b53fdc69130978f0a2512e2d72cc9dd7",
"/": "b53fdc69130978f0a2512e2d72cc9dd7",
"main.dart.js": "2d75a5f033eea3ca2816fcea712ca6b8",
"manifest.json": "02200046e7138f7d987ad345b224c4ba",
"version.json": "ae2c3ac6cb6133de83beefaea9a62eef"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
