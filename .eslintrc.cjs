const process = require('node:process')

process.env.ESLINT_TSCONFIG = 'tsconfig.json'

module.exports = {
  extends: '@antfu',

  rules: {
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'import/first': 'off',
    'import/order': 'off',
    'symbol-description': 'off',
    'no-console': 'warn',
    'max-statements-per-line': ['error', { max: 2 }],
  },
}
