
import data from "./data/pokemon/pokemon.js";

//primeira função: ordernar em ordem alfabética
export const sortByNameAZ = () => {
  const sortedPokemonsByName = [...data.pokemon].sort((a, b) => { // spread operator para não modificar a array, a e b representam os dois "pokémons" que estão sendo ordenados
    const nameA = a.name.toLowerCase(); //toLowerCase para não diferenciar maiúsculas e minúsculas
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) {  //esse if compara de "dois em dois" e atribui um valor para determinar a posição no ranking
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  });

return sortedPokemonsByName

}
// ordenar de z-a (mesma coisa do a-z, só troca o sinal)
export const sortByNameZA = () => {
  const sortedPokemonsByName = [...data.pokemon].sort((a, b) => { // spread operator para não modificar a array, a e b representam os dois "pokémons" que estão sendo ordenados
    const nameA = a.name.toLowerCase(); //toLowerCase para não diferenciar maiúsculas e minúsculas
    const nameB = b.name.toLowerCase();

    if (nameA > nameB) {  //esse if compara de "dois em dois" e atribui um valor para determinar a posição no ranking
      return -1;
    }
    if (nameA < nameB) {
      return 1;
    }
    return 0;
  });

return sortedPokemonsByName



}

// Segunda função, ordenar pelo número da pokédex (mesma lógica da anterior, só muda o parâmetro de name pra num)
export const sortByNumAsc = () => {
  const sortedPokemonsByNum = [...data.pokemon].sort((a, b) => { // spread operator para não modificar a array, a e b representam os dois "pokémons" que estão sendo ordenados
    const numA = a.num
    const numB = b.num

    if (numA < numB) {  //esse if compara de "dois em dois" e atribui um valor para determinar a posição no ranking
      return -1;
    }
    if (numA > numB) {
      return 1;
    }
    return 0;
  });

 return sortedPokemonsByNum

}
//decrescente
export const sortByNumDes = () => {
  const sortedPokemonsByNum = [...data.pokemon].sort((a, b) => { // spread operator para não modificar a array, a e b representam os dois "pokémons" que estão sendo ordenados
    const numA = a.num
    const numB = b.num

    if (numA > numB) {  //esse if compara de "dois em dois" e atribui um valor para determinar a posição no ranking
      return -1;
    }
    if (numA < numB) {
      return 1;
    }
    return 0;
  });

 return sortedPokemonsByNum

}

//terceira função: Filtrar por tipo

export const filterByType = (typeInput) => {
  const filteredPokemons = data.pokemon.filter((pokemon) => {
    return pokemon.type.includes(typeInput)
  })
    return filteredPokemons;
  }
//console.log(filterByType)
  

//quarta função, procurar por nome


export const searchByName = (name) => {
  const filteredByName = data.pokemon.filter((pokemon) => {
    return pokemon.name.includes(name)

  })

  return filteredByName

}


/*daqui pra baixo vou colcoar as funções 
que vou precisar para a página de comparar pokémons */







