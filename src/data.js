// estas funciones são de exemplo

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};
import data from './data/rickandmorty/rickandmorty.js';
*/
import data from './data/rickandmorty/rickandmorty.js';

 function carregarPersonagens() {
    fetch('https://rickandmortyapi.com/api/character')
      .then(response => response.json())
      .then(data => exibirPersonagens(data.results));
  }

  function exibirPersonagens(personagens) {
    const listaPersonagens = document.querySelector('#lista-personagens');
    listaPersonagens.innerHTML = '';
    personagens.forEach(personagem => {
      const li = document.createElement('li');
      li.innerHTML = `
        <img src="${personagem.image}" alt="${personagem.name}">
        <h3>${personagem.name}</h3>
        <p>${personagem.species} - ${personagem.status}</p>
      `;
      listaPersonagens.appendChild(li);
    });
  }


  // Obter dados do banco de dados
  // Aqui você pode usar uma biblioteca de banco de dados, como o IndexedDB, ou uma API para obter os dados

  // Criar elementos HTML para cada personagem
  const personagensList = document.getElementById('personagens');
  lista-personagens.addEventListener('click', carregarPersonagens);

  // Aqui, você pode iterar sobre os dados do banco de dados e criar um elemento HTML para cada personagem
  dadosDoBancoDeDados.forEach((personagem) => {
    const divPersonagem = document.createElement('div');
    divPersonagem.classList.add('personagens');

    const imgPersonagem = document.createElement('img');
    imgPersonagem.src = personagem.imagem;
    divPersonagem.appendChild(imgPersonagem);

    const nomePersonagem = document.createElement('nome');
    nomePersonagem.innerText = personagem.nome;
    divPersonagem.appendChild(nomePersonagem);

    const descricaoPersonagem = document.createElement('p');
    descricaoPersonagem.innerText = personagem.descricao;
    divPersonagem.appendChild(descricaoPersonagem);

    personagensList.appendChild(divPersonagem);
  });
}

window.onload = function() {
  mostrarPersonagens();
}

function getStatus(getPersonagens, status) {
  let resultFilter = getPersonagens.filter (el => el.status.includes(status));
  return resultFilter;
};

function percentStatus(status, resultFilter) {
  const perc = (resultFilter.length *100)/status.length;
  return Math.round(perc);
}

function getSpecies(getPersonagens, species) {
  let resultSpecies = getPersonagens.filter(el => el.species.includes(species));
  return resultSpecies;
};

function percentSpecies(species, resultSpecies) {
  let percent = (resultSpecies.length *100)/species.length;
  return Math.round(percent);
}

function orderAZ(arrayCharacters) {
  const charactersOrders = arrayCharacters.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }
    if (a.name < b.name) {
      return -1;
    }
    return 0;
  });
  return charactersOrders;
}

function orderZA(arrayCharacters) {
  const characterInstead = arrayCharacters.sort(function (a, b) {
    if (a.name < b.name) {
      return 1;
    }
    if (a.name > b.name) {
      return -1;
    }
    return 0;
  });
  return characterInstead;
}

window.data = {
  getStatus: getStatus,
  percentStatus: percentStatus,
  percentSpecies: percentSpecies,
  getSpecies: getSpecies,
  orderAZ: orderAZ,
  orderZA: orderZA
};
