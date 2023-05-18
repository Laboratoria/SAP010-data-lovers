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

const styleCard = (pokemon) => {

  for (const data in pokemon) {

    Object.defineProperty(pokemon[data], 'imgType', { value: [] })
    Object.defineProperty(pokemon[data], 'colorType', { value: [] })

    for (let i = 0; i < pokemon[data].type.length; i++) {

      if (pokemon[data].type[i].includes('grass')) {
        pokemon[data].imgType.push("./images/types/grass.png");
        pokemon[data].colorType.push('#218C74');
      }
      if (pokemon[data].type[i].includes('poison')) {
        pokemon[data].imgType.push("./images/types/poison.png");
        pokemon[data].colorType.push('#786fa6');
      }
      if (pokemon[data].type[i].includes('fire')) {
        pokemon[data].imgType.push("./images/types/fire.png");
        pokemon[data].colorType.push('#FF793F');
      }
      if (pokemon[data].type[i].includes('flying')) {
        pokemon[data].imgType.push("./images/types/flying.png");
        pokemon[data].colorType.push('#778beb');
      }
      if (pokemon[data].type[i].includes('water')) {
        pokemon[data].imgType.push("./images/types/water.png");
        pokemon[data].colorType.push('#3dc1d3');
      }
      if (pokemon[data].type[i].includes('bug')) {
        pokemon[data].imgType.push("./images/types/bug.png");
        pokemon[data].colorType.push('#0be881');
      }
      if (pokemon[data].type[i].includes('normal')) {
        pokemon[data].imgType.push("./images/types/normal.png");
        pokemon[data].colorType.push('#aaa69d');
      }
      if (pokemon[data].type[i].includes('electric')) {
        pokemon[data].imgType.push("./images/types/electric.png");
        pokemon[data].colorType.push('#CCAE62');
      }
      if (pokemon[data].type[i].includes('ground')) {
        pokemon[data].imgType.push("./images/types/ground.png");
        pokemon[data].colorType.push('#cd6133');
      }
      if (pokemon[data].type[i].includes('fighting')) {
        pokemon[data].imgType.push("./images/types/fighting.png");
        pokemon[data].colorType.push('#ea8685');
      }
      if (pokemon[data].type[i].includes('psychic')) {
        pokemon[data].imgType.push("./images/types/psychic.png");
        pokemon[data].colorType.push('#cf6a87');
      }
      if (pokemon[data].type[i].includes('rock')) {
        pokemon[data].imgType.push("./images/types/rock.png");
        pokemon[data].colorType.push('#84817a');
      }
      if (pokemon[data].type[i].includes('ice')) {
        pokemon[data].imgType.push("./images/types/ice.png");
        pokemon[data].colorType.push('#63cdda');
      }
      if (pokemon[data].type[i].includes('ghost')) {
        pokemon[data].imgType.push("./images/types/ghost.png");
        pokemon[data].colorType.push('#786fa6');
      }
      if (pokemon[data].type[i].includes('dragon')) {
        pokemon[data].imgType.push("./images/types/dragon.png");
        pokemon[data].colorType.push('#546de5');
      }
      if (pokemon[data].type[i].includes('fairy')) {
        pokemon[data].imgType.push("./images/types/fairy.png");
        pokemon[data].colorType.push('#f8a5c2');
      }
      if (pokemon[data].type[i].includes('dark')) {
        pokemon[data].imgType.push("./images/types/dark.png");
        pokemon[data].colorType.push('#353b48');
      }
      if (pokemon[data].type[i].includes('steel')) {
        pokemon[data].imgType.push("./images/types/steel.png");
        pokemon[data].colorType.push('#487eb0');
      }

    }

  }

}

styleCard(data.pokemon);

const buildCard = (id, pokemon) => {

  document.getElementById(id).innerHTML = "";


  const pokemons = document.getElementById(id);


  for (let i = 0; i < pokemon.length; i++) {

    const cardPokemon = document.createElement('a');
    cardPokemon.classList.add("card");
    cardPokemon.style.backgroundColor = pokemon[i].colorType[0];
    cardPokemon.href = "cardDetails.html";
    cardPokemon.target = "_blank";
    cardPokemon.innerHTML = `
    <div>
    <img id="imagePokemon" alt="Image Pokemon" src=${pokemon[i].img}>
    <div class="showNamePokemon">
      <h1 id="name">${pokemon[i].name}</h1>
      <p>${pokemon[i].num}</p>
    </div>
    </div>
    `;

    for (let j = 0; j < pokemon[i].imgType.length; j++) {
      const imgType = document.createElement('img');
      imgType.classList.add("pokeball");
      cardPokemon.innerHTML += `
        <img class="pokeball" src=${pokemon[i].imgType[j]}>
    `;

      if (imgType) {
        imgType.appendChild(cardPokemon);

      }//endIf


    }

    if (pokemons) {

      pokemons.appendChild(cardPokemon);

    }//endIf

  }//endFor

  console.log(pokemons)

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





