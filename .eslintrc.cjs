const process = require('node:process');

process.env.ESLINT_TSCONFIG = 'tsconfig.json';

module.exports = {

  extends: ['@antfu'],

  rules: {
    'semi': ['error', 'always'],
    '@typescript-eslint/semi': ['error', 'always'],
    'vue/no-multiple-template-root': 'off',
    'vue/component-options-name-casing': ['error', 'kebab-case'],
    'no-console': ['warn', { allow: ['warn', 'error'] }],
  },
};
