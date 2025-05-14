import colorScheme from "./color-scheme";

const btnColorSchemeLight = document.getElementById('btn-color-scheme-light');
const btnColorSchemeSystem = document.getElementById('btn-color-scheme-system');
const btnColorSchemeDark = document.getElementById('btn-color-scheme-dark');


btnColorSchemeLight.addEventListener('click', () => {
    colorScheme.set('light');
    console.log('Change for ', colorScheme.get());
})

btnColorSchemeDark.addEventListener('click', () => {
    colorScheme.set('dark');
    console.log('Change for ', colorScheme.get());
})


btnColorSchemeSystem.addEventListener('click', () => {
    colorScheme.set('system');
    console.log('Change for ', colorScheme.get());
})