// ==UserScript==
// @name         Hide Video Recommendations (Watch Feed Blocker)
// @namespace    https://github.com/MAAB-FW/hide-fb-video-recommendations
// @version      1.0
// @description  Hide video recommendations and other unwanted sections on Facebook
// @author       @maab-fw
// @match        https://www.facebook.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  "use strict";

  // Inject CSS directly (similar to uBlock filters)
  GM_addStyle(`
      .x1iyjqo2 > div:nth-of-type(1) > ul > li:nth-of-type(7),
      .xzkaem6.xh8yej3.xxzkxad.x7wzq59,
      #watch_feed > div > div.x78zum5:nth-of-type(2),
      li:nth-of-type(23) > div,
      .x1iyjqo2 > div:nth-of-type(1) > ul > li:nth-of-type(14) > div,
      .x1a8lsjc.x889kno.xso031l.x1q0q8m5.x1nb4dca.x1ve1bff,
      li.x1gz44f.x13fj5qh.x1awlv9s.x1l38jg0.x1hxoosp.xmlsiyf.x1iyjqo2:nth-of-type(3) {
          display: none !important;
      }
  `);
})();
