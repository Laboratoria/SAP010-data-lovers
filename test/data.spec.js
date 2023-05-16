import data from '../src/data/pokemon/pokemon.js';
import {
  computeStats,
  filterData,
  sortData } from '../src/data.js'
import{
  ivysaurTest,
  pikachuTest,
  pokedexASCTest,
  pokedexDESCTest,
  sizesPokemonTest,
  sortedAZTest,
  sortedZATest
} from './mocks/index.js'

//criar um index dentro da pasta mocks
describe('filterData', () => {
  test('deveria ser uma função', () => {
    expect(typeof filterData).toBe('function');
  });

  test('deveria encontrar o nome do Pokémon mesmo se o input contiver letras maisculas', () => {
    expect(filterData("PIKACHU", data)).toStrictEqual(pikachuTest);
  });

  test('deveria encontrar retornar a próxima evolução do Pokémon, se houver', () => {
    const pokemons = filterData("bulbasaur", data);
    let namePokemonNextEvolution = "";
    for (let i = 0; i < pokemons.length; i++) {
      if (pokemons[i].name.includes("ivysaur"))
        namePokemonNextEvolution = pokemons[i].name;
    }
    expect(namePokemonNextEvolution).toBe("ivysaur");
  });

  test('deveria encontrar retornar apenas um Pokémon, caso seja pesquisado algum que não tenha evolução nem nome em comum', () => {
    const pokemons = filterData("snorlax", data);
    const arraySize = pokemons.length;
    expect(arraySize).toBe(1);
  });

});

describe('sortData', () => {
  test('deveria ser uma função', () => {
    expect(typeof sortData).toBe('function');
  });

  test('deveria retornar uma lista ordenada de A-Z', () => {
    const result = sortData(data, "steel", "a-z");
    expect(result).toStrictEqual(sortedAZTest);
  });

  test('deveria retornar uma lista ordenada de Z-A', () => {
    const result = sortData(data, "ghost", "z-a");
    expect(result).toStrictEqual(sortedZATest);
  });

  test('deveria retornar uma lista ordenada de pelo número da Pokédex do MENOR para o MAIOR', () => {
    const result = sortData(data, "steel", "asc");
    expect(result).toStrictEqual(pokedexASCTest);
  });

  test('deveria retornar uma lista ordenada de pelo número da Pokédex do MAIOR para o MENOR', () => {
    const result = sortData(data, "steel", "desc");
    expect(result).toStrictEqual(pokedexDESCTest);
  });

  test('deveria retornar uma lista contendo o tipo de Pokemon pesquisado', () => {
    const result = sortData(data, "ghost", "a-z");
    let everyType = false;
    let count = 0;

    for (let i = 0; i < result.length; i++) {
      if (result[i].type.includes("ghost")) {
        count += 1;
      }
      if (count === result.length) {
        everyType = true;
      }
    }
    expect(everyType).toBe(true);
  });

});

describe('computeStats', () => {
  test('deveria ser um objeto', () => {
    expect(typeof computeStats).toBe('object');
  });

  describe('findTheTallestPokemon', () => {
    test('deveria retornar o Pokémon mais alto', () => {
      expect(computeStats.findTheTallestPokemon(sizesPokemonTest)).toStrictEqual(ivysaurTest);
    });
  })

  describe('findTheHaviestPokemon', () => {
    test('deveria retornar o Pokémon mais pesado', () => {
      expect(computeStats.findTheHeaviestPokemon(sizesPokemonTest)).toStrictEqual(ivysaurTest);
    });
  })

  describe('calculatePokemonTypesInPercentages', () => {
    test('deveria retornar um percentual válido', () => {
      const percentual = computeStats.calculatePokemonTypesInPercentages(data)
      expect(percentual.bug).toBe("8.76");
    });
  })

});
