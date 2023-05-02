const pokemonObject = {
  "name": "",
  "photo": "",
  "about": "",
  "type": "",
  "evolution": ""
};

export const filterData = (namePokemon, data) => {
  for (let allObjects in data) {

    console.log("primeiro for")
    for (let object in data[allObjects]) {
      console.log("segundo for")
      console.log(namePokemon)
      console.log(data[allObjects][object].name)
      let isTrue = data[allObjects][object].name === namePokemon;
      console.log(isTrue)
      if (data[allObjects][object].name === namePokemon) {
        pokemonObject.name = data[allObjects][object].name;
        pokemonObject.photo = data[allObjects][object].img;
        pokemonObject.about = data[allObjects][object].about;
        pokemonObject.type = data[allObjects][object].type;

        console.log(Object.keys(data[allObjects][object].evolution).filter((key)=>key.includes('next-evolution')))
        console.log(Object.keys(data[allObjects][object].evolution).filter((key)=>key.includes('next-evolution')))
        if (Object.keys(data[allObjects][object].evolution).filter((key)=>key.includes('next-evolution')).length !== 0){
          console.log(true)
          Object.keys(data[allObjects][object].evolution['next-evolution'][0].name)
          console.log(data[allObjects][object].evolution['next-evolution'][0].name)
          filterData(data[allObjects][object].evolution['next-evolution'][0].name,data)
        }
        else {
          console.log(false)
        }
        }
        */
        console.log(pokemonObject)
        return pokemonObject
      }

    }//for

  }//for
}

/*filter((key) => key.includes('Name'))*/

//"prev-evolution"