'use strict'
const and = require('./and')
const curry = require('./curry')
const head = require('./head')
const notArr = require('./not-arr')
const notEmpty = require('./not-empty')
const notStr = require('./not-str')
const tail = require('./tail')

function _every(fn, xs) {
  if (notEmpty(xs))
    return fn(head(xs)) ? every(fn, tail(xs)) : false

  return true
}

function every(fn, xs) {
  if (and(notArr(xs), notStr(xs)))
    throw new TypeError('[every] Last argument must be an array or a string')

  return _every(fn, xs)
}

module.exports = curry(every)
