'use strict'
const apply = require('./apply')
const reduceRight = require('./reduce-right')

function comp(...fns) {
  return value => reduceRight(apply, value, fns)
}

module.exports = comp
