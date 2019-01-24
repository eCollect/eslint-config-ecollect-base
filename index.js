'use strict';

module.exports = {
	extends: [
		'./rules/best-practices',
		'./rules/errors',
		'./rules/node',
		'./rules/style',
		'./rules/variables',
		'./rules/es6',
	].map(require.resolve),
	env: {
		node: true,
	},
	parserOptions: {
		ecmaVersion: 2018,
		sourceType: 'script',
	},
};
