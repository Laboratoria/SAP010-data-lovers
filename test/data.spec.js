import { 
  filterPokemonsByType,
  filterPokemonByStr,
  pokemonsOrderAZ,
  pokemonsOrderZA,
  pokemonsOrderByAttack,
  pokemonsOrderByDefense
} from '../src/data.js';

const bulbasaur = {
  "num": "001",
  "name": "bulbasaur",
  "type": [
    "grass",
    "poison"
  ],
  "stats": {
    "base-attack": "118",
    "base-defense": "111",
    "base-stamina": "128",
    "max-cp": "1115",
    "max-hp": "113"
  }
}

const charmander = {
  "num": "004",
  "name": "charmander",
  "type": [
    "fire"
  ],
  "stats": {
    "base-attack": "116",
    "base-defense": "93",
    "base-stamina": "118",
    "max-cp": "980",
    "max-hp": "105"
  }
}

const squirtle = {
  "num": "007",
  "name": "squirtle",
  "type": [
    "water"
  ],
  "stats": {
    "base-attack": "94",
    "base-defense": "121",
    "base-stamina": "127",
    "max-cp": "946",
    "max-hp": "112"
  }
}

const datatest = {
  "pokemon" : [bulbasaur, charmander, squirtle]
}

describe('filterPokemonsByType', () => {
  it('is a function: Receive a data with a pokemon array and a string with the type and returns a pokemon array filtered by type', () => {
    expect(typeof filterPokemonsByType).toBe('function');
  });

  it('Receive ({\'pokemon\' : [bulbasaur, charmander, squirtle]}, \'fire\') and returns [charmander]', () => {
    const result = filterPokemonsByType(datatest, 'fire')

    const expected = [charmander]

    expect(result).toEqual(expected);
  });
});


describe('filterPokemonByStr', () => {
  it('is a function', () => {
    expect(typeof filterPokemonByStr).toBe('function');
  });

  it('returns a list with pokemons that contain the string in their name', () => {
    const result = filterPokemonByStr(datatest, 'squ')

    const expected = [squirtle]

    expect(result).toEqual(expected);
  })

  it('returns a list with pokemons that contain the string in their type', () => {
    const result = filterPokemonByStr(datatest, 'grass')

    const expected = [bulbasaur]

    expect(result).toEqual(expected)
  });  

  it('returns a list with the pokemon filtered by the number', () => {
    const result = filterPokemonByStr(datatest, '001')

    const expected = [bulbasaur]

    expect(result).toEqual(expected)
  });
});

describe('pokemonOrderAZ', () => {
  it('is a function', () => {
    expect(typeof pokemonsOrderAZ).toBe('function')
  })

  it('returns a list ordered from A to Z', () => {
    const result = pokemonsOrderAZ(datatest)

    const expected = [bulbasaur, charmander, squirtle]

    expect(result).toEqual(expected)
  })
})

describe('pokemonOrderZA', () => {
  it('is a function', () => {
    expect(typeof pokemonsOrderZA).toBe('function')
  })

  it('returns a list ordered from Z to A', () => {
    const result = pokemonsOrderZA(datatest)

    const expected = [squirtle, charmander, bulbasaur]

    expect(result).toEqual(expected)
  })
})

describe('pokemonsOrderByAttack', () => {
  it('is a function', () => {
    expect(typeof pokemonsOrderByAttack).toBe('function')
  })

  it('returns a list ordered from highest to lowest attack', () => {
    const result = pokemonsOrderByAttack(datatest)

    const expected = [bulbasaur, charmander, squirtle]

    expect(result).toEqual(expected)
  })
})

describe('pokemonsOrderByDefense', () => {
  it('is a function', () => {
    expect(typeof pokemonsOrderByDefense).toBe('function')
  })

  it('returns a list ordered from highest to lowest defense', () => {
    const result = pokemonsOrderByDefense(datatest)

    const expected = [squirtle, bulbasaur, charmander]

    expect(result).toEqual(expected)
  })
})