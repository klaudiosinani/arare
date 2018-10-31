'use strict';
const xcurry = require('./xcurry');

function curry(fn) {
  return xcurry(fn.length, fn);
}

module.exports = xcurry(1, curry);
