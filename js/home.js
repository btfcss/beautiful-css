import "/css/classic/classic.css";
import hljs from "highlight.js";
import '@fortawesome/fontawesome-free/js/all.js';
import "./color-scheme-switcher";


hljs.highlightAll({ showLanguageLabel: true });

async function updateColorScheme(theme) {
  if (theme == 'dark')
    //await import('highlight.js/styles/base16/humanoid-dark.min.css');
    //await import('highlight.js/styles/agate.min.css');
    //await import('highlight.js/styles/arta.min.css');
    //await import('highlight.js/styles/androidstudio.min.css');
    await import('highlight.js/styles/tokyo-night-dark.min.css');
  else
    //await import('highlight.js/styles/arta.min.css');
    //await import('highlight.js/styles/a11y-light.min.css');
    //await import('highlight.js/styles/atom-one-light.min.css');
    await import('highlight.js/styles/base16/atelier-estuary-light.min.css');
}




// The page is hidden at startup
// Display the page once loaded
window.onload = function () {
  document.querySelector('body').classList.remove('hidden');
};
