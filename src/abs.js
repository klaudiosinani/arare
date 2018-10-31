'use strict';
const curry = require('./curry');

function abs(x) {
  return Math.abs(x);
}

module.exports = curry(abs);
