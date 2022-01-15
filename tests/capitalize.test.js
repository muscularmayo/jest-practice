const capitalize = require('../code/capitalize');

test('capitalizes the first letter of the word', () => {
  expect(capitalize('caps')).toBe('Caps')
})