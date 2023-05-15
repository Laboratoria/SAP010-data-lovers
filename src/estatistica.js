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

    displayPokemonList(pokemonList); // Corrigido para exibir a lista de todos os Pokémon após a busca.
   })
  .catch(error => {
    console.log(error);
   });

 function displayPokemonList(pokemonList) {
   pokemon_List.innerHTML = '';
  pokemonList.forEach(pokemon => {
    const listItem = document.createElement('li');
     listItem.innerHTML = `
      <div class="pokemon_info">
        <h3 class="pokemon_name">${pokemon.name}</h3>
        <img src="${pokemon.imageUrl}" alt="${pokemon.name}">
        <p>name: ${pokemon.name}</p>
        <p>id: ${pokemon.id}</p>
        <p>Weight: ${pokemon.weight}</p>
        <p>HP: ${pokemon.hp}</p>
        <p>Attack: ${pokemon.attack}</p>
        <p>Defense: ${pokemon.defense}</p>
//       <p>Speed: ${pokemon.speed}</p>
        <p>Types: ${pokemon.types.join(', ')}</p> 
    </div>
    `; 
     pokemon_List.appendChild(listItem);
   });
 }

const ordenarPorElement = document.querySelector('#ordenarPorElement');
const tipoPokemonElement = document.querySelector('#TipoPokemon');
const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');

btn2.addEventListener('"click"', () => {
  pokemonList.innerHTML = '';
  
  const orderValue = btn1.value;
  const typeValue = btn2.value;
  
  let filteredList = [...pokemonList];
  //console.log()
  
  if (typeValue) { // Corrigido para filtrar por typeValue em vez de orderValue
    filteredList = filteredList.filter(pokemon => pokemon.type.includes(typeValue));

  }
  
  if (orderValue) {
    filteredList = filteredList.sort(pokemon => pokemon.pokemonList.includes(orderValue));


  }
  
  displayPokemonList(filteredList);
});


