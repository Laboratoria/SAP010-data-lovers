import got from '../data/got/got.js';
import { ordenarNomes, filtrarFamilia, filtrarPersonagensPorFamilia, filtrarPersonagem } from '../js/data.js';

const listaPersonagens = got.got;
const ordenacao = document.getElementById("ordenacao");
const selecionarFamilia = document.getElementById("selecionarFamilia");
const selecionarPersonagens = document.getElementById("selecionarPersonagens");

ordenacao.addEventListener("change", onChangeOrdenacao);
selecionarFamilia.addEventListener("change", onChangeSelecionarFamilia);
selecionarPersonagens.addEventListener("change", onChangeSelecionarPersonagens);

onChangeOrdenacao();
onChangeSelecionarFamilia();
onChangeSelecionarPersonagens();

function onChangeOrdenacao() {
  const familiaSelecionada = selecionarFamilia.value;
  const personagensFiltradosPorFamilia = filtrarPersonagensPorFamilia(listaPersonagens, familiaSelecionada);
  const listaOrdenada = ordenarNomes(personagensFiltradosPorFamilia, ordenacao.value);
  exibirPersonagens(listaOrdenada);
}

function onChangeSelecionarFamilia() {
  const familiaSelecionada = selecionarFamilia.value;
  const listaPersonagensFiltrada = filtrarFamilia(listaPersonagens, familiaSelecionada);
  exibirPersonagens(listaPersonagensFiltrada);

  const personagensFiltradosPorFamilia = filtrarPersonagensPorFamilia(listaPersonagens, familiaSelecionada);
  atualizarListaPersonagens(personagensFiltradosPorFamilia);
}

function onChangeSelecionarPersonagens() {
  const personagemSelecionado = selecionarPersonagens.value;
  const personagem = filtrarPersonagem(listaPersonagens, personagemSelecionado);
  exibirPersonagens(personagem);
}

function exibirPersonagens(personagens) {
  const cardContainer = document.querySelector("#exibirPersonagens");

  while (cardContainer.firstChild) {
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
    imageUrl.src = personagem.imageUrl;
    born.textContent = personagem.born;

    cardDiv.appendChild(imageUrl);
    cardDiv.appendChild(fullName);

    return cardDiv;
  });

  cardsGot.forEach(card => {
    cardContainer.appendChild(card);
  });
}

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

familyArray.sort();

familyArray.forEach(family => {
  const option = document.createElement('option');
  option.value = family;
  option.textContent = family;
  selecionarFamilia.appendChild(option);
});

function atualizarListaPersonagens(personagens) {
  while (selecionarPersonagens.firstChild) {
    selecionarPersonagens.removeChild(selecionarPersonagens.firstChild);
  }

  const optionTodosPersonagens = document.createElement('option');
  optionTodosPersonagens.value = "Todos Personagens";
  optionTodosPersonagens.textContent = "Todos Personagens";
  selecionarPersonagens.appendChild(optionTodosPersonagens);

  personagens.forEach(personagem => {
    const option = document.createElement('option');
    option.value = personagem.fullName;
    option.textContent = personagem.fullName;
    selecionarPersonagens.appendChild(option);
  });
}

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

fullNameArray.sort();

fullNameArray.forEach(fullName => {
  const option = document.createElement('option');
  option.value = fullName;
  option.textContent = fullName;
  selecionarPersonagens.appendChild(option);
});

const ordenarAZ = document.getElementById('ordenacao');

const optionAZ = document.createElement('option');
optionAZ.value = 'az';
optionAZ.textContent = 'A-Z';
ordenarAZ.appendChild(optionAZ);

const optionZA = document.createElement('option');
optionZA.value = 'za';
optionZA.textContent = 'Z-A';
ordenarAZ.appendChild(optionZA);
