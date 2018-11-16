'use strict'
const cons = require('./cons')
const curry = require('./curry')

const f = cons(false)

module.exports = curry(f)
