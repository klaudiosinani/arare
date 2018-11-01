'use strict';
const curry = require('./curry');
const str = require('./str');

function ext(key, object) {
  return object[str(key)];
}

module.exports = curry(ext);
