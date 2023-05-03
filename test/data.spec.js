import {buscarTag} from "../src/data"; '../src/data.js';


describe('buscarTag', () => {
  it('deve retornar um array com os campeões que possuem a tag especificada', () => {
    const campeoes = [
      { nome: 'Ahri', tags: ['Assassino', 'Mago'] },
      { nome: 'Ashe', tags: ['Atirador', 'Suporte'] },
      { nome: 'Darius', tags: ['Lutador', 'Tambor da Guerra'] },
      { nome: 'Evelynn', tags: ['Assassino', 'Mago'] },
    ];

    const resultado = buscarTag(campeoes, 'Assassino');

    expect(resultado).toEqual([
      { nome: 'Ahri', tags: ['Assassino', 'Mago'] },
      { nome: 'Evelynn', tags: ['Assassino', 'Mago'] },
    ]);
  });

  it('deve retornar um array vazio se nenhum campeão possuir a tag especificada', () => {
    const campeoes = [
      { nome: 'Ahri', tags: ['Assassino', 'Mago'] },
      { nome: 'Ashe', tags: ['Atirador', 'Suporte'] },
      { nome: 'Darius', tags: ['Lutador', 'Tambor da Guerra'] },
      { nome: 'Evelynn', tags: ['Assassino', 'Mago'] },
    ];

    const resultado = buscarTag(campeoes, 'Tanque');

    expect(resultado).toEqual([]);
  });
});
