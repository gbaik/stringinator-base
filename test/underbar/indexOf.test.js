const _ = require('../../underbar');

describe('indexOf()', () => {
  it('returns the index of a value at the beginning of an array', () => {
    const array = ['a', 'b', 'c'];
    expect(_.indexOf(array, 'a')).toBe(0);
  });

  it('returns the index of a value at the end of an array', () => {
    const array = ['a', 'b', 'c'];
    expect(_.indexOf(array, 'c')).toBe(2);
  });

  it('returns -1 for a missing value', () => {
    const array = ['a', 'b', 'c'];
    expect(_.indexOf(array, 'd')).toBe(-1);
  });

  it('returns the first matching index when multiple matches in array', () => {
    const array = ['a', 'b', 'c', 'a'];
    expect(_.indexOf(array, 'a')).toBe(0);
  });

  it('starts searching at the given offset', () => {
    const array = ['a', 'b', 'c', 'a'];
    expect(_.indexOf(array, 'a', 2)).toBe(3);
  });

});