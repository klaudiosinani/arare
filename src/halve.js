'use strict'
const and = require('./and')
const curry = require('./curry')
const div = require('./div')
const len = require('./len')
const notArr = require('./not-arr')
const notStr = require('./not-str')
const partitionAt = require('./partition-at')
const trunc = require('./trunc')

function halve(xs) {
  if (and(notArr(xs), notStr(xs)))
    throw new TypeError('[halve] Argument must be an array or a string')

  return partitionAt(trunc(div(len(xs), 2)), xs)
}

module.exports = curry(halve)
