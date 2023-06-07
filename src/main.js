import {
  filtrarArcanos,
  filtrarNomes,
  filtrarNumeros,
  ordenaCartas,
} from "./data.js";
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
}

const dadosTarot = data.cards;
const root = document.getElementById("info-cards");
const select = document.getElementById("ordem");
const selectArcano = document.getElementById("arcanos");
const calculoTelaMajor = document.getElementById("calculo");
const calculoTelaMinor = document.getElementById("calculo2");

// function infosDosCardsTela(cards) {
//   root.innerHTML = cards
//     .map(
//       (cards) => `
//       <div class="lista-cards">
//         <ul>
//           <li class="cartao-cards">
//             <ul>
//               <li id="info">
//                 <p id="valor"> ${cards.value}</p>
//                 <p id="nome"><strong> ${cards.name}</strong></p>
//               </li>
//             </ul>

//             <img alt="cartas-frente" class="card-img" src="${cards.img}">
//             <p id="tipo"> Arcano: ${cards.type}</p>
//               <ul class="sign">
              
//                <li class="sign-up"> <button> Meaning Up </button> <dialog class="dialogUp"> <h2> Meaning Up: </h2> <p> ${cards.meaning_up} </p> <button> Fechar </button> </dialog> </li> 
//                 <li class="sign-rev"><strong>Meaning Reverso: ${cards.meaning_rev} </strong></li>
//               </ul>
//             <p class="descricao"><strong>Description:</strong> ${cards.desc} </p>
//           </li>
//         </ul>
//       </div>
// `
//     )
//     .join("");
// }
function infosDosCardsTela(cards) {
  root.innerHTML = cards
    .map(
      (card) => `
      <div class="lista-cards">
        <ul>
          <li class="cartao-cards">
            <ul>
              <li id="info">
                <p id="valor"> ${card.value}</p>
                <p id="nome"><strong> ${card.name}</strong></p>
              </li>
            </ul>

            <img alt="cartas-frente" class="card-img" src="${card.img}">
            <p id="tipo"> Arcano: ${card.type}</p>
            <ul class="sign">
              <li class="sign-up">
                <details class="details-up">
                <summary class="btnUp"> Saiba mais </summary>
                <div class="sumario">
                  <h2> Meaning Up: </h2>
                  <p> ${card.meaning_up} </p>
                  <h2> Meaning Rev: </h2>
                  <p>${card.meaning_rev}</p>
                  <h2>Description:</h2>
                  <p class="descricao"> ${card.desc} </p>
                  </div>
                </details>
              </li> 
            
            </ul>
   
          </li>
        </ul>
      </div>
    `
    )
    .join("");

  // Adicionar lógica JavaScript para abrir/fechar os diálogos
  // cards.forEach((cards) => {
  //   const btnUp = document.querySelectorAll(".btnUp");
  //   const dialogUp = document.querySelectorAll(".dialogUp");
  //   const btnCloseUp = document.querySelectorAll(".btnCloseUp");
  //   btnUp.addEventListener("click", () => {
  //     dialogUp.showModal();
  //   });

  //   btnCloseUp.addEventListener("click", () => {
  //     dialogUp.close();
  //   });
  // });
}
// linha 83 do map -> <li class="sign-rev"><strong>Meaning Reverso: ${card.meaning_rev} </strong></li>
// linha 87 do map -> <p class="descricao"><strong>Description:</strong> ${card.desc} </p>
infosDosCardsTela(dadosTarot);


// infosDosCardsTela(dadosTarot);

// const botaoUp = document.querySelector("button");
// const modalUp = document.querySelector("dialog");
// const botaoFechar = document.querySelector("dialog button");




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
  // if (selecao === "Selecione") {
  //   return infosDosCardsTela(dadosTarot);
  // }
});

selectArcano.addEventListener("change", (evento) => {
  const opcaoArcano = evento.target.value;
  const opcaoEscolhida = filtrarArcanos(dadosTarot, opcaoArcano);
  infosDosCardsTela(opcaoEscolhida);
  if (opcaoArcano === "major") {
    calculoTelaMajor.innerHTML = `A porcentagem de cartas de Arcano maior no Baralho do Tarô é de ${totalMajor}%`;
    calculoTelaMinor.innerHTML = "";
  } else if (opcaoArcano === "minor") {
    calculoTelaMinor.innerHTML = `A porcentagem de cartas de Arcano menor no Baralho do Tarô é de ${totalMinor}%`;
    calculoTelaMajor.innerHTML = "";
  } else {
    infosDosCardsTela(dadosTarot);
    calculoTelaMajor.innerHTML = "";
    calculoTelaMinor.innerHTML = "";
  }
});

let quantMajor = 0;
for (const objeto of dadosTarot) {
  if (objeto.type === "major") quantMajor++;
}
const major = quantMajor;

let quantMinor = 0;
for (const objeto of dadosTarot) {
  if (objeto.type === "minor") quantMinor++;
}
const minor = quantMinor;

const calculoMinor = (minor * 100) / 78;
const calculoMajor = (major * 100) / 78;

const totalMajor = calculoMajor.toFixed(2);
const totalMinor = calculoMinor.toFixed(2);

// botaoUp.addEventListener("click", () => {
//   modalUp.showModal();
// });

// botaoFechar.addEventListener("click", () => {
//   modalUp.close();
// });