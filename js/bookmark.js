import { createJokeCardBookmark } from "./card.js";

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
localJokes.forEach((joke, index) => {
  console.log(joke);
  createJokeCardBookmark(joke, index);
});
