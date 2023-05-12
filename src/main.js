import { filterPokemonsByType, filterPokemonByStr } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(filterPokemonsByType(data, 'water'))

const inputPokeName = document.getElementById("pokemonname")

inputPokeName.addEventListener('input', event => {
  console.log(filterPokemonByStr(data, event.target.value))
})

const searchButton = document.getElementById("searchButton")
searchButton.addEventListener("click", function() {
  const pokeName = inputPokeName.value

  const pokemon = filterPokemonByStr(data, pokeName)
  console.log(pokemon)
})
