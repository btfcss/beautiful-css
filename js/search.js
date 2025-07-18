const searchBtnEl = document.getElementById('search-btn');
const searchTextEl = document.getElementById('search-text');
const searchClearEl = document.getElementById('search-clear');

const masonryEl = document.getElementById('masonry');
const cardsEl = masonryEl.querySelectorAll(".card");
const noSearchResultEl = document.getElementById('no-search-result');

/**
 * Checks if a given string contains all the elements of an array as substrings.
 *
 * This function iterates through each substring in the provided array and checks 
 * if each one is present in the main string using the `includes` method.
 *
 * @param {string} mainString The main string in which to search for substrings.
 * @param {array} substrings An array of substrings to check for within the main string.
 * @returns Returns true if all substrings from the array are found in the main string, false otherwise.
 */
const containsAllSubstrings = (mainString, substrings) => {
  return substrings.every(substring => mainString.includes(substring));
}



/**
 * Prepare data structure
 * Create array of objects containing the element and the text content
 */
const cardList = Array.from(cardsEl).map((cardEl) => {
  let content = cardEl.querySelector('.header').innerText.toLocaleLowerCase();
  content += "\n" +  cardEl.querySelector('.body').innerText.toLocaleLowerCase();
  return { "element": cardEl, "text": content };
})


/**
 * Search a given text in the cards
 * Show / Hide the cards accord to the search results
 * @param {string} text The text to search
 * @returns {boolean} True if the text if found in at least one card, false otherwise
 */
const search = (words) => {
  let isFound = false;
  cardList.forEach(card => {
    if (containsAllSubstrings(card.text, words)) {
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
  hideNoSearchResults();
  cardsEl.forEach(cardEl => { cardEl.classList.remove('d-none'); });
}


/**
 * Hide the no search results message
 */
const hideNoSearchResults = () => {
  noSearchResultEl.classList.add('d-none');
}


/**
 * Show the no search results message
 */
const showNoSearchResults = () => {
  noSearchResultEl.classList.remove('d-none');
}

// On text input update
searchTextEl.addEventListener('input', () => {
  query = searchTextEl.value.toLowerCase();
  if (query.length > 2) {
    const isFound = search(query.split(/\s+/));
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



// Get query parameters (q for query)
const params = new URLSearchParams(window.location.search);
// Set the query in the search box and trigger the input event
searchTextEl.value = params.get("q");
searchTextEl.dispatchEvent(new Event('input', { bubbles: true }));