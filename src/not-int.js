'use strict';
const curry1 = require('./curry-1');
const isInt = require('./is-int');
const not = require('./not');

function notInt(x) {
  return not(isInt(x));
}

module.exports = curry1(notInt);
