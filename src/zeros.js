'use strict'
const curry = require('./curry')
const fill = require('./fill')

function zeros(n) {
  return fill(n, 0)
}

module.exports = curry(zeros)
