const interArrays = require('./intersection-array');

describe('interArrays()', () => {
  test('Find intersection of two arrays', () => {
    const result = interArrays([2, 1, 3], [2, 3, 4]);
    expect(result).toEqual([2,3]);
  });
});