'use strict'
const append = require('./append')
const curry = require('./curry')
const head = require('./head')
const isEmpty = require('./is-empty')
const notArr = require('./not-arr')
const tail = require('./tail')

function _reject(fn, xs, acc) {
  if (isEmpty(xs))
    return acc

  if (fn(head(xs)))
    return _reject(fn, tail(xs), acc)

  return _reject(fn, tail(xs), append(head(xs), acc))
}

function reject(fn, xs) {
  if (notArr(xs))
    throw new TypeError('[reject] Last argument must be an array')

  return _reject(fn, xs, [])
}

module.exports = curry(reject)
