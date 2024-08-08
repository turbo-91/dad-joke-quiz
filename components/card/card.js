const main = document.querySelector('[data-js="main"]');

export function createJokeCard(joke) {
  // section element
  const card = document.createElement("section");
  card.setAttribute("class", "question-card");
  card.setAttribute("data-js", `question-card-${joke.id}`);
  main.append(card);

  // img element
  const isJokeCurrentlySaved = localStorage.getItem(`joke-${joke.id}`);
  const cardBookmark = document.createElement("img");

  if (isJokeCurrentlySaved) {
    cardBookmark.setAttribute("src", `/assets/bookmark_filled.png`);
  } else {
    cardBookmark.setAttribute("src", `/assets/bookmark_transparent.png`);
  }
  cardBookmark.setAttribute("class", "question-card__icon");
  cardBookmark.setAttribute("alt", `bookmark`);
  cardBookmark.setAttribute("data-js", `bookmark-${joke.id}`);
  card.append(cardBookmark);

  // event listener bookmark
  const bookmarkEvent = document.querySelector(
    `[data-js="bookmark-${joke.id}"]`
  );
  bookmarkEvent.addEventListener("click", () => {
    const isJokeCurrentlySaved = localStorage.getItem(`joke-${joke.id}`);
    if (isJokeCurrentlySaved) {
      localStorage.removeItem(`joke-${joke.id}`);
      cardBookmark.setAttribute("src", `/assets/bookmark_transparent.png`);
      location.reload();
    } else {
      localStorage.setItem(`joke-${joke.id}`, JSON.stringify(joke));
      cardBookmark.setAttribute("src", `/assets/bookmark_filled.png`);
      location.reload();
    }
  });

  // // joke Question
  const jokeQuestion = document.createElement("h2");
  jokeQuestion.setAttribute("class", "question-card__title");
  jokeQuestion.textContent = `${joke.question}`;
  card.append(jokeQuestion);

  // answer button
  const answerButton = document.createElement("button");
  answerButton.setAttribute("class", "question-card__button");
  answerButton.setAttribute("data-js", `button-joke-${joke.id}`);
  answerButton.textContent = "click!";
  card.append(answerButton);
  const answerButtonEvent = document.querySelector(
    `[data-js="button-joke-${joke.id}"]`
  );
  answerButtonEvent.addEventListener("click", () => {
    answerText.classList.toggle("question-card__answer__unhide");
  });

  // answer text
  const answerText = document.createElement("p");
  answerText.setAttribute("class", "question-card__answer");
  answerText.setAttribute("data-js", "answer");
  answerText.textContent = `${joke.answer}`;
  card.append(answerText);

  // tag container
  const tagContainer = document.createElement("div");
  tagContainer.setAttribute("class", "question-card__tags");
  card.append(tagContainer);

  // tag loop
  joke.tags.forEach((jokeTag) => {
    const tag = document.createElement("div");
    tag.setAttribute("class", "question-card__tag");
    tag.textContent = `#${jokeTag}`;
    tagContainer.append(tag);
  });
}
