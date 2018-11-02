'use strict';
const append = require('./append');
const concat = require('./concat');
const curry = require('./curry');
const head = require('./head');
const isEmpty = require('./is-empty');
const notArr = require('./not-arr');
const tail = require('./tail');

function _mergeBy(fn, xs, ys, acc) {
  if (isEmpty(xs)) {
    return concat(acc, ys);
  }

  if (isEmpty(ys)) {
    return concat(acc, xs);
  }

  if (fn(head(xs), head(ys))) {
    return _mergeBy(fn, tail(xs), ys, append(head(xs), acc));
  }

  return _mergeBy(fn, xs, tail(ys), append(head(ys), acc));
}

function mergeBy(fn, xs, ys) {
  if (notArr(xs)) {
    throw new TypeError('[mergeBy] Second argument must be an array');
  }

  if (notArr(ys)) {
    throw new TypeError('[mergeBy] Last argument must be an array');
  }

  return _mergeBy(fn, xs, ys, []);
}

module.exports = curry(mergeBy);
