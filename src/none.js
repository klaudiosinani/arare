'use strict'
const and = require('./and')
const curry = require('./curry')
const not = require('./not')
const some = require('./some')
const notArr = require('./not-arr')
const notStr = require('./not-str')

function none(fn, xs) {
  if (and(notArr(xs), notStr(xs)))
    throw new TypeError('[none] Last argument must be an array or a string')

  return not(some(fn, xs))
}

module.exports = curry(none)
