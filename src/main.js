//import { example } from './data.js';
// em example van las funciones que creara Cristyna


import data from './data/pokemon/pokemon.js';


const input = document.querySelector("#searchByName") // devuelve el primero Element dentro del documento que coincide con ese id
input.addEventListener("keyup", e => {  //input: elemento que se escucha, keyup: muestra la info que el usuario escribio, evento: accion realizada 
    //console.log(input.value)  // value: devuelve el valor en un capo de texto
