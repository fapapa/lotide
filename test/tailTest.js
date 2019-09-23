const assertEqual = require('../assertEqual.js');
const tail = require('../tail.js');

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
