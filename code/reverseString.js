//reverse a string

const reverseString = function (str) {
  let reversedResult = ''
  for (let i = str.length-1; i >= 0; i--) {
    reversedResult += str[i]
  }
  return reversedResult;
}

module.exports = reverseString;