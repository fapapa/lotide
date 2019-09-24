const assert = require('chai').assert;
const letterPositions = require('../letterPositions.js');

describe('#letterPositions', () => {
  it('should return [1] for "e" when sent the string "hello"', () => {
    assert.deepEqual(letterPositions("hello")['e'], [1]);
  });

  it('should return [2, 3] for "l" when sent the string "hello"', () => {
    assert.deepEqual(letterPositions("hello")['l'], [2, 3]);
  });
});
