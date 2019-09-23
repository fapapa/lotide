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

const middle = function(arr) {
  let len = arr.length;

  if (len < 3) return [];

  if (len % 2 === 1) {
    return [ arr[Math.floor(len / 2)] ];
  } else {
    return arr.slice((Math.floor(len / 2) - 1), (Math.floor(len / 2) + 1));
  }
};

module.exports = middle;
