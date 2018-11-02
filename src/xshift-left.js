'use strict';
const and = require('./and');
const append = require('./append');
const curry = require('./curry');
const decr = require('./decr');
const head = require('./head');
const isEmpty = require('./is-empty');
const len = require('./len');
const lte = require('./lte');
const mod = require('./mod');
const notArr = require('./not-arr');
const notStr = require('./not-str');
const tail = require('./tail');

function _xshiftLeft(n, xs) {
  if (lte(n, 0)) {
    return xs;
  }
  return _xshiftLeft(decr(n), append(head(xs), tail(xs)));
}

function xshiftLeft(n, xs) {
  if (and(notArr(xs), notStr(xs))) {
    throw new TypeError('[xshiftLeft] Last argument must an array or a string');
  }

  if (isEmpty(xs)) {
    return xs;
  }

  return _xshiftLeft(mod(n, len(xs)), xs);
}

module.exports = curry(xshiftLeft);
