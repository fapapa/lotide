const flatten = function(array) {
  return array.reduce((flattened, el) => {
    if (Array.isArray(el)) {
      flatten(el).forEach((nestedEl) => flattened.push(nestedEl));
    } else {
      flattened.push(el);
    }
    return flattened;
  }, []);
};

module.exports = flatten;
