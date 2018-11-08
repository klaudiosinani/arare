<h1 align="center">
  Arare
</h1>

<h4 align="center">
  🍘 Lightweight auto-curried functional programming library
</h4>

<p align="center">
  <a href="https://travis-ci.com/klauscfhq/arare">
    <img alt="Build Status" src="https://travis-ci.com/klauscfhq/arare.svg?branch=master">
  </a>
</p>

## Description

Lightweight and without any external dependencies Arare enables you to write tacit, point-free, declarative & clean code while avoiding side-effects and mutations. Internally the library itself, comprised of over 180 functions, follows the functional programming paradigm and is materialized using fundamental functional qualities such as currying, recursion, tail calls, high-order functions, referential transparency, side-effects elimination and function composition. Additionally, Arare utilizes automatic [variadic](https://en.wikipedia.org/wiki/Variadic_function) [currying](https://en.wikipedia.org/wiki/Currying) for its functions, thus allowing the user to write more flexible, practical & minimal code, compared to regular strict currying. Regular currying can still be achieved by applying one instead of multiple arguments at a time to a function.

Please note that project is in its early days and that it is currently under active development.

Come over to [Gitter](https://gitter.im/klauscfhq/arare) or [Twitter](https://twitter.com/klauscfhq) to share your thoughts on the project.


## Highlights

- Over 180 available functions
- Point-free & tacit
- High-order & pure functions
- Automatically variadic curried
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

A.map(A.add(10), A.range(1, 3, 1)) //=> [11, 12, 13]
```

Alternatively, select and import only the modules that you need.

```js
const {add, map, range} = require('arare')

map(add(10), range(1, 3, 1)) //=> [11, 12, 13]
```

## API

The following lists contain all available functions grouped into categories according to the type of their respective returning value.

Also, an alphabetically ordered list of all available functions can be found [here](docs/api.EN.md).


#### `Any`

<details>
<summary>Functions whose return value varies according to their input.</summary>

- [`apply`](docs/api.EN.md#apply)
- [`ext`](docs/api.EN.md#ext)
- [`fst`](docs/api.EN.md#fst)
- [`getNth`](docs/api.EN.md#getNth)
- [`head`](docs/api.EN.md#head)
- [`id`](docs/api.EN.md#id)
- [`ite`](docs/api.EN.md#ite)
- [`last`](docs/api.EN.md#last)
- [`snd`](docs/api.EN.md#snd)
- [`startsWith`](docs/api.EN.md#startsWith)
- [`xapply`](docs/api.EN.md#xapply)

</details>

#### `Array`

<details>
<summary>Functions whose return value is an array.</summary>

- [`append`](docs/api.EN.md#append)
- [`appendTo`](docs/api.EN.md#appendTo)
- [`array`](docs/api.EN.md#array)
- [`arrayify`](docs/api.EN.md#arrayify)
- [`arrayMinMax`](docs/api.EN.md#arrayMinMax)
- [`breakWhen`](docs/api.EN.md#breakWhen)
- [`concat`](docs/api.EN.md#concat)
- [`copy`](docs/api.EN.md#copy)
- [`drop`](docs/api.EN.md#drop)
- [`dropRight`](docs/api.EN.md#dropRight)
- [`dropRightWhile`](docs/api.EN.md#dropRightWhile)
- [`dropWhile`](docs/api.EN.md#dropWhile)
- [`empty`](docs/api.EN.md#empty)
- [`entries`](docs/api.EN.md#entries)
- [`fill`](docs/api.EN.md#fill)
- [`filter`](docs/api.EN.md#filter)
- [`flatten`](docs/api.EN.md#flatten)
- [`init`](docs/api.EN.md#init)
- [`keys`](docs/api.EN.md#keys)
- [`map`](docs/api.EN.md#map)
- [`mapcat`](docs/api.EN.md#mapcat)
- [`merge`](docs/api.EN.md#merge)
- [`mergeBy`](docs/api.EN.md#mergeBy)
- [`ones`](docs/api.EN.md#ones)
- [`pair`](docs/api.EN.md#pair)
- [`partition`](docs/api.EN.md#partition)
- [`partitionAt`](docs/api.EN.md#partitionAt)
- [`prepend`](docs/api.EN.md#prepend)
- [`prependTo`](docs/api.EN.md#prependTo)
- [`props`](docs/api.EN.md#props)
- [`range`](docs/api.EN.md#range)
- [`reduce`](docs/api.EN.md#reduce)
- [`reduceRight`](docs/api.EN.md#reduceRight)
- [`reject`](docs/api.EN.md#reject)
- [`remove`](docs/api.EN.md#remove)
- [`replace`](docs/api.EN.md#replace)
- [`replaceAll`](docs/api.EN.md#replaceAll)
- [`setHead`](docs/api.EN.md#setHead)
- [`setHeadWith`](docs/api.EN.md#setHeadWith)
- [`setLast`](docs/api.EN.md#setLast)
- [`setLastWith`](docs/api.EN.md#setLastWith)
- [`setNth`](docs/api.EN.md#setNth)
- [`setNthWith`](docs/api.EN.md#setNthWith)
- [`shift`](docs/api.EN.md#shift)
- [`shiftLeft`](docs/api.EN.md#shiftLeft)
- [`slice`](docs/api.EN.md#slice)
- [`split`](docs/api.EN.md#split)
- [`swap`](docs/api.EN.md#swap)
- [`tail`](docs/api.EN.md#tail)
- [`take`](docs/api.EN.md#take)
- [`takeRight`](docs/api.EN.md#takeRight)
- [`takeRightWhile`](docs/api.EN.md#takeRightWhile)
- [`takeWhile`](docs/api.EN.md#takeWhile)
- [`values`](docs/api.EN.md#values)
- [`xshift`](docs/api.EN.md#xshift)
- [`xshiftLeft`](docs/api.EN.md#xshiftLeft)
- [`zeros`](docs/api.EN.md#zeros)
- [`zip`](docs/api.EN.md#zip)
- [`zipReverse`](docs/api.EN.md#zipReverse)
- [`zipSelf`](docs/api.EN.md#zipSelf)
- [`zipTail`](docs/api.EN.md#zipTail)
- [`zipWith`](docs/api.EN.md#zipWith)

</details>

#### `Boolean`

<details>
<summary>Functions whose return value is a boolean.</summary>

- [`and`](docs/api.EN.md#and)
- [`bool`](docs/api.EN.md#bool)
- [`endsWith`](docs/api.EN.md#endsWith)
- [`eq`](docs/api.EN.md#eq)
- [`eqProp`](docs/api.EN.md#eqProp)
- [`even`](docs/api.EN.md#even)
- [`every`](docs/api.EN.md#every)
- [`excludes`](docs/api.EN.md#excludes)
- [`gt`](docs/api.EN.md#gt)
- [`gte`](docs/api.EN.md#gte)
- [`hasProp`](docs/api.EN.md#hasProp)
- [`includes`](docs/api.EN.md#includes)
- [`isArr`](docs/api.EN.md#isArr)
- [`isDate`](docs/api.EN.md#isDate)
- [`isDef`](docs/api.EN.md#isDef)
- [`isEmpty`](docs/api.EN.md#isEmpty)
- [`isFn`](docs/api.EN.md#isFn)
- [`isInt`](docs/api.EN.md#isInt)
- [`isNeg`](docs/api.EN.md#isNeg)
- [`isNil`](docs/api.EN.md#isNil)
- [`isNull`](docs/api.EN.md#isNull)
- [`isNum`](docs/api.EN.md#isNum)
- [`isObj`](docs/api.EN.md#isObj)
- [`isPair`](docs/api.EN.md#isPair)
- [`isPos`](docs/api.EN.md#isPos)
- [`isRegExp`](docs/api.EN.md#isRegExp)
- [`isStr`](docs/api.EN.md#isStr)
- [`isUndef`](docs/api.EN.md#isUndef)
- [`lt`](docs/api.EN.md#lt)
- [`lte`](docs/api.EN.md#lte)
- [`nand`](docs/api.EN.md#nand)
- [`none`](docs/api.EN.md#none)
- [`nor`](docs/api.EN.md#nor)
- [`not`](docs/api.EN.md#not)
- [`notArr`](docs/api.EN.md#notArr)
- [`notDate`](docs/api.EN.md#notDate)
- [`notEmpty`](docs/api.EN.md#notEmpty)
- [`notFn`](docs/api.EN.md#notFn)
- [`notInt`](docs/api.EN.md#notInt)
- [`notNil`](docs/api.EN.md#notNil)
- [`notNull`](docs/api.EN.md#notNull)
- [`notNum`](docs/api.EN.md#notNum)
- [`notObj`](docs/api.EN.md#notObj)
- [`notPair`](docs/api.EN.md#notPair)
- [`notRegExp`](docs/api.EN.md#notRegExp)
- [`notStr`](docs/api.EN.md#notStr)
- [`odd`](docs/api.EN.md#odd)
- [`or`](docs/api.EN.md#or)
- [`some`](docs/api.EN.md#some)
- [`startsWith`](docs/api.EN.md#startsWith)
- [`xnor`](docs/api.EN.md#xnor)
- [`xor`](docs/api.EN.md#xor)

</details>

#### `Function`

<details>
<summary>Functions whose return value is a function.</summary>

- [`applyArgs`](docs/api.EN.md#applyArgs)
- [`arity`](docs/api.EN.md#arity)
- [`binary`](docs/api.EN.md#binary)
- [`comp`](docs/api.EN.md#comp)
- [`cons`](docs/api.EN.md#cons)
- [`curry`](docs/api.EN.md#curry)
- [`gather`](docs/api.EN.md#glather)
- [`nullary`](docs/api.EN.md#nullary)
- [`partial`](docs/api.EN.md#partial)
- [`partialRight`](docs/api.EN.md#partialRight)
- [`pipe`](docs/api.EN.md#pipe)
- [`reverseArgs`](docs/api.EN.md#reverseArgs)
- [`spread`](docs/api.EN.md#spread)
- [`ternary`](docs/api.EN.md#ternary)
- [`unary`](docs/api.EN.md#unary)
- [`xcurry`](docs/api.EN.md#xcurry)

</details>

#### `Number`

<details>
<summary> Functions whose return value is a number.</summary>

- [`abs`](docs/api.EN.md#abs)
- [`absDiff`](docs/readme.md#absDiff)
- [`add`](docs/api.EN.md#add)
- [`adjustIndex`](docs/api.EN.md#adjustIndex)
- [`arrayMax`](docs/api.EN.md#arrayMax)
- [`arrayMin`](docs/api.EN.md#arrayMin)
- [`cube`](docs/api.EN.md#cube)
- [`decr`](docs/api.EN.md#decr)
- [`div`](docs/api.EN.md#div)
- [`fact`](docs/api.EN.md#fact)
- [`findIndex`](docs/api.EN.md#findIndex)
- [`gcd`](docs/api.EN.md#gcd)
- [`incr`](docs/api.EN.md#incr)
- [`lcm`](docs/api.EN.md#lcm)
- [`len`](docs/api.EN.md#len)
- [`max`](docs/api.EN.md#max)
- [`min`](docs/api.EN.md#min)
- [`minMax`](docs/api.EN.md#minMax)
- [`mod`](docs/api.EN.md#mod)
- [`mult`](docs/api.EN.md#mult)
- [`neg`](docs/api.EN.md#neg)
- [`num`](docs/api.EN.md#num)
- [`one`](docs/api.EN.md#one)
- [`pow`](docs/api.EN.md#pow)
- [`prod`](docs/api.EN.md#prod)
- [`recip`](docs/api.EN.md#recip)
- [`square`](docs/api.EN.md#square)
- [`sum`](docs/api.EN.md#sum)
- [`trunc`](docs/api.EN.md#trunc)
- [`zero`](docs/api.EN.md#zero)

</details>

#### `String`

<details>
<summary>Functions whose return value is a string.</summary>

- [`append`](docs/api.EN.md#append)
- [`appendTo`](docs/api.EN.md#appendTo)
- [`breakWhen`](docs/api.EN.md#breakWhen)
- [`concat`](docs/api.EN.md#concat)
- [`drop`](docs/api.EN.md#drop)
- [`dropRight`](docs/api.EN.md#dropRight)
- [`dropRightWhile`](docs/api.EN.md#dropRightWhile)
- [`dropWhile`](docs/api.EN.md#dropWhile)
- [`empty`](docs/api.EN.md#empty)
- [`init`](docs/api.EN.md#init)
- [`join`](docs/api.EN.md#join)
- [`partition`](docs/api.EN.md#partition)
- [`partitionAt`](docs/api.EN.md#partitionAt)
- [`prepend`](docs/api.EN.md#prepend)
- [`prependTo`](docs/api.EN.md#prependTo)
- [`remove`](docs/api.EN.md#remove)
- [`replace`](docs/api.EN.md#replace)
- [`replaceAll`](docs/api.EN.md#replaceAll)
- [`setHead`](docs/api.EN.md#setHead)
- [`setHeadWith`](docs/api.EN.md#setHeadWith)
- [`setLast`](docs/api.EN.md#setLast)
- [`setLastWith`](docs/api.EN.md#setLastWith)
- [`setNth`](docs/api.EN.md#setNth)
- [`setNthWith`](docs/api.EN.md#setNthWith)
- [`shift`](docs/api.EN.md#shift)
- [`shiftLeft`](docs/api.EN.md#shiftLeft)
- [`slice`](docs/api.EN.md#slice)
- [`str`](docs/api.EN.md#str)
- [`swap`](docs/api.EN.md#swap)
- [`tail`](docs/api.EN.md#tail)
- [`take`](docs/api.EN.md#take)
- [`takeRight`](docs/api.EN.md#takeRight)
- [`takeRightWhile`](docs/api.EN.md#takeRightWhile)
- [`takeWhile`](docs/api.EN.md#takeWhile)
- [`xshift`](docs/api.EN.md#xshift)
- [`xshiftLeft`](docs/api.EN.md#xshiftLeft)

</details>

#### `Object`

<details>
<summary>Functions whose return value is a plain object.</summary>

- [`assign`](docs/api.EN.md#assign)
- [`assignWith`](docs/api.EN.md#assignWith)
- [`copy`](docs/api.EN.md#copy)
- [`countAll`](docs/api.EN.md#countAll)
- [`countBy`](docs/api.EN.md#countBy)
- [`countIn`](docs/api.EN.md#countIn)
- [`zipObj`](docs/api.EN.md#zipObj)

</details>

#### `Undefined`

<details>
<summary>Functions whose return value is undefined.</summary>

- [`forEach`](docs/api.EN.md#forEach)

</details>

## Development

- Fork the repository and clone it to your machine
- Navigate to your local fork: `cd arare`
- Install the project dependencies: `npm install` or `yarn install`
- Lint the code and run the tests: `npm test` or `yarn test`

## Team

- Klaus Sinani [(@klauscfhq)](https://github.com/klauscfhq)

## License

[MIT](https://github.com/klauscfhq/arare/blob/master/license.md)
