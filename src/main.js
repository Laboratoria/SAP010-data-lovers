import data from "./data/breakingbad/breakingbad.js";

import dataFunctions from "./data.js";

const characters = data.breaking_bad;
const cardContainer = document.querySelector("#card-container");
const selectStatus = document.querySelector("#select-status");
const percentage = document.querySelector("#percentage");
const searchForName = document.querySelector("#btn-search");
const reset = document.querySelector("#reset");

function displayCards(characters) {
  const arrayResults = characters.map((item) => {
    const template = `
        <div class="card">

            <img class="img" src="${item.image}" alt="${item.name}">

            <ul class="card-text" style="list-style: none">                       
            <li>Name: ${item.name}</li>
            <li>NickName: ${item.nickname}</li>
            <li>Status: ${item.status}</li>
            <li>Occupation: ${item.occupation}</li>
            <li>Birthday: ${item.birthday}</li>
            <li>Portrayed: ${item.portrayed}</li>
            <li>Category: ${item.category}</li>
           
            </ul>                

        </div>
        `;
    return template;
  });
  return arrayResults.join("");
}
cardContainer.innerHTML = displayCards(characters);

selectStatus.addEventListener("change", (event) => {
  const value = event.target.value;
  const listaFiltrada = dataFunctions.filtrar(characters, value, "status");
  const cards = displayCards(listaFiltrada);
  cardContainer.innerHTML = cards;

  const porcentagem = dataFunctions.calcularPorcentagem(
    characters.length,
    listaFiltrada.length
  );
  percentage.innerHTML =
    "Essa categoria contém " + porcentagem + "% dos personagens totais";
});

selectOrder.addEventListener("change", (event) => {
  const value = event.target.value;
  const listaOrdenada = dataFunctions.ordenar(characters, value);
  const cards = displayCards(listaOrdenada);
  cardContainer.innerHTML = cards;
  percentage.innerHTML = "";
});

reset.addEventListener("click", (event) => {
  location.reload(event);
});

searchForName.addEventListener("keyup", function (event) {
  const value = event.target.value;
  const listaFiltrada = dataFunctions.buscarPorNome(characters, value);
  const cards = displayCards(listaFiltrada);
  cardContainer.innerHTML = cards;
});
