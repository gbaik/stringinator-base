const _ = require('../../underbar');

describe('filter()', () => {
  it('filters an array to odd numbers', () => {
    const nums = [2, 4, 5, 6, 7, 8, 10, 11];
    expect(_.filter(nums, num => num % 2 === 1)).toEqual([5, 7, 11]);
  });

  it('filters an object to only numeric values', () => {
    const characterAttributes = {
      name: 'Billy',
      honorific: 'The Great Magnificient',
      race: 'goat',
      class: 'god',
      strength: 100,
      constitution: 98,
      dexterity: 96,
      intelligence: 999,
      wisdom: 998,
      charisma: 99
    };

    const abilityScores = _.filter(characterAttributes, (value) => !isNaN(value));
    expect(abilityScores).toEqual([100, 98, 96, 999, 998, 99]);
  });
});