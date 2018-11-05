'use strict';
const and = require('./and');
const append = require('./append');
const applyArgs = require('./apply-args');
const curry = require('./curry');
const flip = require('./flip');
const notArr = require('./not-arr');
const notStr = require('./not-str');

function appendTo(xs, x) {
  if (and(notArr(xs), notStr(xs))) {
    throw new TypeError('[appendTo] First argument must be an array or a string');
  }

  return applyArgs([xs, x], flip(append));
}

module.exports = curry(appendTo);
