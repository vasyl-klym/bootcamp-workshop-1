const sumArray = require('./sum-array');

describe('sumArray()', () => {
  test('works well with empty array', () => {
    const result = sumArray([]);
    expect(result).toBe(0);
  });
  test('correctly computes sum of 10 numbers', () => {
    const result = sumArray([10,10,10,10,10,100,100,100,100,100]);
    expect(result).toBe(550);
  });
});