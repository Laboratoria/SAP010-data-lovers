// import data from './data/lol/lol.js';
import {filtrarPersonagens} from "./data.js"./data/rickandmorty/rickandmorty.js';

const getCharacters = RICKANDMORTY.results;
const reload = document.getElementById("refresh");
const statusMenu = document.getElementById("filtro-status");
const speciesMenu = document.getElementById("filtro-species");
const ordenarAZ = document.getElementById("buttonAZ");
const ordenarZA = document.getElementById("buttonZA");
const calc = document.getElementById("boxCalculo");

reload.addEventListener("click", refreshPage);

statusMenu.addEventListener("change", () => {
  const retorno = window.data.getStatus(getCharacters, statusMenu.value);
  show(retorno);
  calc.innerHTML= percentStatus(getCharacters, retorno) + "%";
});

speciesMenu.addEventListener("change", () => {
  const retorno = window.data.getSpecies(getCharacters, speciesMenu.value);
  show(retorno);
  calc.innerHTML = percentSpecies(getCharacters, retorno) + "%";
});

ordenarAZ.addEventListener("click",
  () => show(window.data.orderAZ(getCharacters)));

ordenarZA.addEventListener("click",
  () => show(window.data.orderZA(getCharacters)));

window.onload = () => {
  loadStatusMenu(getCharacters);
  loadStatusSpecies(getCharacters);
  show(getCharacters);
};

function refreshPage() {
  loadStatusMenu(getCharacters);
  loadStatusSpecies(getCharacters);
  show(getCharacters);

}

function loadStatusMenu(arrayPersonagens) {
  const charactersStatus = [];
  arrayPersonagens.map(characters => {
    if (!charactersStatus.includes(characters.status)) {
      charactersStatus.push(characters.status);
    } else {
      return false;
    }
    return charactersStatus;
  });

  statusMenu.innerHTML = "";
  statusMenu.innerHTML = "<option value= \"none\"> Choose Status   </option>";
  statusMenu.innerHTML += charactersStatus.map(status =>
    `<option value= "${status}"> ${status}</option>`).join("");

}

function loadStatusSpecies(arrayPersonagens) {
  const charactersSpecies = [];
  arrayPersonagens.map(characters => {
    if (!charactersSpecies.includes(characters.species)) {
      charactersSpecies.push(characters.species);
    } else {
      return false;
    }
    return charactersSpecies;
  });

  speciesMenu.innerHTML = "";
  speciesMenu.innerHTML = "<option value= \"none\"> Choose Specie </option>";
  speciesMenu.innerHTML += charactersSpecies.map(species =>
    `<option value= "${species}"> ${species}</option>`).join("");

}

function show (array) {
  const result = document.getElementById("resultado");
  calc.innerHTML = "When you choose the filter, the percentual of the characters will appear!";
  result.innerHTML = "";
  result.innerHTML += `${array.map(characters => {
    return `
        <div class="card1">
            <img src="${characters.image}"/>
            <h4>${characters.name}</h4>
            <p>Status: ${characters.status}</p>
            <p>Species: ${characters.species}</p>

        </div>
        `;
  }).join("")}`;
}

