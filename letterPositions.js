const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
};

const assertArraysEqual = function(actual, expected) {
  let msg;

  if (eqArrays(actual, expected)) {
    msg = `👍👍👍Assertion Passed: [${actual}] === [${expected}]👍👍👍`;
  } else {
    msg = `☢☢☢Assertion Failed: [${actual}] !== [${expected}]☢☢☢`;
  }

  console.log(msg);
};

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

assertArraysEqual(letterPositions("hello")['e'], [1]);
assertArraysEqual(letterPositions("hello")['l'], [2, 3]);
