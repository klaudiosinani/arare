'use strict';
const and = require('./and');
const curry = require('./curry');
const ext = require('./ext');
const notArr = require('./not-arr');
const notStr = require('./not-str');
const num = require('./num');

function getNth(i, xs) {
  if (and(notArr(xs), notStr(xs))) {
    throw new TypeError('[getNth] Last argument must be an array or a string');
  }
  return ext(num(i), xs);
}

module.exports = curry(getNth);
