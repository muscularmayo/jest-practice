const caesarcipher = require('../code/caesarcipher')

test('it can shift by 1', () => {
  expect(caesarcipher('defend the east wall of the castle', 1)).toBe('efgfoe uif fbtu xbmm pg uif dbtumf')
  expect(caesarcipher('abcdefghijklmnopqrstuvwxyz', 1)).toBe('bcdefghijklmnopqrstuvwxyza')
})