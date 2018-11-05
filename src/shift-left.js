'use strict'
const curry = require('./curry')
const xshiftLeft = require('./xshift-left')

function shiftLeft(xs) {
  return xshiftLeft(1, xs)
}

module.exports = curry(shiftLeft)
