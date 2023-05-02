
export const pokemonImage = (namePokemon, data) => {

  for (let array in data) {
    for (let object in data[array]) {
      if (data[array][object].name === namePokemon) {
        console.log(data[array][object].img);
        const linkImage = data[array][object].img;
        return linkImage;

      }//endIf

    }//endFor

  }//endFor

}//endPokemon

