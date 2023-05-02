const pokemonObject = {
  "name": "",
  "photo": "",
  "about": "",
  "type": "",
  "evolution": ""
};

export const filterData = (namePokemon, data) => {
  for (let allObjects in data) {
    for (let object in data[allObjects]) {
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
        /*if(data[allObjects][object].evolution['next-evolution'][0].name !== ''){
          pokemonObject.evolution = data[allObjects][object].evolution['next-evolution'][0].name;
          if(data[allObjects][object].evolution['next-evolution'][0]['next-evolution'].name !== ''){
            pokemonObject.evolution = data[allObjects][object].evolution['next-evolution'][0]['next-evolution'][0].name;
          }
         }*/
        return pokemonObject
      }




    }//for

  }//for
}

/*filter((key) => key.includes('Name'))*/

//"prev-evolution"