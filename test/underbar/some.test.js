const _ = require('../../underbar');

describe('some()', () => {
  it('returns true if any number is even', () => {
    const nums = [1, 2, 3, 5];
    expect(_.some(nums, num => num % 2 === 0)).toBe(true);
  });

  it('returns false if no number is odd', () => {
    const nums = [1, 3, 5, 7];
    expect(_.some(nums, num => num % 2 === 0)).toBe(false);
  });

});