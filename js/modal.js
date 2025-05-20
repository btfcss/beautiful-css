let currentModalId = null;

document.body.addEventListener('click', (event) => {

  // Check if modal target attribute exists
  if (event.target.matches('[data-open-modal]')) {
    const targetModalId = event.target.dataset.openModal;  
    if (currentModalId) closeModal(currentModalId, targetModalId); else openModal(targetModalId);
  }

  // Check if modal close attribute exists
  if (event.target.matches('[data-close-modal]')) closeModal(currentModalId);

});


/**
 * Toggle the modal with a given ID
 * @param {string} id ID of the modal
 */
const toggleModal = (id) => {
  const modal = document.getElementById(id);  
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
  currentModalId = id;
}

/**
 * Close the modal with a given ID
 * @param {string} id ID of the modal
 */
const closeModal = (id, next) => {
  const modalEl = document.getElementById(id);
  modalEl.classList.add("modal-is-closing");
  modalEl.addEventListener('animationend', () => {
    modalEl.classList.remove('modal-is-closing')
    modalEl.close();
    currentModalId = null;
    if (next) openModal(next);
  }, { once: true });

}

