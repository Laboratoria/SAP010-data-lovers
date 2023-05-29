import { computeStats, filterData, sortData } from './data.js';
import data from './data/pokemon/pokemon.js';
import stylesPokemon from './stylesPokemon.js';


const name = document.getElementById("namePokemon");

if (name) {
  name.addEventListener("input", () => {
    document.getElementById("pokemons").innerHTML = "";
    buildCard(filterData(name.value, data));
    if (name.value === "") {
      buildCard(data.pokemon);
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
    buildCard(sortData(data, sortBy, orderBy));
  });//endAddEventListener
}//endIf

const findPokemonWeight = document.getElementById("snorlax");
const nameRevealedSnorlax = document.getElementById("nameRevealedSnorlax");

if (findPokemonWeight) {
  findPokemonWeight.addEventListener("click", () => {
    showImagePokemonAndName(computeStats.findTheHeaviestPokemon(data), findPokemonWeight, nameRevealedSnorlax)
  });
}//endIf

const findPokemonHeight = document.getElementById("politoed");
const nameRevealedPolitoed = document.getElementById("nameRevealedPolitoed");


if (findPokemonHeight) {
  findPokemonHeight.addEventListener("click", () => {
    showImagePokemonAndName(computeStats.findTheTallestPokemon(data), findPokemonHeight, nameRevealedPolitoed)
  });
}//endIf

function showImagePokemonAndName(pokemon, tagImg, tagP) {
  for (const image in pokemon) {
    tagImg.src = pokemon[image].img;
    tagP.innerHTML = pokemon[image].name;
  }
}

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

const buildCard = (pokemon) => {

  document.getElementById("pokemons").innerHTML = "";

  const pokemons = document.getElementById("pokemons");

  for (let i = 0; i < pokemon.length; i++) {

    if (pokemon[i].colorType.length !== 0 && pokemon[i].imgType.length !== 0) {

      const cardPokemon = document.createElement('div');
      cardPokemon.classList.add("card");
      cardPokemon.style.backgroundColor = pokemon[i].colorType[0];

      let showDataPokemon = `
    <div>
      <div class="name-number-pokemon">
        <h1 id="name">${pokemon[i].name}</h1>
        <p id="num">${pokemon[i].num}</p>
      </div>
      <div class=all-images-card-pokemon>
    `;

      for (let j = 0; j < pokemon[i].imgType.length; j++) {
        showDataPokemon += `
        <img class="img-type" src=${pokemon[i].imgType[j]}>`
      }

      showDataPokemon += `
        <img id="image-pokemon" alt="Image Pokemon" src=${pokemon[i].img}>
      </div>
    </div>`;

      cardPokemon.innerHTML = showDataPokemon;

      if (pokemons) {

        pokemons.appendChild(cardPokemon);

      }//endIf

    }//endIf

  }//endFor

}//endBuildCard


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

const url = document.URL;

if (url === "http://localhost:3000/") {
  window.addEventListener("load", () => {
    const home = document.querySelector(".home");
    home.style.color = "#00478C"
    buildCard(data.pokemon);
  });
}

if (url === "http://localhost:3000/statistic") {
  const curiosidades = document.querySelector(".curiosidades");
  curiosidades.style.color = "#00478C"
}
















