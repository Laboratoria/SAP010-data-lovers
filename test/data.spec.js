// adotar cultura de testes - qualidade(métrica) confiança e tempo ( atingir objetivos de negócio) economia de tempo e dinheiro
// 1* analise de requisitos- funcionalidades do projeto tipos de teste
// 2* Plano de testes- (QA)ferramentas gastos de recursos 
// 3* caso de testes- dados de entrada e saida 
// 4* ambiente de teste- como e onde serão desenvolvidos ( fluxo )

import { filterPokemonListAZ } from './estatistica.eventos.js';

describe('filterPokemonListAZ', () => {
  it('filters the Pokémon list in A-Z order', () => {
    const pokemonList = [
      { name: 'Charizard' },
      { name: 'Bulbasaur' },
      { name: 'Pikachu' },
    ];

    const filteredList = filterPokemonListAZ(pokemonList);

    expect(filteredList).toEqual([
      { name: 'Bulbasaur' },
      { name: 'Charizard' },
      { name: 'Pikachu' },
    ]);
  });
});
