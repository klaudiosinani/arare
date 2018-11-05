'use strict'
const countBy = require('./count-by')
const curry = require('./curry')
const id = require('./id')

function countAll(xs) {
  return countBy(id, xs)
}

module.exports = curry(countAll)
