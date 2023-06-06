//import { example } from './data.js';

import data from './data/ghibli/ghibli.js';
import {} from './data.js';

/* ToDo:
      Organizar DOM
            -> button onClick : pega o input do elemento HTML
            input list="first-filter" -> datalist id="first-filter" -> option value

            If (<nao-sei-como-referenciar>.innerHTML == "Títulos de a-z")
            {
              funcao sort por ordem alfabetica.
            }
            else if (<nao-sei-como-referenciar>.innerHTML == "Ano de lancamento")
            {
              funcao sort por ano lancamento *precisa transformar string p number
            }
            else if (<nao-sei-como-referenciar>.inner == "Rating")
            {
              funcao sort por rating -> transformar string pra double.
            }
            else
            {
              volta todos os cards.
            }

            **TODAS AS FUNCOES SAO DEFINIDAS NO DATA.JS

            ***Chamo os cards no main ou no data.js?
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




