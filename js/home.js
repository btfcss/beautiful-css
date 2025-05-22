import hljs from "highlight.js";
import '@fortawesome/fontawesome-free/js/all.js';
import "./color-scheme-switcher";
//import "@btfcss/modal";
import "./modal";




// Highlight codes
hljs.highlightAll({ showLanguageLabel: true });



// The page is hidden at startup
// Display the page once loaded
window.onload = function () {
  document.querySelector('body').style.removeProperty('display');
};



// Prepare documentation modal elements
const documentationModal = document.getElementById('documentation-modal');
const documentationModalHeader = documentationModal.querySelector('header > h2');
const documentationModalContent = documentationModal.querySelector('.modal-content > div');


// When the modal documentation is opened
documentationModal.addEventListener('onModalShow', (event) => {
    
  // Populate them modal
    const documentationId = 'doc-' + event.triggerElement.dataset.documentation;
    const doc = document.getElementById(documentationId);
    documentationModalHeader.innerHTML = doc.querySelector('h2').innerHTML;
    documentationModalContent.innerHTML = doc.querySelector('content').innerHTML;
});
