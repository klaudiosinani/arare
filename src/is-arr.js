'use strict';
const curry = require('./curry');

function isArr(x) {
  return Array.isArray(x);
}

module.exports = curry(isArr);
