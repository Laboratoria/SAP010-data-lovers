export const fetchPokemon = async (pokemon) => {
  const APIResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

  if (APIResponse.status === 200) {
    const data = await APIResponse.json();
    return data;
  }
};

export const fetchData = async () => {
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20');
  const data = await response.json();
  return data.results;
};


export const renderPokemon = async (pokemonName, pokemonNumber, pokemonImage, input) => {
  pokemonName.innerHTML = 'Loading...';
  pokemonNumber.innerHTML = '';

  const data = await fetchPokemon(input);

  if (data) {
    pokemonImage.style.display = 'flex';
    pokemonName.innerHTML = data.name;
    pokemonNumber.innerHTML = data.id;
    pokemonImage.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
    input.value = '';
    const searchPokemon = data.id; // Definir a variável searchPokemon com o valor correto
    addButtonPrevEventListener(searchPokemon, renderPokemon); // Adicionar o evento ao botão prev
  } else {
    pokemonImage.style.display = 'none';
    pokemonName.innerHTML = 'Not found';
    pokemonNumber.innerHTML = '';
  }
};

export const addFormEventListener = (form, input, renderPokemon) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    renderPokemon(input.value.toLowerCase());
  });
};

export const addButtonPrevEventListener = (searchPokemon, renderPokemon) => {
  const buttonPrev = document.getElementById('buttonPrev'); // Identifique corretamente o botão prev na sua página
  buttonPrev.addEventListener('click', () => {
    if (searchPokemon > 1) {
      const prevPokemon = searchPokemon - 1;
      renderPokemon(prevPokemon);
    }
  });
};