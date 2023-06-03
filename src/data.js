export const filterData = (namePokemon, pokemons) => {

  return pokemons.filter(pokemon => pokemon.name.includes(namePokemon));

}//endFilterData


const sorted = (orderBy, pokemons, property) => {

  if (orderBy === 'asc' || orderBy === 'a-z') {

    pokemons.sort((a, b) => { if (a[property] < b[property]) return -1 });

  }//endIf

  if (orderBy === 'desc' || orderBy === 'z-a') {

    pokemons.sort((a, b) => { if (a[property] > b[property]) return -1 });

  }//endIf

}//endSorted

export const sortData = (pokemons, sortBy, orderBy) => {

  const pokemonsSorted = pokemons.filter(pokemon => pokemon.type.includes(sortBy));

  if (orderBy === 'a-z' || orderBy === 'z-a' ) {
    sorted(orderBy, pokemonsSorted, 'name');
  }

  if (orderBy === 'asc' || orderBy === 'desc' ) {
    sorted(orderBy, pokemonsSorted, 'num');
  }

  return pokemonsSorted;

}//endSortData


export const computeStats = {

  calculatePokemonTypesInPercentages: (pokemons) => {

    const totalNumberOfPokemons = pokemons.length;

    const count = {};

    for (const pokemon in pokemons) {

      pokemons[pokemon].type.forEach(type => {
        count[type] = (count[type] || 0) + 1;
      });

    }//endFor

    for (const type in count) {
      count[type] = ((count[type] / totalNumberOfPokemons) * 100).toFixed(2);
    }//endFor

    return count;

  },//endCalculatePokemonTypesInPercentages

  findTheBiggestPokemonSizes: (pokemons, property) => {

    let sizePokemons = [];

    const sizes = pokemons.map(pokemon => {
      return parseFloat(pokemon.size[property]);
    })

    const max = Math.max(...sizes);

    sizePokemons = pokemons.filter(pokemon => pokemon.size[property].includes(max));

    return sizePokemons;

  }//endFindBiggestPokemonSizes

}//endComputStats
