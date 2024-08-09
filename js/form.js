const form = document.querySelector('[data-js="form"]');
const main = document.querySelector('[data-js="main"]');

// Load submit count from local storage or initialize it
let submitCount = localStorage.getItem("submitCount")
  ? parseInt(localStorage.getItem("submitCount"))
  : 0;

// Create new Question card on submit

function onSubmit(event) {
  event.preventDefault();

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);

  // Validate all fields are filled
  if (!data.yourQuestion || !data.yourAnswer || !data.yourTag) {
    window.alert("All fields are required!");
    return; // Stop form submission if any field is empty
  }

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

  // submit message

  window.alert("Your joke has been submitted for redaction. Here's a preview.");

  // Increment and save submit count to local storage
  submitCount++;
  localStorage.setItem("submitCount", submitCount);
  console.log(`Submit button has been used ${submitCount} times.`);

  // Reset the form and character counters

  event.target.reset();
  updateAmountLeftQuestion(maxLengthQuestion);
  updateAmountLeftAnswer(maxLengthAnswer);
}
form.addEventListener("submit", onSubmit);

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

// Disallow spaces in tag input field

const yourTag = document.querySelector('[data-js="yourTag"]');

yourTag.addEventListener("input", (event) => {
  yourTag.value = yourTag.value.replace(/\s+/g, "");
});
