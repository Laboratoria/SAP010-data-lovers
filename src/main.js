//import { example } from './data.js';

import data from './data/ghibli/ghibli.js';
import { sortAlphabet } from './data.js';

const selectElement = document.querySelector("#first-filter")

selectElement.addEventListener("change", (event) =>
{ const escolha = event.target.value;
console.log(escolha);
sortAlphabet()
});

/* ToDo:
      Organizar DOM
      onChange ->

            **TODAS AS FUNCOES SAO DEFINIDAS NO DATA.JS

            ***Chamo os cards no main ou no data.js? No main mesmo? Sim.
*/

console.log(data);
//document.getElementById("start-events").addEventListener("click", );


console.log(data.films[0].title);
//devolve um título.

const titulos = [];
for (let i=0; i<data.films.length; i++) {
  const card = `<h1>${data.films[i].title}</h1>`;
  titulos.push(card);
//fazer o sort na array de filmes
}

console.log(titulos);
console.log(titulos.sort());


const rating = [];
for (let i=0; i<data.films.length; i++){
  rating.push(data.films[i].rt_score);
}
console.log(rating);
console.log(rating.sort());







