const deepMerge = require('./deep-merge');

describe('deepMerge()', () => {
  test('function to support deep operations', () => {
    const result = deepMerge({ a: { b: 2 } }, { a: { b: 1, c: 3 } }, { a: { b: 3, d: 5}});
    expect(result).toEqual({ a: { b: 2, c: 3, d: 5 } });
  });
  test('function to support deep operations', () => {
    const result = deepMerge({ a: { b: 2 } }, { a: { b: 1, c: 3 } });
    expect(result).toEqual({ a: { b: 2, c: 3 } });
  });
  test('function to support deep operations', () => {
    const result = deepMerge({ a: { b: 2 } }, { a: { b: 1, c: 3 } }, { a: { b: 3, d: 5}}, { a: { e: 5, b: 6, d: 4}});
    expect(result).toEqual({ a: { b: 2, c: 3, d: 5, e: 5 } });
  });
});