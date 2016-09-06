'use strict';
const deepEqual = require('deep-equal');

module.exports = (obj, search) => {
	if (typeof obj !== 'object') {
		return;
	}

	return Object.keys(obj).reduce((all, key) => {
		if (deepEqual(obj[key], search)) {
			all[key] = obj[key];
		}

		return all;
	}, {});
};
