'use strict';
const apply = require('./apply');
const curry = require('./curry');
const notArr = require('./not-arr');
const reduce = require('./reduce');

function transduce(fn, reducer, acc, xs) {
  if (notArr(xs)) {
    throw new TypeError('[transduce] Last argument must be an array');
  }
  return reduce(apply(reducer, fn), acc, xs);
}

module.exports = curry(transduce);
