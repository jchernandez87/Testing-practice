function reverseString(str) {
  const toLower = str.toLowerCase();
  return toLower.split('').reverse().join('');
}

module.exports = reverseString;