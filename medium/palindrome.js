/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/


function isPalindrome(str) {
  let a = 'anna'
  str=str.replace(/\W/g, '').toLowerCase()
  for (i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
    return true;
  }

  return true;
}


// function isPalindrome(str) {
//   let a = 'anna'
//   str = str.replace(/\W/g, '').toLowerCase()
//   return str === str.split('').reverse().join('')
// }


module.exports = isPalindrome;
