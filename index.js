'use strict'
const abs = require('./src/abs')
const absDiff = require('./src/abs-diff')
const add = require('./src/add')
const adjustIndex = require('./src/adjust-index')
const and = require('./src/and')
const append = require('./src/append')
const appendTo = require('./src/append-to')
const apply = require('./src/apply')
const applyArgs = require('./src/apply-args')
const arity = require('./src/arity')
const array = require('./src/array')
const arrayify = require('./src/arrayify')
const arrayMax = require('./src/array-max')
const arrayMin = require('./src/array-min')
const arrayMinMax = require('./src/array-min-max')
const assign = require('./src/assign')
const assignWith = require('./src/assign-with')
const binary = require('./src/binary')
const bool = require('./src/bool')
const breakWhen = require('./src/break-when')
const ceil = require('./src/ceil')
const comp = require('./src/comp')
const concat = require('./src/concat')
const cons = require('./src/cons')
const copy = require('./src/copy')
const count = require('./src/count')
const countAll = require('./src/count-all')
const countBy = require('./src/count-by')
const countIn = require('./src/count-in')
const cube = require('./src/cube')
const curry = require('./src/curry')
const decr = require('./src/decr')
const div = require('./src/div')
const drop = require('./src/drop')
const dropRight = require('./src/drop-right')
const dropRightWhile = require('./src/drop-right-while')
const dropWhile = require('./src/drop-while')
const empty = require('./src/empty')
const endsWith = require('./src/ends-with')
const entries = require('./src/entries')
const eq = require('./src/eq')
const eqProp = require('./src/eq-prop')
const erase = require('./src/erase')
const even = require('./src/even')
const every = require('./src/every')
const excludes = require('./src/excludes')
const ext = require('./src/ext')
const fact = require('./src/fact')
const fill = require('./src/fill')
const filter = require('./src/filter')
const find = require('./src/find')
const findIndex = require('./src/find-index')
const flatten = require('./src/flatten')
const flip = require('./src/flip')
const forEach = require('./src/for-each')
const gather = require('./src/gather')
const gcd = require('./src/gcd')
const getNth = require('./src/get-nth')
const gt = require('./src/gt')
const gte = require('./src/gte')
const halve = require('./src/halve')
const hasProp = require('./src/has-prop')
const head = require('./src/head')
const id = require('./src/id')
const includes = require('./src/includes')
const incr = require('./src/incr')
const init = require('./src/init')
const isArr = require('./src/is-arr')
const isDate = require('./src/is-date')
const isDef = require('./src/is-def')
const isEmpty = require('./src/is-empty')
const isFn = require('./src/is-fn')
const isInt = require('./src/is-num')
const isLower = require('./src/is-lower')
const isNeg = require('./src/is-neg')
const isNil = require('./src/is-nil')
const isNull = require('./src/is-null')
const isNum = require('./src/is-num')
const isObj = require('./src/is-obj')
const isPair = require('./src/is-pair')
const isPos = require('./src/is-pos')
const isRegExp = require('./src/is-reg-exp')
const isStr = require('./src/is-str')
const isUndef = require('./src/is-def')
const isUpper = require('./src/is-upper')
const ite = require('./src/ite')
const join = require('./src/join')
const keys = require('./src/keys')
const last = require('./src/last')
const lcm = require('./src/lcm')
const len = require('./src/len')
const lt = require('./src/lt')
const lte = require('./src/lte')
const map = require('./src/map')
const mapcat = require('./src/mapcat')
const max = require('./src/max')
const merge = require('./src/merge')
const mergeBy = require('./src/merge-by')
const min = require('./src/min')
const minMax = require('./src/min-max')
const mod = require('./src/mod')
const mult = require('./src/mult')
const nand = require('./src/nand')
const neg = require('./src/neg')
const none = require('./src/none')
const nor = require('./src/nor')
const not = require('./src/not')
const notArr = require('./src/not-arr')
const notDate = require('./src/not-date')
const notEmpty = require('./src/not-empty')
const notFn = require('./src/not-fn')
const notInt = require('./src/not-int')
const notLower = require('./src/not-lower')
const notNil = require('./src/not-nil')
const notNull = require('./src/not-null')
const notNum = require('./src/not-num')
const notObj = require('./src/not-obj')
const notPair = require('./src/not-pair')
const notRegExp = require('./src/not-reg-exp')
const notStr = require('./src/not-str')
const notUpper = require('./src/not-upper')
const nullary = require('./src/nullary')
const num = require('./src/num')
const odd = require('./src/odd')
const one = require('./src/one')
const ones = require('./src/ones')
const or = require('./src/or')
const pair = require('./src/pair')
const partial = require('./src/partial')
const partialRight = require('./src/partial-right')
const partition = require('./src/partition')
const partitionAt = require('./src/partition-at')
const pipe = require('./src/pipe')
const pow = require('./src/pow')
const prepend = require('./src/prepend')
const prependTo = require('./src/prepend-to')
const prod = require('./src/prod')
const props = require('./src/props')
const range = require('./src/range')
const recip = require('./src/recip')
const reduce = require('./src/reduce')
const reduceRight = require('./src/reduce-right')
const reject = require('./src/reject')
const remove = require('./src/remove')
const removeAll = require('./src/remove-all')
const removeRight = require('./src/remove-right')
const replace = require('./src/replace')
const replaceAll = require('./src/replace-all')
const reverse = require('./src/reverse')
const reverseArgs = require('./src/reverse-args')
const setHead = require('./src/set-head')
const setHeadWith = require('./src/set-head-with')
const setLast = require('./src/set-last')
const setLastWith = require('./src/set-last-with')
const setNth = require('./src/set-nth')
const setNthWith = require('./src/set-nth-with')
const shift = require('./src/shift')
const shiftLeft = require('./src/shift-left')
const slice = require('./src/slice')
const snd = require('./src/snd')
const some = require('./src/some')
const split = require('./src/split')
const spread = require('./src/spread')
const square = require('./src/square')
const startsWith = require('./src/starts-with')
const str = require('./src/str')
const sub = require('./src/sub')
const sum = require('./src/sum')
const swap = require('./src/swap')
const t = require('./src/t')
const tail = require('./src/tail')
const take = require('./src/take')
const takeRight = require('./src/take-right')
const takeRightWhile = require('./src/take-right-while')
const takeWhile = require('./src/take-while')
const ternary = require('./src/ternary')
const toLower = require('./src/to-lower')
const toUpper = require('./src/to-upper')
const trd = require('./src/trd')
const trunc = require('./src/trunc')
const unary = require('./src/unary')
const uneq = require('./src/uneq')
const uneqProp = require('./src/uneq-prop')
const values = require('./src/values')
const xapply = require('./src/xapply')
const xarray = require('./src/xarray')
const xcurry = require('./src/xcurry')
const xnor = require('./src/xnor')
const xor = require('./src/xor')
const xshift = require('./src/xshift')
const xshiftLeft = require('./src/xshift-left')
const zero = require('./src/zero')
const zeros = require('./src/zeros')
const zip = require('./src/zip')
const zipObj = require('./src/zip-obj')
const zipReverse = require('./src/zip-reverse')
const zipSelf = require('./src/zip-self')
const zipTail = require('./src/zip-tail')
const zipWith = require('./src/zip-with')

module.exports = {
  abs,
  absDiff,
  add,
  adjustIndex,
  and,
  append,
  appendTo,
  apply,
  applyArgs,
  arity,
  array,
  arrayify,
  arrayMax,
  arrayMin,
  arrayMinMax,
  assign,
  assignWith,
  binary,
  bool,
  breakWhen,
  ceil,
  comp,
  concat,
  cons,
  copy,
  count,
  countAll,
  countBy,
  countIn,
  cube,
  curry,
  decr,
  div,
  drop,
  dropRight,
  dropRightWhile,
  dropWhile,
  empty,
  endsWith,
  entries,
  eq,
  eqProp,
  erase,
  even,
  every,
  excludes,
  ext,
  fact,
  fill,
  filter,
  find,
  findIndex,
  flatten,
  flip,
  forEach,
  gather,
  gcd,
  getNth,
  gt,
  gte,
  halve,
  hasProp,
  head,
  id,
  includes,
  incr,
  init,
  isArr,
  isDate,
  isDef,
  isEmpty,
  isFn,
  isInt,
  isLower,
  isNeg,
  isNil,
  isNull,
  isNum,
  isObj,
  isPair,
  isPos,
  isRegExp,
  isStr,
  isUndef,
  isUpper,
  ite,
  join,
  keys,
  last,
  lcm,
  len,
  lt,
  lte,
  map,
  mapcat,
  max,
  merge,
  mergeBy,
  min,
  minMax,
  mod,
  mult,
  nand,
  neg,
  none,
  nor,
  not,
  notArr,
  notDate,
  notEmpty,
  notFn,
  notInt,
  notLower,
  notNil,
  notNull,
  notNum,
  notObj,
  notPair,
  notRegExp,
  notStr,
  notUpper,
  nullary,
  num,
  odd,
  one,
  ones,
  or,
  pair,
  partial,
  partialRight,
  partition,
  partitionAt,
  pipe,
  pow,
  prepend,
  prependTo,
  prod,
  props,
  range,
  recip,
  reduce,
  reduceRight,
  reject,
  remove,
  removeAll,
  removeRight,
  replace,
  replaceAll,
  reverse,
  reverseArgs,
  setHead,
  setHeadWith,
  setLast,
  setLastWith,
  setNth,
  setNthWith,
  shift,
  shiftLeft,
  slice,
  snd,
  some,
  split,
  spread,
  square,
  startsWith,
  str,
  sub,
  sum,
  swap,
  t,
  tail,
  take,
  takeRight,
  takeRightWhile,
  takeWhile,
  ternary,
  toLower,
  toUpper,
  trd,
  trunc,
  unary,
  uneq,
  uneqProp,
  values,
  xapply,
  xarray,
  xcurry,
  xnor,
  xor,
  xshift,
  xshiftLeft,
  zero,
  zeros,
  zip,
  zipObj,
  zipReverse,
  zipSelf,
  zipTail,
  zipWith
}
