/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/jonathanyap-site/404.html","c91fe53e88bbe248eea7109080ce2bbd"],["/jonathanyap-site/about/index.html","2bf9a8706173e1ae3595058a163407b8"],["/jonathanyap-site/css/main.css","5763ac45176d0e5326e622bfdb32fadd"],["/jonathanyap-site/images/profile-stuff.jpg","e6e4a2044e3b9f2c5624c9f50a4dbd5d"],["/jonathanyap-site/images/profile1.jpg","74680d125847a7293030206620ddf4c1"],["/jonathanyap-site/images/profile2.jpg","dcd972e15edcd3f17de5e1a5b417260e"],["/jonathanyap-site/images/touch/apple-touch-icon.png","7326f54bfe6776293f08b34c3a5fde7b"],["/jonathanyap-site/images/touch/chrome-touch-icon-192x192.png","571f134f59f14a6d298ddd66c015b293"],["/jonathanyap-site/images/touch/icon-128x128.png","7c46d686765c49b813ac5eb34fabf712"],["/jonathanyap-site/images/touch/ms-touch-icon-144x144-precomposed.png","452d90b250d6f41a0c8f9db729113ffd"],["/jonathanyap-site/images/work/emotivu-app-hack.png","7dd3310c17679025948246c93d0d6474"],["/jonathanyap-site/images/work/emotivu-app.png","45a0fa69e02df19735224386b9ee1f37"],["/jonathanyap-site/images/work/emotivu-menu.png","96764c62945698ee4a899174310d7400"],["/jonathanyap-site/images/work/emotivu-wireframe.png","51c6976062dd493711cb8bf06d9bdd24"],["/jonathanyap-site/images/work/o2-academy-intro.jpg","baf33e2aa865729e46479bc1b39f9810"],["/jonathanyap-site/images/work/o2-academy-launched-app.jpg","11ab3ba6141cc361b918b25f658218ba"],["/jonathanyap-site/images/work/o2-academy-new-app.png","b694afe50a622143bc3b16393a6e3bf7"],["/jonathanyap-site/images/work/o2-academy-new-app2.png","10c950ce5e0f8e66e14ecd6b9bda280e"],["/jonathanyap-site/images/work/o2-academy-new-concept.jpg","bdde1929e17f43f66a9391519044debf"],["/jonathanyap-site/images/work/o2-academy-new-concept2.jpg","f1a7197c56505a92a3c0d5c63ba4b541"],["/jonathanyap-site/images/work/o2-academy-old-app.png","a35d31acbc8b03d02f9b7f18937f5aa4"],["/jonathanyap-site/images/work/o2-academy-persona.gif","b38f81cefa68bc896ae2dc91c9e12742"],["/jonathanyap-site/images/work/panasonic-ex3-ife-design.png","52842f5b78bb51ad986046819e5754ef"],["/jonathanyap-site/images/work/panasonic-ex3-ife-portal.png","46b940cff3781b30ee29d9772239a01f"],["/jonathanyap-site/images/work/panasonic-ex3-ife-wireframes.png","66e88f7ec494116b615aad7faac90bcf"],["/jonathanyap-site/images/work/panasonic-ex3-intro.png","3c858101d15cdd230b171dd185247e68"],["/jonathanyap-site/images/work/panasonic-ex3-sb-logo.png","866b5e3570e6575c76337ecadd1dfee8"],["/jonathanyap-site/images/work/panasonic-ex3-sb.png","f3f0746b3aab3797016f83211bf0ef7f"],["/jonathanyap-site/images/work/panasonic-ife-sia1.jpg","884a8649d4bd0047be800f08f17fd06b"],["/jonathanyap-site/images/work/panasonic-ife-sia2.jpg","55d849a80d27b9a171bc86e21902929d"],["/jonathanyap-site/images/work/panasonic-ife-sia3.jpg","b26ea4341e84ea12a207f0ab367c6d05"],["/jonathanyap-site/images/work/panasonic-ife-sia4.jpg","d39f1227ccff342b5996d6e97c692aa9"],["/jonathanyap-site/images/work/tronsquare-app.png","7a0b10694aee1ccf7031940de08ff447"],["/jonathanyap-site/images/work/tronsquare-lights.png","b45dad02f3445eb05892031329215695"],["/jonathanyap-site/images/work/tronsquare-logo.png","b7ae86b27e197f234380f600029fc3b1"],["/jonathanyap-site/images/work/tronsquare-logotype.png","f855e9bcaf2ceb8801babd322d0238c2"],["/jonathanyap-site/images/work/tronsquare-map.jpg","d621ddfea22df4c462102252fc24d1cd"],["/jonathanyap-site/images/work/tronsquare-wireframe.png","2a1df48d970db4b28df6fb5d71ba4d1e"],["/jonathanyap-site/images/work/worldpay-devices.jpg","057a2988749a229c934f02df0498a0b7"],["/jonathanyap-site/images/work/worldpay-intro.jpg","723ff6b62773cfc4b505c23e4ec8928e"],["/jonathanyap-site/images/work/worldpay-wireframes.png","6403a42f4654ada79327bb1e5e721632"],["/jonathanyap-site/index.html","e7a2158ec5a38d029383dcecfd81122f"],["/jonathanyap-site/manifest.json","39c527e0655953ed302fb4cf19361112"],["/jonathanyap-site/scripts/main.min.js","8971778a9cc0ad74eeea6d9ed8a7b87f"],["/jonathanyap-site/work/2012/05/20/worldpay/index.html","9791c9d232e9abe9f8a71326c7e4b0c1"],["/jonathanyap-site/work/2013/03/28/panasonic-ife/index.html","88f5a5d2105d5ca07e48c66fb7f9c04b"],["/jonathanyap-site/work/2013/07/02/o2-academy/index.html","75798ce7a64cb0ac855ee1d09e1351c9"],["/jonathanyap-site/work/2014/02/21/tronsquare/index.html","451a57fb7866039c3f04ebe1aa087437"],["/jonathanyap-site/work/2014/05/14/emotivu/index.html","098c4b265cb979c25bd3d64ff558c0fb"]];
var cacheName = 'sw-precache-v2--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.toString().match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              return cache.add(new Request(cacheKey, {credentials: 'same-origin'}));
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameter and see if we have that URL
    // in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







