const cardArray = [
  { name: "fries", image: "images/fries.png" },
  { name: "cheeseburger", image: "images/cheeseburger.png" },
  { name: "hotdog", image: "images/hotdog.png" },
  { name: "ice-cream", image: "images/ice-cream.png" },
  { name: "milkshake", image: "images/milkshake.png" },
  { name: "pizza", image: "images/pizza.png" },
  { name: "fries", image: "images/fries.png" },
  { name: "cheeseburger", image: "images/cheeseburger.png" },
  { name: "hotdog", image: "images/hotdog.png" },
  { name: "ice-cream", image: "images/ice-cream.png" },
  { name: "milkshake", image: "images/milkshake.png" },
  { name: "pizza", image: "images/pizza.png" },
];

cardArray.sort(() => 0.5 - Math.random());

const gridDisplay = document.querySelector("#grid");
const resultDisplay = document.querySelector("#result");
let cardsChosen = [];
let cardsChosenIds = [];
const cardsWon = [];

function createBoard() {
  for (let i = 0; i < cardArray.length; i++) {
    const card = document.createElement("img");
    card.setAttribute("src", "images/blank.png");
    card.setAttribute("data-id", i);
    card.addEventListener("click", flipCard);
    gridDisplay.appendChild(card);
  }
}

createBoard();

function checkMatch() {
  const cards = document.querySelectorAll("#grid img");
  const optionOneId = cardsChosenIds[0];
  const optionTwoId = cardsChosenIds[1];

  if (optionOneId == optionTwoId) {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    alert("You clicked the same image");
  }

  if (cardsChosen[0] == cardsChosen[1]) {
    alert("You found a match");
    cards[optionOneId].setAttribute("src", "images/white.png");
    cards[optionTwoId].setAttribute("src", "images/white.png");
    cards[optionOneId].removeEventListener("click", flipCard);
    cards[optionTwoId].removeEventListener("click", flipCard);
    cardsWon.push(cardsChosen);
  } else {
    cards[optionOneId].setAttribute("src", "images/blank.png");
    cards[optionTwoId].setAttribute("src", "images/blank.png");
    alert("Sorry try again!");
  }
  resultDisplay.textContent = cardsWon.length;
  cardsChosen = [];
  cardsChosenIds = [];

  if (cardsWon.length === cardArray.length / 2) {
    resultDisplay.textContent = "Congratulations you found them all";
  }
}

function flipCard() {
  let cardId = this.getAttribute("data-id");
  cardsChosen.push(cardArray[cardId].name);
  cardsChosenIds.push(cardId);
  this.setAttribute("src", cardArray[cardId].image);
  if (cardsChosen.length === 2) {
    setTimeout(checkMatch, 500);
  }
}
