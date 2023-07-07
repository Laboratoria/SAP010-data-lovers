//import { example } from './data.js';
import countries from "./data/countries/countries.js";
// import data from './data/lol/lol.js';
import data from "./data/countries/countries.js";
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(data.countries[0], data.countries[0].population);
function paises(array) {
  for (let i = 0; i < array.length; i++) {
    const exibirFlags = array[i].flags.png;
    const exibirName = array[i].name.common;
    const exibirPopulation = array[i].population;

    // template string
    const template = `
    <div class= "bandeiras">
    <img src ="${exibirFlags}"> 
    <h3>${exibirName}</h3> 
    <p> População ${exibirPopulation}</p> 
    </div>`;

    const exibirFlagsDiv = document.getElementById("exibirFlags");
    exibirFlagsDiv.innerHTML = exibirFlagsDiv.innerHTML + template;

    console.log(template); //como inserir template no dom com inner html
  }
}

paises(data.countries);
