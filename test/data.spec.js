import { filtrarPorContinente } from "../src/data.js";

const filtroContinentes = [
  { 
    "continents": [
      "America"
  ]
},
{
  "continents": [
    "Asia"
  ]
},
{
  "continents": [
    "Europe"
  ]
}
],

describe("testando filtro continente", () => {
  const expected = [
    { 
      "continents": [
        "America"
    ]
  },
  {
    "continents": [
      "Asia"
    ]
  },
  {
    "continents": [
      "Europe"
    ]
  }
  ],
  it("deve retornar os países de cada continente", () => {
    expect(filtrarPorContinente(filtroContinentes, continente)).toStrictEqual(expected);
  });
});
