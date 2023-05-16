import {filtroAz, filtroCont } from './data.js';
import countries from './data/countries/countries.js';

function exibirPaises() {
  let filtroOp = document.getElementById('opcao');
  let exibirFlagsDiv = document.getElementById('exibirFlags');
  exibirFlagsDiv.innerHTML = '';

  let op = filtroOp.value;

  let flagsCountries = filtroCont(countries.countries, op).map(country => {
    let flagsDiv = document.createElement('div');
    let nameElement = document.createElement('h3');
    let flagElement = document.createElement('img');
    flagElement.classList.add('imgBand');
    nameElement.textContent = country.name.common;
    flagElement.src = country.flags.png;

    flagsDiv.appendChild(nameElement);
    flagsDiv.appendChild(flagElement);
    flagsDiv.classList.add('bands');

    return flagsDiv;
  });

  flagsCountries.forEach(flag => {
    exibirFlagsDiv.appendChild(flag);
  });
}

// Chamar a função ao carregar a página
window.addEventListener('load', exibirPaises);

// Adicionar o evento de mudança ao select
let filtroOp = document.getElementById('opcao');
filtroOp.addEventListener('change', exibirPaises);


let elementosDeOrdenacao = document.getElementById('az');
elementosDeOrdenacao.addEventListener('change', filtroPaises);
function filtroPaises(){
let resultado = filtroAz(countries.countries, 'az');
console.log(resultado)
}

