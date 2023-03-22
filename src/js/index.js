// Variables de juego
let deck = [];
let playerCards1 = [];
let playerCards2 = [];
let tableCards = [];

// Boobleanos de juego
let startGame = false;

// Obtener los elementos de la interfaz de usuario
const botones = document.querySelectorAll(".botonPlayer");

const botonesTirar = document.querySelectorAll("#tirarBtn");
const botonesIgualar = document.querySelectorAll("#igualarBtn");
const botonesSubir = document.querySelectorAll("#subirBtn");

const jugadores = document.querySelectorAll(".player");

const playerCardsElement = document.getElementById("playerCards1");
const playerCardsImages = playerCardsElement.querySelectorAll("img");
const playerCards2Element = document.getElementById("playerCards2");
const playerCards2Images = playerCards2Element.querySelectorAll("img");

const tableCardsElement = document.getElementById("tableCards");
const tableCardsImages = tableCardsElement.querySelectorAll("img");

const startBtn = document.getElementById("startBtn");

// const botonesElement = document.querySelector(".botones");
// const botones = botonesElement.querySelectorAll("button");



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
// const funciones = [
//   tirarCards,
//   igualarBet,
//   igualarBet,
//   tirarCards2,
//   igualarBet,
//   igualarBet,
// ];
// Partida Nueva
function partidaNueva() {
  deck = [];
  playerCards1 = [];
  playerCards2 = [];
  tableCards = [];

  init();
}

// Función mostrar mazo
function mostrarDeck() {
  return deck;
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

// Función para repartir las cartas jugador1
function repartirPlayer1Cards() {
  for (let i = 0; i < 2; i++) {
    playerCards1.push(deck.pop());
  }
  renderizarJugador1Cards();
}
// Función para repartir las cartas jugador2
function repartirPlayer2Cards() {
  for (let i = 0; i < 2; i++) {
    playerCards2.push(deck.pop());
  }
  renderizarJugador2Cards();
}
// Funcion para repartir cartas a la mesa
function repartirTableCards() {
  for (let i = 0; i < 3; i++) {
    tableCards.push(deck.pop());
  }
  renderizarTableCards();
}

// Eliminar visualmente cartas mesa
function eliminarTableCards() {
  tableCardsImages.forEach((img) => {
    img.style.display = "none";
  });
}

// Función para igualar apuesta
function igualarBet() {
  repartirTableCards();
  renderizarTableCards();
}

// Función para sacar nuevas
// function drawCards() {
//   while (playerCards1.length < 5 && deck.length > 0) {
//     playerCards1.push(deck.pop());
//   }

//   renderizarJugadorCards();
// }

// Función para renderizar las cartas en la interfaz de usuario

function renderizarJugador1Cards() {
  playerCards1.forEach((card, index) => {
    const img = playerCardsImages[index];
    img.src = `assets/${card.suit}-${card.rank}.png`;
    img.alt = `${card.rank} of ${card.suit}`;
    img.style.opacity = 1;
    img.classList.remove(`tirar-${index}`);
    img.classList.add(`no-tirar-${index}`);
  });
}

function renderizarJugador2Cards() {
  playerCards2.forEach((card, index) => {
    const img = playerCards2Images[index];
    img.src = `assets/${card.suit}-${card.rank}.png`;
    img.alt = `${card.rank} of ${card.suit}`;
    img.style.opacity = 1;
    img.classList.remove(`tirar-${index}`);
    img.classList.add(`no-tirar-${index}`);
  });
}

function renderizarTableCards() {
  tableCards.forEach((card, index) => {
    const img = tableCardsImages[index];
    img.src = `assets/${card.suit}-${card.rank}.png`;
    img.alt = `${card.rank} of ${card.suit}`;
    img.style.opacity = 1;
    img.style.display = "block";
  });
}

// Función para tirar cartas
function tirarCards() {
  playerCards1.forEach((card, index) => {
    const img = playerCardsImages[index];
    img.src = "assets/back.png";
    img.alt = "back";
    img.style.opacity = 1;
    img.classList.add(`tirar-${index}`);
    img.classList.remove(`no-tirar-${index}`);
  });
  playerCards1 = [];
  desactivarButton();
}

function tirarCards2() {
  playerCards2.forEach((card, index) => {
    const img = playerCards2Images[index];
    img.src = "assets/back.png";
    img.alt = "back";
    img.style.opacity = 1;
    img.classList.add(`tirar-${index}`);
    img.classList.remove(`no-tirar-${index}`);
  });
  playerCards2 = [];
  desactivarButton();
}

// Función para iniciar el juego
function init() {
  startGame = true;
  // Activar botones
  activarButtons();
  // Crear la baraja
  createDeck();
  // Mezclar la baraja
  shuffleDeck();
  // Eliminar cartas mesa
  eliminarTableCards();
  // Repatir cartas
  repartirPlayer1Cards();
  // Repatir cartas
  repartirPlayer2Cards();
}

// Asignar los eventos a los botones
startBtn.addEventListener("click", partidaNueva);

// Activa los botones de todos los jugadores

function activarButtons() {
  botones.forEach((valor,key)=>{
    botones[key].classList.remove("disabled");
  });
  
}

function desactivarButtons() {
  botones.forEach((boton, indice) => {
    boton.classList.add("disabled");
  });
}

// JUEGO
