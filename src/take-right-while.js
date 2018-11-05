'use strict'
const comp = require('./comp')
const curry = require('./curry')
const dropWhile = require('./drop-while')
const not = require('./not')

function takeWhileRight(fn, xs) {
  return dropWhile(comp(not, fn), xs)
}

module.exports = curry(takeWhileRight)
