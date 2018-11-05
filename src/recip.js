'use strict'
const curry = require('./curry')
const div = require('./div')

function recip(x) {
  return div(1, x)
}

module.exports = curry(recip)
