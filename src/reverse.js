'use strict'
const and = require('./and')
const curry = require('./curry')
const empty = require('./empty')
const head = require('./head')
const isEmpty = require('./is-empty')
const notArr = require('./not-arr')
const notStr = require('./not-str')
const prepend = require('./prepend')
const tail = require('./tail')

function _reverse(xs, acc) {
  if (isEmpty(xs))
    return acc

  return _reverse(tail(xs), prepend(head(xs), acc))
}

function reverse(xs) {
  if (and(notArr(xs), notStr(xs)))
    throw new TypeError('[reverse] Argument must be an array of a string')

  return _reverse(xs, empty(xs))
}

module.exports = curry(reverse)
