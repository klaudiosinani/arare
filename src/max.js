'use strict';
const curry = require('./curry');

function max(x, y) {
  return x < y ? y : x;
}

module.exports = curry(max);
