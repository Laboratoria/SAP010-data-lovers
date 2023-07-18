import { filtrarPorContinente, filtrarPorIndependencia } from "../src/data.js";

const filtroContinentes = [
  {
    continents: ["America"],
  },
  {
    continents: ["Asia"],
  },
  {
    continents: ["Europe"],
  },
];
const countries = [
  {
    name: {
      common: "Guatemala",
      official: "Republic of Guatemala",
    },
    tld: [".gt"],
    independent: true,
  },
  {
    name: {
      common: "Singapore",
      official: "Republic of Singapore",
    },
    tld: [".sg", ".新加坡", ".சிங்கப்பூர்"],
    independent: false,
  },
];

describe("testando filtro continente", () => {
  const expected = [
    {
      continents: ["America"],
    },
  ];
  it("deve retornar os países de cada continente", () => {
    expect(filtrarPorContinente(filtroContinentes, "America")).toStrictEqual(
      expected
    );
  });
});

describe("testes dos filtros", () => {
  it("deve retornar os paises independentes", () => {
    const expected = [
      {
        name: {
          common: "Guatemala",
          official: "Republic of Guatemala",
        },
        tld: [".gt"],
        independent: true,
      },
    ];

    expect(filtrarPorIndependencia(countries, "Independente")).toStrictEqual(
      expected
    );
  });
});
