const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue.js');

describe('#findKeybyvalue', () => {
  it('should return the first property who\'s value matches the value', () => {
    const test = {
      firstName: "Fabio",
      lastName: "Papa"
    };

    assert.equal(findKeyByValue(test, "Fabio"), "firstName");
  });
});
