const findKeyByValue = function(obj, val) {
  for (const property in obj) {
    if (obj[property] === val) return property;
  }

  return undefined;
};

module.exports = findKeyByValue;
