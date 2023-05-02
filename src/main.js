// import { example } from './data.js';

import dataLol from './data/lol/lol.js';

const campeoes = Object.values(dataLol.data);

function mostraCards(campeoes) {
  document.getElementById('mostrarTodos').innerHTML = campeoes.map((campeao) =>
    `
      <div class="cards">
        <div class="card">
          <div class="card-frente">
            <img src="${campeao.splash}" class="imagem-do-card">
            <h2 id="nome-do-card">${campeao.name.toUpperCase()}</h2>
          </div>
          <div class="card-verso">
            <ul class="info-do-card">
            <h3 class="nome-verso"><strong>${campeao.name.toUpperCase()}</strong></h3>
            <li>Ataque: ${campeao.info.attack}</li>
            <li>Defesa: ${campeao.info.defense}</li>
            <li>Magia: ${campeao.info.magic}</li>
            <li>Dificuldade: ${campeao.info.difficulty}</li>
            </ul>
          </div>
        </div>
      </div>

        `
  ).join('')
}
window.addEventListener('load', () => mostraCards(campeoes));
