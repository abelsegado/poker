
// Variables de juego
let deck = [];
let playerCards = [];
let tableCards = [];

// Obtener los elementos de la interfaz de usuario
const tirarBtn = document.getElementById("tirarBtn");
const igualarBtn = document.getElementById("igualarBtn");
const subirBtn = document.getElementById("subirBtn");
const playerCardsElement = document.getElementById("playerCards");
const tableCardsElement = document.getElementById("tableCards");
const nuevoBtn = document.getElementById("nuevoBtn");
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

// Función mostrar mazo
function mostrarDeck() {
  return deck;
}

function mostrarPlayerDeck() {
  return playerCards;
}

// Función para repartir las cartas
function repartirCards() {

  for (let i = 0; i < 2; i++) {
    playerCards.push(deck.pop());
  }
  repartirJugadorCards();
  return mostrarDeck();
}

// Función para tirar cartas
function tirarCards() {
  playerCards=[];

  playerCardsElement.querySelectorAll("img").forEach((img) => {
    img.src = "assets/back.png";
  });

  playerCardsElement.querySelectorAll("img").forEach((img, index) => {
    img.classList.add("card", `card-${index}`);
    img.classList.add(`rotate-${index % 2 === 0 ? "left" : "right"}`);
    
  });
}


// Función para sacar nuevas cartas
// function drawCards() {
//   while (playerCards.length < 5 && deck.length > 0) {
//     playerCards.push(deck.pop());
//   }

//   repartirJugadorCards();
// }

// Función para renderizar las cartas en la interfaz de usuario
function repartirJugadorCards() {
  playerCardsElement.innerHTML = "";

  playerCards.forEach((card, index) => {
    const img = document.createElement("img");

    img.classList.add("card");
    // img.classList.add(`translate-${index % 2 === 0 ? "left" : "right"}`);
    img.src = `assets/${card.suit}-${card.rank}.png`;
    img.alt = `${card.rank} of ${card.suit}`;
    console.log(card)

    playerCardsElement.appendChild(img);
  });
}
// Función para iniciar el juego
function init() {

  // Crear la baraja
  createDeck();
  // Mezclar la baraja
  shuffleDeck();
  // Repatir cartas
  repartirCards();
  // Mostrar Deck
  mostrarDeck();
  

}



  // Asignar los eventos a los botones
  nuevoBtn.addEventListener("click", partidaNueva);
  tirarBtn.addEventListener("click", tirarCards);
  // subirBtn.addEventListener("click", drawCards);
