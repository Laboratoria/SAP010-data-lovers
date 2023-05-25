import { searchName, ordenarAZ, calculatePercentageByFamily } from './data.js';
import characters from "./data/got/got.js";

function showCharacterCards() {
  const container = document.getElementById("characterContainer");

  // Limpa o conteúdo do container
  container.innerHTML = "";

  // Itera sobre os personagens e cria os cards dinamicamente
  characters.got.forEach(character => {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("img");
    image.src = character.imageUrl;

    const name = document.createElement("h2");
    name.textContent = character.fullName;

    const title = document.createElement("p");
    title.textContent = character.title;

    const family = document.createElement("p");
    family.textContent = "Family: " + character.family;

    const born = document.createElement("p");
    born.textContent = "Born: " + character.born;

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(title);
    card.appendChild(family);
    card.appendChild(born);

    container.appendChild(card);
  });
}

// Chama a função para exibir os cards dos personagens
showCharacterCards();

document.addEventListener("DOMContentLoaded", () => {
  const menuIcon = document.querySelector(".menu-icon");
  menuIcon.addEventListener("click", switchMenu);

  function switchMenu() {
    const menuDisplay = document.querySelector(".menu").style.display;
    if (menuDisplay === "none" || !menuDisplay) {
      document.querySelector(".menu").style.display = "flex";
      document.querySelector(".menu-icon").innerHTML = "<i class='fas fa-times fa-lg'></i>";
    } else {
      document.querySelector(".menu").style.display = "none";
      document.querySelector(".menu-icon").innerHTML = "<i class='fas fa-bars fa-lg'></i>";
    }
  }
});

// Selecionando elementos do DOM
const searchInput = document.querySelector("#search-input");
const filterByTitle = document.querySelector("#filter-by-title");
const filterByFamily = document.querySelector("#filter-by-family");
const filterByBorn = document.querySelector("#filter-by-born");
const orderByname = document.querySelector("#order-by-name");

// Manipulação de eventos
searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value;
  const filteredNames = searchName(characters.got, searchTerm);
  showCharacterCards(filteredNames);
});

filterByTitle.addEventListener("change", () => {
  const selectedTitle = filterByTitle.value;
  const filteredTitles = searchTitle(characters.got, selectedTitle);
  showCharacterCards(filteredTitles);
});

filterByFamily.addEventListener("change", () => {
  const selectedFamily = filterByFamily.value;
  const filteredFamily = filterByFamilyName(characters.got, selectedFamily);
  showCharacterCards(filteredFamily);
});

filterByBorn.addEventListener("change", () => {
  const selectedBorn = filterByBorn.value;
  const filteredBorn = filterByBorn(characters.got, selectedBorn);
  showCharacterCards(filteredBorn);
});

orderByname.addEventListener("change", () => {
  const selectedOrder = orderByname.value;
  const orderedNames = orderByname(characters.got, selectedOrder);
  showCharacterCards(orderedNames);
});
