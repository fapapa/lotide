const countOnly = function(allItems, itemsToCount) {
  return allItems.reduce((itemsCount, item) => {
    if (itemsToCount[item]) {
      if (itemsCount[item]) {
        itemsCount[item]++;
      } else {
        itemsCount[item] = 1;
      }
    }
    return itemsCount;
  }, {});
};

module.exports = countOnly;
