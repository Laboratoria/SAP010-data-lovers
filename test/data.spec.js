import { example, anotherExample } from '../src/data.js';


describe('data', () => {
  it('is a Deve ser um objeto', () => {
    expect(typeof data).toBe('object');
  });
  // fiz a inclusão do teste acima 

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
