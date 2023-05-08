import { buildCard, plotChart } from "./main.js";

export const filterData = (namePokemon, data) => {

  for (let pokemon in data.pokemon) {

    if (data.pokemon[pokemon].name.includes(namePokemon)) {

      buildCard("pokemons", data.pokemon[pokemon]);

      if (Object.keys(data.pokemon[pokemon].evolution).filter((key) => key.includes('next-evolution')).length !== 0) {

        return filterData(data.pokemon[pokemon].evolution['next-evolution'][0].name, data);

      }//endIf

    }//endIf

  }//endFor

}//endFilterData

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

  for (let pokemon in data.pokemon) {

    if (data.pokemon[pokemon].type.includes(sortBy)) {

      buildCard("pokemons", data.pokemon[pokemon]);

    }//endIf


  }//endFor

}//endSortData

export const computeStats = {

  calculatePokemonTypesInPercentages: function (data) {

    let totalNumberOfPokemons = data.pokemon.length;

    const count = {};

    for (let object in data.pokemon) {

      data.pokemon[object].type.forEach(type => {
        count[type] = (count[type] || 0) + 1;
      });

    }//endFor

    for (const property in count) {
      count[property] = ((count[property] / totalNumberOfPokemons) * 100).toFixed(2);
      plotChart(property, count[property]);
    }//endFor

  },//endCalculatePokemonTypesInPercentages

  findTheHeigthPokemon: function (data) {

    const sizes = data.pokemon.map(object => {
      return parseFloat(object.size.height);
    });

    const max = Math.max(...sizes);

    const min = Math.min(...sizes);

    for(let object in data.pokemon){

      if(data.pokemon[object].size.height.includes(max)){
        buildCard("pokemonsHeight", data.pokemon[object]);
      }//endIf

      if(data.pokemon[object].size.height.includes(min)){
         buildCard("pokemonsHeight", data.pokemon[object]);
      }//endIf

    }//endFor

  },//endFindTheHeigthPokemon

  findTheWeightPokemon: function (data) {

    const sizes = data.pokemon.map(object => {
      return parseFloat(object.size.weight);
    });

    const max = Math.max(...sizes);

    const min = Math.min(...sizes);

    for(let object in data.pokemon){

      if(data.pokemon[object].size.weight.includes(max)){
        buildCard("pokemonsWeight", data.pokemon[object]);
      }//endIf

      if(data.pokemon[object].size.weight.includes(min)){
         buildCard("pokemonsWeight", data.pokemon[object]);
      }//endIf

    }//endFor

  }//endFindTheWeigthPokemon

}//endComputStats









