import {
  orderAZ,
  orderZA,
  filterBreakingBad,
  filtroNomes,
  porcentagemTemporada,
  filterBetterCallSaul,
} from "../src/data.js";

//ordem crescente
describe("orderAZ", () => {
  it("is a function", () => {
    expect(typeof orderAZ).toBe("function");
  });

  test("deve ordenar o valor nome em ordem crescente", () => {
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

//ordem crescente
describe("orderZA", () => {
  it("is a function", () => {
    expect(typeof orderZA).toBe("function");
  });

  test("deve ordenar o valor nome em ordem decrescente", () => {
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

//retorna os personagens por temporada
describe("filterBreakingBad", () => {
  it("is a function", () => {
    expect(typeof filterBreakingBad).toBe("function");
  });

  test("deve retornar os personagens de Breaking Bad que aparecem na temporada especificada", () => {
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

// o teste abaixo verifica se a função retorna os dados corretos quando um nome é encontrado na barra de pesquisa
describe("filtroNomes", () => {
  it("is a function", () => {
    expect(typeof filtroNomes).toBe("function");
  });
});

test("Filtrar nomes - nome encontrado", () => {
  const dados = [
    { name: "Walter White" },
    { name: "Jesse Pinkman" },
    { name: "Skyler White" },
    { name: "Hank Schrader" },
  ];
  const nomePesquisado = "Walter";

  const resultado = filtroNomes(dados, nomePesquisado);

  expect(resultado).toEqual([{ name: "Walter White" }]);
});

// verifica se a função retorna um array vazio quando nenhum nome é encontrado
test("Filtrar nomes - nome não encontrado", () => {
  const dados = [
    { name: "Walter White" },
    { name: "Jesse Pinkman" },
    { name: "Skyler White" },
    { name: "Hank Schrader" },
  ];
  const nomePesquisado = "Gus";

  const resultado = filtroNomes(dados, nomePesquisado);

  expect(resultado).toEqual([]);
});

// verifica se a função retorna todos os dados quando nenhum nome é especificado
test("Filtrar nomes - sem nome especificado", () => {
  const dados = [
    { name: "Walter White" },
    { name: "Jesse Pinkman" },
    { name: "Skyler White" },
    { name: "Hank Schrader" },
  ];
  const nomePesquisado = "";

  const resultado = filtroNomes(dados, nomePesquisado);

  expect(resultado).toEqual(dados);
});

// calcula o valor em porcentagem de personagens por temporada
describe("porcentagemTemporada", () => {
  it("is a function", () => {
    expect(typeof porcentagemTemporada).toBe("function");
  });
});

test("Retorna a porcentagem correta quando há dados", () => {
  const dados = [
    { name: "Walter White", appearance: [1, 2, 3] },
    { name: "Jesse Pinkman", appearance: [1, 3, 5] },
    { name: "Skyler White", appearance: [2, 4, 5] },
  ];
  const filterBreakingBad = [1];
  const resultado = ((filterBreakingBad.length / dados.length) * 100).toFixed(
    2
  );
  const resultadoFinal = porcentagemTemporada(filterBreakingBad, dados);

  expect(resultadoFinal).toBe(resultado);
});

// filtra os personagens da serie Better Call Saul
describe("filterBetterCallSaul", () => {
  it("is a function", () => {
    expect(typeof filterBetterCallSaul).toBe("function");
  });
});

it("deve retornar apenas os personagens da série Better Call Saul", () => {
  const dados = [
    { name: "Personagem 1", better_call_saul_appearance: [] },
    { name: "Personagem 2", better_call_saul_appearance: [1, 2, 3] },
    { name: "Personagem 3", better_call_saul_appearance: [] },
  ];

  const resultado = filterBetterCallSaul(dados);

  expect(resultado.length).toBe(1);
  expect(resultado[0].name).toBe("Personagem 2");
});

it("deve retornar um array vazio se não houver personagens da série Better Call Saul", () => {
  const dados = [
    { name: "Personagem 1", better_call_saul_appearance: [] },
    { name: "Personagem 2", better_call_saul_appearance: [] },
    { name: "Personagem 3", better_call_saul_appearance: [] },
  ];

  const resultado = filterBetterCallSaul(dados);

  expect(resultado.length).toBe(0);
});
