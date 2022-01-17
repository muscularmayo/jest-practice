const analyzeArray = require('../code/analyzeArray')

test('it returns an object', () => {
  expect(typeof analyzeArray([1,2,3,4])).toBe('object')
  expect(typeof analyzeArray([2,5,10,4])).toBe('object')

})

test('it gives the correct average value', () => {
  expect(analyzeArray([1,2,3,4,5]).average).toBe(3)
  expect(analyzeArray([12,213,323,455,17]).average).toBe(204)
  expect(analyzeArray([1]).average).toBe(1)
  expect(analyzeArray([-1,2,313,518]).average).toBe(208)

})

test('it gives the correct min value', () => {
  expect(analyzeArray([1,2,3,4,5]).min).toBe(1)
  expect(analyzeArray([-1,21,-1,0,-5]).min).toBe(-5)
  expect(analyzeArray([0,-1141,-1140,0,-5]).min).toBe(-1141)
  expect(analyzeArray([0]).min).toBe(0)



})

test('it gives the correct max value', () => {
  expect(analyzeArray([1,2,3,4,5]).max).toBe(5)
  expect(analyzeArray([500]).max).toBe(500)
  expect(analyzeArray([11,201,.3,400,51]).max).toBe(400)

})

test('it gives the correct length', () => {
  expect(analyzeArray([1,2,3,4,5]).length).toBe(5)
  expect(analyzeArray([1]).length).toBe(1)

})