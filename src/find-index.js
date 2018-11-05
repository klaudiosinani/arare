'use strict'
const and = require('./and')
const curry = require('./curry')
const head = require('./head')
const incr = require('./incr')
const isEmpty = require('./is-empty')
const notArr = require('./not-arr')
const notStr = require('./not-str')
const tail = require('./tail')

function _findIndex(fn, xs, idx) {
  if (isEmpty(xs))
    return -1

  return fn(head(xs)) ? idx : _findIndex(fn, tail(xs), incr(idx))
}

function findIndex(fn, xs) {
  if (and(notArr(xs), notStr(xs)))
    throw new TypeError('[findIndex] Last argument must be an array or string')

  return _findIndex(fn, xs, 0)
}

module.exports = curry(findIndex)
