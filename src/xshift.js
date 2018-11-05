'use strict'
const and = require('./and')
const concat = require('./concat')
const curry = require('./curry')
const decr = require('./decr')
const isEmpty = require('./is-empty')
const len = require('./len')
const lte = require('./lte')
const mod = require('./mod')
const notArr = require('./not-arr')
const notStr = require('./not-str')
const partitionAt = require('./partition-at')

function _xshift(x, xs) {
  if (lte(x, 0))
    return xs

  const [init, last] = partitionAt(decr(len(xs)), xs)
  return _xshift(decr(x), concat(last, init))
}

function xshift(x, xs) {
  if (and(notArr(xs), notStr(xs)))
    throw new TypeError('[xshift] Last argument must an array or a string')

  if (isEmpty(xs))
    return xs

  return _xshift(mod(x, len(xs)), xs)
}

module.exports = curry(xshift)
