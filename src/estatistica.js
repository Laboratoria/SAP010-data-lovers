import { fetchData } from './estatistica.data.js';

// Seleciona o elemento HTML com a classe pokemon_list
const pokemon_List = document.querySelector('.pokemon_list');

// Declara uma variável pokemonList como uma matriz vazia
let pokemonList = [];

fetchData().then(data => {

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
});


function displayPokemonList(pokemonList) { // Função para exibir a lista de pokémons no elemento HTML

  pokemon_List.innerHTML = '';// Limpa o conteúdo do elemento HTML pokemon_List

  // Itera sobre cada pokémon na lista de pokémons
  pokemonList.forEach(pokemon => {
    const listItem = document.createElement('li'); // Cria um novo elemento li
    // Preenche o conteúdo do elemento li com as informações do pokémon
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
        <P>Eu sou: ${calcularTipoPorcentagem(pokemon.types)}</p>
      </div>
    `;

    pokemon_List.appendChild(listItem); // Adiciona o elemento li ao elemento HTML pokemon_List
  });
}

// função para classificar a lista de pokémons
function sortPokemonList() {

  const filteredList = [...pokemonList];// Cria uma cópia da lista de pokémons


  const orderValue = document.querySelector('#options1').value;  // valor selecionado do elemento HTML options1

  // classifica a lista de pokémons com base no valor selecionado
  if (orderValue === 'a-z') {
    filteredList.sort((a, b) => a.name.localeCompare(b.name));
  } else if (orderValue === 'z-a') {
    filteredList.sort((a, b) => b.name.localeCompare(a.name));
  }

  // exibe a lista de pokémons classificada
  displayPokemonList(filteredList);
}

// Função para filtrar a lista de pokémons
function filterPokemonList() {

  let filteredList = [...pokemonList];

  // Obtém o valor selecionado do elemento HTML TipoPokemon
  const typeValue = document.querySelector('#TipoPokemon').value;

  // Filtra a lista de pokémons com base no tipo selecionado
  if (typeValue) {
    filteredList = filteredList.filter(pokemon => pokemon.types.includes(typeValue));
  }

  // Exibe a lista de pokémons filtrada
  displayPokemonList(filteredList);
}

function calcularTipoPorcentagem(types) {
  const typeCounts = {}; //typeCounts objeto vazio para armazenar os dados de cada tipo
  const totalPokemon = types.length; //número total de pokemon na variável / length comp. do array

  types.forEach(type => { //intera sobre cada tipo presente no array "type"
    typeCounts[type] = (typeCounts[type] || 0) + 1;
    // typeCounts, incrementando em 1 o número de ocorrências do tipo de Pokémon atual (type). Se o tipo ainda não existe em typeCounts, é atribuído o valor 0 antes de incrementar.
  });

  let typePercentageHTML = '';

  for (const type in typeCounts) {
    const percentage = (typeCounts[type] / totalPokemon) * 100;
    typePercentageHTML += `${percentage.toFixed()}%:${type}`;
  }

  return typePercentageHTML;

}


document.querySelector('.btn1').addEventListener('click', sortPokemonList);
document.querySelector('.btn2').addEventListener('click', filterPokemonList);