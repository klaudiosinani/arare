'use strict';
const arity = require('./arity');
const curry = require('./curry');

function binary(fn) {
  return arity(2, fn);
}

module.exports = curry(binary);
