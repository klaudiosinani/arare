'use strict';
const and = require('./and');
const curry = require('./curry');
const notArr = require('./not-arr');
const notStr = require('./not-str');

function empty(xs) {
  if (and(notArr(xs), notStr(xs))) {
    throw new TypeError('[empty] Argument must be an array or a string');
  }
  return notArr(xs) ? '' : [];
}

module.exports = curry(empty);
