'use strict'
const and = require('./and')
const append = require('./append')
const curry = require('./curry')
const empty = require('./empty')
const head = require('./head')
const isEmpty = require('./is-empty')
const notArr = require('./not-arr')
const notStr = require('./not-str')
const or = require('./or')
const tail = require('./tail')

function _breakWhen(fn, xs, acc) {
  if (or(fn(head(xs)), isEmpty(xs)))
    return [acc, xs]

  return _breakWhen(fn, tail(xs), append(head(xs), acc))
}

function breakWhen(fn, xs) {
  if (and(notArr(xs), notStr(xs)))
    throw new TypeError('[breakWhen] Last argument must be an array or a string')

  return _breakWhen(fn, xs, empty(xs))
}

module.exports = curry(breakWhen)
