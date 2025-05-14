import systemColorScheme from "@btfcss/system-color-scheme";



// User color scheme choice [ "light" | "system" | "dark"]
// Check in local storage first, then set "system" as default
let userChoice = localStorage.getItem('btfcss-color-scheme') || "system";


/**
 * Update the CSS to match the new color scheme
 * @param {string} colorScheme the new color scheme [ "light" |  "light dark" | "dark"]
 */
const updateRootCSS = (cssColorScheme) => {
    document.querySelector(':root').style.setProperty('color-scheme', cssColorScheme);
}



/**
 * Update the user color scheme choice 
 * @param {string} newColorScheme New color scheme [ "light" | "system" | "dark" ]
 * @param {boolean} updateRootCss When true, update the CSS root:color-scheme property
 */
const set = (newColorScheme, updateRootCss = true) => {
    // Update user choice
    userChoice = newColorScheme;
    // Store user choice in local storage to get persistant value
    localStorage.setItem('btfcss-color-scheme', userChoice);

    // If requested, update root css light-dark style
    if (updateRootCss) {
        switch (userChoice) {
            case 'light': updateRootCSS('light'); break;
            case 'dark': updateRootCSS('dark'); break;
            default: updateRootCSS('light dark');
        }
    }
}


/**
 * Return the current color scheme
 * @returns {string} Returns current page color scheme [ "light" | "dark" ]
 */
const get = () => {
    switch (userChoice) {
        case 'light': return 'light';
        case 'dark': return 'dark';
        default: return systemColorScheme.get();
    }
}


/**
 * Return the current user color scheme choice
 * @returns {string} Returns current user choice [ "light" | "system" | "dark" ]
 */
const getUserChoice = () => {
    return userChoice;
}


// Export the module
const colorScheme = {    
    set,
    get,
    getUserChoice,
    updateRootCSS
}
export default colorScheme;