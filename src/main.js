import got from './data/got/got.js'; // importando o módulo 'got' do arquivo got.jsc
import {ordenarNomes} from './data.js'; // importando o módulo 'got' do arquivo got.js

const dadosSeparados = {
  firstName: {},
  title: {},
  family: {}
};

got.got.forEach(personagem => {
  const { firstName, title, family } = personagem;
  if (!dadosSeparados.firstName[firstName]) {
    dadosSeparados.firstName[firstName] = [personagem];
  } else {
    dadosSeparados.firstName[firstName].push(personagem);
  }

  if (!dadosSeparados.title[title]) {
    dadosSeparados.title[title] = [personagem];
  } else {
    dadosSeparados.title[title].push(personagem);
  }

  if (!dadosSeparados.family[family]) {
    dadosSeparados.family[family] = [personagem];
  } else {
    dadosSeparados.family[family].push(personagem);
  }
});

const selectFamily = document.getElementById('selecionarFamilia');

for (const family in dadosSeparados.family) {
  const option = document.createElement('option');
  option.value = family;
  option.textContent = family;
  selectFamily.appendChild(option);
}


const cardContainer = document.querySelector("#exibirCards"); // selecionando o elemento com id 'exibirCards' para exibir os cards

const cardsGot = got.got.map(personagens => {
  const cardDiv = document.createElement('div');
  const firstName = document.createElement('h2');
  const lastName = document.createElement('h2');
  const fullName = document.createElement('h2');
  const imageUrl = document.createElement('img');

  firstName.textContent = personagens.firstName;
  lastName.textContent = personagens.lastName;
  fullName.textContent = personagens.fullName;
  imageUrl.src = personagens.imageUrl; // corrigindo para acessar a propriedade 'imageUrl' de cada personagem

  cardDiv.appendChild(imageUrl);
  cardDiv.appendChild(fullName);
  

  return cardDiv;
});

cardsGot.forEach(card => {
  cardContainer.appendChild(card);

});

document.getElementById("buscar").addEventListener("click", onClickEnviar); // add o evento de clique ao botão vinculando a função
function onClickEnviar() {
  document.getElementById("exibirCards").innerHTML =  `CardContainer aqui ${cardContainer}`;
}




console.log(ordenarNomes) //TESTANDO export data.js 



/*  const informacoesPersonagens = data(ordenar);
  const familiaPersonagem = sortBy(ordenar);
  const ordenarAZ = sortOrder(ordenar);
  const ordenar = document.getElementById('ordenar'); //lê o label 'ordenar'
  const familia = document.getElementById('familia'); //lê o label 'familia'
*/