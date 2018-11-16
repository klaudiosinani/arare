'use strict'
const cons = require('./cons')
const curry = require('./curry')

const T = cons(true)

module.exports = curry(T)
