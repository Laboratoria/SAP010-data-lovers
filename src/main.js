import {
  filtroNomes,
  filterBreakingBad,
  filterBetterCallSaul,
  orderAZ,
  orderZA,
  porcentagemTemporada,
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
    <div class="flip-container"> 
      <div class="flipper">

          <ul class="frontCard">
            <h2 id="nome"><strong> ${character.name} </strong></h2>
            <img alt="foto" class="img-card" src="${character.img}">
          </ul>

        <div class="backCard">
          <ul class="back-cards-texto">
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
      </div>
    </div>
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

// filtrar personagens da serie better_call_saul e por temporada os personagens da serie Breakind Bad
const buscarPortemporada = document.getElementById("select-filter");
buscarPortemporada.addEventListener("change", () => {
  if (buscarPortemporada.value === "better_call_saul_appearance") {
    const filtroBCS = filterBetterCallSaul(resultBreakingBad);
    infoAllCards(filtroBCS);

    const porcentagem = porcentagemTemporada(filtroBCS, resultBreakingBad);
    const calculoTela = document.getElementById("porcentagem-tela");
    calculoTela.innerHTML = `São ${filtroBCS.length} atores da série Better Call Saul. Ou seja: ${porcentagem}% do total.`;

  } else if (buscarPortemporada.value !== "") {
    const filtroBB = filterBreakingBad(
      resultBreakingBad,
      buscarPortemporada.value
    );
    infoAllCards(filtroBB);

    const porcentagem = porcentagemTemporada(filtroBB, resultBreakingBad);
    const calculoTela = document.getElementById("porcentagem-tela");
    calculoTela.innerHTML = `São ${filtroBB.length} atores nessa temporada da série Breaking Bad. Ou seja: ${porcentagem}% do total.`;
    
  } else {
    infoAllCards(resultBreakingBad);

    const calculoTela = document.getElementById("porcentagem-tela");
    calculoTela.innerHTML = "";
  }
});


// ordena de a-z e z-a os personagens
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


