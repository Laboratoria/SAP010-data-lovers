import { filterByType } from "./data.js";
import data from "./data/pokemon/pokemon.js";

const pkmnDataList = data.pokemon;
const pkmCards = document.getElementById("pokemonList");

function updatePokemonList(filteredPokemons) {
  pkmCards.innerHTML = "";

  filteredPokemons.forEach((pokemon) => {
    const card = document.createElement("div");
    let typePkm = "";
    pokemon.type.forEach((type) => {
      typePkm += `<p class="type-style ${type}">${type}</p>`;
    });
    card.innerHTML = `
      <div class="pokemon">
        <p class="pokemon-numero">${pokemon.num}</p>
        <div class="pokemon-imagem">
          <img src="${pokemon.img}" alt="Foto pokemon"></img>
        </div>
        <div class="name-contenedor">
          <h2 class="pokemon-name">${pokemon.name}</h2>
        </div>
        <div class="pokemon-type">
          <div class="typePokemon">${typePkm}</div>
        </div>
      </div>
    `;

    pkmCards.appendChild(card);
  });
}

const typeInput = document.getElementById("typeFilter");
typeInput.addEventListener("change", () => {
  if (typeFilter.value != "All"){
   const selectedType = typeInput.value.toLowerCase();
  const filteredPokemons = filterByType(selectedType);
  updatePokemonList(filteredPokemons);
     }
});

// Chamada inicial para exibir todos os cards
updatePokemonList(pkmnDataList);





const searchByNameInput = document.getElementById("searchByName");
let resultSearch = []
if (searchByNameInput) {
  searchByNameInput.addEventListener("keyup", function(){
    const name = searchByNameInput.value.toLowerCase();
    console.log(name)
    resultSearch = pkmnDataList.find((pokemon) => {
      
      return pokemon.name.toLowerCase() === name
      
      return pokemon.name.toLowerCase().includes(name)
    })
    console.log(resultSearch)  
  });  
}
const clearButton = document.getElementById("cleanButton");
  if (clearButton) {
    function cleanInput() {
      document.getElementById("searchByName").value = '';
    }
    clearButton.addEventListener("click", cleanInput);
  }
  
  
  const alphabeticOrdenation = document.getElementById("sortName");
  alphabeticOrdenation.addEventListener("change", function () {
    let sortedPokemons = [];
    if (alphabeticOrdenation.value == "Name") {
      sortedPokemons = sortByName(pkmnDataList, "A-Z");
    } else {
      sortedPokemons = sortByName(pkmnDataList, "Z-A");
    }
    pokemonList(sortedPokemons);
  });
  
  const numberOrdenation = document.getElementById("sortNum");
  numberOrdenation.addEventListener("change", function () {
    let sortedPokemons = [];
    if (numberOrdenation.value == "0-9") {
      sortedPokemons = sortByNum(pkmnDataList, "0-9");
    } else {
      sortedPokemons = sortByNum(pkmnDataList, "9-0");
    }
    pokemonList(sortedPokemons);
  });
  
