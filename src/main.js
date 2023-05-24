import { 
  filtroNomes,
  filterBreakingBad,
  filterBetterCallSaul,
  orderAZ,
  orderZA,
  porcentagemTemporada,
} from "./data.js";
import data from "./data/breakingbad/breakingbad.js";

const resultBreakingBad = data.breaking_bad;

function addClickEventToCards() {
  const flipContainers = document.querySelectorAll('.flip-container');

  flipContainers.forEach(flipContainer => {
    flipContainer.addEventListener('click', function() {
      flipContainer.classList.toggle('flipped');
    });
  });
}


const root = document.getElementById("infoCards");
function infoAllCards(data) {
  root.innerHTML = data
    .map(
      (character) => `
  <div class="cards">
    <div class="flip-container"> 
          <ul class="frontCard">
            <h2 id="nome"><strong> ${character.name} </strong></h2>
            <img alt="foto" class="img-card" src="${character.img}">
          </ul>
        <div class="backCard">
          <ul>
              <li><strong> Aniversário: </strong> ${character.birthday}</li>
              <li><strong> Ocupação: </strong> ${character.occupation}</li>
              <li><strong> Status: </strong> ${character.status}</li>
              <li><strong> Nickname: </strong> ${character.nickname}</li>
              <li><strong> Visto na(s) temporada(s): </strong> ${character.appearance}</li>
              <li><strong> Interpretado(a) por: </strong> ${character.portrayed}</li>
              <li><strong> Categoria: </strong> ${character.category}</li>
              <li><strong> Aparece na série Better call saul: </strong> ${character.better_call_saul_appearance}</li>
          </ul>
        </div>
    </div>
  </div>
  `
    )
    .join("");
}
infoAllCards(resultBreakingBad);
addClickEventToCards()


//pesquisar por nome
const pesquisarNome = document.getElementById("busca");
pesquisarNome.addEventListener("input", (Event) => {
  const nomeDoPersonagem = Event.target.value.toUpperCase();
  const nomeFiltrado = filtroNomes(resultBreakingBad, nomeDoPersonagem); //linka com a função da pasta data.js em barra de pesquisa
  infoAllCards(nomeFiltrado);
  addClickEventToCards()
});

// filtrar personagens da serie better_call_saul e por temporada os personagens da serie Breakind Bad
const buscarPortemporada = document.getElementById("select-filter");
buscarPortemporada.addEventListener("change", () => {
  if (buscarPortemporada.value === "better_call_saul_appearance") {
    const filtroBCS = filterBetterCallSaul(resultBreakingBad);
    infoAllCards(filtroBCS);
    addClickEventToCards()

    const porcentagem = porcentagemTemporada(filtroBCS, resultBreakingBad);
    const calculoTela = document.getElementById("porcentagem-tela");
    calculoTela.innerHTML = `São ${filtroBCS.length} atores da série Better Call Saul. Ou seja: ${porcentagem}% do total.`;

  } else if (buscarPortemporada.value !== "") {
    const filtroBB = filterBreakingBad(
      resultBreakingBad,
      buscarPortemporada.value
    );
    infoAllCards(filtroBB);
    addClickEventToCards()

    const porcentagem = porcentagemTemporada(filtroBB, resultBreakingBad);
    const calculoTela = document.getElementById("porcentagem-tela");
    calculoTela.innerHTML = `São ${filtroBB.length} atores da série Breaking Bad nessa temporada. Ou seja: ${porcentagem}% do total.`;
    
  } else {
    infoAllCards(resultBreakingBad);
    addClickEventToCards()

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
  addClickEventToCards()
});


// função para mudar o background img
document.getElementById("select-filter").addEventListener("change", function() {
  const selectedOption = this.value;
  
  if (selectedOption === "better_call_saul_appearance") {
    document.body.style.backgroundImage = "url(https://2.bp.blogspot.com/-9EYuVVYgXtQ/VRv7DrXU5KI/AAAAAAAAlZc/T1-G1B08bw8/s1600/BCSKEY13-700x400.jpg)";
  } else {
    document.body.style.backgroundImage = "url(img/brba.jpg)";
  }
});