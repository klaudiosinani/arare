'use strict'
const and = require('./and')
const curry = require('./curry')
const notEmpty = require('./not-empty')
const head = require('./head')
const tail = require('./tail')
const notArr = require('./not-arr')
const notStr = require('./not-str')

function _some(fn, xs) {
  if (notEmpty(xs))
    return fn(head(xs)) ? true : _some(fn, tail(xs))

  return false
}

function some(fn, xs) {
  if (and(notArr(xs), notStr(xs)))
    throw new TypeError('[some] Last argument must be an array or a string')

  return _some(fn, xs)
}

module.exports = curry(some)
