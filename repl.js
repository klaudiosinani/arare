'use strict'
const repl = require('repl')
const {type} = require('os')
const {version: pkgVer} = require('./package.json')
const A = require('.')

const {log} = console
const {arch, version} = process

log(`Arare v${pkgVer} RELP environment [Node ${version} on ${type()} (${arch})]`)

const arareRepl = repl.start({
  prompt: 'arare ❯ ',
  useColors: true
})

Object.assign(arareRepl.context, A)
