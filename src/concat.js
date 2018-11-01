'use strict';
const and = require('./and');
const curry = require('./curry');
const notArr = require('./not-arr');
const notStr = require('./not-str');
const str = require('./str');

function _concatArr(xs, ys) {
  if (and(notArr(ys), notStr(ys))) {
    throw new TypeError('[concat] Last argument must be an array or a string');
  }
  return xs.concat(ys);
}

function _concatStr(xs, ys) {
  if (and(notArr(ys), notStr(ys))) {
    throw new TypeError('[concat] Last argument must be an array or a string');
  }
  return str(xs) + str(ys);
}

function concat(xs, ys) {
  if (and(notArr(xs), notStr(xs))) {
    throw new TypeError('[concat] First argument must be an array or a string');
  }
  return notStr(xs) ? _concatArr(xs, ys) : _concatStr(xs, ys);
}

module.exports = curry(concat);
