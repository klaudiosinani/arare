'use strict';
const curry = require('./curry');
const not = require('./not');
const xor = require('./xor');

function xnor(x, y) {
  return not(xor(x, y));
}

module.exports = curry(xnor);
