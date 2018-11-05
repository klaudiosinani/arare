'use strict'
const apply = require('./apply')
const curry = require('./curry')
const notArr = require('./not-arr')
const spread = require('./spread')

function applyArgs(xs, fn) {
  if (notArr(xs))
    throw new TypeError('[applyArgs] First argument must be an array')

  return apply(xs, spread(fn))
}

module.exports = curry(applyArgs)
