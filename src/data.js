import { buildScreen } from "./main.js";

export const filterData = (namePokemon, data) => {

  for (let allObjects in data) {

    for (let object in data[allObjects]) {

      if (data[allObjects][object].name.includes(namePokemon)) {

        buildScreen(data[allObjects][object]);

        if (Object.keys(data[allObjects][object].evolution).filter((key) => key.includes('next-evolution')).length !== 0) {

          filterData(data[allObjects][object].evolution['next-evolution'][0].name, data);

        } else {

          console.log(false)

        }//endIf

      }//endIf

    }//endFor

  }//endFor

}//endFilterData

export const sortData = (data, sortBy, orderBy) => {

  if(orderBy === 'a-z') {

   data.pokemon.sort(function (a, b) {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

  } else if (orderBy === 'z-a'){
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

  for (let allObjects in data) {

    for (let object in data[allObjects]) {

      if (data[allObjects][object].type.includes(sortBy)) {

        buildScreen(data[allObjects][object]);

      }//endIf

    }//endFor

  }//endFor

}//endSortData






