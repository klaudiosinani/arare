'use strict';
const apply = require('./apply');
const reduce = require('./reduce');

function pipe(...fns) {
  return value => {
    return reduce(apply, value, fns);
  };
}

module.exports = pipe;
