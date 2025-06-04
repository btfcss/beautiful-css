const searchBtnEl = document.getElementById('search-btn');
const searchTextEl = document.getElementById('search-text');
const searchClearEl = document.getElementById('search-clear');


// On text input update
searchTextEl.addEventListener('input', () => {
  text = searchTextEl.value;
  if (text.length > 2) {
    console.log (text);
  }
  else {
    console.log ('show all');
  }
})


// When the user click the clear button
searchClearEl.addEventListener('click', () => {
  searchTextEl.value = "";
  searchTextEl.focus();
})