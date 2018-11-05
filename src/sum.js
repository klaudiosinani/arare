'use strict'
const add = require('./add')
const curry = require('./curry')
const reduce = require('./reduce')

function sum(xs) {
  return reduce(add, 0, xs)
}

module.exports = curry(sum)
