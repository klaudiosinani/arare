'use strict';
const curry = require('./curry');
const isInt = require('./is-int');
const not = require('./not');

function notInt(x) {
  return not(isInt(x));
}

module.exports = curry(notInt);
