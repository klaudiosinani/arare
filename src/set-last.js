'use strict'
const cons = require('./cons')
const curry = require('./curry')
const setLastWith = require('./set-last-with')

function setLast(x, xs) {
  return setLastWith(cons(x), xs)
}

module.exports = curry(setLast)
