'use strict';
const curry = require('./curry');
const len = require('./len');
const sub = require('./sub');
const take = require('./take');

function dropRight(n, xs) {
  return take(sub(len(xs), n), xs);
}

module.exports = curry(dropRight);
