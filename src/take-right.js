'use strict';
const curry = require('./curry');
const drop = require('./drop');
const len = require('./len');
const sub = require('./sub');

function takeRight(n, xs) {
  return drop(sub(len(xs), n), xs);
}

module.exports = curry(takeRight);
