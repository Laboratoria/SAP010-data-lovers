import { filtrarNomes, filtrarNumeros, ordenaCartas } from "./data.js";
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
const select = document.querySelector(".ordem");


function infosDosCardsTela(cards) {
  root.innerHTML = cards
    .map(
      (cards) => `
    <div class="lista-cards">
      <ul>
        <li class="cartao-cards">
          <div id="info" class="informacoes">
            <p> ${cards.value}</p>
            <p><strong> ${cards.name}</strong></p>
            
          </div>
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
})

