// Funções que fazem a manipulação de dados serão declaradas e implementadas nesse arquivo

// Função que filtra o array de pokemons e retorna um array com os pokemons do tipo desejado
// export const getPokemonsByType => declara a função e torna visivel para que
// seja importada por outro arquivo JS
// (data, type) => { código } isso é o mesmo que criar uma function com dois paramentros
// (parâmetro) => { código } é igual a function(parâmentro){ código }
export const filterPokemonsByType = (data, type) => {
  const pokemons = data.pokemon

  // Usando o filter do array para procurar os pokemons do tipo solicitado
  // O filter recebe uma função que faz a verificação como paramentro
  // e retorna um array com os elementos que passaram pela verificação
  const pokemonsFiltered = pokemons.filter(pokemon => {
    // O some é usado no type pq ele é um array dentro do array de pokemons
    // o some tb recebe uma função que faz a verificação (no caso o ===)
    // e retorna true se algum dos elementos do array type for igual ao type recebido no getPokemonsByType
    return pokemon.type.some(types => types === type)
  })

  // Ao final retornamos somentes os pokemons do tipo solicitado
  return pokemonsFiltered
};

export const filterPokemonByStr = (data, str) => {
  const pokemons = data.pokemon

  const pokemonsFiltered = pokemons.filter(pokemon => {
    return pokemon.name.includes(str.toLowerCase())
        || pokemon.type.some(type => type.includes(str.toLowerCase()))
        || parseInt(pokemon.num) === parseInt(str)
  })

  return pokemonsFiltered;
};

export const pokemonsOrderAZ = (data) => {
  const pokemons = data.pokemon

  const pokemonsOrderAZ = pokemons.sort((pokemon1, pokemon2) => {
    return pokemon1.name.localeCompare(pokemon2.name)
  })

  return pokemonsOrderAZ
}

export const pokemonsOrderZA = (data) => {
  const pokemons = data.pokemon

  const pokemonsOrderZA = pokemons.sort((pokemon1, pokemon2) => {
    return pokemon2.name.localeCompare(pokemon1.name)
  })

  return pokemonsOrderZA
}

export const pokemonsOrderByAttack = (data) => {
  const pokemons = data.pokemon

  const pokemonsOrdened = pokemons.sort((pokemon1, pokemon2) => {
    if (parseInt(pokemon1.stats["base-attack"]) < parseInt(pokemon2.stats["base-attack"])){
      return 1
    }

    if (parseInt(pokemon1.stats["base-attack"]) > parseInt(pokemon2.stats["base-attack"])){
      return -1
    }

    return 0
  })

  return pokemonsOrdened
}

export const pokemonsOrderByDefense = (data) => {
  const pokemons = data.pokemon

  const pokemonsOrdened = pokemons.sort((pokemon1, pokemon2) => {
    if (parseInt(pokemon1.stats["base-defense"]) < parseInt(pokemon2.stats["base-defense"])){
      return 1
    }

    if (parseInt(pokemon1.stats["base-defense"]) > parseInt(pokemon2.stats["base-defense"])){
      return -1
    }

    return 0
  })

  return pokemonsOrdened
}