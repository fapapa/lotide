const assert = require('chai').assert;
const findKey = require('../findKey.js');

describe('#findKey', () => {
  it('should return the first property name in the passed in object for which the callback returns true', () => {
    let obj1 = {
      "Blue Hill": { stars: 1 },
      "Akaleri":   { stars: 3 },
      "noma":      { stars: 2 },
      "elBulli":   { stars: 3 },
      "Ora":       { stars: 2 },
      "Akelarre":  { stars: 3 }
    };

    assert.equal(findKey(obj1, x => x.stars === 2), "noma");
  });
});
