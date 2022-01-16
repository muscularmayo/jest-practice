const caesarcipher = require('../code/caesarcipher')

test('it can shift by 1', () => {
  expect(caesarcipher('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf')
  expect(caesarcipher('abcdefghijklmnopqrstuvwxyz', 1)).toBe('bcdefghijklmnopqrstuvwxyza')
})

test('it maintains the same upper or lower case', () => {
  expect(caesarcipher('Defend the East Wall of The Castle', 1)).toBe('Efgfoe uif Fbtu Xbmm pg Uif Dbtumf')
  expect(caesarcipher('AbCdEfGhIjKlMnOpQrStUvWxYz', 1)).toBe('BcDeFgHiJkLmNoPqRsTuVwXyZa')

})