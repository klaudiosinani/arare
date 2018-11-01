'use strict';
const curry = require('./curry');
const isUndef = require('./is-undef');
const not = require('./not');

function isDef(x) {
  return not(isUndef(x));
}

module.exports = curry(isDef);
