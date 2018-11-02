'use strict';
const apply = require('./apply');
const curry = require('./curry');
const ext = require('./ext');
const flip = require('./flip');
const keys = require('./keys');
const map = require('./map');

function values(obj) {
  return map(apply(obj, flip(ext)), keys(obj));
}

module.exports = curry(values);
