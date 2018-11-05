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

function _replaceArr(x, rep, xs, acc) {
  if (isEmpty(xs))
    return acc

  if (eq(x, head(xs)))
    return concat(append(rep, acc), tail(xs))

  return _replaceArr(x, rep, tail(xs), append(head(xs), acc))
}

function _replaceStr(x, rep, xs, acc) {
  if (isEmpty(xs))
    return acc

  if (eq(take(len(x), xs), x))
    return concat(append(rep, acc), drop(len(x), xs))

  return _replaceStr(x, rep, tail(xs), append(head(xs), acc))
}

function replace(x, rep, xs) {
  if (and(notArr(xs), notStr(xs)))
    throw new TypeError('[replace] Last argument must be an array or a string')

  if (notArr(xs))
    return _replaceStr(x, rep, xs, empty(xs))

  return _replaceArr(x, rep, xs, empty(xs))
}

module.exports = curry(replace)
