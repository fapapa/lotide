const assertEqual = function(actual, expected) {
  let msg;

  if (actual === expected) {
    msg = `👍👍👍Assertion Passed: ${actual} === ${expected}👍👍👍`;
  } else {
    msg = `☢☢☢Assertion Failed: ${actual} !== ${expected}☢☢☢`;
  }

  console.log(msg);
};

const findKey = function(obj, callback) {
  for (const key in obj) {
    if (callback(obj[key])) {
      return key;
    }
  }

  return undefined;
};

module.exports = findKey;

// let obj1 = {
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// };
// assertEqual(findKey(obj1, x => x.stars === 2), "noma");

// let obj2 = {
//   drama: "The Wire",
//   comedy: "The Office",
//   bestShowEver: "Breaking Bad"
// };
// assertEqual(findKey(obj2, x => x === "Breaking Bad"), "bestShowEver");
