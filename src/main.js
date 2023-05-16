import got from './data/got/got.js'; // importando o módulo 'got' do arquivo got.jsc
import {ordenarNomes} from './data.js'; // importando o módulo 'got' do arquivo got.js


document.getElementById("buscar").addEventListener("click", onClickEnviar); // add o evento de clique ao botão vinculando a função
function onClickEnviar() {
  cardContainer.innerHTML = ""; // Limpa o cardContainer antes de adicionar os novos cards

  cardsGot.forEach(card => {
    cardContainer.appendChild(card);
  });
}


// selecionando o elemento com id HTML 'exibirCards' para exibir os cards ==>
const cardContainer = document.querySelector("#exibirCards"); 

const cardsGot = got.got.map(personagens => {
  const cardDiv = document.createElement('div');
  const id = document.createElement('h2');
  const firstName = document.createElement('h2');
  const lastName = document.createElement('h2');
  const fullName = document.createElement('h2');
  const title = document.createElement('h2');
  const family = document.createElement('h2');
  const imageUrl = document.createElement('img');
  const born = document.createElement('h2');
  
  id.textContent = personagens.id;
  firstName.textContent = personagens.firstName;
  lastName.textContent = personagens.lastName;
  fullName.textContent = personagens.fullName;
  title.textContent = personagens.title;
  family.textContent = personagens.family;
  imageUrl.src = personagens.imageUrl; // acessando imagens
  born.textContent = personagens.born;


  //Retorna o card com nome embaixo ==>
  cardDiv.appendChild(imageUrl);
  cardDiv.appendChild(fullName);
  
  return cardDiv;
});


cardsGot.forEach(card => {
  cardContainer.appendChild(card);

});

// Cria e exibe em ordem alfabetica as familias no 'select' ==>
const selecionarFamilia = document.getElementById('selecionarFamilia');
const familySet = new Set();

got.got.forEach(personagem => {
  if (Array.isArray(personagem.family)) {
    personagem.family.forEach(family => {
      familySet.add(family);
    });
  } else if (typeof personagem.family === 'string') {
    const families = personagem.family.split(',');
    families.forEach(family => {
      familySet.add(family.trim());
    });
  }
});

const familyArray = Array.from(familySet);
familyArray.sort(); // Ordena o array em ordem alfabética

familyArray.forEach(family => {
  const option = document.createElement('option');
  option.value = family;
  option.textContent = family;
  selecionarFamilia.appendChild(option);
});

// Adiciona evento de digitação no input para filtrar as opções
const inputFamilia = document.getElementById('selecionarFamilia');
inputFamilia.addEventListener('input', function(event) {
  const letraDigitada = event.target.value.toLowerCase();
  const opcoes = selecionarFamilia.options;

  for (let i = 0; i < opcoes.length; i++) {
    const familia = opcoes[i].textContent.toLowerCase();
    if (familia.startsWith(letraDigitada)) {
      opcoes[i].style.display = 'block';
    } else {
      opcoes[i].style.display = 'none';
    }
  }
});

// Cria ordenacao A-Z/Z-A no 'select' ==>
const ordenarAZ = document.getElementById('ordenar');

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






console.log(ordenarNomes) //TESTANDO export data.js 



/*  const informacoesPersonagens = data(ordenar);
  const familiaPersonagem = sortBy(ordenar);
  const ordenarAZ = sortOrder(ordenar);
*/