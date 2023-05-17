import { ordenarNomes} from '../src/data.js';

describe('ordenarNomes', () => {
  it('is a function', () => {
    expect(typeof ordenarNomes).toStrictEqual('function');
  });
  it('Retorna em ordem alfabetica ', () => {
    const nomes = ['Arya', 'Jon', 'Robert', 'Samwell', 'Sandor'];
    const nomesOrdenados = ordenarNomes(nomes);
    const ordemEsperada = ['Arya', 'Jon', 'Robert', 'Samwell', 'Sandor'];
    expect(nomesOrdenados).toStrictEqual(ordemEsperada);
  });
});