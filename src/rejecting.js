'use strict'
const apply = require('./apply')
const curry = require('./curry')

function rejecting(fn, reducer, acc, x) {
  if (apply(x, fn))
    return acc

  return reducer(acc, x)
}

module.exports = curry(rejecting)
