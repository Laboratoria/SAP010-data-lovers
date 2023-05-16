import got from './data/got/got.js'; // importando o módulo 'got' do arquivo got.jsc
import {ordenarNomes} from './data.js'; // importando o módulo 'got' do arquivo got.js

const ordenacao = document.getElementById("ordenacao");
ordenacao.addEventListener("change", onChangeOrdenacao); // add o evento de clique ao botão vinculando a função

const listaPersonagens = got.got;
onChangeOrdenacao();


function onChangeOrdenacao(){
  const listaOrdenada = ordenarNomes(listaPersonagens, ordenacao.value);
  exibirPersonagens(listaOrdenada);
}

function exibirPersonagens(personagens){
  // selecionando o elemento com id HTML 'exibirPersonagens' para exibir os cards ==>
  const cardContainer = document.querySelector("#exibirPersonagens"); 
  
  //Limpa a exibição do cardContainer ==>
  while(cardContainer.firstChild){
    cardContainer.removeChild(cardContainer.lastChild);
  }

  const cardsGot = personagens.map(personagem => {
    const cardDiv = document.createElement('div');
    const id = document.createElement('h2');
    const firstName = document.createElement('h2');
    const lastName = document.createElement('h2');
    const fullName = document.createElement('h2');
    const title = document.createElement('h2');
    const family = document.createElement('h2');
    const imageUrl = document.createElement('img');
    const born = document.createElement('h2');
    
    id.textContent = personagem.id;
    firstName.textContent = personagem.firstName;
    lastName.textContent = personagem.lastName;
    fullName.textContent = personagem.fullName;
    title.textContent = personagem.title;
    family.textContent = personagem.family;
    imageUrl.src = personagem.imageUrl; // acessando imagens
    born.textContent = personagem.born;

    //Retorna o card com nome embaixo ==>
    cardDiv.appendChild(imageUrl);
    cardDiv.appendChild(fullName);
    
    return cardDiv;
  });

  cardsGot.forEach(card => {
    cardContainer.appendChild(card);
  });
}

// Cria e exibe em ordem alfabética as famílias no 'select' ==>
const selecionarFamilia = document.getElementById('selecionarFamilia');
const familyArray = [];

got.got.forEach(personagem => {
  if (Array.isArray(personagem.family)) {
    personagem.family.forEach(family => {
      if (!familyArray.includes(family)) {
        familyArray.push(family);
      }
    });
  } else if (typeof personagem.family === 'string') {
    const families = personagem.family.split(',');
    families.forEach(family => {
      const trimmedFamily = family.trim();
      if (!familyArray.includes(trimmedFamily)) {
        familyArray.push(trimmedFamily);
      }
    });
  }
});

familyArray.sort(); // Ordena o array em ordem alfabética

familyArray.forEach(family => {
  const option = document.createElement('option');
  option.value = family;
  option.textContent = family;
  selecionarFamilia.appendChild(option);
});


// Cria e exibe em ordem alfabética os nomes dos personagens no 'select' ==>
const selecionarPersonagem = document.getElementById('selecionarPersonagem');
const fullNameArray = [];

got.got.forEach(personagem => {
  if (!fullNameArray.includes(personagem.fullName)) {
    fullNameArray.push(personagem.fullName);
  }
});

fullNameArray.sort(); // Ordena o array em ordem alfabética

fullNameArray.forEach(fullName => {
  const option = document.createElement('option');
  option.value = fullName;
  option.textContent = fullName;
  selecionarPersonagem.appendChild(option);
});


// Cria ordenacao A-Z/Z-A no 'select' ==>
const ordenarAZ = document.getElementById('ordenacao');

// Opção A-Z
const optionAZ = document.createElement('option');
optionAZ.value = 'az';
optionAZ.textContent = 'A-Z';
ordenarAZ.appendChild(optionAZ);

// Opção Z-A
const optionZA = document.createElement('option');
optionZA.value = 'za';
optionZA.textContent = 'Z-A';
ordenarAZ.appendChild(optionZA);




















/*  const informacoesPersonagens = data(ordenar);
  const familiaPersonagem = sortBy(ordenar);
  const ordenarAZ = sortOrder(ordenar);
*/