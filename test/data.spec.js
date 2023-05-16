
import { dataFunctions } from '../src/data.js';

/*const arrayTest = [
  {
    char_id: 1,
    name: "Walter White",
    birthday: "09-07-1958",
    occupation: ["High School Chemistry Teacher", "Meth King Pin"],
    img: "https://upload.wikimedia.org/wikipedia/en/0/03/Walter_White_S5B.png",
    status: "Presumed dead",
    nickname: "Heisenberg",
    appearance: [1, 2, 3, 4, 5],
    portrayed: "Bryan Cranston",
    category: "Breaking Bad",
    better_call_saul_appearance: [],
  },
  {
    char_id: 2,
    name: "Jesse Pinkman",
    birthday: "09-24-1984",
    occupation: ["Meth Dealer"],
    img: "https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441",
    status: "Alive",
    nickname: "Cap n' Cook",
    appearance: [1, 2, 3, 4, 5],
    portrayed: "Aaron Paul",
    category: "Breaking Bad",
    better_call_saul_appearance: [],
  },
] */
describe('dataFunctions', () => {
  it('is a object', () => {
    expect(typeof dataFunctions).toBe('object');
  });
});

describe('filter', () => {
  it('is a function', () => {
    expect(typeof filter).toBe('function');
  });
});
