import { computeStats, filterData,  sortData} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const submit = document.getElementById("submit");

if(submit){

  submit.addEventListener("click", () => {
    document.getElementById("pokemons").innerHTML = "";
    const namePokemon = document.getElementById("namePokemon").value;
    //filterData(namePokemon, data);
    const orderBy = document.getElementById("orderBy").value;
    sortData(data, namePokemon, orderBy);
  });

}

const findPokemonWeight = document.getElementById("findPokemonWeight");

if(findPokemonWeight) {
  document.getElementById("findPokemonWeight").innerHTML = "";
  findPokemonWeight.addEventListener("click", () => {
    //computeStats.calculatePokemonTypesInPercentages(data);
    computeStats.findTheWeightPokemon(data);
  });
}

const findPokemonHeight = document.getElementById("findPokemonHeight");
if(findPokemonHeight) {
  document.getElementById("findPokemonHeight").innerHTML = "";
  findPokemonHeight.addEventListener("click", () => {
    computeStats.findTheHeigthPokemon(data);
  });
}

const findPercentageOfTypesOfPokemons = document.getElementById("findPercentageOfTypesOfPokemons");
if(findPercentageOfTypesOfPokemons) {
  document.getElementById("findPercentageOfTypesOfPokemons").innerHTML = "";
  findPercentageOfTypesOfPokemons.addEventListener("click", () => {
    computeStats.calculatePokemonTypesInPercentages(data);
  });
}

export const buildScreen = (id, pokemon) => {

  let pokemons = document.getElementById(id);
  let cardPokemon = document.createElement('div');
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
    </div>
   `;

  pokemons.appendChild(cardPokemon);

}//endBuildScreen


export const noDataFound = (item) => {

  alert(`O ${item} pesquisado não existe na base da dados!`);

}//endNoDataFound

export const plotChart = (typePokemon, width) => {

  let grafico = document.getElementById("chart");
  let dados = document.createElement('section');

  dados.innerHTML = `
    <div id="tipoDePokemon">
      <div id="tipo">${typePokemon}</div>
    </div>
    <div id="percentual">
      <div id="valor" style="width: ${width}% "> ${width}% </div>
    </div>
   `;

   grafico.appendChild(dados);

}//endBuildScreen

document.querySelectorAll("header .home").forEach(
  item => {
    item.addEventListener("click",() =>{
      console.log("click");
      return window.location = "./";
    })

  }
)

document.getElementById("menuMob").addEventListener("click",() =>{
  const menu = document.querySelector("#navCel");
  menu.classList.toggle("active");
})










