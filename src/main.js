import { computeStats, filterData, sortData } from './data.js';
import data from './data/pokemon/pokemon.js';

const buildCard = (pokemons) => {

  document.getElementById("pokemons").innerHTML = "";

  const pokemonsHtml = document.getElementById("pokemons");
  let tagsHtml = "";

  pokemons.forEach(pokemon => {

    let showDataPokemon = `
    <div  class="card flip-card-inner color-type-${pokemon.type[0]}">
      <div>
        <div class="name-number-pokemon">
          <h1 class="letter-card">${pokemon.name}</h1>
          <p class="letter-card">${pokemon.num}</p>
        </div>
        <div class=all-images-card-pokemon>
    `;

    pokemon.type.forEach(imgType => {
      showDataPokemon += `
          <img class="img-type" src="./images/types/${imgType}.png">`;
    })

    showDataPokemon += `
          <img id="image-pokemon" alt="Image Pokemon" src=${pokemon.img}>
        </div>
        <a href="cardDetails.html" target="_blank"><p id=${pokemon.num} class="letter-card know-more">saiba mais</p></a>
      </div>
    </div>
    `;

    tagsHtml += showDataPokemon;

  });

  pokemonsHtml.innerHTML = tagsHtml;

  const toKnowMore = pokemonsHtml.querySelectorAll("a p");

  toKnowMore.forEach(anchor => {
    anchor.addEventListener('click', (event) => {
      localStorage.setItem('id', event.target.id)
    })
  })

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


const selects = document.querySelectorAll(".content-options select");

if (selects) {
  selects.forEach(select => {

    select.addEventListener("change", () => {

      name.value = "";
      document.getElementById("pokemons").innerHTML = "";

      const sortBy = document.getElementById("sortBy").value;
      const orderBy = document.getElementById("orderBy").value;

      const pokemons = sortData(data.pokemon, sortBy, orderBy);
      buildCard(pokemons);

    })
  })
}

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

  tallestPokemonImage.addEventListener('click', () => {

    const pokemon = computeStats.findTheBiggestPokemonSizes(data.pokemon, 'height');

    revealPokemon(pokemon, tallestPokemonImage, tallestPokemonName)

  });//endAddEventListener

}//endIf

window.addEventListener('load', () => {
    buildCard(data.pokemon);
    const menuHome = document.getElementById('home');
    menuHome.style.color = '#00478C';
});//endAddEventListener

const hamburgerMenu = document.querySelector('#burger');

if(hamburgerMenu){
  hamburgerMenu.addEventListener('click', () => {

    const itensMenuMobile = document.querySelector('.itens-menu-mobile');

    if (itensMenuMobile.style.display == 'block') {
      itensMenuMobile.style.display = 'none';
    } else {
      itensMenuMobile.style.display = 'block';
    }

  })
}
