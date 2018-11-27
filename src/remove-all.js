'use strict'
const and = require('./and')
const append = require('./append')
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

function _removeAllArr(x, xs, acc) {
  if (isEmpty(xs))
    return acc

  if (eq(x, head(xs)))
    return _removeAllArr(x, tail(xs), acc)

  return _removeAllArr(x, tail(xs), append(head(xs), acc))
}

function _removeAllStr(x, xs, acc) {
  if (isEmpty(xs))
    return acc

  if (eq(take(len(x), xs), x))
    return _removeAllStr(x, drop(len(x), xs), acc)

  return _removeAllStr(x, tail(xs), append(head(xs), acc))
}

function removeAll(x, xs) {
  if (and(notArr(xs), notStr(xs)))
    throw new TypeError('[remove] Last argument must be an array or a string')

  if (notArr(xs))
    return _removeAllStr(x, xs, empty(xs))

  return _removeAllArr(x, xs, empty(xs))
}

module.exports = curry(removeAll)
