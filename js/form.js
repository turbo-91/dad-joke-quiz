const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="main"]');

// Create new Question card on submit

function onSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  // preview statement

  const preview = document.createElement("h2");
  preview.setAttribute("class", "question-card__title");
  preview.textContent = "Preview:";
  main.append(preview);

  // card

  const card = document.createElement("section");
  card.setAttribute("class", "question-card__preview");
  main.append(card);

  // bookmark

  const cardBookmark = document.createElement("img");
  cardBookmark.setAttribute("class", "question-card__icon");
  cardBookmark.setAttribute("src", "../assets/bookmark_transparent.png");
  cardBookmark.setAttribute("alt", "bookmark");
  cardBookmark.setAttribute("data-js", `bookmark-preview`);
  card.append(cardBookmark);

  // event listener bookmark
  const bookmarkEvent = document.querySelector(`[data-js="bookmark-preview"]`);
  bookmarkEvent.addEventListener("click", () => {
    const currentSrc = cardBookmark.getAttribute("src");
    if (currentSrc.includes("bookmark_filled.png")) {
      cardBookmark.setAttribute("src", `/assets/bookmark_transparent.png`);
    } else {
      cardBookmark.setAttribute("src", `/assets/bookmark_filled.png`);
      window.alert("Can't bookmark unsubmitted question.");
    }
  });

  // joke question

  const question = document.createElement("h2");
  question.setAttribute("class", "question-card__title");
  let questionInput = data.yourQuestion;
  question.textContent = questionInput;
  card.append(question);

  // answer button

  const answerButton = document.createElement("button");
  answerButton.setAttribute("class", "question-card__button");
  answerButton.setAttribute("data-js", "button-joke-preview");
  answerButton.textContent = "click!";
  card.append(answerButton);
  const answerButtonEvent = document.querySelector(
    `[data-js="button-joke-preview"]`
  );
  answerButtonEvent.addEventListener("click", () => {
    answerText.classList.toggle("question-card__answer__unhide");
  });

  // answer

  const answerText = document.createElement("p");
  answerText.setAttribute("class", "question-card__answer");
  answerText.setAttribute("data-js", "answer");
  let answerInput = data.yourAnswer;
  answerText.textContent = answerInput;
  card.append(answerText);

  // tags

  const tagContainer = document.createElement("div");
  tagContainer.setAttribute("class", "question-card__tags");
  card.append(tagContainer);

  const tag = document.createElement("div");
  tag.setAttribute("class", "question-card__tag");
  let tagInput = data.yourTag;
  tag.textContent = "#" + tagInput;
  tagContainer.append(tag);

  window.alert(
    "Your joke has been submitted for redaction. You'll find a preview below."
  );
  event.target.reset();
}
form.addEventListener("submit", onSubmit);

// add show / hide functionality

// Character counter for question input field

const yourQuestion = document.querySelector('[data-js="yourQuestion"]');
const amountLeftQuestion = document.querySelector(
  '[data-js="amountLeftQuestion"]'
);
const maxLengthQuestion = yourQuestion.getAttribute("maxlength");

const updateAmountLeftQuestion = (value) => {
  amountLeftQuestion.innerText = value;
};

updateAmountLeftQuestion(maxLengthQuestion);

yourQuestion.addEventListener("input", () => {
  updateAmountLeftQuestion(maxLengthQuestion - yourQuestion.value.length);
});

// Character counter for answer input field

const yourAnswer = document.querySelector('[data-js="Answer"]');
const amountLeftAnswer = document.querySelector('[data-js="amountLeftAnswer"]');
const maxLengthAnswer = yourAnswer.getAttribute("maxlength");

const updateAmountLeftAnswer = (value) => {
  amountLeftAnswer.innerText = value;
};

updateAmountLeftAnswer(maxLengthAnswer);

yourAnswer.addEventListener("input", () => {
  updateAmountLeftAnswer(maxLengthAnswer - yourAnswer.value.length);
});
