'use strict'
const array = require('./array')
const curry = require('./curry')

function pair(x, y) {
  return array(x, y)
}

module.exports = curry(pair)
