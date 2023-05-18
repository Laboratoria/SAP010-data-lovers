import { ordenarNomes} from '../src/data.js';

describe('ordenarNomes', () => {
  it('is a function', () => {
    expect(typeof ordenarNomes).toStrictEqual('function');
  });
  it('Retorna em ordem alfabetica ', () => {
    const nomes = 
    [
      {
        "fullName": "Daenerys Targaryen",
        "family": "House Targaryen"
      },
      {
        "fullName": "Samwell Tarly",
        "family": "House Tarly"
      },
      {
        "fullName": "Jon Snow",
        "family": "House Stark"
      }
    ];
    const nomesOrdenados = ordenarNomes(nomes);
    const ordemEsperada = [
      {
        "fullName": "Daenerys Targaryen",
        "family": "House Targaryen"
      },
      {
        "fullName": "Jon Snow",
        "family": "House Stark"
      },
      {
        "fullName": "Samwell Tarly",
        "family": "House Tarly"
      }
    ];
    expect(nomesOrdenados).toStrictEqual(ordemEsperada);
  });
});