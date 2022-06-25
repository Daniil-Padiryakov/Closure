'use strict';

const array = () => {
  const data = [];
  const arr = (i) => data[i];
  arr.push = (item) => data.push(item);
  arr.pop = () => data.splice(-1, 1)[0];
  return arr;
};

module.exports = { array };
