'use strict';
const curry = require('./curry');

function pow(x, y) {
  return Number.pow(x, y);
}

module.exports = curry(pow);
