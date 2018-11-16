'use strict'
const and = require('./and')
const append = require('./append')
const concat = require('./concat')
const curry = require('./curry')
const drop = require('./drop')
const empty = require('./empty')
const eq = require('./eq')
const head = require('./head')
const isEmpty = require('./is-empty')
const len = require('./len')
const notArr = require('./not-arr')
const notStr = require('./not-str')
const tail = require('./tail')
const take = require('./take')

function _removeArr(x, xs, acc) {
  if (isEmpty(xs))
    return acc

  if (eq(x, head(xs)))
    return concat(acc, tail(xs))

  return _removeArr(x, tail(xs), append(head(xs), acc))
}

function _removeStr(x, xs, acc) {
  if (isEmpty(xs))
    return acc

  if (eq(take(len(x), xs), x))
    return concat(acc, drop(len(x), xs))

  return _removeStr(x, tail(xs), append(head(xs), acc))
}

function remove(x, xs) {
  if (and(notArr(xs), notStr(xs)))
    throw new TypeError('[remove] Last argument must be an array or a string')

  if (notArr(xs))
    return _removeStr(x, xs, empty(xs))

  return _removeArr(x, xs, empty(xs))
}

module.exports = curry(remove)
