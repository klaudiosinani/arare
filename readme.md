<h1 align="center">
  Arare
</h1>

<h4 align="center">
  🍘 Lightweight auto-curried functional programming library
</h4>

<div align="center">
  <img alt="Header" width="85%" src="media/header.png"/>
</div>

<p align="center">
  <a href="https://travis-ci.com/klaussinani/arare">
    <img alt="Build Status" src="https://travis-ci.com/klaussinani/arare.svg?branch=master">
  </a>
</p>

## Description

Lightweight and without any external dependencies arare enables you to write tacit, point-free, declarative & clean code while avoiding side-effects and mutations. Internally the library itself, comprised of over 200 functions, follows the functional programming paradigm and is materialized using fundamental functional qualities such as currying, recursion, tail calls, high-order functions, referential transparency, side-effects elimination and function composition. Additionally, arare utilizes automatic [variadic](https://en.wikipedia.org/wiki/Variadic_function) [currying](https://en.wikipedia.org/wiki/Currying) for its functions, thus allowing the user to write more flexible, practical & minimal code, compared to regular strict currying. Finally, the library comes with a build-in interactive REPL environment, useful for directly inspecting and experimenting with all available modules without leaving the console.

Please note that project is in its early days and that it is currently under active development.

Come over to [Gitter](https://gitter.im/klaussinani/arare) or [Twitter](https://twitter.com/klaussinani) to share your thoughts on the project.


## Highlights

- Over 200 available functions
- Build-in interactive REPL
- Point-free & tacit
- High-order & pure functions
- Automatic variadic currying
- Declarative & minimal syntax
- Side-effects & mutations free
- Lightweight with zero dependencies
- Build with functional code
- Actively developed

## Contents

- [Description](#description)
- [Highlights](#highlights)
- [Install](#install)
- [Usage](#usage)
- [REPL](#repl)
- [API](#api)
- [Development](#development)
- [Team](#team)
- [License](#license)

## Install

```bash
npm install arare
```

## Usage

Import arare and start using directly any of the available modules.

```js
const A = require('arare')

A.map(A.add(10), A.range(1, 4, 1))
//=> [11, 12, 13]
```

Alternatively, select and import only the modules that you need.

```js
const {add, map, range} = require('arare')

map(add(10), range(1, 4, 1))
//=> [11, 12, 13]
```

## REPL

Initially, install arare globally in order to be able to access the REPL environment.

```
npm install -g arare
```

To launch the REPL simply type `arare` from anywhere in your console.

```bash
arare # launch REPL
```

<div align="center">
  <img alt="REPL" width="85%" src="media/repl.png"/>
</div>

## API

The following lists contain all available functions grouped into categories according to the type of their respective returning value.

An alphabetically ordered list of all available functions can be found [**here**](docs/api.EN.md).


#### `Any`

<details>
<summary>Functions whose return value <b>varies</b> according to their input.</summary>

<br/>

- [`apply`](docs/api.EN.md#applyx-fn)
- [`applyArgs`](docs/api.EN.md#applyArgsargs-fn)
- [`ext`](docs/api.EN.md#extprop-obj)
- [`find`](docs/api.EN.md#findfn-xs)
- [`getNth`](docs/api.EN.md#getNthidx-xs)
- [`head`](docs/api.EN.md#headxs)
- [`id`](docs/api.EN.md#idx)
- [`ite`](docs/api.EN.md#itefn-x-y)
- [`last`](docs/api.EN.md#lastxs)
- [`reduce`](docs/api.EN.md#reducefn-acc-xs)
- [`reduceRight`](docs/api.EN.md#reduceRightfn-acc-xs)
- [`snd`](docs/api.EN.md#sndxs)
- [`startsWith`](docs/api.EN.md#startsWithx-xs)
- [`trd`](docs/api.EN.md#trdxs)
- [`xapply`](docs/api.EN.md#xapplyx-y-fn)

<br/>

</details>

#### `Array`

<details>
<summary>Functions whose return value is an <b>array</b>.</summary>

<br/>

- [`append`](docs/api.EN.md#appendx-xs)
- [`appendTo`](docs/api.EN.md#appendToxs-x)
- [`array`](docs/api.EN.md#arrayx-x)
- [`arrayify`](docs/api.EN.md#arrayifyx)
- [`arrayMinMax`](docs/api.EN.md#arrayMinMaxxs)
- [`breakWhen`](docs/api.EN.md#breakWhenfn-xs)
- [`concat`](docs/api.EN.md#concatxs-ys)
- [`copy`](docs/api.EN.md#copyxs)
- [`drop`](docs/api.EN.md#dropn-xs)
- [`dropRight`](docs/api.EN.md#dropRightn-xs)
- [`dropRightWhile`](docs/api.EN.md#dropRightWhilefn-xs)
- [`dropWhile`](docs/api.EN.md#dropWhilefn-xs)
- [`empty`](docs/api.EN.md#emptyxs)
- [`entries`](docs/api.EN.md#entriesobj)
- [`erase`](docs/api.EN.md#erasei-j-xs)
- [`Fs`](docs/api.EN.md#Fsn)
- [`fill`](docs/api.EN.md#filln-x)
- [`filter`](docs/api.EN.md#filterfn-xs)
- [`flatten`](docs/api.EN.md#flattenxs)
- [`halve`](docs/api.EN.md#halvexs)
- [`init`](docs/api.EN.md#initxs)
- [`insert`](docs/api.EN.md#insertidx-x-xs)
- [`keys`](docs/api.EN.md#keysobj)
- [`map`](docs/api.EN.md#mapfn-xs)
- [`mapcat`](docs/api.EN.md#mapcatfn-xs)
- [`merge`](docs/api.EN.md#mergexs-ys)
- [`mergeBy`](docs/api.EN.md#mergeByfn-xs-ys)
- [`ones`](docs/api.EN.md#onesn)
- [`pair`](docs/api.EN.md#pairx-y)
- [`partition`](docs/api.EN.md#partitionfn-xs)
- [`partitionAt`](docs/api.EN.md#partitionAtidx-xs)
- [`prepend`](docs/api.EN.md#prependx-xs)
- [`prependTo`](docs/api.EN.md#prependToxs-x)
- [`props`](docs/api.EN.md#propsobj)
- [`range`](docs/api.EN.md#rangex-y-step)
- [`reject`](docs/api.EN.md#rejectfn-xs)
- [`remove`](docs/api.EN.md#removex-xs)
- [`removeAll`](docs/api.EN.md#removeAllx-xs)
- [`removeRight`](docs/api.EN.md#removeRightx-xs)
- [`replace`](docs/api.EN.md#replacex-rep-xs)
- [`#replaceAllx-rep-xs`](docs/api.EN.md##replaceAllx-rep-xs)
- [`reverse`](docs/api.EN.md#reversexs)
- [`setHead`](docs/api.EN.md#setHeadx-xs)
- [`setHeadWith`](docs/api.EN.md#setHeadWithfn-xs)
- [`setLast`](docs/api.EN.md#setLastx-xs)
- [`setLastWith`](docs/api.EN.md#setLastWithfn-xs)
- [`setNth`](docs/api.EN.md#setNthn-x-xs)
- [`setNthWith`](docs/api.EN.md#setNthWithn-fn-xs)
- [`shift`](docs/api.EN.md#shiftxs)
- [`shiftLeft`](docs/api.EN.md#shiftLeftxs)
- [`slice`](docs/api.EN.md#slicei-j-xs)
- [`split`](docs/api.EN.md#splitx-xs)
- [`swap`](docs/api.EN.md#swapi-j-xs)
- [`Ts`](docs/api.EN.md#Tsn)
- [`tail`](docs/api.EN.md#tailxs)
- [`take`](docs/api.EN.md#taken-xs)
- [`takeRight`](docs/api.EN.md#takeRightn-xs)
- [`takeRightWhile`](docs/api.EN.md#takeRightWhilefn-xs)
- [`takeWhile`](docs/api.EN.md#takeWhilefn-xs)
- [`values`](docs/api.EN.md#valuesobj)
- [`xshift`](docs/api.EN.md#xshiftx-xs)
- [`xshiftLeft`](docs/api.EN.md#xshiftLeftx-xs)
- [`zeros`](docs/api.EN.md#zerosn)
- [`zip`](docs/api.EN.md#zipxs-ys)
- [`zipReverse`](docs/api.EN.md#zipReversexs)
- [`zipSelf`](docs/api.EN.md#zipSelfxs)
- [`zipTail`](docs/api.EN.md#zipTailxs)
- [`zipWith`](docs/api.EN.md#zipWithfn-xs-ys)

<br/>

</details>

#### `Boolean`

<details>
<summary>Functions whose return value is a <b>boolean</b>.</summary>

<br/>

- [`and`](docs/api.EN.md#andx-y)
- [`bool`](docs/api.EN.md#boolx)
- [`endsWith`](docs/api.EN.md#endsWithx-xs)
- [`eq`](docs/api.EN.md#eqx-y)
- [`eqProp`](docs/api.EN.md#eqPropprop-xs-ys)
- [`even`](docs/api.EN.md#evenx)
- [`every`](docs/api.EN.md#everyfn-xs)
- [`excludes`](docs/api.EN.md#excludesx-xs)
- [`F`](docs/api.EN.md#F)
- [`gt`](docs/api.EN.md#gtx-y)
- [`gte`](docs/api.EN.md#gtex-y)
- [`hasProp`](docs/api.EN.md#hasPropprop-obj)
- [`includes`](docs/api.EN.md#includesx-xs)
- [`isArr`](docs/api.EN.md#isArrx)
- [`isDate`](docs/api.EN.md#isDatex)
- [`isDef`](docs/api.EN.md#isDefx)
- [`isEmpty`](docs/api.EN.md#isEmptyx)
- [`isFn`](docs/api.EN.md#isFnx)
- [`isInt`](docs/api.EN.md#isIntx)
- [`isLower`](docs/api.EN.md#isLowerxs)
- [`isNeg`](docs/api.EN.md#isNegx)
- [`isNil`](docs/api.EN.md#isNilx)
- [`isNull`](docs/api.EN.md#isNullx)
- [`isNum`](docs/api.EN.md#isNumx)
- [`isObj`](docs/api.EN.md#isObjx)
- [`isPair`](docs/api.EN.md#isPairx)
- [`isPos`](docs/api.EN.md#isPosx)
- [`isRegExp`](docs/api.EN.md#isRegExpx)
- [`isStr`](docs/api.EN.md#isStrx)
- [`isUndef`](docs/api.EN.md#isUndefx)
- [`isUpper`](docs/api.EN.md#isUpperxs)
- [`lt`](docs/api.EN.md#ltx-y)
- [`lte`](docs/api.EN.md#ltex-y)
- [`nand`](docs/api.EN.md#nandx-y)
- [`none`](docs/api.EN.md#nonefn-xs)
- [`nor`](docs/api.EN.md#norx-y)
- [`not`](docs/api.EN.md#notx)
- [`notArr`](docs/api.EN.md#notArrx)
- [`notDate`](docs/api.EN.md#notDatex)
- [`notEmpty`](docs/api.EN.md#notEmptyx)
- [`notFn`](docs/api.EN.md#notFnx)
- [`notInt`](docs/api.EN.md#notIntx)
- [`notLower`](docs/api.EN.md#notLowerxs)
- [`notNil`](docs/api.EN.md#notNilx)
- [`notNull`](docs/api.EN.md#notNullx)
- [`notNum`](docs/api.EN.md#notNumx)
- [`notObj`](docs/api.EN.md#notObjx)
- [`notPair`](docs/api.EN.md#notPairx)
- [`notRegExp`](docs/api.EN.md#notRegExpx)
- [`notStr`](docs/api.EN.md#notStrx)
- [`notUpper`](docs/api.EN.md#notUpperxs)
- [`odd`](docs/api.EN.md#oddx)
- [`or`](docs/api.EN.md#orx-y)
- [`some`](docs/api.EN.md#somefn-xs)
- [`startsWith`](docs/api.EN.md#startsWithx-xs)
- [`T`](docs/api.EN.md#T)
- [`uneq`](docs/api.EN.md#uneqx-y)
- [`uneqProp`](docs/api.EN.md#uneqPropprop-obj1-obj2)
- [`xnor`](docs/api.EN.md#xnorx-y)
- [`xor`](docs/api.EN.md#xorx-y)

<br/>

</details>

#### `Function`

<details>
<summary>Functions whose return value is a <b>function</b>.</summary>

<br/>

- [`arity`](docs/api.EN.md#arityn-fn)
- [`binary`](docs/api.EN.md#binaryfn)
- [`comp`](docs/api.EN.md#compfn-fn)
- [`cons`](docs/api.EN.md#consx)
- [`curry`](docs/api.EN.md#curryfn)
- [`flip`](docs/api.EN.md#flipfn)
- [`gather`](docs/api.EN.md#gatherfn)
- [`nullary`](docs/api.EN.md#nullaryfn)
- [`partial`](docs/api.EN.md#partialfn-args)
- [`partialRight`](docs/api.EN.md#partialRightfn-args)
- [`pipe`](docs/api.EN.md#pipefn-fn)
- [`reverseArgs`](docs/api.EN.md#reverseArgsfn)
- [`spread`](docs/api.EN.md#spreadfn)
- [`ternary`](docs/api.EN.md#ternaryfn)
- [`unary`](docs/api.EN.md#unaryfn)
- [`xarray`](docs/api.EN.md#xarrayx)
- [`xcurry`](docs/api.EN.md#xcurryx-fn)

<br/>

</details>

#### `Number`

<details>
<summary> Functions whose return value is a <b>number</b>.</summary>

<br/>

- [`abs`](docs/api.EN.md#absx)
- [`absDiff`](docs/api.EN.md#absDiffx-y)
- [`add`](docs/api.EN.md#addx-y)
- [`adjustIndex`](docs/api.EN.md#adjustIndexmin-max-xs-idx)
- [`arrayMax`](docs/api.EN.md#arrayMaxxs)
- [`arrayMin`](docs/api.EN.md#arrayMinxs)
- [`ceil`](docs/api.EN.md#ceilx)
- [`count`](docs/api.EN.md#countx-xs)
- [`cube`](docs/api.EN.md#cubex)
- [`decr`](docs/api.EN.md#decrx)
- [`div`](docs/api.EN.md#divx-y)
- [`fact`](docs/api.EN.md#factx)
- [`findIndex`](docs/api.EN.md#findIndexfn-x)
- [`gcd`](docs/api.EN.md#gcdx-y)
- [`incr`](docs/api.EN.md#incrx)
- [`lcm`](docs/api.EN.md#lcmx-y)
- [`len`](docs/api.EN.md#lenxs)
- [`max`](docs/api.EN.md#maxx-y)
- [`min`](docs/api.EN.md#minx-y)
- [`minMax`](docs/api.EN.md#minMaxxs-x)
- [`mod`](docs/api.EN.md#modx-y)
- [`mult`](docs/api.EN.md#multx-y)
- [`neg`](docs/api.EN.md#negx)
- [`num`](docs/api.EN.md#numx)
- [`one`](docs/api.EN.md#one)
- [`pow`](docs/api.EN.md#powx-y)
- [`prod`](docs/api.EN.md#prodxs)
- [`recip`](docs/api.EN.md#recipx)
- [`square`](docs/api.EN.md#squarex)
- [`sub`](docs/api.EN.md#subx-y)
- [`sum`](docs/api.EN.md#sumxs)
- [`trunc`](docs/api.EN.md#truncx)
- [`zero`](docs/api.EN.md#zero)

<br/>

</details>

#### `String`

<details>
<summary>Functions whose return value is a <b>string</b>.</summary>

<br/>

- [`append`](docs/api.EN.md#appendx-xs)
- [`appendTo`](docs/api.EN.md#appendToxs-x)
- [`breakWhen`](docs/api.EN.md#breakWhenfn-xs)
- [`concat`](docs/api.EN.md#concatxs-ys)
- [`drop`](docs/api.EN.md#dropn-xs)
- [`dropRight`](docs/api.EN.md#dropRightn-xs)
- [`dropRightWhile`](docs/api.EN.md#dropRightWhilefn-xs)
- [`dropWhile`](docs/api.EN.md#dropWhilefn-xs)
- [`empty`](docs/api.EN.md#emptyxs)
- [`erase`](docs/api.EN.md#erasei-j-xs)
- [`halve`](docs/api.EN.md#halvexs)
- [`init`](docs/api.EN.md#initxs)
- [`insert`](docs/api.EN.md#insertidx-x-xs)
- [`join`](docs/api.EN.md#joinx-xs)
- [`partition`](docs/api.EN.md#partitionfn-xs)
- [`partitionAt`](docs/api.EN.md#partitionAtidx-xs)
- [`prepend`](docs/api.EN.md#prependx-xs)
- [`prependTo`](docs/api.EN.md#prependToxs-x)
- [`remove`](docs/api.EN.md#removex-xs)
- [`remove`](docs/api.EN.md#removeAllx-xs)
- [`remove`](docs/api.EN.md#removeRightx-xs)
- [`replace`](docs/api.EN.md#replacex-rep-xs)
- [`#replaceAllx-rep-xs`](docs/api.EN.md##replaceAllx-rep-xs)
- [`reverse`](docs/api.EN.md#reversexs)
- [`setHead`](docs/api.EN.md#setHeadx-xs)
- [`setHeadWith`](docs/api.EN.md#setHeadWithfn-xs)
- [`setLast`](docs/api.EN.md#setLastx-xs)
- [`setLastWith`](docs/api.EN.md#setLastWithfn-xs)
- [`setNth`](docs/api.EN.md#setNthn-x-xs)
- [`setNthWith`](docs/api.EN.md#setNthWithn-fn-xs)
- [`shift`](docs/api.EN.md#shiftxs)
- [`shiftLeft`](docs/api.EN.md#shiftLeftxs)
- [`slice`](docs/api.EN.md#slicei-j-xs)
- [`str`](docs/api.EN.md#strx)
- [`swap`](docs/api.EN.md#swapi-j-xs)
- [`tail`](docs/api.EN.md#tailxs)
- [`take`](docs/api.EN.md#taken-xs)
- [`takeRight`](docs/api.EN.md#takeRightn-xs)
- [`takeRightWhile`](docs/api.EN.md#takeRightWhilefn-xs)
- [`takeWhile`](docs/api.EN.md#takeWhilefn-xs)
- [`toLower`](docs/api.EN.md#toLowerxs)
- [`toUpper`](docs/api.EN.md#toUpperxs)
- [`xshift`](docs/api.EN.md#xshiftx-xs)
- [`xshiftLeft`](docs/api.EN.md#xshiftLeftx-xs)

<br/>

</details>

#### `Object`

<details>
<summary>Functions whose return value is a plain <b>object</b>.</summary>

<br/>

- [`assign`](docs/api.EN.md#assignk-v-obj)
- [`assignWith`](docs/api.EN.md#assignWithfn-k-obj)
- [`copy`](docs/api.EN.md#copyxs)
- [`countAll`](docs/api.EN.md#countAllxs)
- [`countBy`](docs/api.EN.md#countByfn-xs)
- [`countIn`](docs/api.EN.md#countInmin-max-xs)
- [`zipObj`](docs/api.EN.md#zipObjxs-ys)

<br/>

</details>

#### `Undefined`

<details>
<summary>Functions whose return value is <b>undefined</b>.</summary>

<br/>

- [`forEach`](docs/api.EN.md#forEachfn-xs)

<br/>

</details>

## Development

- Fork the repository and clone it to your machine
- Navigate to your local fork: `cd arare`
- Install the project dependencies: `npm install` or `yarn install`
- Lint the code and run the tests: `npm test` or `yarn test`

## Team

- Klaus Sinani [(@klaussinani)](https://github.com/klaussinani)

## License

[MIT](https://github.com/klaussinani/arare/blob/master/license.md)
