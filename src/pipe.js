'use strict'
const apply = require('./apply')
const reduce = require('./reduce')

function pipe(...fns) {
  return value => reduce(apply, value, fns)
}

module.exports = pipe
