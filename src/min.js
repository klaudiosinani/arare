'use strict';
const curry = require('./curry');

function min(x, y) {
  return x < y ? x : y;
}

module.exports = curry(min);
