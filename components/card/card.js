const main = document.querySelector('[data-js="main"]');

export function createJokeCard(joke, index) {
  // section element
  const card = document.createElement("section");
  card.setAttribute("class", "question-card");
  card.setAttribute("data-js", `question-card-${index}`);
  main.append(card);

  // img element
  const cardBookmark = document.createElement("img");
  cardBookmark.setAttribute("class", "question-card__icon");
  cardBookmark.setAttribute("src", `/assets/bookmark_transparent.png`);
  cardBookmark.setAttribute("alt", `bookmark`);
  cardBookmark.setAttribute("data-js", `bookmark-${index}`);
  card.append(cardBookmark);
  // event listener bookmark
  const bookmarkEvent = document.querySelector(`[data-js="bookmark-${index}"]`);
  bookmarkEvent.addEventListener("click", () => {
    const isJokeCurrentlySaved = localStorage.getItem(`joke-${index}`);
    if (isJokeCurrentlySaved) {
      localStorage.removeItem(`joke-${index}`);
      cardBookmark.setAttribute("src", `/assets/bookmark_transparent.png`);
    } else {
      localStorage.setItem(`joke-${index}`, JSON.stringify(joke));
      cardBookmark.setAttribute("src", `/assets/bookmark_filled.png`);
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
  answerButton.setAttribute("data-js", "button");
  answerButton.textContent = "answer";
  card.append(answerButton);

  // answer text
  const answerText = document.createElement("p");
  // answerText.setAttribute("class", "question-card__answer");
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
