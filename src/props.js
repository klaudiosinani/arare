'use strict'
const curry = require('./curry')

function props(xs) {
  return Object.getOwnPropertyNames(xs)
}

module.exports = curry(props)
