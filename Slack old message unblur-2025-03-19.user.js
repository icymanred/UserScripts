// ==UserScript==
// @name         Slack old message unblur
// @namespace    http://tampermonkey.net/
// @version      2025-03-19
// @description  tries to remove slack blur
// @author       rcptsc
// @match        https://app.slack.com/client/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=slack.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
    for (let f of document.styleSheets)
    {
        for (let j in f.rules)
        {
            if (f.rules[j].selectorText == ".c-message_kit__hidden_message_blur")
            {
                f.deleteRule(j)
            }
        }
    }
})();