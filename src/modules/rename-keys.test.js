const renameKeys = require('./rename-keys');

describe('renameKeys()', () => {
  test('function that recursively renames keys and returns a new modified object.', () => {
    const result = renameKeys({ 'a': { 'b': { 'c': 5 } } }, { 'c': 'b' });
    expect(result).toEqual({ 'a': { 'b': { 'b': 5 } } });
  });
  // test('function that recursively renames keys and returns a new modified object.', () => {
  //   const result = renameKeys({ 'a': { 'b': { 'c': 5 }, 'c': { 'd': 6 } } }, { 'c': 'b' });
  //   expect(result).toEqual({ 'a': { 'c': { 'd': 6 } } });
  // })
});