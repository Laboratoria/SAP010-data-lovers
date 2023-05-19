import {
  //filterPokemonsByType,
  filterPokemonByStr,
  pokemonsOrderAZ,
  pokemonsOrderZA,
  pokemonsOrderByAttack,
  pokemonsOrderByDefense
} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

let activePokemon = '001';
const textPokeNum = document.getElementById("text-poke-num")
const textPokeGenerationName = document.getElementById("text-poke-generation-name")
const textPokeName = document.getElementById("text-poke-name")
const textPokeRarity = document.getElementById("text-poke-rarity")
const imagePoke = document.getElementById("image-poke")
const textPokeHeight = document.getElementById("text-poke-height")
const textPokeWeight = document.getElementById("text-poke-weight")
const textPokeSpawnChance = document.getElementById("text-poke-spawn-chance")
const textPokeAbout = document.getElementById("text-poke-about")

const inputPokeName = document.getElementById("input-poke-name")
const selectPokeFilter = document.getElementById("select-poke-filter")

let selectedPokemon = data.pokemon[0]
changeUI(selectedPokemon)

//console.log(pokemonsOrderAZ(data))
//console.log(pokemonsOrderZA(data))
//console.log (pokemonsOrderByAttack(data))
//console.log (pokemonsOrderByDefense(data))

inputPokeName.addEventListener('input', event => {
  const pokemonsFiltered = filterPokemonByStr(data, event.target.value)

  console.log(pokemonsFiltered)

  // TODO: temporario somente para testes
  // depois mudar para trocar a UI qndo clicar em um pokemon da lista
  if (pokemonsFiltered.length === 1) {
    changeUI(pokemonsFiltered[0])
  }
})

selectPokeFilter.addEventListener('change', event => {
  const select = event.target
  let pokemonsOrdened

  if (select.value === "az") {
    pokemonsOrdened = pokemonsOrderAZ(data)
    selectedPokemon = pokemonsOrdened[0]
  } else if (select.value === "za") {
    pokemonsOrdened = pokemonsOrderZA(data)
    selectedPokemon = pokemonsOrdened[0]
  } else if (select.value === "by-attack") {
    pokemonsOrdened = pokemonsOrderByAttack(data)
    selectedPokemon = pokemonsOrdened[0]
  } else if (select.value === "by-defense") {
    pokemonsOrdened = pokemonsOrderByDefense(data)
    selectedPokemon = pokemonsOrdened[0]
  }

  changeUI(selectedPokemon)
})

// Função criada para mudar os elementos da tela.
function changeUI(pokemon) {
  textPokeNum.innerHTML = "No. " + pokemon.num
  textPokeGenerationName.innerHTML = firstToUpperCase(pokemon.generation.name)
  textPokeRarity.innerHTML = firstToUpperCase(pokemon['pokemon-rarity'])
  imagePoke.src = pokemon.img
  imagePoke.alt = pokemon.name
  textPokeHeight.innerHTML = pokemon.size.height
  textPokeWeight.innerHTML = pokemon.size.weight
  textPokeSpawnChance.innerHTML = pokemon['spawn-chance']
  textPokeAbout.innerHTML = pokemon.about
  textPokeName.innerHTML = firstToUpperCase(pokemon.name)

  //adicionado estas funcoes para dentro do changeUI para quando fazer a pesquisa também mudar a cor da pagina
  const type = pokemon.type[0];
  const container = document.querySelector('#container');
  container.className = '';
  container.classList.add('container')
  container.classList.add(type)
}

function firstToUpperCase(str) {
  if (str.length === 0) {
    return ""
  }

  return str.charAt(0).toUpperCase() + str.slice(1)
}
  
// criou uma funcao chamada cardClick que é executada quando clica no card, ela recebe como parametro o elemnento do card 
const cardClick = (element) => {
  const value = element.dataset.value; //nesta linha eu pego o numero do pokemon clicado do elemento
  const pokemon = data.pokemon.find((item) => item.num === value); // nesta linha eu busco nos dados o pokemon que tenha esse numero
  changeUI(pokemon) //nesta linha eu troco as informacoes da tela

  element.classList.add('active'); // adiciona a classe active no elemento clicado
  const activeElement = document.querySelector('#pokemon-'+activePokemon) //pega qual o elemento ativo anterior 
  activeElement.className = 'list-item' //remove todas as classes do elemento menos o item list
  activePokemon = pokemon.num //troca o pokemon ativo para o elemento clicado
}

window.cardClick = cardClick;

const renderItem = (props, index) => {
  const {
    num,
    name,
    img,
    type: types,
  } = props;

  return `
  <div class="list-item ${index===0 ? 'active' : ''}" onclick="cardClick(this)" data-value="${num}" id="pokemon-${num}">
      <div class="item-picture">  
        <img src="${img}" alt="${name}">
      </div>
      <div class="item-info">
        <div class="item-title">
          <p>No. ${num} - ${name}</p>
        </div>
        <div class="item-types">
          ${types.map((type) => (
            `<div class="item-type ${type}">
              <p>${type}</p>
            </div>` 
          )).join('')} 
        </div>
      </div>
  </div>
  `;
}

const initialList = () => {
  const elements = data.pokemon.map(renderItem).join('\n');
  const list = document.querySelector('#list-items');
  list.innerHTML = elements;
};

window.onload = initialList;

/*const searchButton = document.getElementById("searchButton")
searchButton.addEventListener("click", function() {
  const pokeName = inputPokeName.value

  const pokemon = filterPokemonByStr(data, pokeName)
  console.log(pokemon)
})*/
