let currentModal = null;

document.body.addEventListener('click', (event) => {

  // Check if modal target attribute exists
  const modalTargetId = event.target.getAttribute('btfcss-modal-target');
  console.log(modalTargetId, currentModal)
  if (modalTargetId)
    if (currentModal) closeModal(currentModal, modalTargetId); else openModal(modalTargetId);

  // Check if modal close attribute exists
  const modalCloseId = event.target.getAttribute('btfcss-modal-close');
  if (modalCloseId) closeModal(modalCloseId);

  // If the user click in the overlay, close the modal
  if (event.target.tagName == "DIALOG") {
    closeModal(event.target.id);
  }
});


/**
 * Toggle the modal with a given ID
 * @param {string} id ID of the modal
 */
const toggleModal = (id) => {
  const modal = document.getElementById(id);
  console.log(modal);
  if (modal.open) closeModal(id);
  else openModal(id);
};



/**
 * Open the modal with a given ID
 * @param {string} id ID of the modal
 */
const openModal = (id) => {
  const modalEl = document.getElementById(id);
  modalEl.classList.add('modal-is-opening')
  modalEl.addEventListener('animationend', () => {
    modalEl.classList.remove('modal-is-opening')
  }, { once: true });  
  modalEl.showModal();
  modalEl.querySelector('.modal-content:first-child').scrollIntoView();
  currentModal = id;
}

/**
 * Close the modal with a given ID
 * @param {string} id ID of the modal
 */
const closeModal = (id, next) => {
  console.log('closeModal', id, next)
  const modalEl = document.getElementById(id);
  modalEl.classList.add("modal-is-closing");
  modalEl.addEventListener('animationend', () => {
    modalEl.classList.remove('modal-is-closing')
    modalEl.close();
    currentModal = null;
    if (next) openModal(next);
  }, { once: true });

}

