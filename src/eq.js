'use strict';
const curry = require('./curry');

function eq(x, y) {
  return x === y;
}

module.exports = curry(eq);
