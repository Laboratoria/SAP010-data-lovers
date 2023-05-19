import got from '../data/got/got.js'; // importando o módulo 'got' do arquivo got.jsc
import {ordenarNomes, filtrarFamilia, filtrarPersonagens} from '../js/data.js'; // importando o módulo 'got' do arquivo got.js

const listaPersonagens = got.got;
const ordenacao = document.getElementById("ordenacao");
const selecionarFamilia = document.getElementById("selecionarFamilia");
const selecionarPersonagens = document.getElementById("selecionarPersonagens");

ordenacao.addEventListener("change", onChangeOrdenacao); // add o evento de clique ao botão vinculando a função
selecionarFamilia.addEventListener("change", onChangeSelecionarFamilia);
selecionarPersonagens.addEventListener("change", onChangeSelecionarPersonagens);

onChangeOrdenacao();
onChangeSelecionarFamilia();
onChangeSelecionarPersonagens();

function onChangeOrdenacao(){
  const listaOrdenada = ordenarNomes(listaPersonagens, ordenacao.value);
  exibirPersonagens(listaOrdenada);
}

function onChangeSelecionarFamilia(){
  const listaFamilia = filtrarFamilia(listaPersonagens, selecionarFamilia.value);
  exibirPersonagens(listaFamilia);
}

function onChangeSelecionarPersonagens(){
  const listaNomes = filtrarPersonagens(listaPersonagens, selecionarPersonagens.value);
  exibirPersonagens(listaNomes);
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
const familyArray = [];
familyArray.push("Todas Famílias");

const optionTodasFamilias = document.createElement('option');
optionTodasFamilias.value = "Todas Famílias";
optionTodasFamilias.textContent = "Todas Famílias";
selecionarFamilia.appendChild(optionTodasFamilias);

listaPersonagens.forEach(personagem => {
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
const fullNameArray = [];
fullNameArray.push("Todos Personagens");

const optionTodosPersonagens = document.createElement('option');
optionTodosPersonagens.value = "Todos Personagens";
optionTodosPersonagens.textContent = "Todos Personagens";
selecionarPersonagens.appendChild(optionTodosPersonagens);

listaPersonagens.forEach(personagem => {
  if (Array.isArray(personagem.fullName)) {
    personagem.fullName.forEach(fullName => {
      if (!fullNameArray.includes(fullName)) {
        fullNameArray.push(fullName);
      }
    });
  } else if (typeof personagem.fullName === 'string') {
    const names = personagem.fullName.split(',');
    names.forEach(fullName => {
      const trimmedFullName = fullName.trim();
      if (!fullNameArray.includes(trimmedFullName)) {
        fullNameArray.push(trimmedFullName);
      }
    });
  }
});

fullNameArray.sort(); // Ordena o array em ordem alfabética

fullNameArray.forEach(fullName => {
  const option = document.createElement('option');
  option.value = fullName;
  option.textContent = fullName;
  selecionarPersonagens.appendChild(option);
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
