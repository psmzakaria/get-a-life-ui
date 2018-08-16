const sortCountAndDate = (object, key) => {
  return object.sort((a, b) => {
    if (a[key].length < b[key].length) return 1;
    else if (a[key].length === b[key].length) {
      return a.date > b.date ? 1 : -1;
    }
    return -1;
  });
};

module.exports = { sortCountAndDate };
