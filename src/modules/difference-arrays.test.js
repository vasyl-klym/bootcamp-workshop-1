const diffArrays = require('./difference-arrays');
describe('diffArrays()', () => {
  test('Find difference of two arrays', () => {
    const result = diffArrays([2, 1, 3], [2, 3, 4]);
    expect(result).toEqual([1]);
  });
});