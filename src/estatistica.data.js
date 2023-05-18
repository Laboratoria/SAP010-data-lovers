// renderizar a lista de Pokémon, recebe a lista de Pokémon como parâmetro e cria os elementos HTML necessários para exibir as informações de cada Pokémon na lista.

export function displayPokemonList(pokemonList) {
  const pokemon_List = document.querySelector('.pokemon_list');
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
          <p>Stats Total: ${pokemon.statsTotal}</p>
        </div>
      `;
    pokemon_List.appendChild(listItem);
  });
}
