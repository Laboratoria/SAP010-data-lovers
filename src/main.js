import { filterByType, searchByName, sortByNameAZ, sortByNameZA, sortByNumAsc, sortByNumDes  } from "./data.js";
import data from "./data/pokemon/pokemon.js";

const pkmnDataList = data.pokemon; //pega o banco de dados
const pkmCards = document.getElementById("pokemonList"); //pega o espaço onde os cards serão cridos

updatePokemonList(pkmnDataList); 



/*função de atualizar a lista de pokémons,
ela gera os cards inicialmente e é invocada nos filtros para gerar os cards filtrados
*/

function updatePokemonList(filteredPokemons) {
  pkmCards.innerHTML = ""

  filteredPokemons.forEach((pokemon) => {
    const card = document.createElement("div")
    let typePkm = ""
    pokemon.type.forEach((type) => {
      typePkm += `<p class="type-style ${type}">${type}</p>`
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

//filtrar por tipo
const typeInput = document.getElementById("typeFilter")
typeInput.addEventListener("change", () => {
  const selectedType = typeInput.value.toLowerCase()
  const filteredPokemons = filterByType(selectedType)
  updatePokemonList(filteredPokemons)
});


//função de ordenar em ordem alfabética
const sortNameInput = document.getElementById("sortName")
sortNameInput.addEventListener("change", () => {
  if  (sortNameInput.value == "A-Z") {
    let orderedByNamePokemons = sortByNameAZ()
    return updatePokemonList(orderedByNamePokemons)
  } else if (sortNameInput.value == "Z-A") {
    let orderedByNamePokemons = sortByNameZA()
    return updatePokemonList(orderedByNamePokemons)
  }
  
})

//ordenar por número
const sortNumInput = document.getElementById("sortNum")
sortNumInput.addEventListener("change", () => {
  if (sortNumInput.value == "0-9") {
    let orderedByNumPokemons = sortByNumAsc()
    return updatePokemonList(orderedByNumPokemons)
  } else if (sortNumInput.value == "9-0") {
    let orderedByNumPokemons = sortByNumDes()
    return updatePokemonList(orderedByNumPokemons)
  }
})

//procurar por nome
const searchNameInput = document.getElementById("searchName")
searchNameInput.addEventListener("change", () =>{
  const nameInput = searchNameInput.value.toLowerCase()
  const filteredPokemons = searchByName(nameInput)
  updatePokemonList(filteredPokemons)

})



