const _ = require('../../underbar');

describe('reject()', () => {
  it('rejects odd numbers from an array', () => {
    const nums = [1, 2, 3, 3, 2, 5, 1];
    expect(_.reject(nums, num => num % 2 === 1)).toEqual([2, 2]);
  });

  it('rejects null values from an object', () => {
    const theList = {
      person1: 'Sharon',
      person2: null,
      person3: 'Kary',
      person4: null,
      person5: null
    };

    const theListList = _.reject(theList, (value) => value === null);
    expect(theListList).toEqual(['Sharon', 'Kary']);
  });
});