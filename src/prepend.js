'use strict';
const and = require('./and');
const concat = require('./concat');
const curry = require('./curry');
const ite = require('./ite');
const notArr = require('./not-arr');
const notStr = require('./not-str');
const str = require('./str');

function prepend(x, xs) {
  if (and(notArr(xs), notStr(xs))) {
    throw new TypeError('[prepend] Last argument must be an array or a string');
  }
  return concat(ite(notArr(xs), str(x), [x]), xs);
}

module.exports = curry(prepend);
