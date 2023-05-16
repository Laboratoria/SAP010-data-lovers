import dataFunctions from "../src/data.js";

const arrayTest = [
  {
    char_id: 1,
    name: "Walter White",
    status: "Presumed dead",
    category: "Breaking Bad",
  },
  {
    char_id: 2,
    name: "Jesse Pinkman",
    status: "Alive",
    category: "Breaking Bad",
  },
  {
    char_id: 3,
    name: "Skyler White",
    status: "Alive",
    category: "Breaking Bad",
  },
  {
    char_id: 4,
    name: "Saul Goodman",
    status: "Alive",
    category: "Breaking Bad, Better Call Saul",
  },
];

describe("dataFunctions", () => {
  it("is a object", () => {
    expect(typeof dataFunctions).toBe("object");
  });
});

describe("filter", () => {
  it("is a function", () => {
    expect(typeof dataFunctions.filter).toBe("function");
  });
});

//testando ordenação a-z e z-a
describe("order", () => {
  it("is a function", () => {
    expect(typeof dataFunctions.order).toBe("function");
  });

  it("order ascending", () => {
    const character = dataFunctions.order(arrayTest, "ascending");
    expect(character.length).toEqual(4);
    expect(character).toEqual([
      arrayTest[1],
      arrayTest[3],
      arrayTest[2],
      arrayTest[0],
    ]);
  });

  it("order descending", () => {
    const character = dataFunctions.order(arrayTest, "descending");
    expect(character.length).toEqual(4);
    expect(character).toEqual([
      arrayTest[0],
      arrayTest[2],
      arrayTest[3],
      arrayTest[1],
    ]);
  });
});

//testando a busca por nome
describe("searchName", () => {
  it("search for name", () => {
    expect(typeof dataFunctions.searchName).toBe("function");
  });

  it("search for a name", () => {
    const characterSearch = dataFunctions.searchName(arrayTest, "Walter");
    expect(characterSearch.length).toEqual(1);
  });
});
