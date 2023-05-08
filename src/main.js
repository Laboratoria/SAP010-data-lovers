import { computeStats, filterData, sortData } from './data.js';
import data from './data/pokemon/pokemon.js';

//Só adiciona o addEventListener se o elemento for acionado
//Pegando elemento do input
const name = document.getElementById("namePokemon");
if (name) {
  name.addEventListener("input", () => {
    document.getElementById("pokemons").innerHTML = "";
    const namePokemon = document.getElementById("namePokemon").value;
    filterData(namePokemon, data);
  });
}//endIf

//Só adiciona o addEventListener se o elemento for acionado
//Pegando elemento do botão pesquisar
const searchType = document.getElementById("submit");
if (searchType) {
  searchType.addEventListener("click", () => {
    name.value = "";
    document.getElementById("pokemons").innerHTML = "";
    const sortBy = document.getElementById("sortBy").value;
    const orderBy = document.getElementById("orderBy").value;
    sortData(data, sortBy, orderBy);
  });
}//endIf

//Só adiciona o addEventListener se o elemento for acionado
//Pegando elemento do botão clique para descobrir o peso dos pokemons
const findPokemonWeight = document.getElementById("findPokemonWeight");
if (findPokemonWeight) {
  findPokemonWeight.addEventListener("click", () => {
    document.getElementById("pokemonsWeight").innerHTML = "";
    computeStats.findTheWeightPokemon(data);
  });
}//endIf

//Só adiciona o addEventListener se o elemento for acionado
//Pegando elemento do botão clique para descobrir a altura dos pokemons
const findPokemonHeight = document.getElementById("findPokemonHeight");
if (findPokemonHeight) {
  findPokemonHeight.addEventListener("click", () => {
    document.getElementById("pokemonsHeight").innerHTML = "";
    computeStats.findTheHeigthPokemon(data);
  });
}//endIf

//Só adiciona o addEventListener se o elemento for acionado
//Pegando elemento do botão clique para descobrir os tipos mais raros e comuns dos pokemons
const findPercentageOfTypesOfPokemons = document.getElementById("findPercentageOfTypesOfPokemons");
if (findPercentageOfTypesOfPokemons) {
  findPercentageOfTypesOfPokemons.addEventListener("click", () => {
    document.getElementById("chart").innerHTML = "";
    computeStats.calculatePokemonTypesInPercentages(data);
  });
}//endIf

//Função que constrói os cards dos pokémons
export const buildCard = (id, pokemon) => {

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

}//endBuildCard

//Função que constrói o gráfico exibindo o percentual dos tipos de pokémons
export const plotChart = (typePokemon, width) => {

  let grafico = document.getElementById("chart");
  let dados = document.createElement('section');

  dados.innerHTML = `
    <div id="typeOfPokemon">
      <div id="tipo">${typePokemon}</div>
    </div>
    <div id="percentage">
      <div id="value" style="width: ${width}% "> ${width}% </div>
    </div>
   `;

  grafico.appendChild(dados);

}//endBuildScreen


document.querySelectorAll("header .home").forEach(
  item => {
    item.addEventListener("click", () => {
      console.log("click");
      return window.location = "./";
    })

  }
)

document.getElementById("menuMob").addEventListener("click", () => {
  const menu = document.querySelector("#navCel");
  menu.classList.toggle("active");
})

//adicionando evento no carregamento da página
document.getElementById("pokemons").addEventListener("load", onload(data));

function onload(data) {

  for (let pokemon in data.pokemon) {
    buildCard("pokemons", data.pokemon[pokemon]);
  }//enFor

}//endOnload








