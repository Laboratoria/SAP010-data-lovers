import { filterData } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

document.getElementById("submit").addEventListener("click", () => {
  const namePokemon = document.getElementById("namePokemon").value;
  const pokemon = filterData(namePokemon, data);
  insertToImage("imagePokemon", pokemon.photo);
  insertToTag("name", pokemon.name);
  insertToTag("about", pokemon.about);
  insertToTag("type", pokemon.type);
  insertToTag("evolution", pokemon.evolution);
});

function insertToImage(id, url) {
  document.getElementById(id).src = url.toString();
}

function insertToTag(id, txt) {
  document.getElementById(id).innerHTML=txt;
}








