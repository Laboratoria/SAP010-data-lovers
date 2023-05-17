import { sortByName, sortByNum, filterByType } from "./data.js";
import data from "./data/pokemon/pokemon.js";


const pkmnDataList = data.pokemon;
const pkmCards = document.getElementById("pokemonList");

pkmnDataList.forEach((pokemon) => { //forEach: estrutura de repetição, usada para manipular os elementos do array pokemon

  const card = document.createElement("div"); // createElement foi usado para criar uma div, na qual teremos vários elementos
  let typePkm = ""; // a variável vazia typePkm é criada, posteriormente armazenará os valores do tipo
  pokemon.type.forEach((type) => { // dentro da matriz pokemon, estamos procurando e atribuindo a um parágrafo os diferentes tipos
    typePkm += `<p class="type-style ${type}">${type}</p>`;
  }); /* innerHTML se uso para definir o novo conteúdo dentro do HTML, ou seja, que tipo, nome, imagem e número 
       foram adicionados ao HTML via interpolação de string*/
  card.innerHTML = ` 
    
  <div class="pokemon">
  <p class="pokemon-numero">${pokemon.num}</p>
    <div class="pokemon-imagem">
    <img src="${pokemon.img}" alt="Foto pokemon"></img>
  </div>
  <div class="name-contenedor">
        <h2 class="pokemon-name">${pokemon.name}</h2>
  </div>
  <div class="pokemon-type">
  <div class="typePokemon">${typePkm}</div>
</div>
      `;
  pkmCards.appendChild(card); /* O createElement não funciona sozinho, por isso usamos appendChild() para adicionar esses novos valores que estamos criando*/
})
//console.log (pkmCards)

const filterType = document.getElementById("typeFilter");
let dataFiltered = []

if (filterType) {
  filterType.addEventListener("change", function () {
    dataFiltered = pkmnDataList.filter((pokemon) => {    
      return pokemon.type[0] === filterType.value.toLowerCase()
    })
  
    console.log(dataFiltered)
  });
}

const searchByNameInput = document.getElementById("searchByName");
let resultSearch = []
if (searchByNameInput) {
  searchByNameInput.addEventListener("keyup", function(){
    const name = searchByNameInput.value.toLowerCase();
    console.log(name)
    resultSearch = pkmnDataList.find((pokemon) => {
      
      return pokemon.name.toLowerCase() === name
      
      return pokemon.name.toLowerCase().includes(name)
    })
    console.log(resultSearch)  
  });  
}
const clearButton = document.getElementById("cleanButton");
  if (clearButton) {
    function cleanInput() {
      document.getElementById("searchByName").value = '';
    }
    clearButton.addEventListener("click", cleanInput);
  }
  
  
  const alphabeticOrdenation = document.getElementById("sortName");
  alphabeticOrdenation.addEventListener("change", function () {
    let sortedPokemons = [];
    if (alphabeticOrdenation.value == "Name") {
      sortedPokemons = sortByName(pkmnDataList, "A-Z");
    } else {
      sortedPokemons = sortByName(pkmnDataList, "Z-A");
    }
    pokemonList(sortedPokemons);
  });
  
  const numberOrdenation = document.getElementById("sortNum");
  numberOrdenation.addEventListener("change", function () {
    let sortedPokemons = [];
    if (numberOrdenation.value == "0-9") {
      sortedPokemons = sortByNum(pkmnDataList, "0-9");
    } else {
      sortedPokemons = sortByNum(pkmnDataList, "9-0");
    }
    pokemonList(sortedPokemons);
  });
  
