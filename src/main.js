import data from './data.js';
import dataLol from './data/lol/lol.js';
// import dadosjson from './data/lol/lol.js'

const campeoes = Object.values(dataLol.data);

const tagTraduzida = (tag) => {
  switch (tag) {
  case "Assassin":
    return " Assassino ";
  case "Fighter":
    return " Lutador ";
  case "Mage":
    return " Mago ";
  case "Marksman":
    return " Atirador ";
  case "Support":
    return " Suporte ";
  case "Tank":
    return " Tanque ";
  }
}

// const ctx = document.getElementById('myChart');
// new Chart(ctx, {
//   type: 'pie',
//   data: {
//     labels: ['Assassinos', 'Lutadores', 'Magos', 'Atiradores', 'Suporte', 'Tanques'],
//     datasets: [{
//       label: '# of Votes',
//       data: [1, 2, 3, 4, 5, 6],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     scales: {
//       y: {
//         beginAtZero: true
//       }
//     }
//   }
// });

function filtroNomes() {
  const inputFilter = document.getElementById('buscar').value
  const filter = data.buscarNome(campeoes, inputFilter);
  return mostraCards(filter);
}

//interpolamos os dados
function mostraCards(campeoes) {
  document.getElementById('mostrarTodos').innerHTML = campeoes.map((campeao) =>
    `
      <div class="cards">
        <div class="card" >
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
            <li> <strong> ${campeao.tags.map(tagTraduzida)} </strong></li>
            </ul>
          </div>
        </div>
      </div>

        `
  ).join('')

}
window.addEventListener('load', () => mostraCards(campeoes));

function filtroTags(tag) {
  const filter = data.buscarTag(campeoes, tag);
  mostraCards(filter);
}

// Adicionando eventos de clique aos itens do menu LISTA
const itensMenu = document.querySelectorAll('.menu li');
itensMenu.forEach(item => {
  item.addEventListener('click', () => {
    const tag = item.dataset.tag;
    if (!tag) return;
    if (tag === 'todos') {
      mostraCards(campeoes);
    } else {
      filtroTags(tag);
    }
  });
});


// Adicionando eventos de clique aos itens do menu SELECT
function filtroTagSelect(tag) {
  const filter = data.buscarTag(campeoes, tag);
  mostraCards(filter);
}

const itensMenuSelect = document.querySelector('.menu2');
itensMenuSelect.addEventListener('change', () => {
  const tag = itensMenuSelect.value;
  if (!tag) return;
  if (tag === 'todos') {
    mostraCards(campeoes);
  } else {
    filtroTagSelect(tag);
  }
});

// filtrar por classifcação
function selecionarSelect(){
  const ordem = document.querySelector('.selecionar').value
  const selecionarMaiorMenor = data.ordenarCampeoes(campeoes, ordem);
  mostraCards(selecionarMaiorMenor);
}

document.getElementById('buscar').addEventListener('input', filtroNomes);
document.querySelector('.selecionar').addEventListener('change', selecionarSelect);
