'use strict';
const curry = require('./curry');
const eq = require('./eq');
const len = require('./len');
const notStr = require('./not-str');
const take = require('./take');

function startsWith(x, xs) {
  if (notStr(xs)) {
    throw new TypeError('[startsWith] Last argument must be a string');
  }
  return eq(take(len(x), xs), x);
}

module.exports = curry(startsWith);
