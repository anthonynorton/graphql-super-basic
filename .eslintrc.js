module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: 'eslint:recommended',
  rules: {
    'comma-dangle': [2, 'always'],
    'linebreak-style': ['error', 'unix'],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    parserOptions: {
      ecmaVersion: 2017,
    },
  },
}
  