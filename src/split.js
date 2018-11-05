'use strict'
const append = require('./append')
const curry = require('./curry')
const drop = require('./drop')
const eq = require('./eq')
const head = require('./head')
const isEmpty = require('./is-empty')
const len = require('./len')
const notStr = require('./not-str')
const tail = require('./tail')
const take = require('./take')

function _split(x, xs, str, acc) {
  if (isEmpty(xs))
    return append(str, acc)

  if (eq(take(len(x), xs), x))
    return _split(x, drop(len(x), xs), '', append(str, acc))

  return _split(x, tail(xs), append(head(xs), str), acc)
}

function split(x, xs) {
  if (notStr(x))
    throw new TypeError('[split] First Argument must be a string')

  if (notStr(xs))
    throw new TypeError('[split] Last argument must be a string')

  return _split(x, xs, '', [])
}

module.exports = curry(split)
