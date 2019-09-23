const assertArraysEqual = require('../assertArraysEqual.js');
const assertEqual = require('../assertEqual.js');

assertEqual(assertArraysEqual([1, 2, 3], [1, 2]), "☢☢☢Assertion Failed: [${actual}] !== [${expected}]☢☢☢");
