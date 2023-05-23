// adotar cultura de testes - qualidade(métrica) confiança e tempo ( atingir objetivos de negócio) economia de tempo e dinheiro
// 1* analise de requisitos- funcionalidades do projeto tipos de teste
// 2* Plano de testes- (QA)ferramentas gastos de recursos
// 3* caso de testes- dados de entrada e saida
// 4* ambiente de teste- como e onde serão desenvolvidos ( fluxo )

import { fetchPokemon, data } from '../src/data.js';

const raichu = {
  name: "raichu",
  type: [
    "electric",
  ]
};

describe('Buscar pokemons por nome', () => {
  it('deve ser uma função', () => {
    expect(typeof fetchPokemon).toBe('function');
  });

  it('deve retornar o pokemon correto', async () => {
    const APIResponse = await fetchPokemon('raichu');
    const data = raichu;

    expect(APIResponse).toEqual(data);
  });
});