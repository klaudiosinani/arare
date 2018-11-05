'use strict'
const curry = require('./curry')
const xshift = require('./xshift')

function shift(xs) {
  return xshift(1, xs)
}

module.exports = curry(shift)
