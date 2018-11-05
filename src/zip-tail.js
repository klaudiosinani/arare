'use strict'
const curry = require('./curry')
const tail = require('./tail')
const zip = require('./zip')

function zipTail(xs) {
  return zip(xs, tail(xs))
}

module.exports = curry(zipTail)
