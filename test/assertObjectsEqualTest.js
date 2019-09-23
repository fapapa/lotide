const assert = require('chai').assert;
const assertObjectsEqual = require('../assertObjectsEqual.js');

describe('#assertObjectsEqual', () => {
  it('should print the "passed" message when objects are equal', () => {
    const obj1 = {a: 1, b: 2, c:3};
    const obj2 = {a: 1, b: 2, c:3};
    assert.match(assertObjectsEqual(obj1, obj2), /Passed/i);
  });

  it('should print the "failed" message when objects are not equal', () => {
    const obj1 = {a: 1, b: 2};
    const obj2 = {a: 1, b: 2, c: 3, d: 4};
    assert.match(assertObjectsEqual(obj1, obj2), /Failed/i);
  });

  it('should print the "failed" message when one object is empty', () => {
    const obj1 = {a: 1, b: 2, c: 3, d: 4};
    const obj2 = {};
    assert.match(assertObjectsEqual(obj1, obj2), /Failed/i);
  });

  it('should be able to handle nested objects', () => {
    const obj1 = {a: 1, b: {d: 4, e: {f: 8, g: 9}}, c: {}};
    const obj2 = {a: 1, b: {d: 4, e: {f: 8, g: 9}}, c: {}};
    assert.match(assertObjectsEqual(obj1, obj2), /Passed/i);
  });
});

// assertObjectsEqual({a: 1}, {a: 1}); // should pass
// assertObjectsEqual({a: 1}, {b: 2}); // should fail
// assertObjectsEqual({a: 1}, true); // should fail
