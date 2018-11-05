'use strict'
const and = require('./and')
const append = require('./append')
const curry = require('./curry')
const head = require('./head')
const isEmpty = require('./is-empty')
const notArr = require('./not-arr')
const notStr = require('./not-str')
const or = require('./or')
const tail = require('./tail')

function _zipWith(fn, xs, ys, acc) {
  if (or(isEmpty(xs), isEmpty(ys)))
    return acc

  return _zipWith(fn, tail(xs), tail(ys), append(fn(head(xs), head(ys)), acc))
}

function zipWith(fn, xs, ys) {
  if (and(notArr(xs), notStr(xs)))
    throw new TypeError('[zipWith] Second argument must be an array or a string')

  if (and(notArr(ys), notStr(ys)))
    throw new TypeError('[zipWith] Last argument must be an array or a string')

  return _zipWith(fn, xs, ys, [])
}

module.exports = curry(zipWith)
