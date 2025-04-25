/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let a = 'anna'
  // str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  for (i = 0; i < str.length; i++) {
    if (str[i] !== str[str.length - 1 - i]) {
      return false;
    }
    return true;
  }
  // If we reach here, it means the string is a palindrome
  // because all characters matched in pairs
  return true;
}

module.exports = isPalindrome;
