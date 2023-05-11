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

            <img class="poster-img" src="${item.img}" alt="${item.name}">
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
