'use strict';
const and = require('./and');
const curry = require('./curry');
const head = require('./head');
const isEmpty = require('./is-empty');
const tail = require('./tail');
const notArr = require('./not-arr');
const notStr = require('./not-str');

function _dropWhile(fn, xs) {
  if (isEmpty(xs)) {
    return xs;
  }
  return fn(head(xs)) ? dropWhile(fn, tail(xs)) : xs;
}

function dropWhile(fn, xs) {
  if (and(notArr(xs), notStr(xs))) {
    throw new TypeError('[dropWhile] Last argument must be an array or a string');
  }
  return _dropWhile(fn, xs);
}

module.exports = curry(dropWhile);
