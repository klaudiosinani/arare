'use strict'
const and = require('./and')
const concat = require('./concat')
const curry = require('./curry')
const drop = require('./drop')
const max = require('./max')
const min = require('./min')
const notArr = require('./not-arr')
const notStr = require('./not-str')
const take = require('./take')

function remove(i, j, xs) {
  if (and(notArr(xs), notStr(xs)))
    throw new TypeError('[remove] Last argument must be an array or a string')

  return concat(take(min(i, j), xs), drop(max(i, j), xs))
}

module.exports = curry(remove)
