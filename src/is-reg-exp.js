'use strict';
const curry = require('./curry');
const eq = require('./eq');

function isRegExp(x) {
  return eq(Object.prototype.toString.call(x), '[object RegExp]');
}

module.exports = curry(isRegExp);
