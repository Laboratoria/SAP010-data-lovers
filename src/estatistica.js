//import { displayPokemonList } from './pokeapi';
//import Promise from 'promise-polyfill'; // pollyfill, detectar que o navegador não tem suporte e vai implementar na hora usando funções disponíveis para aquele navegador, e vai fazer com que seja possível usar o recurso com a mesma interface inclusive.

const pokemon_List = document.querySelector('.pokemon_list');
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
    //requisição HTTP para cada URL da lista /retorna uma promessa gerada pelo metodo fetch e pelo json . tudo ok retorna um array de resultados na mesma ordem das promesas originais
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
        imageUrl: pokemon.sprites.other['official-artwork'].front_default // adicionando a URL da imagem do Pokémon
      }
    });

    displayPokemonList(pokemonList);
  })
  //.catch(error => {
  //console.log(error);
  //});

function displayPokemonList(pokemonList) {
  pokemon_List.innerHTML = '';
  pokemonList.forEach(pokemon => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
      <div class="pokemon_info">
        <h3 class="pokemon_name">${pokemon.name}</h3>
        <img src="${pokemon.imageUrl}" alt="${pokemon.name}">
        <p>name: ${pokemon.name}</p>
        <p>Id: ${pokemon.id}</p>
        <p>Weight: ${pokemon.weight}</p>
        <p>HP: ${pokemon.hp}</p>
        <p>Attack: ${pokemon.attack}</p>
        <p>Defense: ${pokemon.defense}</p>
        <p>Speed: ${pokemon.speed}</p>
        <p>Types: ${pokemon.types.join(', ')}</p>
        <p>Stats Total: ${pokemon.statsTotal}</p> <!-- Adiciona a estatística total ao HTML -->
      </div>
    `;
    pokemon_List.appendChild(listItem);
  });
}


const ordenarPorElement = document.querySelector('#options1');
const tipoPokemonElement = document.querySelector('#TipoPokemon');

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');



btn1.addEventListener('click', () => { //evento
  const filteredList = [...pokemonList]; // armazenar copia da lista no filteredList usando o operador spread
  const orderValue = ordenarPorElement.value; //pega o valor selecionado do ordenarPorElement e guarda o valor na variavel orderValue

  if (orderValue === 'a-z') { // se for selecionado A-Z ele executa o if se for de de Z-A ele executa o codigo else

    filteredList.sort((a, b) => a.name.localeCompare(b.name));
    //nome da lista + sort() metodo que classifica elementos e array + (a,B) elemento de comparação + a.name  primeiro elemento a ser comparado + localeCompare() método da string que compara duas strings localizadas e retorna um valor numérico com base na ordem de classificação.
  } else if (orderValue === 'z-a') {
    filteredList.sort((a, b) => b.name.localeCompare(a.name));
  }

  displayPokemonList(filteredList);

});


btn2.addEventListener('click', () => {
  let filteredList = [...pokemonList];

  const typeValue = tipoPokemonElement.value;

  if (typeValue) {
    filteredList = filteredList.filter(pokemon => pokemon.types.includes(typeValue));
  }

  displayPokemonList(filteredList);

});