/**
 * @jest-environment jsdom
 */

import {filterData}  from '../src/data.js'
//import data from '../src/data/pokemon/pokemon.js';

describe('filterData', () => {
  test('deveria ser uma função', () => {
    expect(typeof filterData).toBe('function');
  });
/*
  test('deveria encontrar o nome o Pokémon mesmo se o input contiver letras maisculas', () => {
    expect(filterData('PIKACHU', data)).toBe();
  });
*/
});
