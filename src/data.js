export const pokemon = (namePokemon,data) => {
  for (let array in data) {
    for (let object in data[array]) {
      if (data[array][object].name === namePokemon) {
       const pokemon{
        img:const image = data[array][object].img;
       }

      }
     
    }//for

  }//for
}
/*export const pokemonImage = (namePokemon, data) => {

  for (let array in data) {
    for (let object in data[array]) {
      if (data[array][object].name === namePokemon) {
        /*
        const linkImage = data[array][object].img;
        console.log(data[array][object].img);
        console.log(`link da imagem: ${linkImage}`);
        return linkImage;
        */
       /* console.log(data[array][object].img);
        const linkImage = data[array][object].img;
        return linkImage;

      }
     
    }//for

  }//for

  //console.log(data.pokemon[0].name)

}//endPokemon


/*export const pokemonName = (namePokemon, data) => {

  for (let array in data) {
    for (let object in data[array]) {
      if (data[array][object].name === namePokemon) {
      const name = data[array][object].name;
        return name;

      }
     
    }//for

  }//for

  //console.log(data.pokemon[0].name)

}//endPokemon

*/

