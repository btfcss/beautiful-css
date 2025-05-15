import colorScheme from "./color-scheme";

// Get buttons elements
const btnColorSchemeLight = document.getElementById('btn-color-scheme-light');
const btnColorSchemeSystem = document.getElementById('btn-color-scheme-system');
const btnColorSchemeDark = document.getElementById('btn-color-scheme-dark');

// Add event listener on each button
btnColorSchemeLight.addEventListener('click', () => colorScheme.setUserChoice('light') );
btnColorSchemeSystem.addEventListener('click', () =>  colorScheme.setUserChoice('light dark') );
btnColorSchemeDark.addEventListener('click', () =>  colorScheme.setUserChoice('dark') );


// Callback function invoked when the color scheme status has changed
const onChange = (status) => {
  
  // Apply changes on CSS
  document.querySelector(':root').style.setProperty('color-scheme', status.user);

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