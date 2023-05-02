const pokemonObject = {
  "name": "",
  "photo": "",
  "about": "",
  "type": "",
  "evolution": ""
};

export const pokemon = (namePokemon, data) => {
  for (let allObjects in data) {
    for (let object in allObjects) {
      if (data[allObjects][object].name === namePokemon) {
        pokemonObject.name = data[allObjects][object].name;
        pokemonObject.photo = data[allObjects][object].img;
        pokemonObject.about = data[allObjects][object].about;
        pokemonObject.type = data[allObjects][object].type;
        if(data[allObjects][object].evolution['next-evolution'][0].name !== ''){
          pokemonObject.evolution = data[allObjects][object].evolution['next-evolution'][0].name;
          if(data[allObjects][object].evolution['next-evolution'][0]['next-evolution'].name !== ''){
            pokemonObject.evolution = data[allObjects][object].evolution['next-evolution'][0]['next-evolution'][0].name;
          }
        }
        return pokemonObject
      }




    }//for

  }//for
}

