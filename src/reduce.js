'use strict'
const curry = require('./curry')
const head = require('./head')
const isEmpty = require('./is-empty')
const notArr = require('./not-arr')
const tail = require('./tail')

function _reduce(fn, acc, xs) {
  if (isEmpty(xs))
    return acc

  return _reduce(fn, fn(acc, head(xs)), tail(xs))
}

function reduce(fn, acc, xs) {
  if (notArr(xs))
    throw new TypeError('[reduce] Last argument must be an array')

  return _reduce(fn, acc, xs)
}

module.exports = curry(reduce)
