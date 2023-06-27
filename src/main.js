import { example } from './data.js';
import countries from './data/countries/countries.js';
// import data from './data/lol/lol.js';
import data from './data/countries/countries.js';
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(data.countries[0], data.countries[0].population);

 for(let i = 0; i < data.countries.length; i++){

    const exibirFlags  = data.countries[i].flags.png
    const exibirName = data.countries[i].name.common
    const exibirPopulation = data.countries[i].population
    
    // template string
    const template = "<h1>" + exibirName + "</h1>"
    console.log(template)
 }
