'use strict';
const curry = require('./curry');
const lt = require('./lt');

function isNeg(x) {
  return lt(x, 0);
}

module.exports = curry(isNeg);
