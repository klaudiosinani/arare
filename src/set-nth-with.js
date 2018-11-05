'use strict'
const and = require('./and')
const concat = require('./concat')
const copy = require('./copy')
const curry = require('./curry')
const getNth = require('./get-nth')
const head = require('./head')
const notArr = require('./not-arr')
const notStr = require('./not-str')
const partitionAt = require('./partition-at')
const prepend = require('./prepend')
const tail = require('./tail')

function _setNthWithArr(i, fn, xs) {
  const cpy = copy(xs)
  cpy[i] = fn(getNth(i, xs))
  return cpy
}

function _setNthWithStr(i, fn, xs) {
  const [hd, tl] = partitionAt(i, xs)
  return concat(hd, prepend(fn(head(tl)), tail(tl)))
}

function setNthWith(i, fn, xs) {
  if (and(notArr(xs), notStr(xs)))
    throw new TypeError('[setNthWith] Last argument must be an array or a string')

  if (notArr(xs))
    return _setNthWithStr(i, fn, xs)

  return _setNthWithArr(i, fn, xs)
}

module.exports = curry(setNthWith)
