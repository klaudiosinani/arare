'use strict';
const add = require('./add');
const curry = require('./curry');

function incr(x) {
  return add(x, 1);
}

module.exports = curry(incr);
