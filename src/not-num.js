'use strict';
const curry = require('./curry');
const isNum = require('./is-num');
const not = require('./not');

function notNum(x) {
  return not(isNum(x));
}

module.exports = curry(notNum);
