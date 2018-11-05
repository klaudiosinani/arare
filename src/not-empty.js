'use strict'
const curry = require('./curry')
const isEmpty = require('./is-empty')
const not = require('./not')

function notEmpty(xs) {
  return not(isEmpty(xs))
}

module.exports = curry(notEmpty)
