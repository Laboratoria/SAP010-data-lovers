import { filtroCont, filtroAz, calcularPercentualIngles } from "../src/data.js";
import { ArrPaises, PaisesDesordenado } from "./mock.js";
import {
  arrCont,
  arrAmerica,
  arrAsia,
  arrEuropa,
  arrAfrica,
  arrAntartida,
  arrOceania,
} from "./mock2.js";
import { CalcCont } from "./mock3.js";
import { arrOrdenado, arrDesordenado } from "./mock4.js";

//filtro A Z
describe("filtrandoAz", () => {
  it("is a function", () => {
    expect(typeof filtroAz).toBe("function");
  });

  it("returns `example`", () => {
    expect(filtroAz(PaisesDesordenado, "az")).toEqual(ArrPaises);
  });
});

//filtro Z A
describe("filtrandoZa", () => {
  it("is a function", () => {
    expect(typeof filtroAz).toBe("function");
  });

  it("returns `example`", () => {
    expect(filtroAz(arrOrdenado, "za")).toEqual(arrDesordenado);
  });
});

//filtro Cont
describe("filtrandoCont", () => {
  it("is a function", () => {
    expect(typeof filtroCont).toBe("function");
  });

  it("returns `example`", () => {
    expect(filtroCont(arrCont, "América")).toEqual(arrAmerica);
  });
});

//filtro europa
describe("filtrandoCont", () => {
  it("is a function", () => {
    expect(typeof filtroCont).toBe("function");
  });

  it("returns `example`", () => {
    expect(filtroCont(arrCont, "Europa")).toEqual(arrEuropa);
  });
});

//filtro africa
describe("filtrandoCont", () => {
  it("is a function", () => {
    expect(typeof filtroCont).toBe("function");
  });

  it("returns `example`", () => {
    expect(filtroCont(arrCont, "África")).toEqual(arrAfrica);
  });
});

//filtro Asia
describe("filtrandoCont", () => {
  it("is a function", () => {
    expect(typeof filtroCont).toBe("function");
  });

  it("returns `example`", () => {
    expect(filtroCont(arrCont, "Ásia")).toEqual(arrAsia);
  });
});

//filtro Antartida
describe("filtrandoCont", () => {
  it("is a function", () => {
    expect(typeof filtroCont).toBe("function");
  });

  it("returns `example`", () => {
    expect(filtroCont(arrCont, "Antártida")).toEqual(arrAntartida);
  });
});

//filtro Oceania
describe("filtrandoCont", () => {
  it("is a function", () => {
    expect(typeof filtroCont).toBe("function");
  });

  it("returns `example`", () => {
    expect(filtroCont(arrCont, "Oceania")).toEqual(arrOceania);
  });
});

//filtro Calculo
describe("filtrandoCalc", () => {
  it("is a function", () => {
    expect(typeof calcularPercentualIngles).toBe("function");
  });

  it("returns `example`", () => {
    const a = calcularPercentualIngles(CalcCont);
    expect(a).toEqual("50.00");
  });
});
