// recebe a lista de Pokémons como parâmetro e ativa os botões de eventos "clique"

//export function initializeEventListeners(pokemonList);
export function displayPokemonList(pokemonList) {

  const ordenarPorElement = document.querySelector('#options1');
  const tipoPokemonElement = document.querySelector('#TipoPokemon');

  const btn1 = document.querySelector('.btn1');
  const btn2 = document.querySelector('#btn2');

  btn1.addEventListener('click', () => {
    const filteredList = [...pokemonList];
    const orderValue = ordenarPorElement.value;

    if (orderValue === 'a-z') {
      filteredList.sort((a, b) => a.name.localeCompare(b.name));
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


}