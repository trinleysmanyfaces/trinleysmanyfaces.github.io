'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "e671d1d21da9f975dada9c2a94399ece",
"assets/assets/ab2.png": "a58edb38fc88ec1e9bed6ffe60c8c0b0",
"assets/assets/metadata.json": "772d767b22cad5d9e987c3a9780cb34a",
"assets/assets/randgallery.png": "8e0d93812d891e263d2bee68a6d9b88c",
"assets/assets/reddit_logo.png": "4bb7afacc17922303a6b0e2796558216",
"assets/assets/twitter_logo.png": "b36ad77387e6497a2c5f87841f18fc07",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/images/TMF1.png": "f3032098a1899db207899bf90fb7efb2",
"assets/images/TMF10.png": "fc70f0b816b16731f0049998db25146f",
"assets/images/TMF100.png": "12786c119f134ee84216773c52464d3f",
"assets/images/TMF11.png": "f16ca550ad7e74196a210edfcd7ba7d6",
"assets/images/TMF12.png": "d062d146336483d764ac4b4f73622b4e",
"assets/images/TMF13.png": "5b32ce495d79174ca3efcd4df3b77707",
"assets/images/TMF14.png": "7536317ad5fa1a8bc2fb33340a99b7bc",
"assets/images/TMF15.png": "5ee5de7f8ab7cc618a9c707d889af5cf",
"assets/images/TMF16.png": "84d3e490403465dd439b8d6432035589",
"assets/images/TMF17.png": "5af9cb0aba4d3cac26447ec4e82d7ff0",
"assets/images/TMF18.png": "0cc238a0968878945bd53f892f2a9b0a",
"assets/images/TMF19.png": "94a29aea1dcba0b260feaa2ef50a574d",
"assets/images/TMF2.png": "5c2e01a98f202d73a0f4d808c18d8e45",
"assets/images/TMF20.png": "967bd8a240600997de82e9aa6d46b059",
"assets/images/TMF21.png": "f779ed80ead0176bce6349e779cf42c4",
"assets/images/TMF22.png": "16789f43111bd10de43f97fa0d64330e",
"assets/images/TMF23.png": "3316c67cac8ce11b5c448c54a949cb43",
"assets/images/TMF24.png": "6c36bed0d5d916d007f7c3407c102452",
"assets/images/TMF25.png": "3df1bc0279e85f5160b4c07de12b1c93",
"assets/images/TMF26.png": "78401b59f69d30352d6d115399caeaf2",
"assets/images/TMF27.png": "8a4cb1ef9176e2c68a0cfa8600baa700",
"assets/images/TMF28.png": "dbf7c16b23ce6a55b6153b4ba2eb5bd9",
"assets/images/TMF29.png": "fe8ebeabadec644bf3600bf0ce37f444",
"assets/images/TMF3.png": "f6058eee27e53c7c6b8a5a05e0bcc629",
"assets/images/TMF30.png": "7d78ed6968751220cc33b64459d470ce",
"assets/images/TMF31.png": "f4454c0e262a8728dc62535ce029ac4a",
"assets/images/TMF32.png": "44a3018b6243f9828cc3fb0b50b9936e",
"assets/images/TMF33.png": "ed778b43005a3497c892fdd79fd3a8a0",
"assets/images/TMF34.png": "87119c4322b71dfcd4f58d51532bfeef",
"assets/images/TMF35.png": "7886710a1c21c62e9504f2d9ffec4f83",
"assets/images/TMF36.png": "d446519d461a675ad28e1360ffab83d0",
"assets/images/TMF37.png": "a52f858841f360d2051ec808b120601d",
"assets/images/TMF38.png": "66127666b4f3fa303eaee77da4df24a6",
"assets/images/TMF39.png": "df23b0cc025ba33239b75364772e848e",
"assets/images/TMF4.png": "7230e708b4825b5d987f796a28486c0e",
"assets/images/TMF40.png": "e57c1f3d7193ee4ab9c49d9fd680468c",
"assets/images/TMF41.png": "6961e9d6c458e42320fbd8cb7674c4e9",
"assets/images/TMF42.png": "38481843562a58de39ac9ee5b1021d4e",
"assets/images/TMF43.png": "a691851cf7fcf876abd63092172c6010",
"assets/images/TMF44.png": "23403a0c64cb4441d35bcbfb7f00616f",
"assets/images/TMF45.png": "bb2605ecd02c311cf669e5508abb5a9b",
"assets/images/TMF46.png": "a1cfb63e512a6c39d102630c75997d27",
"assets/images/TMF47.png": "ec40ce87c1f7da22672a08aad938648f",
"assets/images/TMF48.png": "5194f51496c05dd5e9329a4b4b7fef82",
"assets/images/TMF49.png": "67de8465d5fa0502c7ac28ffa1822a87",
"assets/images/TMF5.png": "878a8ebe4ec2ffae6b871d5d2345675b",
"assets/images/TMF50.png": "3cf3433ac512f6c61da23cbb455099b3",
"assets/images/TMF51.png": "3ff2f0aac276bd3caf6db28f4532706e",
"assets/images/TMF52.png": "510126c446f4ab207d4b03e704d86d79",
"assets/images/TMF53.png": "8110828979a845a9aa53ceb1142fcfa9",
"assets/images/TMF54.png": "3b5465c884cf3d5a5b2ce598cacf75d9",
"assets/images/TMF55.png": "606d7bdc67d474f4eae5477a4421038b",
"assets/images/TMF56.png": "ae9b7c868436f8062b34722b70c8ef7d",
"assets/images/TMF57.png": "8d335372fd55e296b750614506a66442",
"assets/images/TMF58.png": "1e07bd1bb9d3dc287e3b93695e587bfc",
"assets/images/TMF59.png": "1d501acb3f86fc290e9878b1a0bddd9f",
"assets/images/TMF6.png": "39f1292529745d7c3e71c3ef3edbe56e",
"assets/images/TMF60.png": "cee8189b8d8e7231f1e9a95dfdc04d85",
"assets/images/TMF61.png": "af895d23cb24ec8e6b161966ec54cd55",
"assets/images/TMF62.png": "f2ee54f55bfca194b0391b8aca814b07",
"assets/images/TMF63.png": "1a0fb8af22a740413f13c760eb07653b",
"assets/images/TMF64.png": "ce371e80a88b5c2dfa1c83c3228a31dd",
"assets/images/TMF65.png": "c783411375bb69b80f026e3d182d357b",
"assets/images/TMF66.png": "5d41731c136a7411d83abd15c6d78721",
"assets/images/TMF67.png": "ef4f83cb15c942656c65b5be9e10a472",
"assets/images/TMF68.png": "dbe297dba2919485864cffafd7ba8b88",
"assets/images/TMF69.png": "3a61aef89d5c2a9db82e5b8378a579ce",
"assets/images/TMF7.png": "9c1342ec1d2c7981050a3276252fc552",
"assets/images/TMF70.png": "c9dd3a1eda1efcf7b8276bce564a673c",
"assets/images/TMF71.png": "e022783c99a8fabd2c0507080b2b4eec",
"assets/images/TMF72.png": "23e724c69840af0ac882ceb1d6186768",
"assets/images/TMF73.png": "b52acead915414669b8d4d9ea760e1d1",
"assets/images/TMF74.png": "943a67aac7aec4a4522e1c1b44dca041",
"assets/images/TMF75.png": "6dbde40da034ab896993a5c79d514a84",
"assets/images/TMF76.png": "8c5feb575fdb5087d483ee6ddccbb6cd",
"assets/images/TMF77.png": "4031a2d349e0b2180efd5d3690cb2eb3",
"assets/images/TMF78.png": "5ec82d0ecea35699dd47d07be2bc03e7",
"assets/images/TMF79.png": "fe1d5adeb296ce29e770ade19a976bed",
"assets/images/TMF8.png": "9760c9db4968d4fa270c3c2e51be33c5",
"assets/images/TMF80.png": "cbe13d6d0791d6e86028dfd785e32979",
"assets/images/TMF81.png": "1148de0114e3af63b474283983d55441",
"assets/images/TMF82.png": "b0bebc2fbe2aa1a216624a88a404e36e",
"assets/images/TMF83.png": "ae5e70f5a42b17e0e39208ddd0216f10",
"assets/images/TMF84.png": "0c0218d05f98b5ec39fb8fbb4f75734c",
"assets/images/TMF85.png": "08c3a32cf33bccdb5ed64aa5b1b9d65f",
"assets/images/TMF86.png": "3805688106238ce72f22dad2d1780cec",
"assets/images/TMF87.png": "5566d1fa292153677d8241fbaab0976b",
"assets/images/TMF88.png": "633d8823a11335d9b82739f287a931eb",
"assets/images/TMF89.png": "f38b42020abbbd467c020b2a927b90d1",
"assets/images/TMF9.png": "40de2c7397eef063973fbeb1b7726127",
"assets/images/TMF90.png": "0c1192e89ba7d7e0025d4220e741a9d5",
"assets/images/TMF91.png": "f015599fb5488c94d33a24a6c34e0917",
"assets/images/TMF92.png": "9c0f77a1fd642cec314a5fe8b7419499",
"assets/images/TMF93.png": "8d9f606a0546d2ee2018c72018e30504",
"assets/images/TMF94.png": "cab986e1b5a75d3d5639cf19d57d05f4",
"assets/images/TMF95.png": "97347fc0988c58633727bf607753b7f2",
"assets/images/TMF96.png": "ed5eadadf6803974984f7bebd54dc814",
"assets/images/TMF97.png": "f13d88a4ad796b0f71891d16ae489658",
"assets/images/TMF98.png": "096e1dda36ed016b59c5159e7643f1c3",
"assets/images/TMF99.png": "41e9a7cb8bea15163166d8a4b877de63",
"assets/NOTICES": "e433e08aa2b03ee91f9b9a19424dc254",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "f6df25d21b4c61d75f5c923cabfa4a80",
"icons/Icon-192.png": "f6df25d21b4c61d75f5c923cabfa4a80",
"icons/Icon-512.png": "0cbff9dbf0c49d52dc0583ef1a52d69e",
"index.html": "d919b03653dec021410e694f9bc96b59",
"/": "d919b03653dec021410e694f9bc96b59",
"main.dart.js": "c303b2e7ad69055f61dd2ac95d459739",
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
