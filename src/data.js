export const filterData = (namePokemon, data) => {

  const pokemons = [];

  for (const pokemon in data.pokemon) {

    if (data.pokemon[pokemon].name.includes(namePokemon.toLowerCase())) {

      pokemons.push(data.pokemon[pokemon]);

    }//endIf

  }//endFor

  return pokemons;

}//endFilterData

/*
export const filterEvolution = (pokemon, data) => {

  if (Object.keys(pokemon.evolution).filter((key) => key.includes('next-evolution')).length !== 0) {

    return filterData(pokemon.evolution['next-evolution'][0].name, data);

  }//endIf

  return false;

}//endFilterEvolution
*/

export const sortData = (data, sortBy, orderBy) => {

  if (orderBy === 'a-z') {

    data.pokemon.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

  } else if (orderBy === 'z-a') {
    data.pokemon.sort(function (a, b) {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }
      return 0;
    });

  }//endIf

  const pokemons = [];

  for (const pokemon in data.pokemon) {

    if (data.pokemon[pokemon].type.includes(sortBy)) {

      pokemons.push(data.pokemon[pokemon]);

    }//endIf

  }//endFor

  return pokemons;

}//endSortData


export const computeStats = {

  calculatePokemonTypesInPercentages: function (data) {

    const totalNumberOfPokemons = data.pokemon.length;

    const count = {};

    for (const object in data.pokemon) {

      data.pokemon[object].type.forEach(type => {
        count[type] = (count[type] || 0) + 1;
      });

    }//endFor

    for (const property in count) {
      count[property] = ((count[property] / totalNumberOfPokemons) * 100).toFixed(2);
    }//endFor

    return count;

  },//endCalculatePokemonTypesInPercentages


  findTheTallestPokemon: function (data) {

    const pokemons = [];

    const sizes = data.pokemon.map(object => {
      return parseFloat(object.size.height);
    });

    const max = Math.max(...sizes);

    for (const object in data.pokemon) {

      if (data.pokemon[object].size.height.includes(max)) {
        pokemons.push(data.pokemon[object]);
        return pokemons;
      }//endIf

    }//endFor

  },//endFindTheHeigthPokemon


  findTheHeaviestPokemon: function (data) {

    const pokemons = [];

    const sizes = data.pokemon.map(object => {
      return parseFloat(object.size.weight);
    });

    const max = Math.max(...sizes);

    for (const object in data.pokemon) {

      if (data.pokemon[object].size.weight.includes(max)) {
        pokemons.push(data.pokemon[object]);
        return pokemons;
      }//endIf

    }//endFor

  }//endFindTheWeigthPokemon

}//endComputStats









