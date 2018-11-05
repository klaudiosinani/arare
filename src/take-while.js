'use strict'
const and = require('./and')
const append = require('./append')
const curry = require('./curry')
const empty = require('./empty')
const head = require('./head')
const isEmpty = require('./is-empty')
const not = require('./not')
const notArr = require('./not-arr')
const notStr = require('./not-str')
const or = require('./or')
const tail = require('./tail')

function _takeWhile(fn, xs, acc) {
  if (or(isEmpty(xs), not(fn(head(xs)))))
    return acc

  return _takeWhile(fn, tail(xs), append(head(xs), acc))
}

function takeWhile(fn, xs) {
  if (and(notArr(xs), notStr(xs)))
    throw new TypeError('[takeWhile] Last argument must be an array or a string')

  return _takeWhile(fn, xs, empty(xs))
}

module.exports = curry(takeWhile)
