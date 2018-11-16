'use strict'
const curry = require('./curry')
const fill = require('./fill')

function ts(n) {
  return fill(n, true)
}

module.exports = curry(ts)
