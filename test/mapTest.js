const assert = require('chai').assert;
const map = require('../map.js');

describe('#map', () => {
  it('should put the return value of the callback in a new array and return it', () => {
    const words = ["ground", "control", "to", "major", "tom"];
    const results1 = map(words, word => word[0]);
    assert.deepEqual(results1, ['g', 'c', 't', 'm', 't']);
  });
});
