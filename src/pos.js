'use strict'
const curry = require('./curry')
const isNeg = require('./is-neg')
const neg = require('./neg')
const num = require('./num')

function pos(x) {
  return isNeg(x) ? neg(x) : num(x)
}

module.exports = curry(pos)
