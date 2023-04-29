import { pokemonImage, pokemonName } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

document.getElementById("submit").addEventListener("click", ()=>{
  const namePokemon = document.getElementById("namePokemon").value;
  const urlImage = pokemonImage(namePokemon, data);
  changeImage( urlImage );
  const name = pokemonName(namePokemon,data)
  changeName(name)
})

function changeImage( url ) {
  console.log(`Url ${url}`);
  console.log(typeof(url));
  const image = document.getElementById("imagePokemon");
  image.src = url.toString();
}

function changeName( name ) {
  document.getElementById("name").innerHTML=name;
}








