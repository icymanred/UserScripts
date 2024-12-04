// ==UserScript==
// @name         Satisfactory Fandom Redirecter
// @namespace    http://tampermonkey.net/
// @version      2024-09-26
// @description  Redirects satisfactory fandom to wiki.gg
// @author       You
// @match        https://satisfactory.fandom.com/wiki/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=fandom.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
location.href = "https://satisfactory.wiki.gg" + location.pathname
    // Your code here...
})();