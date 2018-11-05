'use strict'
const curry = require('./curry')
const isObj = require('./is-obj')
const not = require('./not')

function notObj(x) {
  return not(isObj(x))
}

module.exports = curry(notObj)
