import data from "./data/breakingbad/breakingbad.js";

import dataFunctions from "./data.js";

const characters = data.breaking_bad; //aqui onde puxa o banco de dados do breakingbad.js para fornecer os personagens
const cardContainer = document.querySelector("#card-container"); //Aqui cria os cards
const selectStatus = document.querySelector("#select-status"); //Seletor de busca do status
const searchForName = document.querySelector("#btn-search"); //cria busca por nome
const reset = document.querySelector("#reset"); //cria o argumento de reset

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
