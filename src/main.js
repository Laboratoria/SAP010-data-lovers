import got from './data/got/got.js'; // importando o módulo 'got' do arquivo got.jsc

import sortData from './data.js'; // importando o módulo 'got' do arquivo got.jsc


const cardContainer = document.querySelector("#exibirCards"); // selecionando o elemento com id 'exibirCards' para exibir os cards

const cardsGot = got.got.map(personagens => {
  const cardDiv = document.createElement('div');
  const firstName = document.createElement('h2');
  const lastName = document.createElement('h2');
  const imageUrl = document.createElement('img');

  firstName.textContent = personagens.firstName.common;
  lastName.textContent = personagens.lastName.common;
  imageUrl.src = personagens.imageUrl; // corrigindo para acessar a propriedade 'imageUrl' de cada personagem

  cardDiv.appendChild(firstName);
  cardDiv.appendChild(lastName);
  cardDiv.appendChild(imageUrl);

  return cardDiv;
});

cardsGot.forEach(card => {
  cardContainer.appendChild(card);
});





document.getElementById("buscar").addEventListener("click", onClickEnviar); // add o evento de clique ao botão vinculando a função

function onClickEnviar() {
  const informacoesPersonagens = sortData.data(ordenar);
  const familiaPersonagem = sortData.sortBy(ordenar);
  const ordenarAZ = sortData.sortOrder(ordenar);
  const ordenar = document.getElementById('ordenar'); //lê o label 'ordenar'
  const familia = document.getElementById('familia'); //lê o label 'familia'

}
    