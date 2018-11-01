'use strict';
const curry = require('./curry');
const eq = require('./eq');

function isNum(x) {
  return eq(Object.prototype.toString.call(x), '[object Number]');
}

module.exports = curry(isNum);
