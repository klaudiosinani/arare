'use strict'
const abs = require('./abs')
const curry = require('./curry')
const sub = require('./sub')

function absDiff(x, y) {
  return abs(sub(x, y))
}

module.exports = curry(absDiff)
