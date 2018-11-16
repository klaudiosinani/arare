'use strict'
const curry = require('./curry')
const fill = require('./fill')

function Fs(n) {
  return fill(n, false)
}

module.exports = curry(Fs)
