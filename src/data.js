import { buildScreen } from "./main.js";

export const filterData = (namePokemon, data) => {

  for (let allObjects in data) {

    for (let object in data[allObjects]) {

      if (data[allObjects][object].name === namePokemon) {

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

export const sortData = (data, sortBy) => {

  for (let allObjects in data) {

    for (let object in data[allObjects]) {

      if (data[allObjects][object].type.includes(sortBy)) {

        buildScreen(data[allObjects][object]);

      }//endIf

    }//endFor

  }//endFor

}//endSortData






