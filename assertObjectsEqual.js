const eqObjects = require('./eqObjects.js');

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  let msg;

  if (eqObjects(actual, expected)) {
    msg = `👍👍👍Assertion Passed: ${inspect(actual)} === ${inspect(expected)}👍👍👍`;
    console.log(msg);
  } else {
    msg = `☢☢☢Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}☢☢☢`;
    console.log(msg);
  }

  return msg;
};

module.exports = assertObjectsEqual;
