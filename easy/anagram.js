/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  const normalize = (str) => str.toLowerCase().replace(/\s/g, '');

  const normalizedStr1 = normalize(str1);
  const normalizedStr2 = normalize(str2);

  console.log(`Normalized: ${normalizedStr1} ${normalizedStr2}`);

  if (normalizedStr1.length !== normalizedStr2.length) return false;

  return normalizedStr1.split('').sort().join('') === normalizedStr2.split('').sort().join('');
}

module.exports = isAnagram;


console.log("hello world i am testing the chrome extension for screen reccording")
