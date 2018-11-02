'use strict';
const curry = require('./curry');
const lte = require('./lte');
const mergeBy = require('./merge-by');

function merge(xs, ys) {
  return mergeBy(lte, xs, ys);
}

module.exports = curry(merge);

