// ==UserScript==
// @name         mtlnovel controls
// @namespace    summonjoy.github.io
// @version      0.1.1
// @description  set of keyboard shortcut to perform required tasks
// @author       summonjoy
// @match        https://www.mtlnovel.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    /* currently supported controls
     * ArrowLeft - To go previous chapter
     * ArrowRight - To go next chapter
     * c - To copy current chapter to clipboard
    */
    document.addEventListener("keydown", function(event){
    switch (event.key) {
    case "ArrowLeft":
        document.querySelector('a.prev').click()
        break;
    case "ArrowRight":
        document.querySelector('a.next').click()
        break;
    case "c":
      copyToClipboard()
      break;
    }

    function copyToClipboard () {
      let chapter = ''
      const contents = document.querySelectorAll('.par p')
      contents.forEach((content) => {
        chapter += content.textContent
      })
      const el = document.createElement('textarea')
      el.value = chapter
      document.body.appendChild(el)
      el.select()
      document.execCommand('copy')
      document.body.removeChild(el)
    }

    })
})();
