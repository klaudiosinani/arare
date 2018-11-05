'use strict'
const curry = require('./curry')
const isDate = require('./is-date')
const not = require('./not')

function notDate(x) {
  return not(isDate(x))
}

module.exports = curry(notDate)
