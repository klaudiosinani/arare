'use strict'
const isFn = require('./is-fn')

const uncurry = (fn, n) => {
  return (...args) => {
    let _fn = fn
    let idx = 0
    while (idx < (n || args.length)) {
      const result = _fn(args[idx])

      if (isFn(result)) {
        _fn = result
      } else {
        return result
      }
      idx += 1
    }

    return undefined
  }
}

module.exports = uncurry
