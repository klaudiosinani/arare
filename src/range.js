'use strict';
const add = require('./add');
const append = require('./append');
const curry = require('./curry');
const eq = require('./eq');
const gte = require('./gte');
const lt = require('./lt');
const lte = require('./lte');
const or = require('./or');

function _range(x, y, i, acc, fn) {
  if (fn(x, y)) {
    return acc;
  }
  return _range(add(x, i), y, i, append(x, acc), fn);
}

function range(x, y, i) {
  if (or(eq(i, 0), eq(x, y))) {
    return [];
  }

  if (lt(i, 0)) {
    return _range(x, y, i, [], lte);
  }

  return _range(x, y, i, [], gte);
}

module.exports = curry(range);
