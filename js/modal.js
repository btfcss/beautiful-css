
document.body.addEventListener('click', (event) => {

  // Check if modal target attribute exists
  const modalTargetId = event.target.getAttribute('btfcss-modal-target');
  if (modalTargetId) openModal(modalTargetId);

  // Check if modal close attribute exists
  const modalCloseId = event.target.getAttribute('btfcss-modal-close');
  if (modalCloseId) closeModal(modalCloseId);
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
}

/**
 * Close the modal with a given ID
 * @param {string} id ID of the modal
 */
const closeModal = (id) => {
  const modalEl = document.getElementById(id);
  modalEl.classList.add("modal-is-closing");
  modalEl.addEventListener('animationend', () => {
    modalEl.classList.remove('modal-is-closing')
    modalEl.close();
  }, { once: true });

}
