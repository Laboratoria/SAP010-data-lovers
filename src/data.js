const pokemonObject = {
  "name": "",
  "photo": "",
  "about": "",
  "type": "",
  "evolution": ""

}
export const pokemon = (namePokemon, data) => {
  console.log("entrei na função")
  for (let array in data) {
    console.log("entrei no primeiro for")
    for (let object in data[array]) {
      if (data[array][object].name === namePokemon) {
        pokemonObject.name = data[array][object].name;
        pokemonObject.photo = data[array][object].img;
        pokemonObject.about = data[array][object].about;
        pokemonObject.type = data[array][object].type;
        return pokemonObject
      }

      


    }//for

  }//for
}

