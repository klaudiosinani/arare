'use strict';
const curry = require('./curry');
const reduce = require('./reduce');
const reverse = require('./reverse');

function reduceRight(fn, acc, xs) {
  return reduce(fn, acc, reverse(xs));
}

module.exports = curry(reduceRight);
