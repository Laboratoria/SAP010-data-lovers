import { pokemon } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

document.getElementById("submit").addEventListener("click", ()=>{
  const namePokemon = document.getElementById("namePokemon").value;
  pokemon(namePokemon, data);

})






