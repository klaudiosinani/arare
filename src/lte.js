'use strict';
const curry = require('./curry');

function lte(x, y) {
  return x <= y;
}

module.exports = curry(lte);
