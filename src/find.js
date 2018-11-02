'use strict';
const and = require('./and');
const curry = require('./curry');
const head = require('./head');
const isEmpty = require('./is-empty');
const notArr = require('./not-arr');
const notStr = require('./not-str');
const tail = require('./tail');

function _find(fn, xs) {
  if (isEmpty(xs)) {
    return undefined;
  }
  return fn(head(xs)) ? head(xs) : _find(fn, tail(xs));
}

function find(fn, xs) {
  if (and(notArr(xs), notStr(xs))) {
    throw new TypeError('[find] Last argument must be an array or string');
  }
  return _find(fn, xs);
}

module.exports = curry(find);
