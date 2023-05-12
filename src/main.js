import { computeStats, filterData, filterEvolution, sortData } from './data.js';
import data from './data/pokemon/pokemon.js';


const name = document.getElementById("namePokemon");

if (name) {
  name.addEventListener("input", () => {
    document.getElementById("pokemons").innerHTML = "";
    const namePokemon = document.getElementById("namePokemon").value;
    const pokemon = filterData(namePokemon, data);
    buildCard("pokemons", pokemon);
    if (name.value === "") {
      document.getElementById("pokemons").innerHTML = "";
      for (const pokemon in data.pokemon) {
        buildCard("pokemons", data.pokemon[pokemon]);
      }//enFor
    }//if
  })//endAddEventListener
}//endIf

const searchType = document.getElementById("submit");
if (searchType) {
  searchType.addEventListener("click", () => {
    name.value = "";
    document.getElementById("pokemons").innerHTML = "";
    const sortBy = document.getElementById("sortBy").value;
    const orderBy = document.getElementById("orderBy").value;
    console.log(sortData(data, sortBy, orderBy));
    buildCard("pokemons", sortData(data, sortBy, orderBy));
  });
}//endIf


const findPokemonWeight = document.getElementById("findPokemonWeight");
if (findPokemonWeight) {
  findPokemonWeight.addEventListener("click", () => {
    document.getElementById("pokemonsWeight").innerHTML = "";
    computeStats.findTheWeightPokemon(data);
  });
}//endIf


const findPokemonHeight = document.getElementById("findPokemonHeight");
if (findPokemonHeight) {
  findPokemonHeight.addEventListener("click", () => {
    document.getElementById("pokemonsHeight").innerHTML = "";
    computeStats.findTheHeigthPokemon(data);
  });
}//endIf


const findPercentageOfTypesOfPokemons = document.getElementById("findPercentageOfTypesOfPokemons");
if (findPercentageOfTypesOfPokemons) {
  findPercentageOfTypesOfPokemons.addEventListener("click", () => {
    document.getElementById("chart").innerHTML = "";
    computeStats.calculatePokemonTypesInPercentages(data);
  });
}//endIf


export const buildCard = (id, pokemon) => {

  const pokemons = document.getElementById(id);
  const cardPokemon = document.createElement('div');
  cardPokemon.classList.add("card");

  cardPokemon.innerHTML = `
    <img id="imagePokemon" alt="Image Pokemon" src="${pokemon.img}">
    <div class="showNamePokemon">
      <img class="pokeball" alt="Image Pokeball" src="./images/pokeball.png">
      <h1 id="name">${pokemon.name}</h1>
    </div>
    <div class="dataPokemon">
      <p>Type: <span id="type">${pokemon.type}</span> </p>
      <p>Height: <span id="type">${pokemon.size.height}</span> </p>
      <p>Weigth: <span id="type">${pokemon.size.weight}</span> </p>
      <p>Resistant: <span id="type">${pokemon.resistant}</span> </p>
      <p>Weaknesses: <span id="type">${pokemon.weaknesses}</span> </p>
      <p>Quick-moves: <span id="type">${pokemon['quick-move'][0]['base-damage']}</span> </p>
    </div>
    `;

  if (pokemons) {
    pokemons.appendChild(cardPokemon);
  }

}//endBuildCard


export const plotChart = (typePokemon, width) => {
  const grafico = document.getElementById("chart");
  const dados = document.createElement('section');

  dados.innerHTML = `
    <div id="typeOfPokemon">
      <div id="tipo">${typePokemon}</div>
    </div>
    <div id="percentage">
      <div id="value" style="width: ${width}% "> ${width}% </div>
    </div> `;

  grafico.appendChild(dados);

}//endBuildScreen


document.querySelectorAll("header .home").forEach(
  item => {
    item.addEventListener("click", () => {
      return window.location = "./";
    })

  }
)

const menuMob = document.getElementById("menuMob");

if (menuMob) {
  menuMob.addEventListener("click", () => {
    const menu = document.querySelector("#navCel");
    menu.classList.toggle("active");
  })
}


//adicionando evento no carregamento da página
//trocar o elemento por window

const input = document.getElementById("namePokemon");


window.addEventListener("load", () => {
  for (const pokemon in data.pokemon) {
    buildCard("pokemons", data.pokemon[pokemon]);
  }//enFor
});





