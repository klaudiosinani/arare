'use strict'
const and = require('./and')
const assign = require('./assign')
const curry = require('./curry')
const head = require('./head')
const isEmpty = require('./is-empty')
const notArr = require('./not-arr')
const notStr = require('./not-str')
const or = require('./or')
const tail = require('./tail')

function _zipObj(xs, ys, acc) {
  if (or(isEmpty(xs), isEmpty(ys)))
    return acc

  return _zipObj(tail(xs), tail(ys), assign(head(xs), head(ys), acc))
}

function zipObj(xs, ys) {
  if (and(notArr(xs), notStr(xs)))
    throw new TypeError('[zipWith] First argument must be an array or a string')

  if (and(notArr(ys), notStr(ys)))
    throw new TypeError('[zipWith] Last argument must be an array or a string')

  return _zipObj(xs, ys, {})
}

module.exports = curry(zipObj)
