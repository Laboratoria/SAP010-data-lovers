import { computeStats, filterData, sortData } from './data.js';
import data from './data/pokemon/pokemon.js';
import stylesPokemon from './stylesPokemon.js';

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

const styleCard = (pokemon, stylesPokemon) => {

  for (const data in pokemon) {

    Object.defineProperty(pokemon[data], 'imgType', { value: [] });
    Object.defineProperty(pokemon[data], 'colorType', { value: [] });

    stylesPokemon.forEach(style => {

      if (pokemon[data].type.includes(style.typePokemon)) {

        pokemon[data].imgType.push(style.img);
        pokemon[data].colorType.push(style.color);

      }//endIf

    })//endForEach

  }//endFor

}//endStyleCard

styleCard(data.pokemon, stylesPokemon);

const buildCard = (id, pokemon) => {

  document.getElementById(id).innerHTML = "";

  const pokemons = document.getElementById(id);

  for (let i = 0; i < pokemon.length; i++) {

    const cardPokemon = document.createElement('a');
    cardPokemon.classList.add("card");
    cardPokemon.style.backgroundColor = pokemon[i].colorType[0];
    cardPokemon.href = "cardDetails.html";
    cardPokemon.target = "_blank";
    let pokemonShowName = `
    <div class="showNamePokemon">
      <div>
      <h1 id="name">${pokemon[i].name}</h1>
    `;

    for (let j = 0; j < pokemon[i].imgType.length; j++) {
      pokemonShowName += `
        <img class="pokeball" src=${pokemon[i].imgType[j]}>
    `;
    }

    pokemonShowName += `
    </div>
      <div>
      <p id="num">${pokemon[i].num}</p>
      </div>
      <img id="imagePokemon" alt="Image Pokemon" src=${pokemon[i].img}>
    </div>`;

    cardPokemon.innerHTML = pokemonShowName;

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





