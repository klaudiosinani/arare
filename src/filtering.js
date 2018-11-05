'use strict'
const apply = require('./apply')
const curry = require('./curry')

function filtering(fn, reducer, acc, x) {
  if (apply(x, fn))
    return reducer(acc, x)

  return acc
}

module.exports = curry(filtering)
