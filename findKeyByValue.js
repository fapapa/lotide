const assertEqual = function(actual, expected) {
  let msg;

  if (actual === expected) {
    msg = `👍👍👍Assertion Passed: ${actual} === ${expected}👍👍👍`;
  } else {
    msg = `☢☢☢Assertion Failed: ${actual} !== ${expected}☢☢☢`;
  }

  console.log(msg);
};

const findKeyByValue = function(obj, val) {
  for (const property in obj) {
    if (obj[property] === val) return property;
  }

  return undefined;
};

// let test = {
//   firstName: "Fabio",
//   lastName: "Papa"
// };

// assertEqual(findKeyByValue(test, "Fabio"), "");
