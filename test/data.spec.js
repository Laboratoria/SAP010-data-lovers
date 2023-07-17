import { filtrarPorIndependencia } from '../src/data.js';

const countries = [
  {
    "name": {
      "common": "Guatemala",
      "official": "Republic of Guatemala"
    },
    "tld": [
      ".gt"
    ],
    "independent": true,
  },
  {
    "name": {
      "common": "Singapore",
      "official": "Republic of Singapore"
    },
    "tld": [
      ".sg",
      ".新加坡",
      ".சிங்கப்பூர்"
    ],
    "independent": false,
  }
]

describe('testes dos filtros', () => {

  it('deve retornar os paises independentes', () => {
    const expected =   [
      {
       "name": {
          "common": "Guatemala",
          "official": "Republic of Guatemala"
        },
        "tld": [
          ".gt" 
        ],
        "independent": true,
      }
    ]

    expect(filtrarPorIndependencia(countries, "Independente")).toStrictEqual(expected);
  });
});
