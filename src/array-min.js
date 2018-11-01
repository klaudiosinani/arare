'use strict';
const curry = require('./curry');
const min = require('./min');
const reduce = require('./reduce');

function arrayMin(xs) {
  return reduce(min, Infinity, xs);
}

module.exports = curry(arrayMin);
