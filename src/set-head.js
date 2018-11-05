'use strict'
const cons = require('./cons')
const curry = require('./curry')
const setHeadWith = require('./set-head-with')

function setHead(x, xs) {
  return setHeadWith(cons(x), xs)
}

module.exports = curry(setHead)
