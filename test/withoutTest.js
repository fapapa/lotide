const assert = require('chai').assert;
const without = require('../without.js');

describe('#without', () => {
  it('should return array1 without elements from array2', () => {
    assert.deepEqual(without([1, 2, 3], [1]), [2, 3]);
  });
});
