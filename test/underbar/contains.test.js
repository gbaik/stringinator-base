const _ = require('../../underbar');

describe('contains()', () => {
  it('returns true if an array contains the target', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(_.contains(nums, 4)).toBe(true);
  });

  it('returns false if an array does not contain the target', () => {
    const nums = [1, 2, 3, 4, 5];
    expect(_.contains(nums, 6)).toBe(false);
  });

  it('returns true if the target value is among the values of an object', () => {
    const fmab = {
      'person1': 'Winry',
      'person2': 'Edward',
      'person3': 'Alphonse',
      'person4': 'Pinako'
    };
    expect(_.contains(fmab, 'Edward')).toBe(true);
  });

  it('returns false if the target value is not among the values of an object', () => {
    const fmab = {
      'person1': 'Winry',
      'person2': 'Edward',
      'person3': 'Alphonse',
      'person4': 'Pinako'
    };
    expect(_.contains(fmab, 'Van Hohenheim')).toBe(false);
  });

});