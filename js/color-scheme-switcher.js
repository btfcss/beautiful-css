import colorScheme from "./color-scheme";

const btnColorSchemeLight = document.getElementById('btn-color-scheme-light');
const btnColorSchemeSystem = document.getElementById('btn-color-scheme-system');
const btnColorSchemeDark = document.getElementById('btn-color-scheme-dark');

/**
 * Set color scheme to light and update active button
 */ 
const setLight = () => {
    colorScheme.set('light');
    btnColorSchemeLight.classList.add('active');
    btnColorSchemeSystem.classList.remove('active');
    btnColorSchemeDark.classList.remove('active');
    
}


/**
 * Set color scheme to system and update active button 
 */
const setSystem = () => {
    colorScheme.set('system');
    btnColorSchemeLight.classList.remove('active');
    btnColorSchemeSystem.classList.add('active');
    btnColorSchemeDark.classList.remove('active');
    
}

/**
 * Set color scheme to dark and update active button
 */
const setDark = () => {
    colorScheme.set('dark');
    btnColorSchemeLight.classList.remove('active');
    btnColorSchemeSystem.classList.remove('active');
    btnColorSchemeDark.classList.add('active');
    
}



btnColorSchemeLight.addEventListener('click', setLight);
btnColorSchemeSystem.addEventListener('click', setSystem);
btnColorSchemeDark.addEventListener('click', setDark);





// Apply the user choice at start up
switch (colorScheme.getUserChoice()) {
    case "light": setLight(); break;
    case "system": setSystem(); break;
    case "dark": setDark(); break;
}
