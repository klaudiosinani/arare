'use strict';
const and = require('./and');
const curry = require('./curry');
const includes = require('./includes');
const not = require('./not');
const notArr = require('./not-arr');
const notStr = require('./not-str');

function excludes(x, xs) {
  if (and(notArr(xs), notStr(xs))) {
    throw new TypeError('[excludes] Last argument must be an array or a string');
  }
  return not(includes(x, xs));
}

module.exports = curry(excludes);
