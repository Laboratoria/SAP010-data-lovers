import dataLol from '../src/data.js';


describe('buscarTag', () => {
  it('deve retornar um array com os campeões que possuem a tag especificada', () => {
    const campeoes = [
      { nome: 'Ahri', tags: ['Assassin', 'Mage'] },
      { nome: 'Ashe', tags: ['Marksman', 'Support'] },
      { nome: 'Darius', tags: ['Fighter', 'Tank'] },
      { nome: 'Evelynn', tags: ['Assassin', 'Mage'] },
    ];

    const resultado = dataLol.buscarTag(campeoes, 'Assassin');

    expect(resultado).toEqual([
      { nome: 'Ahri', tags: ['Assassin', 'Mage'] },
      { nome: 'Evelynn', tags: ['Assassin', 'Mage'] },
    ]);
  });

  it('deve retornar um array vazio se nenhum campeão possuir a tag especificada', () => {
    const campeoes = [
      { nome: 'Ahri', tags: ['Assassin', 'Mage'] },
      { nome: 'Ashe', tags: ['Marksman', 'Support'] },
      { nome: 'Diana', tags: ['Fighter', 'Mage'] },
      { nome: 'Evelynn', tags: ['Assassin', 'Mage'] },
    ];

    const resultado = dataLol.buscarTag(campeoes, 'Tank');

    expect(resultado).toEqual([]);
  });
});

// Teste de unidade para buscarNome
describe("buscarNome", () => {
  test("Deve retornar campeões com nome 'Leona'", () => {
    const campeoes = [
      { name: "Ashe" },
      { name: "Leona" },
      { name: "Teemo" },
      { name: "Leblanc" }
    ];
    const resultado = dataLol.buscarNome(campeoes, "Leona");
    expect(resultado).toEqual([{ name: "Leona" }]);
  });

  test("Deve retornar campeões semelhantes com nome 'te'", () => {
    const campeoes = [
      { name: "Ashe" },
      { name: "Leona" },
      { name: "Teemo" },
      { name: "Leblanc" }
    ];
    const resultado = dataLol.buscarNome(campeoes, "te");
    expect(resultado).toEqual([{ name: "Teemo" }]);
  });

  test("Deve retornar um array vazio para busca com nome inválido", () => {
    const campeoes = [
      { name: "Ashe" },
      { name: "Leona" },
      { name: "Teemo" },
      { name: "Leblanc" }
    ];
    const resultado = dataLol.buscarNome(campeoes, "Zed");
    expect(resultado).toEqual([]);
  });
});