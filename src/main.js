import { filterPokemonsByType, filterPokemonByStr } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const inputPokeName = document.getElementById("pokemonname")
const textPokeNum = document.getElementById("text-poke-num")
const textPokeGenerationName = document.getElementById("text-poke-generation-name")
const textPokeName = document.getElementById("text-poke-name")
const textPokeRarity = document.getElementById("text-poke-rarity")
const imagePoke = document.getElementById("image-poke")
const textPokeHeight = document.getElementById("text-poke-height")
const textPokeWeight = document.getElementById("text-poke-weight")
const textPokeCandy = document.getElementById("text-poke-candy")
const textPokeAbout = document.getElementById("text-poke-about")

let selectedPokemon = data.pokemon[0]
changeUI(selectedPokemon)

inputPokeName.addEventListener('input', event => {
  const pokemonsFiltered = filterPokemonByStr(data, event.target.value)

  console.log(pokemonsFiltered)

  // TODO: temporario somente para testes
  // depois mudar para trocar a UI qndo clicar em um pokemon da lista
  if (pokemonsFiltered.length === 1) {
    changeUI(pokemonsFiltered[0])
  }
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
  textPokeCandy.innerHTML = "-"
  if (pokemon.evolution['next-evolution']
      && pokemon.evolution['next-evolution'].length > 0){
    textPokeCandy.innerHTML = pokemon.evolution['next-evolution'][0]['candy-cost']
  }
  textPokeAbout.innerHTML = pokemon.about
  textPokeName.innerHTML = firstToUpperCase(pokemon.name)
}

function firstToUpperCase(str) {
  if (str.length === 0) {
    return ""
  }

  return str.charAt(0).toUpperCase() + str.slice(1)
}

/*const searchButton = document.getElementById("searchButton")
searchButton.addEventListener("click", function() {
  const pokeName = inputPokeName.value

  const pokemon = filterPokemonByStr(data, pokeName)
  console.log(pokemon)
})*/
