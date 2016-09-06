import test from 'ava';
import m from './';

const obj = {
	a: ['hei'],
	b: 'hello',
	c: 'hello',
	d: 'dingdong',
	e: 'bingo',
	f: {
		test: 'hello there'
	}
};

const arr = [
	'ape',
	'banana',
	'cat',
	'cat', {
		a: 'pingpong'
	}
];

test('object', t => {
	t.deepEqual(m(obj), {});
	t.deepEqual(m(obj, 'nope'), {});
	t.deepEqual(m(obj, ['hei']), {a: ['hei']});
	t.deepEqual(m(obj, 'hello'), {b: 'hello', c: 'hello'});
	t.deepEqual(m(obj, {test: 'hello there'}), {f: {test: 'hello there'}});
	t.notDeepEqual(m(obj, 'bingo'), {d: 'dingdong'});
});

test('array', t => {
	t.deepEqual(m(arr), {});
	t.deepEqual(m(arr, 'nope'), {});
	t.deepEqual(m(arr, {a: 'pingpong'}), {4: {a: 'pingpong'}});
	t.deepEqual(m(arr, 'banana'), {1: 'banana'});
	t.deepEqual(m(arr, 'cat'), {2: 'cat', 3: 'cat'});
});
