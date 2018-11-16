'use strict'
const cons = require('./cons')
const curry = require('./curry')

const t = cons(true)

module.exports = curry(t)
