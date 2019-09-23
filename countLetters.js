const assertEqual = function(actual, expected) {
  let msg;

  if (actual === expected) {
    msg = `👍👍👍Assertion Passed: ${actual} === ${expected}👍👍👍`;
  } else {
    msg = `☢☢☢Assertion Failed: ${actual} !== ${expected}☢☢☢`;
  }

  console.log(msg);
};

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

// let sample = "lighthouse in the house";
// assertEqual(countLetters(sample)['l'], 1);
// assertEqual(countLetters(sample)['h'], 4);
