const assert = require('chai').assert;
const countOnly = require('../countOnly.js');

describe('#countOnly', () => {
  it('should return the number of times a property appears in an array', () => {
    const firstNames = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe"
    ];

    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true });

    assert.equal(result1["Jason", 1]);
  });
});
