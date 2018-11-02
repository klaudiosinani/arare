'use strict';
const and = require('./and');
const append = require('./append');
const curry = require('./curry');
const empty = require('./empty');
const head = require('./head');
const isEmpty = require('./is-empty');
const notArr = require('./not-arr');
const notStr = require('./not-str');
const pair = require('./pair');
const tail = require('./tail');

function _partition(fn, xs, pass, fail) {
  if (isEmpty(xs)) {
    return pair(pass, fail);
  }

  if (fn(head(xs))) {
    return _partition(fn, tail(xs), append(head(xs), pass), fail);
  }

  return _partition(fn, tail(xs), pass, append(head(xs), fail));
}

function partition(fn, xs) {
  if (and(notArr(xs), notStr(xs))) {
    throw new TypeError('[partition] Last argument must be an array or a string');
  }
  return _partition(fn, xs, empty(xs), empty(xs));
}

module.exports = curry(partition);
