//import {ordenarNomes, pesquisarNomes} from './data.js'
import data from './data/breakingbad/breakingbad.js'

// o código abaixo transforma um objeto em array
const dadosSerie = [];
for (const character in data.data) {
  dadosSerie.push(data.data[character]);
}

const root = document.getElementById("infoCards");

function infoAllCards (data) {
  root.innerHTML = data.map((character) => `
  <div class="cards">
    <ul class="frontCard">
      <h1 id="nome"><strong> ${character.info.name} </strong></h1>
      <li><strong> birthday: ${character.info.birthday}</strong></li>
      <li><strong> occupation: ${character.info.occupation}</strong></li>
      <li><strong> status: ${character.info.status}</strong></li>
      <li><strong> nickname: ${character.info.nickname}</strong></li>
      <li><strong> appearance: ${character.info.appearance}</strong></li>
      <li><strong> portrayed: ${character.info.portrayed}</strong></li>
      <li><strong> category: ${character.info.category}</strong></li>
      <li><strong> better_call_saul_appearance: ${character.info.better_call_saul_appearance}</strong></li>
    </ul>

  </div>
  `).join('');
}
infoAllCards(dadosSerie); //refere a const que virou de objeto para array

// pesquisar por nome
const pesquisarNome = document.getElementById("busca");

pesquisarNome.addEventListener("input", Event => {
  const nomeDoPersonagem = Event.target.value.toUpperCase();
  const filtrarNomes     = filtroNomes(dadosSerie, nomeDoPersonagem); //em 'filtroNomes' deve ser o mesmo nome na função da pasta data.js em filtrar

  infoAllCards(dadosSerie);
});

//console.log(data);