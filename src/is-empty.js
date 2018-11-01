'use strict';
const and = require('./and');
const curry = require('./curry');
const eq = require('./eq');
const isArr = require('./is-arr');
const isStr = require('./is-str');
const len = require('./len');
const or = require('./or');

function isEmpty(xs) {
  return and(or(isArr(xs), isStr(xs)), eq(len(xs), 0));
}

module.exports = curry(isEmpty);
