'use strict';
const and = require('./and');
const curry = require('./curry');
const drop = require('./drop');
const notArr = require('./not-arr');
const notStr = require('./not-str');
const pair = require('./pair');
const take = require('./take');

function partitionAt(idx, xs) {
  if (and(notArr(xs), notStr(xs))) {
    throw new TypeError('[partitionAt] Last argument must an array or a string');
  }
  return pair(take(idx, xs), drop(idx, xs));
}

module.exports = curry(partitionAt);
