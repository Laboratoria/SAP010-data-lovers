//import { example } from './data.js';

import data from './data/ghibli/ghibli.js';
import {selectTitle} from './data.js';


console.log(data);
//document.getElementById("start-events").addEventListener("click", );
console.log(selectTitle);

console.log(data.films[0].title);

//console.log(data.films.title.sort());

const titulos = [];
for (let i=0; i<data.films.length; i++) {
  titulos.push(data.films[i].title);
}
console.log(titulos);
console.log(titulos.sort());


const rating = [];
for (let i=0; i<data.films.length; i++){
  rating.push(data.films[i].rt_score);
}
console.log(rating);
console.log(rating.sort());





// document.getElementById("start-events").addEventListener("click", myFilters());

// function myFilters() {
//   const filterA = ["Ordem alfabetica", "Ano de lancamento", ""];
//   const filterB = ["Diretor", "Produtor",""];
//   const firstFilter = document.getElementById("first-filter").innerHTML;
//   const secondFilter = document.getElementById("second-filter").innerHTML;

//encontrar o valor firstFilter dentro do array filterA
//encontrar o valor secondFilter dentro do array filterB
//devolver os index.
//executar as combinacoes
//combinacoes sao?
//"" e "" => devolve todos os filmes
//"" e Diretor =>
//"" e Produtor =>
//Ordem alfabetica e "" =>
//Ordem cronologica e "" =>
//Ordem alfabetica e Diretor
//Ordem alfabetica e Produtor
//Ordem cronologica e Diretor
//Ordem cronologica e Produtor
//COMO FAZER ISSO USANDO OBJETO?
//TALVEZ TENTANDO TRANSFORMAR O SWITCH EM OBJ LA NO CARD VALIDATOR EU APRENDA.

//




