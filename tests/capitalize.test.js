const capitalize = require('../code/capitalize');

test('capitalizes the first letter of the word', () => {
  expect(capitalize('caps')).toBe('Caps');

})

test('only the first letter is capitalized', () => {
  expect(capitalize('CAPS')).toBe('Caps');
  expect(capitalize('CaPs')).toBe('Caps');
})