import { ordenarNomes, filtrarFamilia, filtrarPersonagens} from '../src/js/data';

const dados = [
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

describe('ordenarNomes', () => {
  it('ordenarNomes is a function', () => {
    expect(typeof ordenarNomes).toStrictEqual('function');
  });
  it('Retorna em ordem alfabetica ', () => {
    const nomesOrdenados = ordenarNomes(dados);

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

describe('filtrarFamilia', () => {
  it('filtrarFamilia is a function', () => {
    expect(typeof filtrarFamilia).toStrictEqual('function');
  });
  it('Retorna a família filtrada', () => {
    const familiaFiltrada = filtrarFamilia(dados, "House Targaryen");
    const familiaEsperada = [
      {
        "fullName": "Daenerys Targaryen",
        "family": "House Targaryen"
      }
    ];
    expect(familiaFiltrada).toStrictEqual(familiaEsperada);
  });
});

describe('filtrarPersonagens', () => {
  it('filtrarPersonagens is a function', () => {
    expect(typeof filtrarPersonagens).toStrictEqual('function');
  });
  it('Retorna o personagem filtrado ', () => {
    const personagemFiltrado = filtrarPersonagens(dados, "Samwell Tarly");
    const personagemEsperado = [
      {
        "fullName": "Samwell Tarly",
        "family": "House Tarly"
      }
    ];
    expect(personagemFiltrado).toStrictEqual(personagemEsperado);
  });
});