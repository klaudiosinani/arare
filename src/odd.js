'use strict';
const curry = require('./curry');
const even = require('./even');
const not = require('./not');

function odd(x) {
  return not(even(x));
}

module.exports = curry(odd);
