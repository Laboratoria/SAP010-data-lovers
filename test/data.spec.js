import { filterData, sortData, computeStats } from '../src/data.js'
import data from '../src/data/pokemon/pokemon.js';
import sortedListForTest from './mocks/sortedListForTest.js';
import pikachu from './mocks/pikachu.js';

describe('filterData', () => {
  test('deveria ser uma função', () => {
    expect(typeof filterData).toBe('function');
  });

  //entender poorque o toBe() teve que ser substituído pelo toStricEqual()
  test('deveria encontrar o nome do Pokémon mesmo se o input contiver letras maisculas', () => {
    expect(filterData("PIKACHU", data)).toStrictEqual(pikachu);
  });

  test('deveria encontrar retornar a próxima evolução do Pokémon, se houver', () => {
    const pokemons = filterData("bulbasaur", data);
    let namePokemonNextEvolution = "";
    for(let i = 0; i < pokemons.length; i++){
      if(pokemons[i].name.includes("ivysaur"))
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

  test('deveria retornar uma lista ordenada', () => {
    const result = sortData(data, "steel", "a-z");
    expect(result).toStrictEqual(sortedListForTest);
  });

  test('deveria retornar uma lista contendo o tipo de Pokemon pesquisado', () => {
    const result = sortData(data, "ghost", "a-z");
    let everyType = false;
    let count = 0;

    for(let i = 0; i < result.length; i++){
      console.log(result[i].type.includes("ghost"))
      if(result[i].type.includes("ghost")){
        count += 1;
      }
      if(count === result.length){
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

});
