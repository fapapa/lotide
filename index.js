const assertArraysEqual = require('./assertArraysEqual.js');
const assertEqual = require('./assertEqual.js');
const assertObjectsEqual = require('./assertObjectsEqual.js');
const countLetters = require('./countLetters.js');
const eqArrays = require('./eqArrays.js');
const eqObjects = require('./eqObjects.js');
const findKey = require('./findKey.js');
const findKeyByValue = require('./findKeyByValue.js');
const flatten = require('./flatten.js');
const head   = require('./head');
const letterPositions = require('./letterPositions.js');
const map = require('./map.js');
const middle = require('./middle');
const tail   = require('./tail');
const takeUntil = require('./takeUntil.js');
const without = require('./without.js');

module.exports = {
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  assertObjectsEqual: assertObjectsEqual,
  countLetters: countLetters,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue,
  flatten: flatten,
  head:   head,
  letterPositions: letterPositions,
  map: map,
  middle: middle,
  tail:   tail,
  takeUntil: takeUntil,
  without: without
};
