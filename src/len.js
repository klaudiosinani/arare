'use strict'
const curry = require('./curry')
const ext = require('./ext')

function len(xs) {
  return ext('length', xs)
}

module.exports = curry(len)
