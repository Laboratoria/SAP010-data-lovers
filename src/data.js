
export const pokemon = (namePokemon, data) => {

  for(let array in data){
    for(let object in data[array]){
      if(data[array][object].name === namePokemon){
        console.log(data[array][object])


      }

    }//for

  }//for
  //console.log(data.pokemon[0].name)

}//endPokemon

