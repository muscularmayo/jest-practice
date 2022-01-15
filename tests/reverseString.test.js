const reverseString = require('../code/reverseString')

test('it reverses even length strings', () => {
  expect(reverseString('abcd')).toBe('dcba');
  expect(reverseString('Abcdefgh')).toBe('hgfedcbA')
  expect(reverseString('AB')).toBe('BA')
})

test('it reverses odd length strings', () => {
  expect(reverseString('abc')).toBe('cba');
  expect(reverseString('Abcdefg')).toBe('gfedcbA')
  expect(reverseString('ABC')).toBe('CBA')
})