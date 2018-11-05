'use strict'
const append = require('./append')
const curry = require('./curry')
const head = require('./head')
const len = require('./len')
const lte = require('./lte')
const notArr = require('./not-arr')
const notStr = require('./not-str')
const prepend = require('./prepend')
const tail = require('./tail')

function _join(x, xs, acc) {
  if (lte(len(xs), 1))
    return append(xs, acc)

  return _join(x, tail(xs), append(prepend(head(xs), x), acc))
}

function join(x, xs) {
  if (notStr(x))
    throw new TypeError('[join] First argument must be a string')

  if (notArr(xs))
    throw new TypeError('[join] Last argument must be an array')

  return _join(x, xs, '')
}

module.exports = curry(join)
