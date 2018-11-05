'use strict'
const curry = require('./curry')
const len = require('./len')
const slice = require('./slice')

function tail(xs) {
  return slice(1, len(xs), xs)
}

module.exports = curry(tail)
