'use strict'
const and = require('./and')
const append = require('./append')
const concat = require('./concat')
const curry = require('./curry')
const drop = require('./drop')
const empty = require('./empty')
const notArr = require('./not-arr')
const notStr = require('./not-str')
const reduce = require('./reduce')
const take = require('./take')

function insert(idx, x, xs) {
  if (and(notArr(xs), notStr(xs)))
    throw new TypeError('[insert] Last argument must be an array or a string')

  return reduce(concat, empty(xs), [append(x, take(idx, xs)), drop(idx, xs)])
}

module.exports = curry(insert)
