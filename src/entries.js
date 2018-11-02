'use strict';
const curry = require('./curry');
const keys = require('./keys');
const values = require('./values');
const zip = require('./zip');

function entries(xs) {
  return zip(keys(xs), values(xs));
}

module.exports = curry(entries);
