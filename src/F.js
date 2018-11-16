'use strict'
const cons = require('./cons')
const curry = require('./curry')

const F = cons(false)

module.exports = curry(F)
