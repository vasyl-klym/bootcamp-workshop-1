const mergesObjects = require('./merges-objects');

describe('mergesObjects()', () => {
  test('Merges two objects', () => {
    const result = mergesObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 0, b: 4, d: 5, }]);
    expect(result).toEqual({ a: 1, b: 2, c:4, d: 5 });
  });
});