import { filterData, sortData } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

document.getElementById("submit").addEventListener("click", () => {
  document.getElementById("pokemons").innerHTML = "";
  const namePokemon = document.getElementById("namePokemon").value;
  //filterData(namePokemon, data);
  const orderBy = document.getElementById("orderBy").value;
  sortData(data, namePokemon, orderBy);
});

export const buildScreen = (pokemon) => {

  let pokemons = document.getElementById("pokemons");
  let cardPokemon = document.createElement('section');
  cardPokemon.classList.add("card");

  cardPokemon.innerHTML = `
    <img id="imagePokemon" alt="Image Pokemon" src="${pokemon.img}">
    <div class="showNamePokemon">
      <img class="pokeball" alt="Image Pokeball" src="./images/pokeball.png">
      <h1 id="name">${pokemon.name}</h1>
    </div>
    <div class="dataPokemon">
      <p>Type: <span id="type">${pokemon.type}</span> </p>
      <p>About: <span id="about">${pokemon.about}</span> </p>
    </div>
   `;

  pokemons.appendChild(cardPokemon);

}//endBuildScreen












