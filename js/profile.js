// bookmark counter
const bookmarkCounterElement = document.querySelector(
  '[data-js="bookmark-counter"]'
);
bookmarkCounterElement.addEventListener("click", () => {
  window.alert("This is the amount of bookmarked jokes.");
});

function getAllJokesFromLocalStorage() {
  const localJokes = [];
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    try {
      const parsedValue = JSON.parse(value);
      localJokes.push(parsedValue);
    } catch (error) {
      console.error(`Error parsing value for key ${key}:`, error);
    }
  }
  console.log(localJokes);
  return localJokes;
}

const localJokes = getAllJokesFromLocalStorage();
function bookmarkCounter() {
  let bookmarkCounterNumber = 0;
  localJokes.forEach((joke) => {
    bookmarkCounterNumber++;
  });
  bookmarkCounterElement.textContent = bookmarkCounterNumber;
}
bookmarkCounter();

// joke counter

const jokeCounter = document.querySelector('[data-js="joke-counter"]');
jokeCounter.addEventListener("click", () => {
  window.alert("This is the amount of submitted jokes.");
});
