import {
  filtroNomes,
  filterBreakingBad,
  filterBetterCallSaul,
} from "./data.js";
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
      <h3>${character.char_id}</h3>
      <h1 id="nome"><strong> ${character.name} </strong></h1>
      <img alt="foto" class="img-card" src="${character.img}">
      <li><strong> Birthday: ${character.birthday}</strong></li>
      <li><strong> occupation: ${character.occupation}</strong></li>
      <li><strong> Status: ${character.status}</strong></li>
      <li><strong> Nickname: ${character.nickname}</strong></li>
      <li><strong> Appearance: ${character.appearance}</strong></li>
      <li><strong> Portrayed: ${character.portrayed}</strong></li>
      <li><strong> Category: ${character.category}</strong></li>
      <li><strong> Better_call_saul_appearance: ${character.better_call_saul_appearance}</strong></li>
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
    data.breaking_bad,
    buscarPortemporada.value
  );
  console.log(filtroBB, "buscar por temporada");
  infoAllCards(filtroBB);
});
buscarPortemporada.addEventListener("change", () => {
  const filtroBCS = filterBetterCallSaul(
    resultBreakingBad,
    buscarPortemporada.value
  );
  console.log (filtroBCS, "bettercallsaul")
  infoAllCards(filtroBCS);
});



console.log(data);
