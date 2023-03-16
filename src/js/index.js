
// Variables de juego
let deck = [];
let playerCards = [];
let dealerCards = [];
let discardedCards = [];

// Obtener los elementos de la interfaz de usuario
const dealBtn = document.getElementById("dealBtn");
const discardBtn = document.getElementById("discardBtn");
const drawBtn = document.getElementById("drawBtn");
const playerCardsElement = document.getElementById("playerCards");
const dealerCardsElement = document.getElementById("dealerCards");
const ranks = [
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
  "A",
];
const suits = ["spades", "clubs", "diamonds", "hearts"];

// Función para crear una baraja
function createDeck() {
  let deck = [];

  for (let i = 0; i < ranks.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      deck.push({
        rank: ranks[i],
        suit: suits[j],
      });
    }
  }

  console.log(deck);
  return deck;
}
// Función para mezclar la baraja
function shuffleDeck() {
  for (let i = 0; i < deck.length; i++) {
    const randomIndex = Math.floor(Math.random() * deck.length);
    const temp = deck[i];
    deck[i] = deck[randomIndex];
    deck[randomIndex] = temp;
  }
  console.log(deck);
}


// Función para repartir las cartas
function dealCards() {
  playerCards = [];
  dealerCards = [];
  discardedCards = [];

  for (let i = 0; i < 5; i++) {
    playerCards.push(deck.pop());
    dealerCards.push(deck.pop());
  }

  renderCards();
}

// Función para descartar cartas
function discardCards() {
  playerCards.forEach((card, index) => {
    if (card.selected) {
      discardedCards.push(playerCards.splice(index, 1)[0]);
    }
  });

  drawCards();
}

// Función para sacar nuevas cartas
function drawCards() {
  while (playerCards.length < 5 && deck.length > 0) {
    playerCards.push(deck.pop());
  }

  renderCards();
}

// Función para renderizar las cartas en la interfaz de usuario
function renderCards() {
  playerCardsElement.innerHTML = "";
  dealerCardsElement.innerHTML = "";

  playerCards.forEach((card, index) => {
    const img = document.createElement("img");
    img.src = `assets/${card.suit}-${card.rank}.png`;
    img.alt = `${card.rank} of ${card.suit}`;
    img.dataset.index = index;
    img.classList.add("card");
    if (card.selected) {
      img.classList.add("selected");
    }
    img.addEventListener("click", () => {
      card.selected = !card.selected;
      renderCards();
    });
    playerCardsElement.appendChild(img);
  });

  dealerCards.forEach((card, index) => {
    const img = document.createElement("img");
    img.src = `assets/${card.suit}-${card.rank}.png`;
    img.alt = `${card.rank} of ${card.suit}`;
    dealerCardsElement.appendChild(img);
  });
}
// Función para iniciar el juego
function init() {
  // Crear la baraja
  for (let i = 0; i < ranks.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      deck.push({ rank: ranks[i], suit: suits[j] });
    }
  }

  // Mezclar la baraja
  shuffleDeck();

  // Asignar los eventos a los botones
  dealBtn.addEventListener("click", dealCards);
  discardBtn.addEventListener("click", discardCards);
  drawBtn.addEventListener("click", drawCards);
}

// Iniciar el juego al cargar la página
init();
