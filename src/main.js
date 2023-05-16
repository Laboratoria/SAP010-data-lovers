import {sortByName, sortByNum ,filterByType} from "./data.js";
import data from "./data/pokemon/pokemon.js";


const pkmnDataList = data.pokemon;
const pkmCards = document.getElementById("pokemonList");

pkmnDataList.forEach((pokemon) => {
  //console.log(pokemon)
  const card = document.createElement("div");
  let typesPkmn = "";
  pokemon.type.forEach((type) => {
    typesPkmn += `<p class="type-style ${type}">${type}</p>`;
  });
  card.innerHTML = `
    
  <div class="pokemon">
  <p class="pokemon-id-back">${pokemon.num}</p>
    <div class="pokemon-imagem">
    <img src="${pokemon.img}" alt="Foto pokemon"></img>
  </div>
  <div class="name-contenedor">
        <h2 class="pokemon-name">${pokemon.name}</h2>
  </div>
  <div class="pokemon-type">
  <div class="type-teste">${typesPkmn}</div>
</div>
      `;
  pkmCards.appendChild(card);
})
//pokemonList(pkmnDataList);

//console.log (pkmnDataList)

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

numberAscDescOrdenation.addEventListener("change", function () {
  let sortedPokemons = [];
  if (numberAscDescOrdenation.value == "0-9") {
    sortedPokemons = sortByNum(pkmnDataList, "0-9");
  } else {
    sortedPokemons = sortByNum(pkmnDataList, "9-0");
  }
  pokemonList(sortedPokemons);
});
