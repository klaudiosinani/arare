'use strict';
const curry = require('./curry');

function and(x, y) {
  return x && y;
}

module.exports = curry(and);
