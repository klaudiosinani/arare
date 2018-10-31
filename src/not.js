'use strict';
const curry = require('./curry');

function not(x) {
  return !x;
}

module.exports = curry(not);
