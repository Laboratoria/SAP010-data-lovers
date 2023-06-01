import { computeStats, filterData, sortData } from './data.js';
import data from './data/pokemon/pokemon.js';
import stylesPokemon from './stylesPokemon.js';

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

const buildCard = (pokemons) => {

  document.getElementById("pokemons").innerHTML = "";

  const pokemonsHtml = document.getElementById("pokemons");
  let tagsHtml = "";

  pokemons.forEach(pokemon => {

    let showDataPokemon = `
    <div  class = "card" style="background-color: ${pokemon.colorType[0]};">
      <div>
        <div class="name-number-pokemon">
          <h1 id="name">${pokemon.name}</h1>
          <p id="num">${pokemon.num}</p>
        </div>
        <div class=all-images-card-pokemon>
    `;

    pokemon.imgType.forEach(image => {
      showDataPokemon += `
          <img class="img-type" src=${image}>`;
    })

    showDataPokemon += `
          <img id="image-pokemon" alt="Image Pokemon" src=${pokemon.img}>
        </div>
      </div>
    </div>
    `;

    tagsHtml += showDataPokemon;

  });

  pokemonsHtml.innerHTML = tagsHtml;

}//endBuildCard

function revealPokemon(pokemon, tagImg, tagP) {

  for (const data in pokemon) {

    tagImg.src = pokemon[data].img;
    tagP.innerHTML = pokemon[data].name;

  }//endFor

}//endRevealPokemon

const name = document.getElementById("namePokemon");

if (name) {

  name.addEventListener("input", () => {

    document.getElementById("pokemons").innerHTML = "";

    const pokemons = filterData(name.value, data.pokemon);

    buildCard(pokemons);

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
    const pokemons = sortData(data.pokemon, sortBy, orderBy);

    buildCard(pokemons);

  });//endAddEventListener

}//endIf

const heaviestPokemonImage = document.getElementById("snorlax");
const heaviestPokemonName = document.getElementById("nameRevealedSnorlax");

if (heaviestPokemonImage) {

  heaviestPokemonImage.addEventListener("click", () => {

    const pokemon = computeStats.findTheBiggestPokemonSizes(data.pokemon, 'weight');

    revealPokemon(pokemon, heaviestPokemonImage, heaviestPokemonName);

  });//endAddEventListener

}//endIf

const tallestPokemonImage = document.getElementById("politoed");
const tallestPokemonName = document.getElementById("nameRevealedPolitoed");

if (tallestPokemonImage) {

  tallestPokemonImage.addEventListener("click", () => {

    const pokemon = computeStats.findTheBiggestPokemonSizes(data.pokemon, 'height');

    revealPokemon(pokemon, tallestPokemonImage, tallestPokemonName)

  });//endAddEventListener

}//endIf

window.addEventListener("load", () => {

  buildCard(data.pokemon);

});//endAddEventListener

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


















