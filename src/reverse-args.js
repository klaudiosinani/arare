'use strict';
const applyArgs = require('./apply-args');
const curry = require('./curry');
const reverse = require('./reverse');

function reverseArgs(fn) {
  return (...xs) => {
    return applyArgs(reverse(xs), fn);
  };
}

module.exports = curry(reverseArgs);
