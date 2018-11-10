'use strict'
const append = require('./append')
const curry = require('./curry')
const head = require('./head')
const isEmpty = require('./is-empty')
const notArr = require('./not-arr')
const tail = require('./tail')

function _filter(fn, xs, acc) {
  if (isEmpty(xs))
    return acc

  if (fn(head(xs)))
    return _filter(fn, tail(xs), append(head(xs), acc))

  return _filter(fn, tail(xs), acc)
}

function filter(fn, xs) {
  if (notArr(xs))
    throw new TypeError('[filter] Last argument must be an array')

  return _filter(fn, xs, [])
}

module.exports = curry(filter)
