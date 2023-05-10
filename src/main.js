const pokemonName = document.querySelector('.pokemon__name'); //variável para selecionar um elemento HTML com a classe
const pokemonNumber = document.querySelector('.pokemon__number'); //variável para selecionar um elemento HTML com a classe
const pokemonImage = document.querySelector('.pokemon__image'); //variável para selecionar um elemento HTML com a classe

const form = document.querySelector('.form'); // variável para selecionar um elemento no HTML com a classe .form.
const input = document.querySelector('.input__search'); //variável para selecionar um elemento no HTML com a classe .input
const buttonPrev = document.querySelector('.btn-prev'); //variável para selecionar um elemento no HTML com a classe .btn (botão)
const buttonNext = document.querySelector('.btn-next'); ////variável para selecionar um elemento no HTML com a classe .btn (botão)

let searchPokemon = 1; //variável "searchPokemon"  0 , que representa o número do Pokémon que vai começar  inicialmente.

const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
  }
}

const renderPokemon = async (pokemon) => {

  pokemonName.innerHTML = 'Loading...';
  pokemonNumber.innerHTML = '';

  const data = await fetchPokemon(pokemon);

  if (data) {
    pokemonImage.style.display = 'block';
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    input.value = '';
    searchPokemon = data.id;

    const abilitiesList = document.createElement('ul');
    data.abilities.forEach(ability => {
      const listItem = document.createElement('li');
      listItem.innerHTML = ability.ability.name;
      abilitiesList.appendChild(listItem);
    });
    document.body.appendChild(abilitiesList);

  } else {
    pokemonImage.style.display = 'none' (????)"id";
    pokemonName.innerHTML = 'Not found :c';
    pokemonNumber.innerHTML = '';
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault();
  renderPokemon(input.value.toLowerCase());
});

buttonPrev.addEventListener('click', () => {
  if (searchPokemon > 1) {
    searchPokemon -= 1;
    renderPokemon(searchPokemon);
  }
});

buttonNext.addEventListener('click', () => {
  searchPokemon += 1;
  renderPokemon(searchPokemon);
});

renderPokemon(searchPokemon);
