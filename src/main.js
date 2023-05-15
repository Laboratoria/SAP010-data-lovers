import { filterByType, sortByName, searchByName, } from "./data.js";

import data from "./data/pokemon/pokemon.js";


const pkmnDataList  = data.pokemon;
const pokemonList = document.querySelector("#pokemonList");
const pkmCards = document.getElementById("allPokemon");

pokemon.forEach((pokemon) => {
  const card = document.createElement("div");
  card.innerHTML = `
    
  <div class="pokemon">
  <p class="pokemon id back">${pokemon.num}</p>
  <div class="pokemon-imagem">
    <img src ${pokemon.img} alt="Foto pokemon">
    </div>

      <div class="name-contenedor">
      <p class="pokemon-id">${pokemon.num}</p>
      <h2 class="pokemon name">${pokemon.name}</h2>
    <div class="pokemon-type">
        <p class="type">${pokemon.num}</p>
      </div>
      `;
      allPokemon.appendChild(card);
})
pokemonList(pkmnDataList);


document.getElementById("searchByName");
document.addEventListener("keyup", searchName);
function searchName(evento) {
  const name = evento.target.value;
  const result = searchByName(pokemonList, name);
  pokemonList(result);

}
const clearButton = document.getElementById("cleanButton");
function cleanInput() {
  FormData.reset();
}
clearButton.addEventListener("click", cleanInput);


const alphabeticOrdenation = document.getElementById("sortName");
const typeFilter = document.getElementById("typeFilter");
alphabeticOrdenation.addEventListener("change", function () {
  let sortedPokemons = [];
  if (alphabeticOrdenation.value == "Name") {
    sortedPokemons = sortByName(pkmnDataList, "A-Z");
  } else {
    sortedPokemons = sortByName(pkmnDataList, "Z-A");
  }
  pokemonList(sortedPokemons);
});
