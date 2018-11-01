'use strict';
const curry = require('./curry');
const eq = require('./eq');

function isUndef(x) {
  return eq(typeof x, 'undefined');
}

module.exports = curry(isUndef);
