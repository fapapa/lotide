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

const map = function(arr, callback) {
  const results = [];

  for (let item of arr) {
    results.push(callback(item));
  }

  return results;
};

module.exports = map;

// const words = ["ground", "control", "to", "major", "tom"];
// const results1 = map(words, word => word[0]);
// assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']);

// const nums = [1, 2, 3];
// assertArraysEqual(map(nums, (n) => n * 3), [3, 6, 9]);

// const truncatedDays = ["Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur", "Sun"];
// assertArraysEqual(map(truncatedDays, (day) => day + "day"),
//                   ["Monday",
//                    "Tuesday",
//                    "Wednesday",
//                    "Thursday",
//                    "Friday",
//                    "Saturday",
//                    "Sunday"]
//                  );
