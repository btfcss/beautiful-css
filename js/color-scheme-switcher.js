import colorScheme from "@btfcss/color-scheme";
import hljsLight from "/css/classic/code/hljs-light.css";
import hljsDark from "/css/classic/code/hljs-dark.css";


// Get buttons elements
const btnColorSchemeLight = document.getElementById('btn-color-scheme-light');
const btnColorSchemeSystem = document.getElementById('btn-color-scheme-system');
const btnColorSchemeDark = document.getElementById('btn-color-scheme-dark');

// Add event listener on each button
btnColorSchemeLight.addEventListener('click', () => colorScheme.setUserChoice('light'));
btnColorSchemeSystem.addEventListener('click', () => colorScheme.setUserChoice('light dark'));
btnColorSchemeDark.addEventListener('click', () => colorScheme.setUserChoice('dark'));


let codeStyleSheet = undefined;

// Callback function invoked when the color scheme status has changed
const onChange = async (status) => {

  // Apply changes on CSS
  document.querySelector(':root').style.setProperty('color-scheme', status.user);


  if (codeStyleSheet != undefined) codeStyleSheet.unuse();
  if (status.current == "light") {
    hljsDark.unuse();
    hljsLight.use();
    //import('highlight.js/styles/base16/atelier-estuary-light.min.css');
    //codeStyleSheet = await import ("/css/classic/code/hljs-light.css");
  }
  else {
    hljsDark.use();
    hljsLight.unuse();
    //codeStyleSheet = await import ("/css/classic/code/hljs-dark.css");
  }



  // Update active button
  switch (status.user) {
    case "light":
      btnColorSchemeLight.classList.add('active');
      btnColorSchemeSystem.classList.remove('active');
      btnColorSchemeDark.classList.remove('active');
      break;
    case "dark":
      btnColorSchemeLight.classList.remove('active');
      btnColorSchemeSystem.classList.remove('active');
      btnColorSchemeDark.classList.add('active');
      break;
    default:
      btnColorSchemeLight.classList.remove('active');
      btnColorSchemeSystem.classList.add('active');
      btnColorSchemeDark.classList.remove('active');
  }
}


// Listen for change on color scheme status
colorScheme.addEventListenerOnChange(onChange);


// Call at start up for applying user preferences
onChange(colorScheme.get());