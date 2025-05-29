import { openModal } from "@btfcss/modal";

// Prepare documentation modal elements
const documentationModal = document.getElementById('documentation-modal');
const documentationModalHeader = documentationModal.querySelector('header > h2');
const documentationModalContent = documentationModal.querySelector('.modal-content > div');


const populateModal = (documentationId) => {
  // Populate them modal
  const doc = document.getElementById(documentationId);
  documentationModalHeader.innerHTML = doc.querySelector('h2').innerHTML;
  documentationModalContent.innerHTML = doc.querySelector('content').innerHTML;
}

// When the modal documentation is opened
documentationModal.addEventListener('onModalOpen', (event) => {
  // Populate them modal
  populateModal('doc-' + event.triggerElement.dataset.documentation);
});


// Open the document modal if requested in the URL
const hash = window.location.hash.substring(1);
const button = document.querySelector('[data-documentation="'+hash+'"]');
if (hash && button) openModal('documentation-modal', button);