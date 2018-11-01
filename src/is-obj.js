'use strict';
const curry = require('./curry');
const eq = require('./eq');

function isObj(x) {
  return eq(Object.prototype.toString.call(x), '[object Object]');
}

module.exports = curry(isObj);
