/*import { example, anotherExample } from '../src/data.js';


 describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
}); */

import { calculatePopulation, filterBySubregion } from '../src/data.js';

//=======================CALCULAR POPULAÇÃO===================
describe('calculatePopulation', () => {
  // Array de países com nome, população e sub-região
  const countries = [
    { name: 'Country 1', population: 1000, subregion: 'América do Norte' },
    { name: 'Country 2', population: 2000, subregion: 'América do Sul' },
    { name: 'Country 3', population: 3000, subregion: 'América Central' },
  ];
  it('calculates total population for a specific subregion', () => {
    // Chamando a função calculatePopulation com o array de países e a sub-região específica
    const subregionPopulation = calculatePopulation(countries, 'América do Norte');
    // Verificando se a população calculada é igual ao valor esperado (6000)
    expect(subregionPopulation).toBe(6000);
  });
});

//========================CALCULO DA SUBREGION===============
describe('filterBySubregion', () => {
  const countries = [
    { name: 'Country 1', subregion: 'América do Norte' },
    { name: 'Country 2', subregion: 'América do Sul' },
    { name: 'Country 3', subregion: 'América Central' },
  ];
  it('filtra países por sub-região', () => {
    const filteredCountries = filterBySubregion('América do Norte', countries);
    // Verifica se a função retornou um array com os países filtrados corretamente
    expect(filteredCountries).toEqual([
      { name: 'Country 1', subregion: 'América do Norte' },
    ]);
  });
  it('retorna um array vazio se nenhum país corresponder à sub-região', () => {
    const filteredCountries = filterBySubregion('Europa', countries);
    // Verifica se a função retornou um array vazio, já que nenhum país corresponde à sub-região 'Europa'
    expect(filteredCountries).toEqual([]);
  });
  it('retorna todos os países se a sub-região não for especificada', () => {
    const filteredCountries = filterBySubregion('', countries);
    // Verifica se a função retornou todos os países, já que a sub-região não foi especificada
    expect(filteredCountries).toEqual(countries);
  });
});