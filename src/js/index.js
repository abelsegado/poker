// Variables de juego
let deck = [];
let playerCards = [];
let tableCards = [];

// Boobleanos de juego
let startGame = false;

// Obtener los elementos de la interfaz de usuario
const tirarBtn = document.getElementById("tirarBtn");
const igualarBtn = document.getElementById("igualarBtn");
const subirBtn = document.getElementById("subirBtn");
const playerCardsElement = document.getElementById("playerCards");
const playerCardsImages = playerCardsElement.querySelectorAll("img");
const tableCardsElement = document.getElementById("tableCards");
const startBtn = document.getElementById("startBtn");
const botonesElement = document.querySelector(".botones");
const botonesHijos = botonesElement.querySelectorAll("button");

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

// Partida Nueva
function partidaNueva() {
  deck = [];
  playerCards = [];
  tableCards = [];
  init();
}

// Función mostrar mazo
function mostrarDeck() {
  return deck;
}

// Mostrar cartas jugador
function mostrarPlayerDeck() {
  return playerCards;
}

// Función para crear una baraja
function createDeck() {
  for (let i = 0; i < ranks.length; i++) {
    for (let j = 0; j < suits.length; j++) {
      deck.push({
        rank: ranks[i],
        suit: suits[j],
      });
    }
  }
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

  return deck;
}



// Función para repartir las cartas
function repartirPlayerCards() {
  for (let i = 0; i < 2; i++) {
    playerCards.push(deck.pop());
  }
  renderizarJugadorCards();
}

function repartirTableCards() {
  for (let i = 0; i < 2; i++) {
    tableCards.push(deck.pop());
  }
}

// Función para sacar nuevas 
// function drawCards() {
//   while (playerCards.length < 5 && deck.length > 0) {
//     playerCards.push(deck.pop());
//   }

//   renderizarJugadorCards();
// }

// Función para renderizar las cartas en la interfaz de usuario


function renderizarJugadorCards() {
  playerCards.forEach((card, index) => {
    const img = playerCardsImages[index];
    console.log(img);
    img.src = `assets/${card.suit}-${card.rank}.png`;
    img.alt = `${card.rank} of ${card.suit}`;
    img.style.opacity = 1;
    img.classList.add(`card-${index}`);
  });
}

// Función para tirar cartas
function tirarCards() {
  
  playerCards.forEach((card, index) => {
    const img = playerCardsImages[index];
    console.log(img);
    img.src = "assets/back.png";
    img.alt = "back";
    img.style.opacity = 1;
    img.classList.remove(`card-${index}`);
  });
  playerCards = [];
  desactivarButton();
}


// Función para iniciar el juego
function init() {
  startGame = true;
  // Activar botones
  activarButton();
  // Crear la baraja
  createDeck();
  // Mezclar la baraja
  shuffleDeck();
  // Repatir cartas
  repartirPlayerCards();
  // Mostrar Deck
  mostrarDeck();
}

// Asignar los eventos a los botones
startBtn.addEventListener("click", partidaNueva);

function activarButton() {
  botonesHijos.forEach((boton) => {
    boton.classList.remove("disabled");
  });
  tirarBtn.addEventListener("click", tirarCards);
}

function desactivarButton() {
  botonesHijos.forEach((boton) => {
    boton.classList.add("disabled");
  });
}
