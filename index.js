import { createJokeCard } from "./components/card/card.js";

const dadJokes = [
  {
    question: "What kind of shoes do ninjas wear?",
    answer: "Sneakers.",
    tags: ["clothing", "martial arts", "footwear"],
  },
  {
    question: "Why did the scarecrow become a successful neurosurgeon?",
    answer: "He was outstanding in his field.",
    tags: ["work", "medicine", "success"],
  },
  {
    question: "Why did the student eat his homework?",
    answer: "Because the teacher told him it was a piece of cake.",
    tags: ["school", "homework", "food"],
  },
  {
    question: "Why did the computer go to the doctor?",
    answer: "It had a virus.",
    tags: ["technology", "health", "computers"],
  },
  {
    question: "Why did the coffee file a police report?",
    answer: "It got mugged.",
    tags: ["food", "beverages", "crime"],
  },
  {
    question: "What do you call a fish with no eyes?",
    answer: "Fsh.",
    tags: ["animals", "sea", "wordplay"],
  },
  {
    question: "Why was the math book sad?",
    answer: "It had too many problems.",
    tags: ["school", "homework", "math"],
  },
  {
    question: "What do you call a pile of cats?",
    answer: "A meowtain.",
    tags: ["animals", "cats", "pile"],
  },
  {
    question: "What did one wall say to the other wall?",
    answer: "I'll meet you at the corner.",
    tags: ["home", "construction", "meeting"],
  },
  {
    question: "Why don’t you ever see elephants hiding in trees?",
    answer: "Because they’re so good at it.",
    tags: ["animals", "hiding", "trees"],
  },
  {
    question: "What did the grape do when he got stepped on?",
    answer: "Nothing but let out a little wine.",
    tags: ["food", "fruit", "wine"],
  },
  {
    question: "How does a penguin build its house?",
    answer: "Igloos it together.",
    tags: ["animals", "cold"],
  },
  {
    question: "What did the ocean say to the beach?",
    answer: "Nothing, it just waved.",
    tags: ["nature", "ocean", "beach"],
  },
  {
    question: "How does a scientist freshen her breath?",
    answer: "With experi-mints.",
    tags: ["science", "freshness", "experiments"],
  },
  {
    question: "Why was the computer cold?",
    answer: "It left its Windows open.",
    tags: ["technology", "cold", "computers"],
  },
  {
    question: "What do you call a dinosaur with an extensive vocabulary?",
    answer: "A thesaurus.",
    tags: ["dinosaurs", "words", "education"],
  },
  {
    question: "What do you call a fake noodle?",
    answer: "An impasta.",
    tags: ["food", "Italian"],
  },
  {
    question: "How does a duck ask for more food?",
    answer: "Put it on my bill.",
    tags: ["animals", "food", "requests"],
  },
  {
    question: "Why don’t scientists trust atoms?",
    answer: "Because they make up everything.",
    tags: ["science", "atoms", "trust"],
  },
  {
    question: "What kind of dog loves indulging in a bath?",
    answer: "A shampoo-dle.",
    tags: ["animals", "pets", "bath"],
  },
  {
    question: "What did the big flower say to the little flower?",
    answer: "Hey, bud!",
    tags: ["nature", "flowers", "greetings"],
  },
  {
    question: "Why did the bicycle fall over?",
    answer: "It was two-tired.",
    tags: ["transportation", "exercise"],
  },
  {
    question: "Why don’t some couples go to the gym?",
    answer: "Because some relationships don’t work out.",
    tags: ["relationships", "exercise"],
  },
  {
    question: "How do cows stay up to date with current events?",
    answer: "They read the moos-paper.",
    tags: ["animals", "news", "reading"],
  },
  {
    question: "What do you call a bear with no teeth?",
    answer: "A gummy bear.",
    tags: ["animals", "sweet", "gummy"],
  },
  {
    question: "What do you call cheese that isn't yours?",
    answer: "Nacho cheese.",
    tags: ["food", "cheese"],
  },
  {
    question: "What do you call a snowman with a six-pack?",
    answer: "An abdominal snowman.",
    tags: ["winter", "snowman", "fitness"],
  },
  {
    question: "How does a penguin drink its coffee?",
    answer: "In a penguin mug.",
    tags: ["animals", "beverages", "coffee"],
  },
  {
    question: "What do you call a factory that makes good products?",
    answer: "A satisfactory.",
    tags: ["work", "business"],
  },
  {
    question: "What kind of shoes do ninjas wear?",
    answer: "Sneakers.",
    tags: ["clothing", "martial arts", "footwear"],
  },
  {
    question: "Why did the tomato turn red?",
    answer: "Because it saw the salad dressing.",
    tags: ["food", "vegetables", "humor"],
  },
  {
    question: "Why did the scarecrow win an award?",
    answer: "Because he was outstanding in his field.",
    tags: ["farm", "work"],
  },
  {
    question: "Why do birds fly south in the winter?",
    answer: "Because it’s faster than walking.",
    tags: ["animals", "seasonal", "migration"],
  },
  {
    question: "What did the janitor say when he jumped out of the closet?",
    answer: "Supplies!",
    tags: ["work", "cleaning", "surprise"],
  },
  {
    question: "What do you call a lazy kangaroo?",
    answer: "A pouch potato.",
    tags: ["animals", "slang", "relaxation"],
  },
  {
    question: "Why are ghosts bad liars?",
    answer: "Because they are too transparent.",
    tags: ["spooky", "ghosts"],
  },
  {
    question: "Why did the scarecrow become a successful neurosurgeon?",
    answer: "He was outstanding in his field.",
    tags: ["work", "medicine", "success"],
  },
  {
    question: "What did the left eye say to the right eye?",
    answer: "Between you and me, something smells.",
    tags: ["body", "eyes", "sense of smell"],
  },
  {
    question: "How does a scientist freshen her breath?",
    answer: "With experi-mints.",
    tags: ["science", "freshness", "experiments"],
  },
  {
    question: "Why did the golfer bring two pairs of pants?",
    answer: "In case he got a hole in one.",
    tags: ["sports", "golf", "clothing"],
  },
  {
    question: "Why did the banana go to the doctor?",
    answer: "Because it wasn’t peeling well.",
    tags: ["food", "health"],
  },
  {
    question: "Why don’t some couples go to the gym?",
    answer: "Because some relationships don’t work out.",
    tags: ["relationships", "exercise"],
  },
  {
    question: "What do you call a pile of cats?",
    answer: "A meowtain.",
    tags: ["animals", "cats", "pile"],
  },
  {
    question: "What do you call a fish with no eyes?",
    answer: "Fsh.",
    tags: ["animals", "sea", "wordplay"],
  },
  {
    question: "What did the zero say to the eight?",
    answer: "Nice belt!",
    tags: ["numbers", "clothing", "compliments"],
  },
  {
    question: "Why did the scarecrow become a successful neurosurgeon?",
    answer: "He was outstanding in his field.",
    tags: ["work", "medicine", "success"],
  },
  {
    question: "What do you call a pile of cats?",
    answer: "A meowtain.",
    tags: ["animals", "cats", "pile"],
  },
  {
    question: "Why did the student eat his homework?",
    answer: "Because the teacher told him it was a piece of cake.",
    tags: ["school", "homework", "food"],
  },
  {
    question: "What kind of shoes do ninjas wear?",
    answer: "Sneakers.",
    tags: ["clothing", "martial arts", "footwear"],
  },
  {
    question: "What do you call a factory that makes good products?",
    answer: "A satisfactory.",
    tags: ["work", "business"],
  },
  {
    question: "What kind of shoes do ninjas wear?",
    answer: "Sneakers.",
    tags: ["clothing", "martial arts", "footwear"],
  },
  {
    question: "Why don’t scientists trust atoms?",
    answer: "Because they make up everything.",
    tags: ["science", "atoms", "trust"],
  },
  {
    question: "What did the zero say to the eight?",
    answer: "Nice belt!",
    tags: ["numbers", "clothing", "compliments"],
  },
  {
    question: "Why did the scarecrow become a successful neurosurgeon?",
    answer: "He was outstanding in his field.",
    tags: ["work", "medicine", "success"],
  },
  {
    question: "What do you call a pile of cats?",
    answer: "A meowtain.",
    tags: ["animals", "cats", "pile"],
  },
  {
    question: "Why did the student eat his homework?",
    answer: "Because the teacher told him it was a piece of cake.",
    tags: ["school", "homework", "food"],
  },
  {
    question: "What do you call a dinosaur with an extensive vocabulary?",
    answer: "A thesaurus.",
    tags: ["dinosaurs", "words", "education"],
  },
  {
    question: "Why did the scarecrow become a successful neurosurgeon?",
    answer: "He was outstanding in his field.",
    tags: ["work", "medicine", "success"],
  },
];

dadJokes.forEach((joke, index) => {
  createJokeCard(joke, index);
});
