const calculator = require('../code/calculator')

test('it should have a working add function', () => {
  expect(calculator.add(2,3)).toBe(5)
  expect(calculator.add(3,2)).toBe(5)
  expect(calculator.add(123,231)).toBe(354)
  expect(calculator.add(1000, 2500)).toBe(3500)
})

test('it should have a working subtract function', () => {
  expect(calculator.subtract(3,1)).toBe(2)
  expect(calculator.subtract(1,3)).toBe(-2)
  expect(calculator.subtract(100,23)).toBe(77)
  expect(calculator.subtract(10000,2000)).toBe(8000)
})

test('it should have a working multiply function', () => {
  expect(calculator.multiply(10,10)).toBe(100)
  expect(calculator.multiply(2,13)).toBe(26)
  expect(calculator.multiply(25,25)).toBe(625)
  expect(calculator.multiply(0,2123135)).toBe(0);

})

test('it should have a working divide function', () => {
  expect(calculator.divide(10,10)).toBe(1)
  expect(calculator.divide(100,10)).toBe(10)
  expect(calculator.divide(250,50)).toBe(5)
  expect(calculator.divide(169,13)).toBe(13)
})