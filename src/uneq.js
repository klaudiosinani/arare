'use strict';
const curry = require('./curry');
const eq = require('./eq');
const not = require('./not');

function uneq(x, y) {
  return not(eq(x, y));
}

module.exports = curry(uneq);
