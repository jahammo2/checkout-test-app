module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react'],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      // use <root>/tsconfig.json
      typescript: {},

      // use <root>/path/to/folder/tsconfig.json
      typescript: {
        directory: '.',
      }
    }
  },
  rules: {
    // temporary until { allowTypedFunctionExpressions: true }
    // is released
    '@typescript-eslint/explicit-function-return-type': 'off',

    '@typescript-eslint/indent': ['error', 2],
  },
};

