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

describe('ordenarCampeoes', () => {
  it('deve ordenar os campeões por maior defesa', () => {
    const campeoes = [{info: {defense: 90}}, {info: {defense: 70}}];
    expect(dataLol.ordenarCampeoes(campeoes, 'maior-defesa')).toEqual([{info: {defense: 90}}, {info: {defense: 70}}]);
  });

  it('deve ordenar os campeões por menor defesa', () => {
    const campeoes = [{info: {defense: 70}}, {info: {defense: 90}}];
    expect(dataLol.ordenarCampeoes(campeoes, 'menor-defesa')).toEqual([{info: {defense: 70}}, {info: {defense: 90}}]);
  });

  it('deve ordenar os campeões por maior ataque', () => {
    const campeoes = [{info: {attack: 90}}, {info: {attack: 70}}];
    expect(dataLol.ordenarCampeoes(campeoes, 'maior-ataque')).toEqual([{info: {attack: 90}}, {info: {attack: 70}}]);
  });

  it('deve ordenar os campeões por menor ataque', () => {
    const campeoes = [{info: {attack: 70}}, {info: {attack: 90}}];
    expect(dataLol.ordenarCampeoes(campeoes, 'menor-ataque')).toEqual([{info: {attack: 70}}, {info: {attack: 90}}]);
  });

  it('deve ordenar os campeões por maior magia', () => {
    const campeoes = [{info: {magic: 90}}, {info: {magic: 70}}];
    expect(dataLol.ordenarCampeoes(campeoes, 'maior-magia')).toEqual([{info: {magic: 90}}, {info: {magic: 70}}]);
  });

  it('deve ordenar os campeões por menor magia', () => {
    const campeoes = [{info: {magic: 70}}, {info: {magic: 90}}];
    expect(dataLol.ordenarCampeoes(campeoes, 'menor-magia')).toEqual([{info: {magic: 70}}, {info: {magic: 90}}]);
  });

  it('deve ordenar os campeões por maior dificuldade', () => {
    const campeoes = [{info: {difficulty: 90}}, {info: {difficulty: 70}}];
    expect(dataLol.ordenarCampeoes(campeoes, 'maior-dificuldade')).toEqual([{info: {difficulty: 90}}, {info: {difficulty: 70}}]);
  });

  it('deve ordenar os campeões por menor dificuldade', () => {
    const campeoes = [{info: {difficulty: 70}}, {info: {difficulty: 90}}];
    expect(dataLol.ordenarCampeoes(campeoes, 'menor-dificuldade')).toEqual([{info: {difficulty: 70}}, {info: {difficulty: 90}}]);
  });

  it('deve retornar a lista de campeões sem ordem definida', () => {
    const campeoes = [{info: {defense: 90}}, {info: {defense: 70}}];
    expect(dataLol.ordenarCampeoes(campeoes)).toEqual([{info: {defense: 90}}, {info: {defense: 70}}]);
  });
});
