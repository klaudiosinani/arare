'use strict'
const concat = require('./concat')
const curry = require('./curry')
const gather = require('./gather')
const notArr = require('./not-arr')
const pipe = require('./pipe')
const reduce = require('./reduce')
const setLastWith = require('./set-last-with')
const spread = require('./spread')

function mapcat(fn, xs) {
  if (notArr(xs))
    throw new TypeError('[mapcat] Last argument must be an array')

  return reduce(gather(pipe(setLastWith(fn), spread(concat))), [], xs)
}

module.exports = curry(mapcat)
