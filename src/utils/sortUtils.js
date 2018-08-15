const descSortObjPropLen = (object, key) => {
  return object.sort((a, b) => {
    return b[key].length - a[key].length;
  });
};

module.exports = { descSortObjPropLen };
