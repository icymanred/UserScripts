// ==UserScript==
// @name         CSM view bypass
// @namespace    https://github.com/icymanred/UserScripts
// @version      2024-05-25
// @description  Bypasses Common sense media view restrictions
// @author       icymanred
// @match        https://www.commonsensemedia.org/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=commonsensemedia.org
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    let js = JSON.parse(localStorage['STYXKEY-content-gating-SR1'])
    js.contentViews = -9999
    localStorage['STYXKEY-content-gating-SR1'] = JSON.stringify(js);
})();