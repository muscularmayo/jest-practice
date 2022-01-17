const analyzeArray = function (array) {
  const average = getAverage(array)
  const min = getMinimum(array)
  const max = getMax(array)
  const length = getLength(array)

  return {average, min, max, length}
}

const getAverage = function (array) {
  let total = array.reduce((previous, current) => {
    return previous + current;
  })
  const average = total/array.length;
  return average;
}

const getMinimum = function (array) {
  let min = array.reduce((prev, curr) => {
    if(curr < prev) {
      return curr
    } else {
      return prev
    }
  })
  return min;
}

const getMax = function (array) {
  let max = array.reduce((prev, curr) => {
    return prev > curr ? prev : curr
  })
  return max;
}

const getLength = function(array) {
  return array.length;
}

module.exports = analyzeArray