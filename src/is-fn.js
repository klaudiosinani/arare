'use strict';
const curry = require('./curry');
const eq = require('./eq');

function isFn(x) {
  return eq(Object.prototype.toString.call(x), '[object Function]');
}

module.exports = curry(isFn);
