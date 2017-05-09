const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Joe', age: 34},
      { name: 'Schmoe', age: 21},
      { name: 'Toe', age: 78}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([34, 21, 78]);  
  });

});