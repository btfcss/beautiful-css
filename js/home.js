import "/css/classic/classic.css";
import hljs from "highlight.js";
import '@fortawesome/fontawesome-free/js/all.js';

//import "./color-scheme-switcher.js";
//import "./color-scheme.js";
import colorSchemeSwitcher from "./color-scheme-switcher";


hljs.highlightAll({ showLanguageLabel: true });
//hljs.highlightBlock(block, {showLanguageLabel: true});


/*
// Get system color scheme (return light ot dark)
function getSystemTheme() {
  return (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? "dark" : "light";
}
  */


//let userChoice = 'system';
//let currentTheme = systemColorScheme.isSystemDark;


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

// Triggered when the theme changed
document.addEventListener('color-scheme-changed', (event) => {
  let newTheme = currentTheme;

  // Check if the change comes from the system
  if (event.detail.origin === "system") {
    if (userChoice == 'system') newTheme = event.detail.theme;
  }
  else {
    newTheme = (event.detail.theme !== 'system') ? event.detail.theme : getSystemTheme();
    userChoice = event.detail.theme;
  }

  if (newTheme != currentTheme) {
    currentTheme = newTheme;
    console.log("Theme changed to", currentTheme);

    updateColorScheme(currentTheme);
  }
});

/*
// The light theme button is clicked
document.getElementById('btn-theme-light').addEventListener('click', () => {
  document.querySelector(':root').style.setProperty('color-scheme', 'light');  
  const colorSchemeChangedEvent = new CustomEvent("color-scheme-changed", { detail: { origin: 'user', theme: "light" } });
  document.dispatchEvent(colorSchemeChangedEvent);
})

// The system default theme button is clicked
document.getElementById('btn-theme-system').addEventListener('click', () => {
  document.querySelector(':root').style.setProperty('color-scheme', 'light dark');
  const colorSchemeChangedEvent = new CustomEvent("color-scheme-changed", { detail: { origin: 'user', theme: 'system' } });
  document.dispatchEvent(colorSchemeChangedEvent);

})

// The dark theme button is clicked
document.getElementById('btn-theme-dark').addEventListener('click', () => {
  document.querySelector(':root').style.setProperty('color-scheme', 'dark');
  const colorSchemeChangedEvent = new CustomEvent("color-scheme-changed", { detail: { origin: 'user', theme: "dark" } });
  document.dispatchEvent(colorSchemeChangedEvent);
})
  */

/*
// Create a media query listener for the color sheme
const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

// Listen for changes on system color theme
darkModeMediaQuery.addEventListener('change', (event) => {
  console.log ("darkModeMediaQuery changed");
  const newTheme = (event.matches) ? "dark" : "light";
  const colorSchemeChangedEvent = new CustomEvent("color-scheme-changed", { detail: { origin: 'system', theme: newTheme } });
  document.dispatchEvent(colorSchemeChangedEvent);
});

*/


// Specify theme at startup
//updateColorScheme(currentTheme);






//window.addEventListener('DOMContentLoaded', function () {
window.addEventListener('onload', function () {
  //console.log('Loaded');
});

window.onload = function () {
  //console.log('Loaded onload');
  document.querySelector('body').style.removeProperty('display');
};
