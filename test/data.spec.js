import { filmsDirector, filteredFilms } from '../src/data.js';

const test = "director";
const valor = [{ director: "Todos" }, { director: "Hayao Miyazaki" }, { director: "Isao Takahata" }]

describe('filmsDirector', () => {
  it('is a function', () => {
    expect(typeof filmsDirector).toBe('function');
  });

  it('filter `directors`', () => {
    expect(filmsDirector(test, valor)).toEqual([{ director: "Isao Takahata" }]);
  });
});

const teste = "title";
const dados = [{ title: "Todos" }, { title: "Castle in the Sky" }, { title: "My Neighbor Totoro" }]

describe('filteredFilms', () => {
  it('is a function', () => {
    expect(typeof filteredFilms).toBe('function');
  });

  it('filter `title`', () => {
    expect(filteredFilms(teste, dados)).toEqual([{ title: "Castle in the Sky" }]);
  });
});
