// http://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parser: 'babel-eslint',
  parserOptions: {
    sourceType: 'module'
  },
  env: {
    browser: true,
  },
  // https://github.com/feross/standard/blob/master/RULES.md#javascript-standard-style
  extends: 'standard',
  // required to lint *.vue files
  plugins: [
    'html'
  ],
  // add your custom rules here
  'rules': {
    // allow paren-less arrow functions
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    /*/!* eslint设置默认需要分号 !*/
    'semi':  ["error", "always"],
    /* 不需要默认缩进 */
    'indent': 0,
    'camelcase': 0,
    'keyword-spacing': 0,
    'key-spacing': 0,
    'no-unused-vars': 0,
    'no-tabs': 0,
    'no-undef': 0
  }
};
