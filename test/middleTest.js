const assert = require('chai').assert;
const middle = require('../middle.js');

describe('#middle', () => {
  it('returns the middle item of an odd-length array', () => {
    const odd = [1, 2, 3];
    assert.deepEqual(middle(odd), [2]);
  });

  it('returns the middle two elements of an even-length array', () => {
    const even = [1, 2, 3, 4];
    assert.deepEqual(middle(even), [2, 3]);
  });

  it('returns an empty array when a single-element array is passed in', () => {
    const one = [1];
    assert.deepEqual(middle(one), []);
  });

  it('returns an empty array when a two-element array is passed in', () => {
    const two = [2];
    assert.deepEqual(middle(two), []);
  });
});
