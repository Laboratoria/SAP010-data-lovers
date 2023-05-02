import { pokemon } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

document.getElementById("submit").addEventListener("click", ()=>{
  const namePokemon = document.getElementById("namePokemon").value;
  const pokemonInfo = pokemon (namePokemon,data);
  changeImage ("imagePokemon", pokemonInfo.photo);
  insertToTag ("name", pokemonInfo.name);
  insertToTag ("about", pokemonInfo.about);
  insertToTag ("type", pokemonInfo.type);
  insertToTag ("evolution", pokemonInfo.evolution);

})

function changeImage( id, url ) {
  document.getElementById(id).src = url.toString();
}

function insertToTag( id, txt ) {
  document.getElementById( id ).innerHTML=txt;
}








