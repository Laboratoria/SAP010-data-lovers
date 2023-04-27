import { example } from './data.js';
import pokemon from './data/pokemon/pokemon.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

document.getElementById("submit").addEventListener("click",()=>{
    const pokemon = document.getElementById("pokemon").value
    console.log(pokemon)
})
console.log(example, data);

