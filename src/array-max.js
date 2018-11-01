'use strict';
const curry = require('./curry');
const max = require('./max');
const reduce = require('./reduce');

function arrayMax(xs) {
  return reduce(max, -Infinity, xs);
}

module.exports = curry(arrayMax);
