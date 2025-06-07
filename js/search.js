const searchBtnEl = document.getElementById('search-btn');
const searchTextEl = document.getElementById('search-text');
const searchClearEl = document.getElementById('search-clear');

const masonryEl = document.getElementById('masonry');
const cardsEl = masonryEl.querySelectorAll(".card");


/**
 * Prepare data structure
 * Create array of objects containing the element and the text content
 */
const cardList = Array.from(cardsEl).map((cardEl) => {
  let content = cardEl.querySelector('.header').innerText.toLocaleLowerCase();
  content += "\n" +  cardEl.querySelector('.body').innerText.toLocaleLowerCase();
  console.log (content);
  return { "element": cardEl, "text": content };
})


/**
 * Search a given text in the cards
 * Show / Hide the cards accord to the search results
 * @param {string} text The text to search
 * @returns {boolean} True if the text if found in at least one card, false otherwise
 */
const search = (text) => {
  let isFound = false;
  cardList.forEach(card => {
    if (card.text.includes(text)) {
      card.element.classList.remove('d-none');
      isFound = true;
    }
    else card.element.classList.add('d-none');
  })
  return isFound;
}


/**
 * Show all cards
 */
const showAll = () => {
  cardsEl.forEach(cardEl => { cardEl.classList.remove('d-none'); });
}


/**
 * Hide the no search results message
 */
const hideNoSearchResults = () => {

}


/**
 * Show the no search results message
 */
const showNoSearchResults = () => {
  
}

// On text input update
searchTextEl.addEventListener('input', () => {
  text = searchTextEl.value.toLowerCase();
  if (text.length > 2) {
    const isFound = search(text);
    if (isFound) hideNoSearchResults(); else showNoSearchResults();
  }
  else showAll();
})


// When the user click the clear button
searchClearEl.addEventListener('click', () => {
  showAll();
  searchTextEl.value = "";
  searchTextEl.focus();
})