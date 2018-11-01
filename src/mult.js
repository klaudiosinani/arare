'use strict';
const curry = require('./curry');

function mult(x, y) {
  return Number(x) * Number(y);
}

module.exports = curry(mult);
