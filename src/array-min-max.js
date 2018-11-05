'use strict'
const curry = require('./curry')
const minMax = require('./min-max')
const reduce = require('./reduce')

function arrayMinMax(xs) {
  return reduce(minMax, [Infinity, -Infinity], xs)
}

module.exports = curry(arrayMinMax)
