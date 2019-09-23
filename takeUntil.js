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

const takeUntil = function(array, callback) {
  let newArray = [];

  for (let i = 0; !callback(array[i]); i++) {
    newArray.push(array[i]);
  }

  return newArray;
};

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// assertArraysEqual(results1, [1, 2, 5, 7, 2]);

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
