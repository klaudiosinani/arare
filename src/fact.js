'use strict';
const curry = require('./curry');
const decr = require('./decr');
const lte = require('./lte');
const mult = require('./mult');

function _fact(x, acc) {
  if (lte(x, 0)) {
    return acc;
  }
  return _fact(decr(x), mult(acc, x));
}

function fact(x) {
  return _fact(x, 1);
}

module.exports = curry(fact);
