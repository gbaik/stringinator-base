const _ = require('../../underbar');

describe('first()', () => {
  it('returns the first element of an array', () => {
    const array = ['a', 'b', 'c'];
    expect(_.first(array)).toEqual('a');
  });

  it('returns the first 2 elements of an array', () => {
    const array = ['a', 'b', 'c'];
    expect(_.first(array, 2)).toEqual(['a', 'b']);
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    const array = ['a', 'b', 'c'];
    expect(_.first(array, 4)).toEqual(array);
  });
});