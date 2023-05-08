// import data from './data/lol/lol.js';
import {filtrarPersonagens} from "./data.js"./data/rickandmorty/rickandmorty.js";

const data = RICKANDMORTY.results;
const genderFilter = document.getElementById("filter-gender");
const statusFilter = document.getElementById("filter-status");
const statistic = document.getElementById("calc-estatic");

genderFilter.addEventListener("change", () => {
  functionGender();
  statistic.innerHTML = `There are ${app.percCalculation(app.filterData(data, genderFilter.value))} % ${genderFilter.value} of the characters`;
});

function functionGender() {
  return selectionCard(app.filterData(data, genderFilter.value));
};

window.onload = () => {
  menuGender(data);
  selectionCard(data);
  menuStatus(data);
};

function menuGender(data) {
  const rickandmortygender = [];
  data.map(item => {
    if (!rickandmortygender.includes(item.gender)) {
      rickandmortygender.push(item.gender);
    } else {
      return false;
    }
  });

  genderFilter.innerHTML = "";
  genderFilter.innerHTML = "<option value =\"none\">Filter Gender</option>";
  genderFilter.innerHTML += rickandmortygender.map(item =>
    `<option value="${item}">${item}</option>`).join("");

}


function selectionCard(arr) {
  const mostrarCardsDiv = document.getElementById("main");
  let layout = "";

  arr.forEach(data => {
    layout += `
        <div class ="card">
          <img  class ="image" src="${data.image}"/>
          <p class ="name"> <span>Name</span> &nbsp ${data.name}</p><hr>
          <p class ="gender"><span>Gender</span> &emsp;${data.gender}</p><hr>
          <p class ="status"><span>Status</span> &emsp;${data.status}</p><hr>
        </div> `;
  });
  mostrarCardsDiv.innerHTML = layout;
}

statusFilter.addEventListener("change", () => {
  functionStatus();
  statistic.innerHTML = `There are ${app.percCalculation(app.filterStatus(data, statusFilter.value))} % ${statusFilter.value} of the characters`;
});

function functionStatus() {
  selectionCard(app.filterStatus(data, statusFilter.value));
}

function menuStatus(data) {
  const rickandmortystatus = [];
  data.map(item => {
    if (!rickandmortystatus.includes(item.status)) {
      rickandmortystatus.push(item.status);
    } else {
      return false;
    }
  });

  statusFilter.innerHTML = "";
  statusFilter.innerHTML = "<option value =\"none\">Filter Status</option>";
  statusFilter.innerHTML += rickandmortystatus.map(item =>
    `<option value="${item}">${item}</option>`).join("");
};

const sortCharacters = document.getElementById("sort-characters");
sortCharacters.addEventListener("change", (sortCharacters) => {
  const sortPersonas = app.sortNames(data, sortCharacters.target.value);
  selectionCard(sortPersonas),
  clearMessage();
});

const clearFilters = document.getElementById("btn-clear");
clearFilters.addEventListener("click", () => {
  return selectionCard(data), clearMessage();
});

const search = document.getElementById("btn-search");
let textName = document.getElementById("search-character");
search.addEventListener("click", () => {
  const searchCharacter = app.filterName(data, textName.value.toUpperCase());
  if(searchCharacter == ""){
    return statistic.innerHTML = "Character not found.",
    event.preventDefault(),
    clearCards();
  } else {
    selectionCard(searchCharacter),
    event.preventDefault(),
    clearMessage();
  }
});

function clearCards() {
  const node = document.getElementById("main");
  while (node.hasChildNodes()) {
      node.removeChild(node.lastChild);
  }
};

function clearMessage() {
  const message = document.getElementById("calc-estatic");
  while (message.hasChildNodes()) {
    message.removeChild(message.lastChild);
  }
};
