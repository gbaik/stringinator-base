const _ = require('../../underbar');

describe('last()', () => {
  it('returns the last element of an array', () => {
    const array = ['a', 'b', 'c'];
    expect(_.last(array)).toEqual('c');  
  });

  it('returns the last 2 elements of an array', () => {
    const array = ['a', 'b', 'c'];
    expect(_.last(array, 2)).toEqual(['b', 'c']);  
  });

  it('returns the whole array if you ask for more elements than it has', () => {
    const array = ['a', 'b', 'c'];
    expect(_.last(array, 5)).toEqual(array);  
  });
});