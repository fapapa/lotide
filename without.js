const without = function(source, itemsToRemove) {
  return source.reduce((result, item) => {
    if (itemsToRemove.indexOf(item) < 0) result.push(item);
    return result;
  }, []);
};

module.exports = without;
