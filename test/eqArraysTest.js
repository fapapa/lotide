const assert = require('chai').assert;
const eqArrays = require('../eqArrays.js');

describe('#eqArrays', () => {
  it('returns true when passed in two identical arrays', () => {
    const duh = [1, 2, 3];
    assert.isTrue(eqArrays(duh, duh));
  });

  it('returns false when passed two different arrays', () => {
    const a = [1];
    const b = [2];
    assert.isFalse(eqArrays(a, b));
  });
});
