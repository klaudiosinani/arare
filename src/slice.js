'use strict'
const and = require('./and')
const curry = require('./curry')
const notArr = require('./not-arr')
const notStr = require('./not-str')

function slice(i, j, xs) {
  if (and(notStr(xs), notArr(xs)))
    throw new TypeError('[slice] Last argument must be an array or a string')

  return xs.slice(i, j)
}

module.exports = curry(slice)
