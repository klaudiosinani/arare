'use strict';
const curry = require('./curry');
const mult = require('./mult');
const reduce = require('./reduce');

function prod(xs) {
  return reduce(mult, 1, xs);
}

module.exports = curry(prod);
