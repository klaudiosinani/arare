'use strict'
const curry = require('./curry')
const notArr = require('./not-arr')
const reverse = require('./reverse')
const transduce = require('./transduce')

function transduceRight(fn, reducer, acc, xs) {
  if (notArr(xs))
    throw new TypeError('[transduceRight] Last argument must be an array')

  return transduce(fn, reducer, acc, reverse(xs))
}

module.exports = curry(transduceRight)
