'use strict'
const and = require('./and')
const curry = require('./curry')
const eq = require('./eq')
const filter = require('./filter')
const len = require('./len')
const notArr = require('./not-arr')
const notStr = require('./not-str')

function count(x, xs) {
  if (and(notArr(xs), notStr(xs)))
    throw new TypeError('[count] Last argument must be an array of a string')

  return len(filter(eq(x), xs))
}

module.exports = curry(count)
