'use strict'
const curry = require('./curry')
const getNth = require('./get-nth')

function trd(xs) {
  return getNth(2, xs)
}

module.exports = curry(trd)
