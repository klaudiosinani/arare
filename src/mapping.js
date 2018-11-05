'use strict'
const apply = require('./apply')
const curry = require('./curry')

function mapping(fn, reducer, acc, x) {
  return reducer(acc, apply(x, fn))
}

module.exports = curry(mapping)
