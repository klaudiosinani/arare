'use strict'
const curry = require('./curry')
const fill = require('./fill')

function Ts(n) {
  return fill(n, true)
}

module.exports = curry(Ts)
