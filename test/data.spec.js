import { filtrarPorContinente } from "../src/data.js";

describe("testando filtro continente", () => {
  it("deve retornar os continentes", () => {
    expect(filtrarPorContinente()).toBe(expected);
  });
});
