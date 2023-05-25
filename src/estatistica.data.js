//import Promise from 'promise-polyfill'; // pollyfill, detectar que o navegador não tem suporte e vai implementar na hora usando funções disponíveis para aquele navegador, e vai fazer com que seja possível usar o recurso com a mesma interface inclusive.


export function fetchData() {

  return fetch('https://pokeapi.co/api/v2/pokemon?limit=500&offset=0')
    .then(response => {
      if (!response.ok) {
        throw new Error('Não foi possível obter a lista de Pokémon');
      }
      return response.json();
    })
    .then(data => {
      const pokemonList = data.results;
      return Promise.all(pokemonList.map(pokemon => fetch(pokemon.url).then(res => res.json())));
    });
}
