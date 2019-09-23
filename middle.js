const middle = function(arr) {
  let len = arr.length;

  if (len < 3) return [];

  if (len % 2 === 1) {
    return [ arr[Math.floor(len / 2)] ];
  } else {
    return arr.slice((Math.floor(len / 2) - 1), (Math.floor(len / 2) + 1));
  }
};

module.exports = middle;
