module.exports = {
	extends: 'airbnb-base',
	env: {
		node: true
	},
	parserOptions: {
		ecmaVersion: 8,
		sourceType: 'script',
		ecmaFeatures: {
			modules: false,
			experimentalObjectRestSpread: true
		}
	},
	rules: {
		'max-len': 0,
		'linebreak-style': 0,
		'no-plusplus': [
			2,
			{
				allowForLoopAfterthoughts: true
			}
		],
		'no-continue': 0,
		indent: [
			2,
			'tab'
		],
		'nonblock-statement-body-position': 'off',
		'no-mixed-operators': [ 'error', { allowSamePrecedence: true }],
		'no-tabs': 0,
		strict: [
			2,
			'safe'
		],
		curly: [
			2,
			'multi',
			'consistent'
		],
		'no-restricted-syntax': [ 'error', 'ForInStatement', 'LabeledStatement', 'WithStatement' ],
		'no-await-in-loop': 'off',
		'import/no-extraneous-dependencies': 0,
		'import/no-unresolved': 0,
		'no-underscore-dangle': 0,
		'no-param-reassign': 0,
		'generator-star-spacing': 0,
		'jsx-a11y/href-no-hash': 'off'
	}
};