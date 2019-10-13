const f5 = require('./f5');

describe('f5()', () => {
  test('Sets the value at path of object.', () => {
    const result = f5({ 'a': { 'b': { 'c': 3 } } }, 'a.b.c', 5);
    expect(result).toEqual({ a: { b: { c: 5 } } });
  });
  test('Sets the value at path of object.', () => {
    const result = f5({ 'a': { 'b': { 'c': 3 } } }, 'a.b.c.d.e', 10);
    expect(result).toEqual({ a: { b: { c: { d: { e: 10 } } } } });
  });
});