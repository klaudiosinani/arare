'use strict'
const and = require('./and')
const ceil = require('./ceil')
const curry = require('./curry')
const div = require('./div')
const len = require('./len')
const notArr = require('./not-arr')
const notStr = require('./not-str')
const partitionAt = require('./partition-at')

function halve(xs) {
  if (and(notArr(xs), notStr(xs)))
    throw new TypeError('[halve] Argument must be an array or a string')

  return partitionAt(ceil(div(len(xs), 2)), xs)
}

module.exports = curry(halve)
