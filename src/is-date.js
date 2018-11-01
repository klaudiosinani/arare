'use strict';
const curry = require('./curry');
const eq = require('./eq');

function isDate(x) {
  return eq(Object.prototype.toString.call(x), '[object Date]');
}

module.exports = curry(isDate);
