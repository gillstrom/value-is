'use strict';
var deepEqual = require('deep-equal');

module.exports = function (obj, search) {
	if (typeof obj !== 'object') {
		return;
	}

	var ret = {};

	Object.keys(obj).forEach(function (key) {
		if (deepEqual(obj[key], search)) {
			ret[key] = obj[key];
		}
	});

	return ret;
};
