const countLetters = require('../countLetters.js');
const assert = require('chai').assert;

describe('#countLetters', () => {
  it('should return 1 for the letter "l" given the string "lighthouse in the house"', () => {
    const str = "lighthouse in the house";
    assert.equal(countLetters(str)['l'], 1);
  });

  it('should return 4 for the letter "l" given the string "lighthouse in the house"', () => {
    const str = "lighthouse in the house";
    assert.equal(countLetters(str)["h"], 4);
  });
});
