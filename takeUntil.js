const takeUntil = function(array, callback) {
  let newArray = [];

  for (let i = 0; !callback(array[i]); i++) {
    newArray.push(array[i]);
  }

  return newArray;
};

module.exports = takeUntil;
