import { buildScreen, noDataFound, plotChart } from "./main.js";

export const filterData = (namePokemon, data) => {

  for (let object in data.pokemon) {

    if (data.pokemon[object].name.includes(namePokemon)) {

      buildScreen("pokemons", data.pokemon[object]);

      if (Object.keys(data.pokemon[object].evolution).filter((key) => key.includes('next-evolution')).length !== 0) {

        filterData(data.pokemon[object].evolution['next-evolution'][0].name, data);

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

  }

  for (let object in data.pokemon) {

    if (data.pokemon[object].type.includes(sortBy)) {

      buildScreen("pokemons", data.pokemon[object]);

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
    }

  },

  findTheSizePokemon: function (data) {

    const sizes = data.pokemon.map(object => {
      return parseFloat(object.size.height);
    });
    console.log(sizes);

    const max = Math.max(...sizes);
    console.log(max);

    const min = Math.min(...sizes);
    console.log(min);

    for(let object in data.pokemon){

      if(data.pokemon[object].size.height.includes(max)){
        console.log(true);
        buildScreen("pokemonsSize", data.pokemon[object]);
      }

      if(data.pokemon[object].size.height.includes(min)){
        console.log(true);
        buildScreen("pokemonsSize", data.pokemon[object]);
      }

    }

  },

  findTheWeightPokemon: function (data) {

    const sizes = data.pokemon.map(object => {
      return parseFloat(object.size.weight);
    });
    console.log(sizes);

    const max = Math.max(...sizes);
    console.log(max);

    const min = Math.min(...sizes);
    console.log(min);

    for(let object in data.pokemon){

      if(data.pokemon[object].size.weight.includes(max)){
        console.log(true);
        buildScreen("pokemonsSize", data.pokemon[object]);
      }

      if(data.pokemon[object].size.weight.includes(min)){
        console.log(true);
        buildScreen("pokemonsSize", data.pokemon[object]);
      }

    }

  }

}//endComputStats









