const _ = require('../../underbar');

describe('isArrayLike()', () => {
  it('returns true for an actual array', () => {
    const array = ['a', 'b', 'c'];
    expect(_.isArrayLike(array)).toBe(true);
  });

  it('returns true for an array-like object', () => {
    const arrayLikeObj = {
      length: 4
    };
    expect(_.isArrayLike(arrayLikeObj)).toBe(true);
  });

  it('returns false for a non-array-like object', () => {
    const nonArrayLikeObj = {
      'a': 'b'
    };
    expect(_.isArrayLike(nonArrayLikeObj)).toBe(false);
    });
});
