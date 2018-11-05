'use strict';
const and = require('./and');
const prepend = require('./prepend');
const applyArgs = require('./apply-args');
const curry = require('./curry');
const flip = require('./flip');
const notArr = require('./not-arr');
const notStr = require('./not-str');

function prependTo(xs, x) {
  if (and(notArr(xs), notStr(xs))) {
    throw new TypeError('[prependTo] First argument must be an array or a string');
  }

  return applyArgs([xs, x], flip(prepend));
}

module.exports = curry(prependTo);
