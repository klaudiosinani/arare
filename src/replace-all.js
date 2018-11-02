'use strict';
const and = require('./and');
const append = require('./append');
const curry = require('./curry');
const drop = require('./drop');
const empty = require('./empty');
const eq = require('./eq');
const head = require('./head');
const isEmpty = require('./is-empty');
const len = require('./len');
const notArr = require('./not-arr');
const notStr = require('./not-str');
const tail = require('./tail');
const take = require('./take');

function _replaceAllArr(x, rep, xs, acc) {
  if (isEmpty(xs)) {
    return acc;
  }

  if (eq(x, head(xs))) {
    return _replaceAllArr(x, rep, tail(xs), append(rep, acc));
  }

  return _replaceAllArr(x, rep, tail(xs), append(head(xs), acc));
}

function _replaceAllStr(x, rep, xs, acc) {
  if (isEmpty(xs)) {
    return acc;
  }

  if (eq(take(len(x), xs), x)) {
    return _replaceAllStr(x, rep, drop(len(x), xs), append(rep, acc));
  }

  return _replaceAllStr(x, rep, tail(xs), append(head(xs), acc));
}

function replaceAll(x, rep, xs) {
  if (and(notArr(xs), notStr(xs))) {
    throw new TypeError('[replaceAll] Last argument must be an array or a string');
  }

  if (notArr(xs)) {
    return _replaceAllStr(x, rep, xs, empty(xs));
  }

  return _replaceAllArr(x, rep, xs, empty(xs));
}

module.exports = curry(replaceAll);
