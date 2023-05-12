import { filterData, sortData, computeStats } from '../src/data.js'
import data from '../src/data/pokemon/pokemon.js';
import sortedListForTest from '../src/sortedListForTest.js';

//criar uma pasta para guardar os dados mocados

describe('filterData', () => {
  test('deveria ser uma função', () => {
    expect(typeof filterData).toBe('function');
  });

  //entender poorque o toBe() teve que ser substituído pelo toStricEqual()
  test('deveria encontrar o nome do Pokémon mesmo se o input contiver letras maisculas', () => {
    //mocar os dados
    expect(filterData("PIKACHU", data)).toStrictEqual(filterData("pikachu", data));
  });

  test('deveria encontrar retornar a próxima evolução do Pokémon, se houver', () => {
    const pokemons = filterData("bulbasaur", data);
    //verificar as outras posições do array
    const namePokemonNextEvolution = pokemons[1].name;
    expect(namePokemonNextEvolution).toBe("ivysaur");
  });

  //criar um teste para um pokemon sem sem nenhuma evolução

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
    //percorrer o atributo type e verificar se todos contém o tipo pesquisado que é ghost
    //procurar por alguma função que verifique se todos os obejtos daquele elemento contem aquela propriedade
    expect(("")).toBe();
  });

});

describe('computeStats', () => {
  test('deveria ser um objeto', () => {
    expect(typeof computeStats).toBe('object');
  });

});
