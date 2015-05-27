'use strict';
var test = require('ava');
var claim = require('claim');
var valueIs = require('./');
var obj = {
	a: ['hei'],
	b: 'hello',
	c: 'hello',
	d: 'dingdong',
	e: 'bingo',
	f: {
		test: 'hello there'
	}
};

var arr = [
	'ape',
	'banana',
	'cat',
	'cat',
	{
		a: 'pingpong'
	}
];

test('object', function (t) {
	claim.same(valueIs(obj), {});
	claim.same(valueIs(obj, 'nope'), {});
	claim.same(valueIs(obj, ['hei']), {a: ['hei']});
	claim.same(valueIs(obj, 'hello'), {b: 'hello', c: 'hello'});
	claim.same(valueIs(obj, {test: 'hello there'}), {f: {test: 'hello there'}});
	claim.notSame(valueIs(obj, 'bingo'), {d: 'dingdong'});
	t.end();
});

test('array', function (t) {
	claim.same(valueIs(arr), {});
	claim.same(valueIs(arr, 'nope'), {});
	claim.same(valueIs(arr, {a: 'pingpong'}), {4: {a: 'pingpong'}});
	claim.same(valueIs(arr, 'banana'), {1: 'banana'});
	claim.same(valueIs(arr, 'cat'), {2: 'cat', 3: 'cat'});
	t.end();
});




