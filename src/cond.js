'use strict'
const applyArgs = require('./apply-args')
const arity = require('./arity')
const curry = require('./curry')
const map = require('./map')
const max = require('./max')
const reduce = require('./reduce')

const cond = pairs => {
  const maxArity = reduce(max, 0, map(pair => pair[0].length, pairs))

  return arity(maxArity, (...args) => {
    let idx = 0

    while (idx < pairs.length) {
      if (applyArgs(args, pairs[idx][0])) {
        return applyArgs(args, pairs[idx][1])
      }
      idx += 1
    }

    return undefined
  })
}

module.exports = curry(cond)
