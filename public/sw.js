if(!self.define){let e,i={};const s=(s,a)=>(s=new URL(s+".js",a).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(a,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(i[c])return;let t={};const r=e=>s(e,c),o={module:{uri:c},exports:t,require:r};i[c]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-6a1bf588"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/1vJg_evm6EJ5mUyW2GEAw/_buildManifest.js",revision:"5eeebf57f1fc0bdff2fb66700e444b81"},{url:"/_next/static/1vJg_evm6EJ5mUyW2GEAw/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/651.8aaebbbff3fb4a6d.js",revision:"8aaebbbff3fb4a6d"},{url:"/_next/static/chunks/741.5c49c5ccb4a0a8f7.js",revision:"5c49c5ccb4a0a8f7"},{url:"/_next/static/chunks/framework-4556c45dd113b893.js",revision:"4556c45dd113b893"},{url:"/_next/static/chunks/main-869ebb1716e00154.js",revision:"869ebb1716e00154"},{url:"/_next/static/chunks/pages/404-e8308e7badeab289.js",revision:"e8308e7badeab289"},{url:"/_next/static/chunks/pages/_app-e3b7a765da1785c7.js",revision:"e3b7a765da1785c7"},{url:"/_next/static/chunks/pages/_error-28b0dba9dbcfb4ed.js",revision:"28b0dba9dbcfb4ed"},{url:"/_next/static/chunks/pages/index-f211bb7d9f3e6c4b.js",revision:"f211bb7d9f3e6c4b"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-21981e0e4a6f3a10.js",revision:"21981e0e4a6f3a10"},{url:"/_next/static/css/69c71e46debf4ab8.css",revision:"69c71e46debf4ab8"},{url:"/_next/static/media/Connectedworld.60f94b94.png",revision:"18b2dd1391b41250adcd54e84379f283"},{url:"/_next/static/media/ajax-loader.0b80f665.gif",revision:"0b80f665"},{url:"/_next/static/media/profile.20f65e9f.png",revision:"b9274a0a1c5205ec361195c9f6046554"},{url:"/_next/static/media/remixicon.1e0fb76b.woff",revision:"1e0fb76b"},{url:"/_next/static/media/remixicon.2b2ee314.svg",revision:"2b2ee314"},{url:"/_next/static/media/remixicon.5400338c.woff2",revision:"5400338c"},{url:"/_next/static/media/remixicon.e313410c.ttf",revision:"e313410c"},{url:"/_next/static/media/remixicon.f12fd1a0.eot",revision:"f12fd1a0"},{url:"/_next/static/media/slick.25572f22.eot",revision:"25572f22"},{url:"/_next/static/media/slick.653a4cbb.woff",revision:"653a4cbb"},{url:"/_next/static/media/slick.6aa1ee46.ttf",revision:"6aa1ee46"},{url:"/_next/static/media/slick.f895cfdf.svg",revision:"f895cfdf"},{url:"/favicon.svg",revision:"204714e468adf978587d3758c7fb16d9"},{url:"/images/404.png",revision:"c1509e40a2e13ac1fc632bb91f147bd2"},{url:"/images/Connectedworld.png",revision:"18b2dd1391b41250adcd54e84379f283"},{url:"/images/ambar.jpeg",revision:"c47273ce84d26d6f5b56d1262f98066a"},{url:"/images/amcom.jpeg",revision:"43ef4fd25b061084abee6c09d903f13f"},{url:"/images/anhanguera.png",revision:"44986c2c56028fc1461f934116fde662"},{url:"/images/bhp_pinhao_adv.png",revision:"e2db096e0464d6bf5c48631839727aae"},{url:"/images/clone_pinterest.gif",revision:"40c42f9ececbe7efd65c6c6f7b961502"},{url:"/images/curso_em_video.jpeg",revision:"38873ff174c08945c12c3ce5ac4f8724"},{url:"/images/digital_innovation_one.jpeg",revision:"a380e8d806baa953606bf46e4b81f308"},{url:"/images/gauchoeletrica.png",revision:"0de17f74c658ac9ec79c163fb4081b04"},{url:"/images/hero.jpeg",revision:"08decc91ff15f633692c6652c067ceb8"},{url:"/images/juliofilho.tk_.png",revision:"0440c2fc0e9144aa90935d6537841a18"},{url:"/images/juliofilho_website.png",revision:"c25affb38aca2132d6ee0c928fc5c397"},{url:"/images/mazzatech.jpeg",revision:"7d978522c626e96da214a6c5595943f0"},{url:"/images/meta.png",revision:"5ec48effe34b20a770020a3eec8748a5"},{url:"/images/portfolio-01.jpg",revision:"d771abcd56c2bef3b09390cec82c543e"},{url:"/images/portfolio-02.jpg",revision:"4e09bb5d43f3720c843ca34ccbfd760c"},{url:"/images/portfolio-03.jpg",revision:"3d7ec6a7c82376694aecce0dce3ae3a0"},{url:"/images/portfolio-04.png",revision:"b5ca1ca1d7813c42cbf1f11bd0a8f585"},{url:"/images/portfolio-05.jpg",revision:"de973e6c4727928fbdd1a56339a58029"},{url:"/images/portfolio-06.jpg",revision:"70f494f7396e59055ad4883dabd0d16b"},{url:"/images/rocketseat.jpeg",revision:"efcb4ead75fab14f83bed62c6f68dedd"},{url:"/images/sinaf.png",revision:"d67377dccaf4b36dd52ad98a521376c4"},{url:"/images/uninter.png",revision:"7af8b69bde653669d47834341df3bc08"},{url:"/manifest.json",revision:"f1869bf277ae4deb50787e685b571687"},{url:"/vercel.svg",revision:"4b4f1876502eb6721764637fe5c41702"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:s,state:a})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
