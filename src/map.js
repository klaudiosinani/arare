'use strict';
const append = require('./append');
const curry = require('./curry');
const head = require('./head');
const isEmpty = require('./is-empty');
const notArr = require('./not-arr');
const tail = require('./tail');

function _map(fn, xs, acc) {
  if (isEmpty(xs)) {
    return acc;
  }
  return _map(fn, tail(xs), append(fn(head(xs)), acc));
}

function map(fn, xs) {
  if (notArr(xs)) {
    throw new TypeError('[map] Last argument must be an array');
  }
  return _map(fn, xs, []);
}

module.exports = curry(map);
