const assertEqual = require('../assertEqual.js');
const eqArrays = require('../eqArrays.js');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([], []), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);
assertEqual(eqArrays(["hi"], ["hi"]), true);
assertEqual(eqArrays([], [1]), false);

eqArrays([[2, 3], [4]], [[2, 3], [4]]); // => true

eqArrays([[2, 3], [4]], [[2, 3], [4, 5]]); // => false
eqArrays([[2, 3], [4]], [[2, 3], 4]); // => false
