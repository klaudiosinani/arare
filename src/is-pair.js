'use strict';
const and = require('./and');
const curry = require('./curry');
const eq = require('./eq');
const isArr = require('./is-arr');
const len = require('./len');

function isPair(xs) {
  return and(isArr(xs), eq(len(xs), 2));
}

module.exports = curry(isPair);
