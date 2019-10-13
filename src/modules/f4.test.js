const f4 = require('./f4');

describe('f4()', () => {
  test('Gets the value at path of object.', () => {
    const result = f4({ 'a': { 'b': { 'c': 3 } } }, 'a.b.c');
    expect(result).toEqual(3);
  });
  test('Gets the value at path of object.', () => {
    const result = f4({ 'a': { 'b': { 'c': { 'd': { 'e': 1 } } } } }, 'a.b.c.d.e');
    expect(result).toEqual(1);
  });
  test('Gets the value at path of object.', () => {
    const result = f4({ 'a': { 'b': { 'c': 3 } } }, 'a.b.c.d.e');
    expect(result).toEqual(undefined);
  });
});