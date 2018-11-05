'use strict'
const curry = require('./curry')
const head = require('./head')
const notPair = require('./not-pair')

function fst(xs) {
  if (notPair(xs))
    throw new TypeError('[fst] Argument must be an array of length 2')

  return head(xs)
}

module.exports = curry(fst)
