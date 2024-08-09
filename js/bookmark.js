import { createJokeCardBookmark } from "./card.js";

function getAllJokesFromLocalStorage() {
  const localJokes = [];
  const jokeKeyPrefix = "joke-"; // Assuming keys start with "joke_"

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);

    // Filter out keys that do not match the joke pattern
    if (key.startsWith(jokeKeyPrefix)) {
      const value = localStorage.getItem(key);
      try {
        const parsedValue = JSON.parse(value);

        // Optionally, you can add an extra check to ensure the parsed value is indeed a joke object
        if (parsedValue && parsedValue.question && parsedValue.answer) {
          localJokes.push(parsedValue);
        }
      } catch (error) {
        console.error(`Error parsing value for key ${key}:`, error);
      }
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
