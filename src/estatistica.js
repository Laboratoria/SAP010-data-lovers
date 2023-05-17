let pokemonList = []; // Armazenar a lista de Pokémon

fetch('"https://pokeapi.co/api/v2/characteristic?offset=20&limit=10"') // obter lista da API   .then(response => response.json())
  .then(data => {
    pokemonList = data.results;    
    //console.log(pokemonList);
  })
 
// Selecionar os elementos HTML
const options1 = document.querySelector('#options1');
const options2 = document.querySelector('#options2');
const submitButton = document.querySelector('#submit');
const pokemonListContainer = document.querySelector('#pokemonListContainer');


submitButton.addEventListener('click', () => { // evento do botão pesquisar


  const orderValue = options1.value; // valor selecionado para o filtro de ordenação

  const typeValue = options2.value; // valor selecionado para o filtro de tipo

  let filteredList = pokemonList; // filtra a lista de Pokémon com base no valor do filtro de tipo
  if (typeValue !== 'chosenType') {
    filteredList = filteredList.filter(pokemon => {
      return pokemon.types.some(type => type.type.name === typeValue);
    });
  }

  // ordena a lista de Pokémon com base no valor do filtro de ordenação
  if (orderValue === 'a-z') {
    filteredList.sort((a, b) => a.name.localeCompare(b.name));
  } else if (orderValue === 'z-a') {
    filteredList.sort((a, b) => b.name.localeCompare(a.name));
  }

  // exibe os Pokémon filtrados e ordenados na tela
  filteredList.forEach(pokemon => {
    const listItem = document.createElement('li');
    listItem.textContent = pokemon.name;
    pokemonListContainer.appendChild(listItem);
  });
});
