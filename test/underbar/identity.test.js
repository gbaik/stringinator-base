const _ = require('../../underbar');

describe('identity()', () => {
  it('returns null if given null', () => {
    expect(_.identity(null)).toBe(null);
  });

  it('returns the number if given a number', () => {
    expect(_.identity(1)).toBe(1);
  });

  it('returns the same array if given an array', () => {
    const array = ['a', 'b', 'c'];
    expect(_.identity(array)).toBe(array);
  });

  it('returns the same object if given an object', () => {
    const object = {
      a: 1,
      b: 2
    };
    expect(_.identity(object)).toBe(object);
  });
});