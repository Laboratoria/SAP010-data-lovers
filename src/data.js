import { buildScreen, noDataFound } from "./main.js";

export const filterData = (namePokemon, data) => {

  for (let object in data.pokemon) {

    if (data.pokemon[object].name.includes(namePokemon)) {

      buildScreen(data.pokemon[object]);

      if (Object.keys(data.pokemon[object].evolution).filter((key) => key.includes('next-evolution')).length !== 0) {

        filterData(data.pokemon[object].evolution['next-evolution'][0].name, data);

      }//endIf

    }//endIf

    if (!data.pokemon[object].name.includes(namePokemon)) {

      return noDataFound("nome");

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

      buildScreen(data.pokemon[object]);

    }//endIf

  }//endFor

}//endSortData

export const computeStats = (data) => {

  let totalNumberOfPokemons = data.pokemon.length;

  console.log(totalNumberOfPokemons);

  const count = {};

  for (let object in data.pokemon) {

    data.pokemon[object].type.forEach(type => {
      count[type] = (count[type] || 0) + 1;
    });

  }//endFor

  console.log(count);

  for (const value in count) {
    count[value] = parseFloat(((count[value] / totalNumberOfPokemons) * 100).toFixed(2));
  }

  console.log(count)


}//endComputStats









