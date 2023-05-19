import { filtroNomes, filterBreakingBad, filterBetterCallSaul, orderAZ, orderZA } from "./data.js";
import data from "./data/breakingbad/breakingbad.js";

// o código abaixo transforma um objeto em array
// const dadosSerie = [];
// for (const character in data.data) {
//   dadosSerie.push(data.data[character]);
// }

const resultBreakingBad = data.breaking_bad;
const root = document.getElementById("infoCards");
function infoAllCards(data) {
  root.innerHTML = data
    .map(
      (character) => `
  <div class="cards">
    <ul class="frontCard">
      <h1 id="nome"><strong> ${character.name} </strong></h1>
      <img alt="foto" class="img-card" src="${character.img}">
      <li><strong> Birthday: </strong> ${character.birthday}</li>
      <li><strong> occupation: </strong> ${character.occupation}</li>
      <li><strong> Status: </strong> ${character.status}</li>
      <li><strong> Nickname: </strong> ${character.nickname}</li>
      <li><strong> Appearance: </strong> ${character.appearance}</li>
      <li><strong> Portrayed: </strong> ${character.portrayed}</li>
      <li><strong> Category: </strong> ${character.category}</li>
      <li><strong> Better_call_saul_appearance: </strong> ${character.better_call_saul_appearance}</li>
    </ul>
  </div>
  `
    )
    .join("");
}
infoAllCards(resultBreakingBad); //referente a const que virou de objeto para array

//pesquisar por nome
const pesquisarNome = document.getElementById("busca");

pesquisarNome.addEventListener("input", (Event) => {
  const nomeDoPersonagem = Event.target.value.toUpperCase();
  const nomeFiltrado = filtroNomes(resultBreakingBad, nomeDoPersonagem); //linka com a função da pasta data.js em barra de pesquisa
  infoAllCards(nomeFiltrado);
});

const buscarPortemporada = document.getElementById("select-filter");
buscarPortemporada.addEventListener("change", () => {
  const filtroBB = filterBreakingBad(
    resultBreakingBad,
    buscarPortemporada.value
  );
 
  infoAllCards(filtroBB);
});

const buscarSerieBCS = document.getElementById("select-filter")
buscarSerieBCS.addEventListener ("change", () => {
  const filtroBCS = filterBetterCallSaul (resultBreakingBad);
  console.log(filtroBCS, "better call saul")
  infoAllCards (filtroBCS);
   
});

const ordenarPersonagens = document.getElementById("select-order");
ordenarPersonagens.addEventListener("change", () => { 
  const ordenar = ordenarPersonagens.value;
  let breakingBadOrdenado;
  if (ordenar === "a-z") {
    breakingBadOrdenado = orderAZ(resultBreakingBad);
  } else if (ordenar === "z-a") {
    breakingBadOrdenado = orderZA(resultBreakingBad);
  }
  infoAllCards(breakingBadOrdenado);
});


