'use strict';
const cons = require('./cons');
const curry = require('./curry');

const zero = cons(0);

module.exports = curry(zero);
