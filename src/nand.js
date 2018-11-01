'use strict';
const and = require('./and');
const curry = require('./curry');
const not = require('./not');

function nand(x, y) {
  return not(and(x, y));
}

module.exports = curry(nand);
