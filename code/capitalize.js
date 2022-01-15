function capitalize (str) {
  let capitalizedWord = ''
  if (str.length > 0) {
    capitalizedWord = str.slice(0,1).toUpperCase() + str.slice(1).toLowerCase()
  }
  return capitalizedWord
}

module.exports = capitalize