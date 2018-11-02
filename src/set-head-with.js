'use strict';
const curry = require('./curry');
const isEmpty = require('./is-empty');
const setNthWith = require('./set-nth-with');

function setHeadWith(fn, xs) {
  if (isEmpty(xs)) {
    throw new TypeError('[setHeadWith] Last argument must be a non-empty array');
  }
  return setNthWith(0, fn, xs);
}

module.exports = curry(setHeadWith);
