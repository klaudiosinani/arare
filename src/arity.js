'use strict';
const applyArgs = require('./apply-args');
const curry = require('./curry');
const take = require('./take');

function arity(x, fn) {
  return (...args) => {
    return applyArgs(take(x, args), fn);
  };
}

module.exports = curry(arity);
