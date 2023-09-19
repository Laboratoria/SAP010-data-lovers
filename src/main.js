import { buscarNome, ordenarAZ, filtrar, calcularPorcentagem } from './data.js'
import data from './data/rickandmorty/rickandmorty.js';

const personagens = data.results;
const inputDeBusca = document.querySelector('#input-de-busca');
const selecaoOrdem = document.querySelector('#ordenar');
const selecaoEspecie = document.querySelector('#selecao-especie');
const selecaoStatus = document.querySelector('#selecao-status');
const divSobreASerie = document.querySelector('.container.secundaria');
const divPaginaInicial = document.querySelector('.container');
const btnSobre = document.querySelector('#sobre-serie');
const porcentagem = document.querySelector('#porcentagem');

//mudança de página
btnSobre.addEventListener('click', function () {
  if (divPaginaInicial.style.display !== 'none') {
    divPaginaInicial.style.display = 'none';
    divSobreASerie.style.display = 'block'
  }
})

//criação cards
function criaCardPersonagens(personagens) {
  const printarCard = personagens.map((personagens) => {
    const card = `
        <div class = "cards">
             <img src="${personagens.image}" alt="Charactere's image">
             <h2>${personagens.name}</h2>
             <div class="filtros">
             <p>Specie: ${personagens.species}</p>
             <p>Status: ${personagens.status}</p>
             <p>Location: ${personagens.location.name}</p>
             </div>
        </div>
        `;
    return card;
  });

  document.querySelector("#card-personagens").innerHTML = printarCard.join("");
}
