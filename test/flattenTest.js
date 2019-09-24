const assert = require('chai').assert;
const flatten = require('../flatten.js');

describe('#flatten', () => {
  it('should return a single-dimensional array from a multi-dimensional array', () => {
    assert.deepEqual(flatten([1, 2, [3, [4]], 5, [6]]), [1, 2, 3, 4, 5, 6]);
  });
});
