const _ = require('../../underbar');

describe('every()', () => {
  describe('processing an array of numbers', () => {
    it('will return true if no callback is supplied', () => {
      const nums = [2, 4, 6, 8];
      expect(_.every(nums)).toBe(true);
    });

    it('returns true if all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [2, 4, 6, 8];
      expect(_.every(nums, num => num % 2 === 0)).toBe(true);
    });

    it('returns false if not all numbers in an array are odd and we test for odd numbers', () => {
      const nums = [2, 3, 4, 6, 8];
      expect(_.every(nums, num => num % 2 === 0)).toBe(false);
    });

  });
});