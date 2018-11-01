'use strict';
const arity = require('./arity');
const curry = require('./curry');

function unary(fn) {
  return arity(1, fn);
}

module.exports = curry(unary);
