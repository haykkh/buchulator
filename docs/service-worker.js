/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "android-chrome-192x192.9defcb26.png",
    "revision": "5a5b925d09d1f0a5ab55c273b43e9c0e"
  },
  {
    "url": "android-chrome-512x512.cc191728.png",
    "revision": "1c0d5f82c33566b0626f17ca4503d9d4"
  },
  {
    "url": "apple-touch-icon.9fa4e4f6.png",
    "revision": "fafc02c07fbd4c79c036863d207f0413"
  },
  {
    "url": "favicon-16x16.71b6712a.png",
    "revision": "59893e685ccea2c0a43ab3c175726dbf"
  },
  {
    "url": "favicon-32x32.9f57072f.png",
    "revision": "1bea9ca21fe49e7ff561fb54ea4549d3"
  },
  {
    "url": "index.html",
    "revision": "7110c3d3feb90d218c1de4bd29760012"
  },
  {
    "url": "src.d0acec8e.js",
    "revision": "978602e1bde9f7ca3a1f343d85653ea1"
  },
  {
    "url": "src.eb30c1d3.css",
    "revision": "cb1c5fd767ae659b97771415886fd4f9"
  },
  {
    "url": "/",
    "revision": "d01490cb1b4f5f6a373d973845157ab7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute(workbox.precaching.getCacheKeyForURL(".//index.html"));
