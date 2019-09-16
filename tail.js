const assertEqual = function(actual, expected) {
  let msg;

  if (actual === expected) {
    msg = `👍👍👍Assertion Passed: ${actual} === ${expected}👍👍👍`;
  } else {
    msg = `☢☢☢Assertion Failed: ${actual} !== ${expected}☢☢☢`;
  }

  console.log(msg);
};

const tail = function(arr) {
  // Return a copy of arr, starting from element 1, to the end of the array
  return arr.slice(1);
};

const original = ["hello", "lighthouse", "labs"];
const tailResult = tail(original);

tailResult.forEach((el, idx) => {
  assertEqual(el, original[idx + 1]);
});
assertEqual(tailResult.length, (original.length - 1));
assertEqual(original.length, 3);

const oneEl = [1];
assertEqual(tail(oneEl).length, 0);

const emptyArr = [];
assertEqual(tail(emptyArr).length, 0);
