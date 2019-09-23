const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual.js');

// assertEqual(assertArraysEqual([1, 2, 3], [1, 2]), "☢☢☢Assertion Failed: [${actual}] !== [${expected}]☢☢☢");

describe('assertArraysEqual', () => {
  it('should return an assertion failed message if they aren\'t equal', () => {
    assert.match(assertArraysEqual([1, 2, 3], [1, 2]), /^☢☢☢Assertion Failed:/);
  });
});
