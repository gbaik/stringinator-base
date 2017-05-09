const _ = require('../../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [1, 2, 3, 3, 2, 5, 1];
    expect(_.uniq(nums)).toEqual([1, 2, 3, 5]);
  });
});