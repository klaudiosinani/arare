'use strict'
const curry = require('./curry')
const not = require('./not')
const or = require('./or')

function nor(x, y) {
  return not(or(x, y))
}

module.exports = curry(nor)
