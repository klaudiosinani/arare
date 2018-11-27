'use strict'
const and = require('./and')
const concat = require('./concat')
const curry = require('./curry')
const dropRight = require('./drop-right')
const empty = require('./empty')
const eq = require('./eq')
const init = require('./init')
const isEmpty = require('./is-empty')
const last = require('./last')
const len = require('./len')
const notArr = require('./not-arr')
const notStr = require('./not-str')
const prepend = require('./prepend')
const takeRight = require('./take-right')

function _removeRightArr(x, xs, acc) {
  if (isEmpty(xs))
    return acc

  if (eq(x, last(xs)))
    return concat(init(xs), acc)

  return _removeRightArr(x, init(xs), prepend(last(xs), acc))
}

function _removeRightStr(x, xs, acc) {
  if (isEmpty(xs))
    return acc

  if (eq(takeRight(len(x), xs), x))
    return concat(dropRight(len(x), xs), acc)

  return _removeRightStr(x, init(xs), prepend(last(xs), acc))
}

function remove(x, xs) {
  if (and(notArr(xs), notStr(xs)))
    throw new TypeError('[removeRight] Last argument must be an array or a string')

  if (notArr(xs))
    return _removeRightStr(x, xs, empty(xs))

  return _removeRightArr(x, xs, empty(xs))
}

module.exports = curry(remove)
