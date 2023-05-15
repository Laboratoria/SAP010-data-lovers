import data from "./data/breakingbad/breakingbad.js";

import dataFunctions from "./data.js";

const characters = data.breaking_bad; //aqui onde puxa o banco de dados do breakingbad.js para fornecer os personagens.
const cardContainer = document.querySelector("#card-container"); //Aqui cria os cards.
const selectStatus = document.querySelector("#select-status"); //Seletor de busca do status.
const selectCategory = document.querySelector("#select-category"); //Seletor de busca por séries em que o personagem participou.
const searchForName = document.querySelector("#btn-search"); //cria busca por nome.
const reset = document.querySelector("#reset"); //cria o argumento de reset.
const percentageElement = document.querySelector("#percentage");
const selectOrder = document.querySelector("#select-order");

function displayCards(characters) {
  //declara a função personagens, criando os cards
  const arrayResults = characters.map((item) => {
    //aqui esta a função MAP
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
    return template; //a constante acima cria todo o card e suas caracteristicas, puxando os dados da base de dados
  });
  return arrayResults.join("");
}
cardContainer.innerHTML = displayCards(characters);

selectStatus.addEventListener("change", (event) => {
  const value = event.target.value;
  const filteredList = dataFunctions.filter(characters, value, "status"); //o "filter" está puxando da função filter do data.js
  const cards = displayCards(filteredList);
  cardContainer.innerHTML = cards;

  const percentage = dataFunctions.calculatePercentage(
    characters.length,
    filteredList.length
  );
  percentageElement.innerHTML =
    "This category represents " + percentage + "% of the characters";
});

selectCategory.addEventListener("change", (event) => {
  const value = event.target.value;
  const filteredList = dataFunctions.filter(characters, value, "category"); //o "filter" está puxando da função filter do data.js
  const cards = displayCards(filteredList);
  cardContainer.innerHTML = cards;

  const percentage = dataFunctions.calculatePercentage(
    characters.length,
    filteredList.length
  );
  percentageElement.innerHTML =
    "This category represents " + percentage + "% of the characters";
});

selectOrder.addEventListener("change", (event) => {
  const value = event.target.value;
  const orderedList = dataFunctions.order(characters, value);
  const cards = displayCards(orderedList);
  cardContainer.innerHTML = cards;
  percentageElement.innerHTML = "";
});

reset.addEventListener("click", (event) => {
  location.reload(event);
});

searchForName.addEventListener("keyup", function (event) {
  const value = event.target.value;
  const filteredList = dataFunctions.searchName(characters, value);
  const cards = displayCards(filteredList);
  cardContainer.innerHTML = cards;
});
