import { orderAZ, orderZA, filterBreakingBad } from "../src/data.js";
// import breaking_bad from "../src/data/breakingbad/breakingbad.js";

describe("orderAZ", () => {
  it("is a function", () => {
    expect(typeof orderAZ).toBe("function");
  });

  it("deve ordenar o valor nome em ordem crescente", () => {
    const bbAZ = [
      { name: "Walter White" },
      { name: "Jesse Pinkman" },
      { name: "Saul Goodman" },
      { name: "Hank Schrader" },
    ];
    const resultadoOrdemCrescente = [
      { name: "Hank Schrader" },
      { name: "Jesse Pinkman" },
      { name: "Saul Goodman" },
      { name: "Walter White" },
    ];
    expect(orderAZ(bbAZ)).toStrictEqual(resultadoOrdemCrescente);
  });
});
describe("orderZA", () => {
  it("is a function", () => {
    expect(typeof orderZA).toBe("function");
  });

  it("deve ordenar o valor nome em ordem decrescente", () => {
    const bbZA = [
      { name: "Walter White" },
      { name: "Jesse Pinkman" },
      { name: "Saul Goodman" },
      { name: "Hank Schrader" },
    ];
    const resultadoOrdemDecrescente = [
      { name: "Walter White" },
      { name: "Saul Goodman" },
      { name: "Jesse Pinkman" },
      { name: "Hank Schrader" },
    ];
    expect(orderZA(bbZA)).toStrictEqual(resultadoOrdemDecrescente);
  });
});

describe("filterBreakingBad", () => {
  it("is a function", () => {
    expect(typeof filterBreakingBad).toBe("function");
  });

  it("deve retornar os personagens de Breaking Bad que aparecem na temporada especificada", () => {
    const season = [
      { name: "Jesse Pinkman", appearance: [1, 2, 3, 4, 5] },
      { name: "Walter White", appearance: [1, 2, 3, 4, 5] },
      { name: "Saul Goodman", appearance: [2, 3, 4, 5] },
      { name: "Hank Schrader", appearance: [1, 2, 3, 4, 5] },
    ];
    const name = 1;
    const resultado = [
      { name: "Jesse Pinkman", appearance: [1, 2, 3, 4, 5] },
      { name: "Walter White", appearance: [1, 2, 3, 4, 5] },
      { name: "Hank Schrader", appearance: [1, 2, 3, 4, 5] },
    ];
    const resultadoFinal = filterBreakingBad(season, name);

    expect(resultadoFinal).toEqual(resultado);
  });
});
