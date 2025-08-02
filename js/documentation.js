import { openModal } from "@btfcss/modal";
//import { openModal } from "./modal.js";

let docId = undefined;

// Prepare documentation modal elements
const documentationModal = document.getElementById('documentation-modal');
const documentationModalHeader = documentationModal.querySelector('header > h2');
const documentationModalContent = documentationModal.querySelector('.modal-content > div');


const populateModal = (documentationId) => {
  
  // If the same documentation has already been opened, do not scroll to top
  if (docId == documentationId) {    
    documentationModal.removeAttribute('data-scroll-to');
    return;
  }
  else documentationModal.setAttribute('data-scroll-to', 'top');
  // Populate the modal
  const doc = document.getElementById(documentationId);
  documentationModalHeader.innerHTML = doc.querySelector('h2').innerHTML;
  documentationModalContent.innerHTML = doc.querySelector('content').innerHTML;
  docId = documentationId;
}

// When the modal documentation is opened
documentationModal.addEventListener('onModalOpen', (event) => {
  // Populate them modal
  populateModal('doc-' + event.triggerElement.dataset.documentation);
});


// Open the document modal if requested in the URL
const hash = window.location.hash.substring(1);
const button = document.querySelector('[data-documentation="' + hash + '"]');
if (hash && button) openModal('documentation-modal', button);
