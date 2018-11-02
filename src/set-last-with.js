'use strict';
const curry = require('./curry');
const decr = require('./decr');
const isEmpty = require('./is-empty');
const len = require('./len');
const setNthWith = require('./set-nth-with');

function setLastWith(fn, xs) {
  if (isEmpty(xs)) {
    throw new TypeError('[setLastWith] Last argument must be a non-empty array or a non-empty string');
  }
  return setNthWith(decr(len(xs)), fn, xs);
}

module.exports = curry(setLastWith);
