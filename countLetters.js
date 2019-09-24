const countLetters = function(string) {
  // Remove spaces and turn into an array
  let allLetters = string.split(' ').join('').split('');

  return allLetters.reduce((lettersCount, letter) => {
    if (lettersCount[letter]) {
      lettersCount[letter]++;
    } else {
      lettersCount[letter] = 1;
    }
    return lettersCount;
  }, {});
};

module.exports = countLetters;
