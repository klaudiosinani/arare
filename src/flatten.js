'use strict'
const append = require('./append')
const concat = require('./concat')
const curry = require('./curry')
const head = require('./head')
const isEmpty = require('./is-empty')
const notArr = require('./not-arr')
const tail = require('./tail')

function _flatten(xs, acc) {
  if (isEmpty(xs))
    return acc

  if (notArr(head(xs)))
    return _flatten(tail(xs), append(head(xs), acc))

  return _flatten(concat(head(xs), tail(xs)), acc)
}

function flatten(xs) {
  if (notArr(xs))
    throw new TypeError('[flatten] Argument must be an array')

  return _flatten(xs, [])
}

module.exports = curry(flatten)
