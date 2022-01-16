
const caesarcipher = function(str, shiftAmt) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const upperAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  let result = ''

  for(let i = 0; i< str.length; i++) {
    let currentLetter = str[i]
    let uppercaseFlag = false
    if(alphabet.indexOf(currentLetter) === -1 && upperAlphabet.indexOf(currentLetter) === -1) {
      result += currentLetter
    } else {
      if (currentLetter.toUpperCase() === currentLetter) {
        uppercaseFlag = true;
      }
      if (uppercaseFlag) {
        let currentPosition = upperAlphabet.indexOf(currentLetter)
        let shiftedPosition = currentPosition + shiftAmt;
        if (shiftedPosition > 25) {
          shiftedPosition = shiftedPosition % 26;
        } else if (shiftedPosition < 0) {
          shiftedPosition += 26;
        }
        let shiftedLetter = upperAlphabet[shiftedPosition]
        result += shiftedLetter
      } else {
        let currentPosition = alphabet.indexOf(currentLetter)
        let shiftedPosition = currentPosition + shiftAmt;
        if (shiftedPosition > 25) {
          shiftedPosition = shiftedPosition % 26;
        } else if (shiftedPosition < 0) {
          shiftedPosition += 26;
        }
        let shiftedLetter = alphabet[shiftedPosition]
        result += shiftedLetter
      }

    }

  }

  return result;

}

// output input constraint and exceptions
// we're given a string and a corresponding integer that tells us how much to shift the letters
// abc,1 becomes bcd for example
// i can loop through the word and match it to my alphabet array and reconstruct the word based on that probably


module.exports = caesarcipher

