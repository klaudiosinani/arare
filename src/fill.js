'use strict'
const append = require('./append')
const curry = require('./curry')
const decr = require('./decr')
const lte = require('./lte')

function _fill(n, x, acc) {
  if (lte(n, 0))
    return acc

  return _fill(decr(n), x, append(x, acc))
}

function fill(n, x) {
  return _fill(n, x, [])
}

module.exports = curry(fill)
