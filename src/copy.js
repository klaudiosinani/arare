'use strict';
const and = require('./and');
const curry = require('./curry');
const notArr = require('./not-arr');
const notObj = require('./not-obj');

function copy(xs) {
  if (and(notArr(xs), notObj(xs))) {
    throw new TypeError('[copy] Argument must be an array or a plain object');
  }
  return notArr(xs) ? Object.assign({}, xs) : [...xs];
}

module.exports = curry(copy);
