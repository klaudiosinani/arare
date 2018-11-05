'use strict'
const and = require('./and')
const copy = require('./copy')
const curry = require('./curry')
const head = require('./head')
const notArr = require('./not-arr')
const notEmpty = require('./not-empty')
const notStr = require('./not-str')
const tail = require('./tail')

function _forEach(fn, xs) {
  if (notEmpty(xs))
    fn(head(xs))
  return _forEach(fn, tail(xs))
}

function forEach(fn, xs) {
  if (and(notArr(xs), notStr(xs)))
    throw new TypeError('[forEach] Last argument must be an array or string')

  return _forEach(fn, notArr(xs) ? xs : copy(xs))
}

module.exports = curry(forEach)
