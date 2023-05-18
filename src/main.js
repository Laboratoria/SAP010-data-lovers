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

const replaceTypeToImage = (pokemon) => {

  for (const data in pokemon) {
    
    Object.defineProperty(pokemon[data], 'imgType', { value: [] })

    for (let i = 0; i < pokemon[data].type.length; i++) {

      if (pokemon[data].type[i].includes('grass')) {
        pokemon[data].imgType.push("./images/types/grass.png");
      }
      if (pokemon[data].type[i].includes('poison')) {
        pokemon[data].imgType.push("./images/types/poison.png");
      }
      if (pokemon[data].type[i].includes('fire')) {
        pokemon[data].imgType.push("./images/types/fire.png");
      }
      if (pokemon[data].type[i].includes('flying')) {
        pokemon[data].imgType.push("./images/types/flying.png");
      }
      if (pokemon[data].type[i].includes('water')) {
        pokemon[data].imgType.push("./images/types/water.png");
      }
      if (pokemon[data].type[i].includes('bug')) {
        pokemon[data].imgType.push("./images/types/bug.png");
      }
      if (pokemon[data].type[i].includes('normal')) {
        pokemon[data].imgType.push("./images/types/normal.png");
      }
      if (pokemon[data].type[i].includes('electric')) {
        pokemon[data].imgType.push("./images/types/electric.png");
      }
      if (pokemon[data].type[i].includes('ground')) {
        pokemon[data].imgType.push("./images/types/ground.png");
      }
      if (pokemon[data].type[i].includes('fighting')) {
        pokemon[data].imgType.push("./images/types/fighting.png");
      }
      if (pokemon[data].type[i].includes('psychic')) {
        pokemon[data].imgType.push("./images/types/psychic.png");
      }
      if (pokemon[data].type[i].includes('rock')) {
        pokemon[data].imgType.push("./images/types/rock.png");
      }
      if (pokemon[data].type[i].includes('ice')) {
        pokemon[data].imgType.push("./images/types/ice.png");
      }
      if (pokemon[data].type[i].includes('ghost')) {
        pokemon[data].imgType.push("./images/types/ghost.png");
      }
      if (pokemon[data].type[i].includes('dragon')) {
        pokemon[data].imgType.push("./images/types/dragon.png");
      }
      if (pokemon[data].type[i].includes('fairy')) {
        pokemon[data].imgType.push("./images/types/fairy.png");
      }
      if (pokemon[data].type[i].includes('dark')) {
        pokemon[data].imgType.push("./images/types/dark.png");
      }
      if (pokemon[data].type[i].includes('steel')) {
        pokemon[data].imgType.push("./images/types/steel.png");
      }

    }

  }

}

const changeColorBackground = (pokemon) => {

  if (pokemon.type.includes("grass") && pokemon.type.indexOf("grass") === 0) {
    return '#218C74'
  } else if (pokemon.type.includes('poison') && pokemon.type.indexOf('poison') === 0) {
    return '#786fa6'
  } else if (pokemon.type.includes("fire") && pokemon.type.indexOf("fire") === 0) {
    return '#FF793F'
  } else if (pokemon.type.includes("flying") && pokemon.type.indexOf("flying") === 0) {
    return '#778beb'
  } else if (pokemon.type.includes("water") && pokemon.type.indexOf("water") === 0) {
    return '#3dc1d3'
  } else if (pokemon.type.includes("bug") && pokemon.type.indexOf("bug") === 0) {
    return '#0be881'
  } else if (pokemon.type.includes("normal") && pokemon.type.indexOf("normal") === 0) {
    return '#aaa69d'
  } else if (pokemon.type.includes("electric") && pokemon.type.indexOf("electric") === 0) {
    return '#CCAE62'
  } else if (pokemon.type.includes("ground") && pokemon.type.indexOf("ground") === 0) {
    return '#cd6133'
  } else if (pokemon.type.includes("fighting") && pokemon.type.indexOf("fighting") === 0) {
    return '#ea8685'
  } else if (pokemon.type.includes("psychic") && pokemon.type.indexOf("psychic") === 0) {
    return '#cf6a87'
  } else if (pokemon.type.includes("rock") && pokemon.type.indexOf("rock") === 0) {
    return '#84817a'
  } else if (pokemon.type.includes("ice") && pokemon.type.indexOf("ice") === 0) {
    return '#63cdda'
  } else if (pokemon.type.includes("ghost") && pokemon.type.indexOf("ghost") === 0) {
    return '#786fa6'
  } else if (pokemon.type.includes("dragon") && pokemon.type.indexOf("dragon") === 0) {
    return '#546de5'
  } else if (pokemon.type.includes("fairy") && pokemon.type.indexOf("fairy") === 0) {
    return '#f8a5c2'
  } else if (pokemon.type.includes("dark") && pokemon.type.indexOf("dark") === 0) {
    return '#353b48'
  } else if (pokemon.type.includes("steel") && pokemon.type.indexOf("steel") === 0) {
    return '#487eb0'
  }

}
replaceTypeToImage(data.pokemon);

const buildCard = (id, pokemon) => {

  document.getElementById(id).innerHTML = "";


  const pokemons = document.getElementById(id);


  for (let i = 0; i < pokemon.length; i++) {

    const cardPokemon = document.createElement('div');
    cardPokemon.classList.add("card");
    const color = changeColorBackground(pokemon[i])
    cardPokemon.style.backgroundColor = color;
    cardPokemon.innerHTML = `
    <img id="imagePokemon" alt="Image Pokemon" src=${pokemon[i].img}>
    <div class="showNamePokemon">
      <h1 id="name">${pokemon[i].name}</h1>
      <p>${pokemon[i].num}</p>
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





