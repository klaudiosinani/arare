'use strict'
const comp = require('./comp')
const curry = require('./curry')
const not = require('./not')
const takeWhile = require('./take-while')

function dropRightWhile(fn, xs) {
  return takeWhile(comp(not, fn), xs)
}

module.exports = curry(dropRightWhile)
