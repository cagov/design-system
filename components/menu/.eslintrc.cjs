const { default: plugin } = require("rollup-plugin-import-css");

module.exports = {
	settings: {
		"import/no-extraneous-dependencies": ["error", { "devDependencies": true }]
	},
	parserOptions: {
		sourceType: "module",
		allowImportExportEverywhere: true,
        ecmaVersion: 2017
    },
	env: {
    	es6: true
    },
	plugins: [
		"html"
	]
}