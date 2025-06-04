import hljs from "highlight.js";
import '@fortawesome/fontawesome-free/js/all.js';
import "./color-scheme-switcher";
import "./documentation";
import "./search";




// Highlight codes
hljs.highlightAll({ showLanguageLabel: true });



// The page is hidden at startup
// Display the page once loaded
window.onload = function () {
  document.querySelector('body').style.removeProperty('display');
};

