'use strict';
const and = require('./and');
const curry = require('./curry');
const eq = require('./eq');
const head = require('./head');
const isEmpty = require('./is-empty');
const len = require('./len');
const notArr = require('./not-arr');
const notStr = require('./not-str');
const tail = require('./tail');
const take = require('./take');

function _includesArr(x, xs) {
  if (isEmpty(xs)) {
    return false;
  }
  return eq(x, head(xs)) ? true : _includesArr(x, tail(xs));
}

function _includesStr(x, xs) {
  if (isEmpty(xs)) {
    return false;
  }
  return eq(x, take(len(x), xs)) ? true : _includesStr(x, tail(xs));
}

function includes(x, xs) {
  if (and(notArr(xs), notStr(xs))) {
    throw new TypeError('[includes] Last argument must be an array or a string');
  }
  return notArr(xs) ? _includesStr(x, xs) : _includesArr(x, xs);
}

module.exports = curry(includes);
