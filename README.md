# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is
_not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings
at Lighthouse Labs.

## Usage

**Install it:**

`npm install @fapapa/lotide`

**Require it:**

`const _ = require('@fapapa/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(actualArr, expectedArr)`: Deeply checks the equality of the
  two passed-in arrays and logs to the console either a passed or failed message
* `assertEqual(actual, expected)`: For primitive values; Checks for strict
  equality between the two passed-in values.
* `assertObjectsEqual(actualObj, expectedObj)`: Deeply checks the equality the
  two passed-in objects
* `countLetters(string)`: Given `string` returns an object with each unique
  letter in string as a property, with the number of times that letter appears
  in the string as a value
* `countOnly(allItems, itemsToCount)`: Returns an object with counts for all the
  items in array `allItems`, where `itemsToCount[*allItems[i]*]` returns true
* `eqArrays(actual, expected)`: Deeply checks the equality of the two passed in
  arrays and returns true or false
* `eqObjects(actual, expected)`: Deeply checks the equality of the two passed in
  objects and returns true or false
* `findKey(obj, callback)`: Returns the first property for `obj` where the
  callback returns true
* `findKeyByValue(obj, val)`: Returns the first property in `obj` where its
  value is equal to `val`
* `flatten(array)`: Flattens multi-dimensional `array`
* `head(array)`: Returns the value at index 0 of `array`
* `letterPositions(string)`: Returns an object corresponding to `string` where
  each property is a unique letter of string, with the number of times it
  appears in string
* `map(array, callback)`: Passes in each element of `array` to `callback` and
  puts the return value of `callback` into a new array, and returns it
* `middle(arr)`: Returns the middle one (for odd-length arrays) or two (for
  even-length arrays) elements of `array`
* `tail(arr)`: Returns everything but the first element of `arr`
* `takeUntil(array, callback)`: Returns all the items of `array` in a new array
  until `callback` returns a falsey value
* `without(array, itemsToRemove)`: Returns an array with all items in `array`
  except those that are also in `itemsToremove`

