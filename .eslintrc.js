module.exports = {
  root: true,
  extends: ['@open-wc/eslint-config'],
  rules: {
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'no-console': 'off',
  },
  ignorePatterns: ['**/dist/*', '**/stories/*'],
  parserOptions: {
    allowImportExportEverywhere: true,
    ecmaVersion: 2018,
  },
  env: {
    es6: true,
  },
  plugins: ['html'],
};
