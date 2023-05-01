import { pokemon } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

document.getElementById("submit").addEventListener("click", ()=>{
  const namePokemon = document.getElementById("namePokemon").value;
  /*const urlImage = pokemonImage(namePokemon, data);
  changeImage( urlImage );
  const name = pokemonName(namePokemon,data)
  changeName(name)*/
  const pokemonInfo = pokemon (namePokemon,data)
  console.log ("Pokemon info abaixo")
  console.log (pokemonInfo)
  insertToTag ( "name",pokemonInfo.name)
  changeImage ("imagePokemon",pokemonInfo.photo)
  insertToTag ("about",pokemonInfo.about)
  insertToTag ("type",pokemonInfo.type)
})

function changeImage( id,url ) {
  const image = document.getElementById(id);
  image.src = url.toString();
}

function insertToTag ( id,txt ) {
  document.getElementById( id ).innerHTML=txt.toString();
}








