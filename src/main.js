import { computeStats, filterData, sortData } from './data.js';
import data from './data/pokemon/pokemon.js';


const name = document.getElementById("namePokemon");

if (name) {
  name.addEventListener("input", () => {
    document.getElementById("pokemons").innerHTML = "";
    buildCard("pokemons", filterData(name.value, data));
    if (name.value === "") {
      buildCard("pokemons", data.pokemon);
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
    buildCard("pokemons", sortData(data, sortBy, orderBy));
  });//endAddEventListener
}//endIf

const findPokemonWeight = document.getElementById("findPokemonWeight");

if (findPokemonWeight) {
  findPokemonWeight.addEventListener("click", () => {
    buildCard("pokemonsWeight", computeStats.findTheHeaviestPokemon(data));
  });
}//endIf

const findPokemonHeight = document.getElementById("findPokemonHeight");

if (findPokemonHeight) {
  findPokemonHeight.addEventListener("click", () => {
    buildCard("pokemonsHeight", computeStats.findTheTallestPokemon(data));
  });
}//endIf


const findPercentageOfTypesOfPokemons = document.getElementById("findPercentageOfTypesOfPokemons");

if (findPercentageOfTypesOfPokemons) {
  findPercentageOfTypesOfPokemons.addEventListener("click", () => {
    plotChart("chart", computeStats.calculatePokemonTypesInPercentages(data));
  });
}//endIf


const buildCard = (id, pokemon) => {
  document.getElementById(id).innerHTML = "";
  for (let i = 0; i < pokemon.length; i++) {

    const pokemons = document.getElementById(id);
    const cardPokemon = document.createElement('div');
    cardPokemon.classList.add("card");

    cardPokemon.innerHTML = `
    <img id="imagePokemon" alt="Image Pokemon" src="${pokemon[i].img}">
    <div class="showNamePokemon">
      <img class="pokeball" alt="Image Pokeball" src="./images/pokeball.png">
      <h1 id="name">${pokemon[i].name}</h1>
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
    }//endIf

  }//endFor

}//endBuildCard


const plotChart = (id, percentage) => {

  document.getElementById(id).innerHTML = "";

  for (const type in percentage) {
    const chart = document.getElementById("chart");
    const data = document.createElement('section');

    data.innerHTML = `
    <div id="typeOfPokemon">
      <div id="tipo">${type}</div>
    </div>
    <div id="percentage">
      <div id="value" style="width: ${percentage[type]}% "> ${percentage[type]}% </div>
    </div> `;

    chart.appendChild(data);
  }//endFor

}//endPlotChart


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

window.addEventListener("load", () => {
  buildCard("pokemons", data.pokemon);
});//endAddEventListener





