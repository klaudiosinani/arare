'use strict';
const curry = require('./curry');

function trunc(x) {
  return Math.trunc(x);
}

module.exports = curry(trunc);
