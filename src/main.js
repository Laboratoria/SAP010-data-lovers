import { filtrarArcanos, filtrarNomes, filtrarNumeros, ordenaCartas } from "./data.js";
import data from "./data/tarot/tarot.js";

const burguer = document.getElementById("burguer");
burguer.addEventListener("click", clickMenu);
function clickMenu() {
  const menu = document.getElementById("menuLista");
  if (menu.style.display === "block") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }

};

const dadosTarot = data.cards;
const root = document.getElementById("info-cards");
const select = document.getElementById("ordem");
const selectArcano = document.getElementById("arcanos")


function infosDosCardsTela(cards) {
  root.innerHTML = cards
    .map(
      (cards) => `
      <div class="lista-cards">
        <ul>
          <li class="cartao-cards">
            <ul>
              <li id="info">
                <p id="valor"> ${cards.value}</p>
                <p id="nome"><strong> ${cards.name}</strong></p>
              </li>
            </ul>

            <img alt="cartas-frente" class="card-img" src="${cards.img}">
            <p id="tipo"> Arcano: ${cards.type}</p>
              <ul class="sign">
                <li class="sign-up"><strong>Meaning Up: ${cards.meaning_up} </strong></li>
                <li class="sign-rev"><strong>Meaning Reverso: ${cards.meaning_rev} </strong></li>
              </ul>
            <p class="descricao"><strong>Description:</strong> ${cards.desc} </p>
          </li>
        </ul>
      </div>
`
    )
    .join("");
}
infosDosCardsTela(dadosTarot);

const pesquisarNome = document.getElementById("pesquisa-nome"); // pega o input de pesquisa pela id
pesquisarNome.addEventListener("input", (evento) => {
  // adiciona um evento quando o input é acionado
  const nomeDasCartas = evento.target.value; // variavel para pegar o nome digitado no input
  const filtrarCartas = filtrarNomes(dadosTarot, nomeDasCartas); // variável para chamar a função no data.js com os parametros dadosTarot e nomeDasCartas
  infosDosCardsTela(filtrarCartas); // chama a função infoDosCardsTela com o parametro que foi atribuído na variavel filtrarCartas
});

const pesquisarNumero = document.getElementById("pesquisa-numero");
pesquisarNumero.addEventListener("input", (evento) => {
  const numero = evento.target.value;
  const filtrarNum = filtrarNumeros(dadosTarot, numero);
  infosDosCardsTela(filtrarNum);
});

select.addEventListener("change", (evento) => {
  const selecao = evento.target.value;
  const cardsOrdenados = ordenaCartas(dadosTarot, selecao);
  infosDosCardsTela(cardsOrdenados);
});

selectArcano.addEventListener("change", (evento) => {
  const opcaoArcano = evento.target.value;
  const opcaoEscolhida = filtrarArcanos(dadosTarot, opcaoArcano);
  infosDosCardsTela(opcaoEscolhida);
})

// let totalMajor = 0;
// for (const objeto of dadosTarot){
//   // console.log(objeto.type);
//   if (objeto.type === "major") totalMajor++;
//   // console.log(totalMajor);
// }
// const major = totalMajor;
// console.log(major);
// document.getElementById("calculo").innerHTML = `A quantidade de cartas de arcano maior é ${major}`;

let totalMinor = 0;
for (const objeto of dadosTarot){
  // console.log(objeto.type);
  if (objeto.type === "minor") totalMinor++;
  // console.log(totalMinor);
}

const minor = totalMinor;
console.log(minor);
