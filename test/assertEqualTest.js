const assert = require('chai').assert;
const assertEqual = require('../assertEqual.js');

describe('#assertEqual', () => {
  it('returns true when passed two identical strings', () => {
    const sameSame = "Lighthouse";
    assert.match(assertEqual(sameSame, sameSame), /passed/i);
  });
});
