import {filtroNomes} from './data.js'
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
      <h3>${character.char_id}</h3>
      <h1 id="nome"><strong> ${character.info.name} </strong></h1>
      <img alt="foto" class="img-card" src="${character.img}">
      <li><strong> Birthday: ${character.info.birthday}</strong></li>
      <li><strong> occupation: ${character.info.occupation}</strong></li>
      <li><strong> Status: ${character.info.status}</strong></li>
      <li><strong> Nickname: ${character.info.nickname}</strong></li>
      <li><strong> Appearance: ${character.info.appearance}</strong></li>
      <li><strong> Portrayed: ${character.info.portrayed}</strong></li>
      <li><strong> Category: ${character.info.category}</strong></li>
      <li><strong> Better_call_saul_appearance: ${character.info.better_call_saul_appearance}</strong></li>
    </ul>
  </div>
  `).join('');
}
infoAllCards(dadosSerie); //referente a const que virou de objeto para array

//pesquisar por nome
const pesquisarNome = document.getElementById("busca");

pesquisarNome.addEventListener("input", Event => {
  const nomeDoPersonagem = Event.target.value.toUpperCase();
  const nomeFiltrado     = filtroNomes(dadosSerie, nomeDoPersonagem); //linka com a função da pasta data.js em barra de pesquisa

  infoAllCards(nomeFiltrado);
});

console.log(data);