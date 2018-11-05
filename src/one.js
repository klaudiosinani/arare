'use strict'
const cons = require('./cons')
const curry = require('./curry')

const one = cons(1)

module.exports = curry(one)
