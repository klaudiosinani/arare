'use strict'

function _xcurry(x, fn, ys) {
  return (...zs) => {
    if (x - zs.length > 0)
      return _xcurry(x - zs.length, fn, [...ys, ...zs])

    return fn(...ys, ...zs)
  }
}

function xcurry(x, fn) {
  return _xcurry(x, fn, [])
}

module.exports = _xcurry(2, xcurry, [])
