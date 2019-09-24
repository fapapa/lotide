const assert = require('chai').assert;
const eqObjects = require('../eqObjects.js');

describe('#eqObjects', () => {
  it('should return `true` when two objects with the same property/value pairs', () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };

    assert.isTrue(eqObjects(ab, ba));
  });
});


// // Primitives
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false);

// // Arrays
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false
// assertEqual(eqObjects(cd, cd2), false);

// // Objects
// const ef = { e: "1", f: { g: 2, h: 3 } };
// const fe = { f: { g: 2, h: 3 }, e: "1" };
// assertEqual(eqObjects(ef, fe), true);

// eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => true

// eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 }); // => false
// eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }); // => false
