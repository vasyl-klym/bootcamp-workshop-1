const renameKeys = require('./rename-keys');

describe('renameKeys()', () => {
  test('function that recursively renames keys and returns a new modified object.', () => {
    const result = renameKeys({ 'a': { 'b': { 'c': 5 } } }, { 'c': 'b' });
    expect(result).toEqual({ 'a': { 'b': { 'b': 5 } } });
  });
  test('function that recursively renames keys and returns a new modified object.', () => {
    const result = renameKeys({ 'a': { 'b': { 'c': 5 }, 'c': { 'd': 6 } } }, { 'c': 'b' });
    expect(result).toEqual({ 'a': { 'b': { 'd': 6 } } });
  });
  test('function that recursively renames keys and returns a new modified object.', () => {
    const result = renameKeys({ 'a': { 'g': { 'c': { 'h': 8} }, 'b': { 'd': 6 } } }, { 'c': 'b' });
    expect(result).toEqual({ 'a': { 'g': { 'b': { 'h' : 8 } } , 'b': {'d': 6} }});
  });
  test('function that recursively renames keys and returns a new modified object.', () => {
    const result = renameKeys({ 'a': { 'b': { 'c': 5 }, 'c': { 'd': 6 } } }, { 'e': 'b' });
    expect(result).toEqual({ 'a': { 'b': { 'c': 5 }, 'c': { 'd': 6 } } });
  });
});