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


import { calculatePopulation, filterByContinent } from '../src/data.js';

//=======================Testando o total de População =================

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

//=======================Testando os continentes =================

describe('filterByContinent', () => {
  // Array de
  const continente = [
    { name: 'Country 1', continents: 'Asia' },
    { name: 'Country 2', continents: 'Africa' },
    { name: 'Country 3', continents: 'Oceania' },
  ];
  it('calculates contries for a specific continents', () => {
    // Chamando a função calculatePopulation com o array de países e a sub-região específica
    const continentsCountry = filterByContinent(continente, 'Asia');
    // Verificando se a população calculada é igual ao valor esperado (6000)
    expect(continentsCountry).toBe([]);
  });
});