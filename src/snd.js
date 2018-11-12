'use strict'
const curry = require('./curry')
const getNth = require('./get-nth')

function snd(xs) {
  return getNth(1, xs)
}

module.exports = curry(snd)
