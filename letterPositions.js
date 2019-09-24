const letterPositions = function(string) {
  let normalizedLetters = string.toLowerCase();
  let result = {};

  for (let i = 0; i < string.length; i++) {
    if (result[normalizedLetters[i]]) {
      result[normalizedLetters[i]].push(i);
    } else {
      result[normalizedLetters[i]] = [ i ];
    }
  }

  return result;
};

module.exports = letterPositions;
