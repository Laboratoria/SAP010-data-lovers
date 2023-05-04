import { filterData } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

document.getElementById("submit").addEventListener("click", () => {
  document.getElementById("pokemons").innerHTML = "";
  const namePokemon = document.getElementById("namePokemon").value;
  filterData(namePokemon, data);
});









