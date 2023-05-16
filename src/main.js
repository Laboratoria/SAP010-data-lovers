import {
  filterPokemonsByType,
  filterPokemonByStr,
  pokemonsOrderAZ,
  pokemonsOrderZA,
  pokemonsOrderByAttack,
  pokemonsOrderByDefense
} from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const textPokeNum = document.getElementById("text-poke-num")
const textPokeGenerationName = document.getElementById("text-poke-generation-name")
const textPokeName = document.getElementById("text-poke-name")
const textPokeRarity = document.getElementById("text-poke-rarity")
const imagePoke = document.getElementById("image-poke")
const textPokeHeight = document.getElementById("text-poke-height")
const textPokeWeight = document.getElementById("text-poke-weight")
const textPokeCandy = document.getElementById("text-poke-candy")
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
