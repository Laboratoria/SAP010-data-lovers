import sum  from './data.spec.js'

describe('soma', () => {

  test('deveria ser uma função', () => {
    expect(typeof sum).toBe('function');
  });

  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

});

