
export const filterData = (namePokemon, data) => {

  for (let allObjects in data) {

    for (let object in data[allObjects]) {

      if (data[allObjects][object].name === namePokemon) {



        const pokemons = document.getElementById("pokemons");
        console.log(pokemons)
        console.log(document.getElementById("pokemons").parentElement.nodeName);
        let cardPokemon = document.createElement('section');
        cardPokemon.innerHTML = `
        <img id="imagePokemon" alt="Image Pokemon" src="${data[allObjects][object].img}">
          <div class="showNamePokemon">
            <img class="pokeball" alt="Image Pokeball" src="./images/pokeball.png">
            <h1 id="name">${data[allObjects][object].name}</h1>
          </div>
          <div class="dataPokemon">
            <p>Type: <span id="type">${data[allObjects][object].type}</span> </p>
            <p>About: <span id="about">${data[allObjects][object].about}</span> </p>
          </div>
        `;

        pokemons.appendChild(cardPokemon);
        /*
        console.log(pokemons)
        console.log(cardPokemon)
        console.log(Object.keys(data[allObjects][object].evolution).filter((key) => key.includes('next-evolution')))
        */
        if (Object.keys(data[allObjects][object].evolution).filter((key) => key.includes('next-evolution')).length !== 0) {
          filterData(data[allObjects][object].evolution['next-evolution'][0].name, data);

        } else {
          console.log(false)

        }//endIf

      }//endFor
    }//endFor

  }//enFilterData

}//"prev-evolution"

export const sortData = (data, sortBy) => {
  for (let allObjects in data) {

    for (let object in data[allObjects]) {
      /*console.log(data[allObjects][object].type)
      console.log(data[allObjects][object].type.includes(sortBy))*/
      if (data[allObjects][object].type.includes(sortBy)) {



        let pokemons = document.getElementById("pokemons");
        console.log(pokemons)
        console.log(document.getElementById("pokemons").parentElement.nodeName);
        let cardPokemon = document.createElement('section');
        cardPokemon.innerHTML = `
        <img id="imagePokemon" alt="Image Pokemon" src="${data[allObjects][object].img}">
          <div class="showNamePokemon">
            <img class="pokeball" alt="Image Pokeball" src="./images/pokeball.png">
            <h1 id="name">${data[allObjects][object].name}</h1>
          </div>
          <div class="dataPokemon">
            <p>Type: <span id="type">${data[allObjects][object].type}</span> </p>
            <p>About: <span id="about">${data[allObjects][object].about}</span> </p>
          </div>
        `;

        pokemons.appendChild(cardPokemon);
        /*
        console.log(pokemons)
        console.log(cardPokemon)
        console.log(Object.keys(data[allObjects][object].evolution).filter((key) => key.includes('next-evolution')))
        */
      }//endFor
    }//endFor

  }//enFilterData
}