import { filtrarNomes } from "./data.js";
// import data from './data/lol/lol.js';
import data from "./data/tarot/tarot.js";
// import data from './data/rickandmorty/rickandmorty.js';

//console.log(example, data);
const dadosTarot = data.cards;

const root = document.getElementById("info-cards");

function infosDosCardsTela(cards) {
    root.innerHTML = cards
        .map(
            (cards) => `
    <div class="cards">
        <div class="flip-container">
            <div class="flipper">
                <div class="front-cards-infos">
                    <img alt="cartas-frente" class="card-img" src="${cards.img}">
                </div>
                <div class="back-cards-infos">
                    <ul class="back-cards-txt">
                    <h1 id="nome-carta"><strong> ${cards.name}</strong></h1>
                    <li><strong>Tipo: ${cards.type} </strong></li>
                    <li><strong>Valor: ${cards.value} </strong></li>
                </div>
            
            </div>
        </div>   
    </div>
`
        )
        .join("");
}
infosDosCardsTela(dadosTarot);

const pesquisarNome = document.getElementById("pesquisa-nome"); // pega o input de pesquisa pela id
pesquisarNome.addEventListener("input", evento => { // adiciona um evento quando o input é acionado
const nomeDasCartas = evento.target.value; // variavel para pegar o nome digitado no input
const filtrarCartas = filtrarNomes(dadosTarot, nomeDasCartas); // variável para chamar a função no data.js com os parametros dadosTarot e nomeDasCartas
infosDosCardsTela(filtrarCartas); // chama a função infoDosCardsTela com o parametro que foi atribuído na variavel filtrarCartas
});



//console.log(infosDosCardsTela);
