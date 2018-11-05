'use strict'
const curry = require('./curry')
const last = require('./last')
const notPair = require('./not-pair')

function snd(xs) {
  if (notPair(xs))
    throw new TypeError('[snd] Argument must be an array of length 2')

  return last(xs)
}

module.exports = curry(snd)
