# value-is [![Build Status](https://travis-ci.org/gillstrom/value-is.svg?branch=master)](https://travis-ci.org/gillstrom/value-is)

> Search for values in an object or array


## Install

```
$ npm install --save value-is
```


## Usage

```js
var valueIs = require('value-is');

var obj = {
	a: 'ape',
	b: 'banana',
	c: ['cat']
}

valueIs(obj, ['cat']);
//=> {c: ['cat']}

var arr = [
	'ape',
	'banana',
	'cat'
	'banana'
]

valueIs(arr, 'banana');
//=> {1: 'banana', 3: 'banana'}
```


## License

MIT © [Andreas Gillström](http://github.com/gillstrom)
