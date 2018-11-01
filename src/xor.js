'use strict';
const bool = require('./bool');
const curry = require('./curry');
const uneq = require('./uneq');

function xor(x, y) {
  return uneq(bool(x), bool(y));
}

module.exports = curry(xor);
