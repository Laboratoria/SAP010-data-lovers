import {
  //filterPokemonsByType,
  filterPokemonByStr,
  pokemonsOrderByNum,
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

inputPokeName.addEventListener('input', event => {
  const pokemonsFiltered = filterPokemonByStr(data, event.target.value)

  loadPokemonList(pokemonsFiltered)
})

selectPokeFilter.addEventListener('change', event => {
  const select = event.target

  if (select.value === "num") {
    loadPokemonList(pokemonsOrderByNum(data))
  } else if (select.value === "asc") {
    loadPokemonList(pokemonsOrderAZ(data))
  } else if (select.value === "desc") {
    loadPokemonList(pokemonsOrderZA(data))
  } else if (select.value === "attack") {
    loadPokemonList(pokemonsOrderByAttack(data))
  } else if (select.value === "defense") {
    loadPokemonList(pokemonsOrderByDefense(data))
  }
})

// Função criada para mudar os elementos da tela.
function loadActivePokemonInfo(pokemon) {
  textPokeNum.innerHTML = "No. " + pokemon.num
  textPokeGenerationName.innerHTML = firstToUpperCase(pokemon.generation.name)
  textPokeRarity.innerHTML = firstToUpperCase(pokemon['pokemon-rarity'])
  imagePoke.src = pokemon.img
  imagePoke.alt = pokemon.name
  textPokeHeight.innerHTML = pokemon.size.height
  textPokeWeight.innerHTML = pokemon.size.weight
  textPokeSpawnChance.innerHTML = pokemon['spawn-chance'] || 0 //Adicionado || 0 para caso haja retorno null, retornar 0
  textPokeAbout.innerHTML = pokemon.about
  textPokeName.innerHTML = firstToUpperCase(pokemon.name)

  //adicionado estas funcoes para dentro do loadActivePokemonInfo para quando fazer a pesquisa também mudar a cor da pagina
  const type = pokemon.type[0];
  const container = document.querySelector('#container');
  container.className = '';
  container.classList.add('container')
  container.classList.add(type)

  activePokemon = pokemon.num
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
  const pokemon = filterPokemonByStr(data, value)[0] // nesta linha eu busco nos dados o pokemon que tenha esse numero

  element.classList.add('active'); // adiciona a classe active no elemento clicado
  const activeElement = document.querySelector('#pokemon-'+activePokemon) //pega qual o elemento ativo anterior 
  activeElement.className = 'list-item' //remove todas as classes do elemento menos o item list

  loadActivePokemonInfo(pokemon) //nesta linha eu troco as informacoes da tela

  const overlay = document.querySelector('.overlay')
  overlay.classList.add('active')

  const info = document.querySelector('.info')
  info.classList.add('active')
}

const closeButtom = document.querySelector('.close-buttom')
closeButtom.onclick = function() {

  const overlay = document.querySelector('.overlay')
  overlay.classList.remove('active')

  const info = document.querySelector('.info')
  info.classList.remove('active')
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

// Função que mapeia um array de pokemons e cria a lista e um item da lista para cada pokemon
const loadPokemonList = (pokemons) => {
  const elements = pokemons.map(renderItem).join('\n');
  const list = document.querySelector('#list-items');
  list.innerHTML = elements;
  loadActivePokemonInfo(pokemons[0])
};

// Quando a tela é carregada, chama a função loadPokemonList
window.onload = loadPokemonList(data.pokemon);
