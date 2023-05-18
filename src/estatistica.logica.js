//lógica principal- 

import { displayPokemonList } from './estatistica.data.js';
import { initializeEventListeners } from './estatistica.eventos.js';
import Promise from 'promise-polyfill';

let pokemonList = [];

fetch('https://pokeapi.co/api/v2/pokemon?limit=500&offset=0')
  .then(response => {
    if (!response.ok) {
      throw new Error('Não foi possível obter a lista de Pokémon');
    }
    return response.json();
  })
  
  .then(data => {
    pokemonList = data.results;
    return Promise.all(pokemonList.map(pokemon => fetch(pokemon.url).then(res => res.json())));
  })
  .then(data => {
    pokemonList = data.map(pokemon => {
      return {
        name: pokemon.name,
        id: pokemon.id,
        height: pokemon.height,
        weight: pokemon.weight,
        hp: pokemon.stats[0].base_stat,
        attack: pokemon.stats[1].base_stat,
        defense: pokemon.stats[2].base_stat,
        speed: pokemon.stats[5].base_stat,
        types: pokemon.types.map(type => type.type.name),
        imageUrl: pokemon.sprites.other['official-artwork'].front_default
      };
    });

    displayPokemonList(pokemonList);
    initializeEventListeners(pokemonList);
  })
  //.catch(error => {
  //  console.log(error);
// });  //

